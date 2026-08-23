import fs from "fs";
import path from "path";
import { LeadItem, LeadStats } from "@/types/lead";

// In serverless (Vercel), process.cwd() is read-only at runtime except /tmp
const IS_VERCEL = process.env.VERCEL === "1" || process.env.NODE_ENV === "production";
const DB_PATH = IS_VERCEL
  ? path.join("/tmp", "leads-db.json")
  : path.join(process.cwd(), "src", "data", "leads-db.json");

// Default initial seeds
const DEFAULT_SEED_LEADS: LeadItem[] = [
  {
    id: "lead_1787472000000_km98z",
    name: "Suhail Wahid Malik",
    firmName: "Cambridge Education Group",
    email: "suhail@cambridgeedu.in",
    phone: "+919018636473",
    service: "Custom Software & ERP Development (Education/Hospitals/Business)",
    message: "Looking to upgrade our student admissions portal and implement automated attendance & fee collection ERP for 3 campuses.",
    status: "In Discussion",
    notes: "Client requested demo scheduled for this Thursday.",
    createdAt: "2026-08-23T08:30:00.000Z",
    updatedAt: "2026-08-23T08:30:00.000Z",
    sourceUrl: "https://www.immnaveed.in/services/custom-software-erp-development",
    ip: "103.21.124.5"
  }
];

// Global in-memory cache to maintain leads across warm lambda instances
declare global {
  var __immnaveed_leads__: LeadItem[] | undefined;
}

function ensureDbFile(): void {
  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(DB_PATH)) {
      // If local source file exists, copy it, else seed default
      const srcPath = path.join(process.cwd(), "src", "data", "leads-db.json");
      if (fs.existsSync(srcPath)) {
        try {
          const content = fs.readFileSync(srcPath, "utf-8");
          fs.writeFileSync(DB_PATH, content, "utf-8");
          return;
        } catch (e) {
          // fallback
        }
      }
      fs.writeFileSync(DB_PATH, JSON.stringify(DEFAULT_SEED_LEADS, null, 2), "utf-8");
    }
  } catch (err) {
    console.warn("Filesystem initialization note:", err);
  }
}

export function getAllLeads(): LeadItem[] {
  // Check memory cache first
  if (globalThis.__immnaveed_leads__ && globalThis.__immnaveed_leads__.length > 0) {
    return globalThis.__immnaveed_leads__;
  }

  ensureDbFile();
  try {
    if (fs.existsSync(DB_PATH)) {
      const raw = fs.readFileSync(DB_PATH, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        globalThis.__immnaveed_leads__ = parsed;
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Reading from DB file warning:", error);
  }

  globalThis.__immnaveed_leads__ = DEFAULT_SEED_LEADS;
  return DEFAULT_SEED_LEADS;
}

export function saveAllLeads(leads: LeadItem[]): boolean {
  globalThis.__immnaveed_leads__ = leads;
  ensureDbFile();
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(leads, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.warn("Saving leads to disk warning (using memory cache):", error);
    return true; // Still saved in memory cache
  }
}

export function createLead(data: {
  name: string;
  firmName?: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  sourceUrl?: string;
  ip?: string;
}): LeadItem {
  const leads = getAllLeads();
  const now = new Date().toISOString();
  
  const newLead: LeadItem = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: data.name.trim(),
    firmName: data.firmName ? data.firmName.trim() : "",
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    service: data.service,
    message: data.message.trim(),
    status: "New",
    notes: "",
    createdAt: now,
    updatedAt: now,
    sourceUrl: data.sourceUrl || "https://www.immnaveed.in",
    ip: data.ip || "127.0.0.1",
  };

  const updatedLeads = [newLead, ...leads.filter((l) => l.id !== newLead.id)];
  saveAllLeads(updatedLeads);
  return newLead;
}

export function updateLead(id: string, updates: Partial<LeadItem>): LeadItem | null {
  const leads = getAllLeads();
  const index = leads.findIndex((l) => l.id === id);
  if (index === -1) return null;

  const updatedLead: LeadItem = {
    ...leads[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  leads[index] = updatedLead;
  saveAllLeads(leads);
  return updatedLead;
}

export function deleteLead(id: string): boolean {
  const leads = getAllLeads();
  const filtered = leads.filter((l) => l.id !== id);
  if (filtered.length === leads.length) return false;
  return saveAllLeads(filtered);
}

export function getLeadStats(): LeadStats {
  const leads = getAllLeads();
  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === "New").length;
  const inDiscussion = leads.filter((l) => l.status === "In Discussion" || l.status === "Contacted").length;
  const converted = leads.filter((l) => l.status === "Converted").length;

  const conversionRate = totalLeads > 0 ? `${((converted / totalLeads) * 100).toFixed(1)}%` : "0%";

  const serviceCounts: Record<string, number> = {};
  leads.forEach((l) => {
    serviceCounts[l.service] = (serviceCounts[l.service] || 0) + 1;
  });

  let topService = "Website Design & Next.js";
  let maxCount = 0;
  for (const [srv, count] of Object.entries(serviceCounts)) {
    if (count > maxCount) {
      maxCount = count;
      topService = srv;
    }
  }

  return {
    totalLeads,
    newLeads,
    inDiscussion,
    converted,
    conversionRate,
    topService,
  };
}

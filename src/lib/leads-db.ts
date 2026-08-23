import fs from "fs";
import path from "path";
import { LeadItem, LeadStatus, LeadStats } from "@/types/lead";

const DB_PATH = path.join(process.cwd(), "src", "data", "leads-db.json");

// Ensure DB file exists
function ensureDbFile(): void {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([], null, 2), "utf-8");
  }
}

export function getAllLeads(): LeadItem[] {
  ensureDbFile();
  try {
    const raw = fs.readFileSync(DB_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Error reading leads database:", error);
    return [];
  }
}

export function saveAllLeads(leads: LeadItem[]): boolean {
  ensureDbFile();
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(leads, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error saving leads database:", error);
    return false;
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

  leads.unshift(newLead); // Latest first
  saveAllLeads(leads);
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

  // Find top requested service
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

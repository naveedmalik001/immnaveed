import { NextRequest, NextResponse } from "next/server";
import { getAllLeads, createLead, getLeadStats } from "@/lib/leads-db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    let leads = getAllLeads();

    if (status && status !== "All") {
      leads = leads.filter((l) => l.status === status);
    }

    if (search) {
      const q = search.toLowerCase();
      leads = leads.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          (l.firmName && l.firmName.toLowerCase().includes(q)) ||
          l.email.toLowerCase().includes(q) ||
          l.phone.includes(q) ||
          l.service.toLowerCase().includes(q) ||
          l.message.toLowerCase().includes(q)
      );
    }

    const stats = getLeadStats();
    return NextResponse.json({ success: true, leads, stats });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, firmName, email, phone, service, message, sourceUrl } = body;

    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { success: false, error: "Name, email, phone, and service are required fields." },
        { status: 400 }
      );
    }

    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "127.0.0.1";

    const newLead = createLead({
      name,
      firmName,
      email,
      phone,
      service,
      message: message || "General Inquiry",
      sourceUrl,
      ip,
    });

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json({ success: false, error: "Failed to record lead" }, { status: 500 });
  }
}

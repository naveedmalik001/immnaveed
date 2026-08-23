import { NextResponse } from "next/server";
import { getAllLeads } from "@/lib/leads-db";

export async function GET() {
  try {
    const leads = getAllLeads();

    const header = [
      "ID",
      "Date",
      "Full Name",
      "Firm / Company",
      "Email Address",
      "WhatsApp Phone",
      "Service Requested",
      "Status",
      "Project Brief",
      "Internal Notes",
    ];

    const rows = leads.map((l) => [
      l.id,
      `"${new Date(l.createdAt).toLocaleString("en-IN")}"`,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${(l.firmName || "").replace(/"/g, '""')}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.service.replace(/"/g, '""')}"`,
      `"${l.status}"`,
      `"${(l.message || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
      `"${(l.notes || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
    ]);

    const csvContent = [header.join(","), ...rows.map((r) => r.join(","))].join("\n");

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="IMMNAVEED_Leads_${new Date().toISOString().split("T")[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error("Error generating CSV:", error);
    return NextResponse.json({ success: false, error: "Failed to export CSV" }, { status: 500 });
  }
}

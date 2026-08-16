import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const leads = db.getLeads();
    const headers = [
      "ID",
      "Name",
      "Phone",
      "Email",
      "Requirement",
      "Purpose",
      "Preferred Contact",
      "Status",
      "Source",
      "UTM Source",
      "UTM Medium",
      "UTM Campaign",
      "Device",
      "Created At",
      "Notes"
    ];

    const rows = leads.map((l) => [
      `"${l.id}"`,
      `"${(l.name || "").replace(/"/g, '""')}"`,
      `"${l.phone || ""}"`,
      `"${l.email || ""}"`,
      `"${(l.requirement || "").replace(/"/g, '""')}"`,
      `"${l.purpose || ""}"`,
      `"${l.preferred_contact || ""}"`,
      `"${l.status || ""}"`,
      `"${(l.source || "").replace(/"/g, '""')}"`,
      `"${l.utm_source || ""}"`,
      `"${l.utm_medium || ""}"`,
      `"${l.utm_campaign || ""}"`,
      `"${l.device || ""}"`,
      `"${l.created_at || ""}"`,
      `"${(l.notes || "").replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename=aurora-hills-leads-${new Date().toISOString().split("T")[0]}.csv`
      }
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const leads = db.getLeads();
    const visits = db.getSiteVisits();
    const events = db.getEvents();

    const totalLeads = leads.length;
    const today = new Date().toISOString().split("T")[0];
    const todayLeads = leads.filter((l) => l.created_at.startsWith(today)).length;
    const siteVisitsCount = visits.length;
    const convertedLeads = leads.filter((l) => l.status === "Converted").length;
    const conversionRate = totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(1) : "0.0";

    // Leads by status
    const statusCounts: Record<string, number> = {};
    leads.forEach((l) => {
      statusCounts[l.status] = (statusCounts[l.status] || 0) + 1;
    });

    // Leads by source
    const sourceCounts: Record<string, number> = {};
    leads.forEach((l) => {
      const src = l.utm_source || l.source || "Direct";
      sourceCounts[src] = (sourceCounts[src] || 0) + 1;
    });

    // Event stats
    const whatsappClicks = events.filter((e) => e.event_name === "whatsapp_click").length;
    const phoneClicks = events.filter((e) => e.event_name === "phone_click").length;
    const brochureDownloads = events.filter((e) => e.event_name === "brochure_download").length;
    const videoPlays = events.filter((e) => e.event_name === "video_play").length;
    const masterPlanViews = events.filter((e) => e.event_name === "masterplan_open").length;

    return NextResponse.json({
      success: true,
      stats: {
        totalLeads,
        todayLeads,
        siteVisitsCount,
        conversionRate,
        convertedLeads,
        statusCounts,
        sourceCounts,
        eventStats: {
          whatsappClicks,
          phoneClicks,
          brochureDownloads,
          videoPlays,
          masterPlanViews
        }
      }
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

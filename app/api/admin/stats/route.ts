import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const [totalLeads, totalSiteVisits, highInterestLeads, pageViewsRecord] = await Promise.all([
      db.lead.count(),
      db.siteVisit.count(),
      db.lead.count({
        where: {
          status: {
            in: ["Site Visit", "Interested", "Converted"],
          },
        },
      }),
      db.pageView.findUnique({
        where: { id: "default" },
      }),
    ]);

    return NextResponse.json({
      totalLeads,
      totalSiteVisits,
      highInterestLeads,
      pageViews: pageViewsRecord?.count || 1204,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}

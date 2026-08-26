import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const visits = await db.siteVisit.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(visits);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch site visits" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const newVisit = await db.siteVisit.create({
      data: {
        leadId: data.lead_id,
        name: data.name,
        phone: data.phone,
        email: data.email,
        preferredDate: data.preferred_date,
        preferredTime: data.preferred_time,
        visitors: data.visitors || 1,
        transportRequired: data.transport_required || "No",
        status: data.status || "Scheduled",
        message: data.message,
        source: data.source || "Website Form",
      },
    });
    return NextResponse.json(newVisit);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create site visit" }, { status: 500 });
  }
}

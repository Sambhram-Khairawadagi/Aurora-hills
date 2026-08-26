import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const leads = await db.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const newLead = await db.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        requirement: data.requirement,
        purpose: data.purpose,
        preferred_contact: data.preferred_contact,
        message: data.message,
        source: data.source || "Website Form",
        utm_source: data.utm_source,
        utm_medium: data.utm_medium,
        utm_campaign: data.utm_campaign,
        device: data.device,
        status: data.status || "New",
      },
    });
    return NextResponse.json(newLead);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { event_name, metadata } = body;
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "";

    if (event_name) {
      await db.analyticsEvent.create({
        data: {
          eventName: event_name,
          metadata: metadata ? JSON.stringify(metadata) : null,
          ip: ip,
          userAgent: userAgent
        }
      });
    }
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const visits = db.getSiteVisits();
    return NextResponse.json({ success: true, visits });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status } = await req.json();
    const updated = db.updateSiteVisit(id, { status });
    if (!updated) {
      return NextResponse.json({ success: false, error: "Visit not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, visit: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

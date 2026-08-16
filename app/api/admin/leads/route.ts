import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search")?.toLowerCase() || "";
    const status = searchParams.get("status") || "";
    const source = searchParams.get("source") || "";

    let leads = db.getLeads();

    if (search) {
      leads = leads.filter(
        (l) =>
          l.name.toLowerCase().includes(search) ||
          l.phone.includes(search) ||
          l.email.toLowerCase().includes(search) ||
          (l.requirement && l.requirement.toLowerCase().includes(search))
      );
    }

    if (status && status !== "ALL") {
      leads = leads.filter((l) => l.status === status);
    }

    if (source && source !== "ALL") {
      leads = leads.filter((l) => l.source === source);
    }

    return NextResponse.json({ success: true, leads });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

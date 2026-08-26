import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    let pageView = await db.pageView.findUnique({
      where: { id: "default" },
    });

    if (!pageView) {
      pageView = await db.pageView.create({
        data: { id: "default", count: 1204 }, // Starts at 1204
      });
    }

    const updated = await db.pageView.update({
      where: { id: "default" },
      data: { count: pageView.count + 1 },
    });

    return NextResponse.json({ count: updated.count });
  } catch (error) {
    console.error("Failed to increment page view:", error);
    return NextResponse.json({ count: 1204 }); // safe fallback
  }
}

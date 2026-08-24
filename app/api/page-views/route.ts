import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // Increment the counter on every GET request to this endpoint
    const currentCount = db.incrementPageView();
    
    return NextResponse.json({ count: currentCount });
  } catch (error) {
    console.error("Failed to increment page view:", error);
    // If it fails, fallback to get current count without incrementing or just return a default
    try {
      const fallbackCount = db.getPageViewCount();
      return NextResponse.json({ count: fallbackCount });
    } catch {
      return NextResponse.json({ count: 1204 }); // safe fallback
    }
  }
}

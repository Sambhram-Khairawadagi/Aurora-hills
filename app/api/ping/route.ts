import { NextResponse } from "next/server";

const SITEMAP_URL = "https://theaurorahills.com/sitemap.xml";

export async function GET() {
  const results: Record<string, string> = {};

  try {
    const googleRes = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
      { method: "GET" }
    );
    results.google = `Status: ${googleRes.status}`;
  } catch (err: unknown) {
    results.google = err instanceof Error ? err.message : "error";
  }

  try {
    const bingRes = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
      { method: "GET" }
    );
    results.bing = `Status: ${bingRes.status}`;
  } catch (err: unknown) {
    results.bing = err instanceof Error ? err.message : "error";
  }

  return NextResponse.json({
    message: "Sitemap pings sent to Google & Bing",
    sitemap: SITEMAP_URL,
    results,
    timestamp: new Date().toISOString(),
  });
}

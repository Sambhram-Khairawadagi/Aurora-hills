import { NextResponse } from "next/server";

const SITEMAP_URL = "https://theaurorahills.com/sitemap.xml";

export async function GET() {
  const results: Record<string, string> = {};

  try {
    const googleRes = await fetch(
      `https://www.google.com/ping?sitemap=`,
      { method: "GET" }
    );
    results.google = ``;
  } catch {
    results.google = "error";
  }

  try {
    const bingRes = await fetch(
      `https://www.bing.com/ping?sitemap=`,
      { method: "GET" }
    );
    results.bing = ``;
  } catch {
    results.bing = "error";
  }

  return NextResponse.json({
    message: "Sitemap pings sent",
    sitemap: SITEMAP_URL,
    results,
    timestamp: new Date().toISOString(),
  });
}

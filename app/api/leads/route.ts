import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      requirement,
      purpose,
      preferred_contact,
      message,
      source,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      honeypot
    } = body;

    // Honeypot spam protection
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ success: false, error: "Please enter your valid full name." }, { status: 400 });
    }

    const cleanPhone = (phone || "").replace(/[^0-9+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json({ success: false, error: "Please enter a valid 10-digit mobile number." }, { status: 400 });
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "";
    const isMobile = /mobile|android|iphone/i.test(userAgent);

    const lead = db.createLead({
      name: name.trim(),
      phone: cleanPhone,
      email: (email || "").trim(),
      requirement: requirement || "Not Specified",
      purpose: purpose || "Not Specified",
      preferred_contact: preferred_contact || "Phone",
      message: (message || "").trim(),
      source: source || "Website Form",
      utm_source: utm_source || "direct",
      utm_medium: utm_medium || "",
      utm_campaign: utm_campaign || "",
      utm_term: utm_term || "",
      utm_content: utm_content || "",
      device: isMobile ? "Mobile" : "Desktop",
      ip
    });

    db.logEvent("lead_submit", { lead_id: lead.id, source: lead.source, phone: lead.phone }, ip, userAgent);

    return NextResponse.json({
      success: true,
      message: "Thank you! Our Aurora Hills team will get in touch with you shortly.",
      lead_id: lead.id
    });
  } catch (err: any) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ success: false, error: "Internal server error. Please try again or contact us directly." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Leads API endpoint active" });
}

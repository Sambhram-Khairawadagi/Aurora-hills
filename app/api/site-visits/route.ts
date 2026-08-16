import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      preferred_date,
      preferred_time,
      visitors,
      transport_required,
      message,
      source,
      honeypot
    } = body;

    // Honeypot spam protection
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Site visit request received." });
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json({ success: false, error: "Please enter your name." }, { status: 400 });
    }

    const cleanPhone = (phone || "").replace(/[^0-9+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json({ success: false, error: "Please enter a valid mobile number." }, { status: 400 });
    }

    if (!preferred_date) {
      return NextResponse.json({ success: false, error: "Please choose your preferred visit date." }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "";

    // Create lead entry if not existing
    const lead = db.createLead({
      name: name.trim(),
      phone: cleanPhone,
      email: (email || "").trim(),
      requirement: "Site Visit Request",
      purpose: "Both",
      preferred_contact: "Phone",
      message: `Site Visit on ${preferred_date} at ${preferred_time || "Morning"}. Visitors: ${visitors || 1}. Transport: ${transport_required || "No"}. ${message || ""}`,
      status: "Site Visit",
      source: source || "Site Visit Booking Form",
      device: /mobile|android|iphone/i.test(userAgent) ? "Mobile" : "Desktop",
      ip
    });

    const visit = db.createSiteVisit({
      lead_id: lead.id,
      name: name.trim(),
      phone: cleanPhone,
      email: (email || "").trim(),
      preferred_date,
      preferred_time: preferred_time || "10:00 AM",
      visitors: Number(visitors) || 1,
      transport_required: transport_required === "Yes" ? "Yes" : "No",
      status: "Scheduled",
      message: (message || "").trim(),
      source: source || "Site Visit Booking Form"
    });

    db.logEvent("site_visit_submit", { visit_id: visit.id, lead_id: lead.id, date: preferred_date }, ip, userAgent);

    return NextResponse.json({
      success: true,
      message: "Thank you. Our Aurora Hills team will contact you shortly to confirm your site visit and coordinate timings.",
      visit_id: visit.id
    });
  } catch (err: any) {
    console.error("Site visit error:", err);
    return NextResponse.json({ success: false, error: "Unable to schedule site visit. Please try again or call our hotline." }, { status: 500 });
  }
}

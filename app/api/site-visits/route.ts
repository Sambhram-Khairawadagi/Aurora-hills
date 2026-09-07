import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendAdminNotification, sendUserConfirmation } from "@/lib/email";

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
    const isMobile = /mobile|android|iphone/i.test(userAgent);

    let leadId = `lead_${Date.now()}`;
    let visitId = `visit_${Date.now()}`;
    let savedToDb = false;

    // 1. Attempt database persistence
    try {
      const lead = await db.lead.create({
        data: {
          name: name.trim(),
          phone: cleanPhone,
          email: (email || "").trim(),
          requirement: "Site Visit Request",
          purpose: "Both",
          preferred_contact: "Phone",
          message: `Site Visit on ${preferred_date} at ${preferred_time || "Morning"}. Visitors: ${visitors || 1}. Transport: ${transport_required || "No"}. ${message || ""}`,
          status: "Site Visit",
          source: source || "Site Visit Booking Form",
          device: isMobile ? "Mobile" : "Desktop"
        }
      });
      leadId = lead.id;

      const visit = await db.siteVisit.create({
        data: {
          leadId: lead.id,
          name: name.trim(),
          phone: cleanPhone,
          email: (email || "").trim(),
          preferredDate: preferred_date,
          preferredTime: preferred_time || "10:00 AM",
          visitors: Number(visitors) || 1,
          transportRequired: transport_required === "Yes" ? "Yes" : "No",
          status: "Scheduled",
          message: (message || "").trim(),
          source: source || "Site Visit Booking Form"
        }
      });
      visitId = visit.id;
      savedToDb = true;

      try {
        await db.analyticsEvent.create({
          data: {
            eventName: "site_visit_submit",
            metadata: JSON.stringify({ visit_id: visit.id, lead_id: lead.id, date: preferred_date }),
            ip: ip,
            userAgent: userAgent
          }
        });
      } catch (analyticsErr) {
        console.warn("[site-visits] Non-fatal analytics event logging error:", analyticsErr);
      }
    } catch (dbErr: any) {
      console.error("[site-visits] Database write encountered an issue (proceeding with email notification):", dbErr?.message || dbErr);
    }

    const visitPayload = {
      Name: name.trim(),
      Phone: cleanPhone,
      Email: (email || "Not Provided").trim(),
      'Preferred Date': preferred_date,
      'Preferred Time': preferred_time || "10:00 AM",
      Visitors: visitors || 1,
      'Transport Required': transport_required === "Yes" ? "Yes" : "No",
      Message: (message || "No special message").trim(),
      Source: source || "Site Visit Booking Form",
      'Saved To Database': savedToDb ? "Yes" : "Fallback (Email Captured)",
      'Submitted At': new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    // 2. Await Admin Notification Email
    try {
      await sendAdminNotification('Site Visit', visitPayload);
    } catch (mailErr) {
      console.error("[site-visits] Failed to send admin notification:", mailErr);
    }

    // 3. User Confirmation Email
    if (email && email.trim()) {
      try {
        await sendUserConfirmation(email.trim(), name.trim());
      } catch (userMailErr) {
        console.error("[site-visits] Failed to send user confirmation:", userMailErr);
      }
    }

    // 4. Optional Webhook
    if (process.env.LEADS_WEBHOOK_URL) {
      fetch(process.env.LEADS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "site_visit", id: visitId, ...visitPayload }),
      }).catch(e => console.error("[site-visits] Webhook dispatch error:", e?.message));
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Our Aurora Hills team will contact you shortly to confirm your site visit and coordinate timings.",
      visit_id: visitId
    });
  } catch (err: any) {
    console.error("Site visit critical error:", err);
    return NextResponse.json({ success: false, error: "Unable to schedule site visit. Please try again or call our hotline." }, { status: 500 });
  }
}

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

    let leadId = `lead_${Date.now()}`;
    let savedToDb = false;

    // 1. Try persisting to Database (Graceful degradation for serverless environments)
    try {
      const lead = await db.lead.create({
        data: {
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
          device: isMobile ? "Mobile" : "Desktop"
        }
      });
      leadId = lead.id;
      savedToDb = true;

      try {
        await db.analyticsEvent.create({
          data: {
            eventName: "lead_submit",
            metadata: JSON.stringify({ lead_id: lead.id, source: lead.source, phone: lead.phone }),
            ip: ip,
            userAgent: userAgent
          }
        });
      } catch (analyticsErr) {
        console.warn("[leads] Non-fatal analytics event logging error:", analyticsErr);
      }
    } catch (dbErr: any) {
      console.error("[leads] Database write encountered an issue (proceeding with email notification):", dbErr?.message || dbErr);
    }

    const leadPayload = {
      Name: name.trim(),
      Phone: cleanPhone,
      Email: (email || "Not Provided").trim(),
      Requirement: requirement || "Not Specified",
      Purpose: purpose || "Not Specified",
      'Preferred Contact': preferred_contact || "Phone",
      Message: (message || "No message").trim(),
      Source: source || "Website Form",
      'Saved To Database': savedToDb ? "Yes" : "Fallback (Email Captured)",
      'Submitted At': new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    // 2. Await Admin Email Notification (critical for serverless to prevent premature container termination)
    try {
      await sendAdminNotification('Lead', leadPayload);
    } catch (mailErr) {
      console.error("[leads] Failed to send admin notification:", mailErr);
    }

    // 3. User Confirmation Email
    if (email && email.trim()) {
      try {
        await sendUserConfirmation(email.trim(), name.trim());
      } catch (userMailErr) {
        console.error("[leads] Failed to send user confirmation:", userMailErr);
      }
    }

    // 4. Optional Webhook (for Google Sheets, Zapier, Make, CRM)
    if (process.env.LEADS_WEBHOOK_URL) {
      fetch(process.env.LEADS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "lead", id: leadId, ...leadPayload }),
      }).catch(e => console.error("[leads] Webhook dispatch error:", e?.message));
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Our Aurora Hills team will get in touch with you shortly.",
      lead_id: leadId
    });
  } catch (err: any) {
    console.error("Lead submission critical error:", err);
    return NextResponse.json({ success: false, error: "Internal server error. Please try again or contact us directly." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Leads API endpoint active" });
}

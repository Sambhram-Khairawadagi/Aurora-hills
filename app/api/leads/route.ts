import { NextRequest, NextResponse } from "next/server";
import { hasDurableDatabase, sendLeadWebhook } from "@/lib/lead-delivery";
import { db } from "@/lib/db";
import { sendAdminNotification, sendUserConfirmation } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
    const textFields = ["name", "phone", "email", "requirement", "purpose", "preferred_contact", "message", "source", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "preferred_date", "preferred_time", "transport_required"];
    if (textFields.some(key => body[key] != null && (typeof body[key] !== "string" || body[key].length > 4000))) return NextResponse.json({ success: false, error: "Please check your form details." }, { status: 400 });
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

    const cleanPhone = typeof phone === "string" ? phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "") : "";
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
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
          notes: JSON.stringify({ gclid: body.gclid || "", utm_term: body.utm_term || "", utm_content: body.utm_content || "" }),
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

    const leadPayload: Record<string, any> = {
      Name: name.trim(),
      Phone: cleanPhone,
      Email: (email || "Not Provided").trim(),
      Requirement: requirement || "Not Specified",
      Purpose: purpose || "Not Specified",
      'Preferred Contact': preferred_contact || "Phone",
      Message: (message || "No message").trim(),
      Source: source || "Website Form",
    };

    if (utm_source || utm_campaign) {
      leadPayload['Google Ads Channel'] = utm_source || 'direct';
      leadPayload['Ad Campaign'] = utm_campaign || 'N/A';
      if (utm_term) leadPayload['Search Keyword'] = utm_term;

    }

    if (body.gclid) leadPayload['Google Click ID'] = body.gclid;
    if (utm_medium) leadPayload['Ad Medium'] = utm_medium;
    if (utm_content) leadPayload['Ad Content'] = utm_content;
    leadPayload['Saved To Database'] = savedToDb ? "Yes" : "Fallback (Email Captured)";
    leadPayload['Submitted At'] = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    let emailSent = false;
    // 2. Await Admin Email Notification (critical for serverless to prevent premature container termination)
    try {
      emailSent = await sendAdminNotification('Lead', leadPayload);
    } catch (mailErr) {
      console.error("[leads] Failed to send admin notification:", mailErr);
    }

    const webhookSent = await sendLeadWebhook({ type: "lead", id: leadId, ...leadPayload });
    if (!(savedToDb && hasDurableDatabase()) && !emailSent && !webhookSent) {
      return NextResponse.json({ success: false, error: "We could not securely record your request. Please try again or call +91 89701 98701." }, { status: 503 });
    }

    // 3. User Confirmation Email
    if (email && email.trim()) {
      try {
        await sendUserConfirmation(email.trim(), name.trim());
      } catch (userMailErr) {
        console.error("[leads] Failed to send user confirmation:", userMailErr);
      }
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

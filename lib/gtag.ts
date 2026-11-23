export const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "AW-16689411973";
export const GOOGLE_CONVERSION_SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_SEND_TO || "AW-16689411973/I9fRCMn3upwdEIXvkJY-";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Safe helper that invokes window.gtag or queues to window.dataLayer
const safeGtag = (...args: any[]) => {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag(...args);
    return;
  }
  window.dataLayer = window.dataLayer || [];
  const fn = function (...callArgs: any[]) {
    window.dataLayer!.push(callArgs);
  };
  window.gtag = fn;
  fn(...args);
};

// Track pageviews
export const pageview = (url: string) => {
  if (GOOGLE_TAG_ID) {
    safeGtag("config", GOOGLE_TAG_ID, {
      page_path: url,
    });
  }
};

// Track Google Ads conversions
export const trackConversion = (sendTo?: string, value: number = 0, currency: string = "INR", transactionId?: string) => {
  const target = sendTo || GOOGLE_CONVERSION_SEND_TO;
  if (!target) return;

  safeGtag("event", "conversion", {
    send_to: target,
    ...(transactionId ? { transaction_id: transactionId } : {}),
    value: value,
    currency: currency,
  });
};

export const trackBrochureRequest = () => {
  safeGtag("event", "brochure_request", {
    event_label: "Brochure Modal Form",
  });
};

export interface LeadMeasurement {
  submissionId?: string;
  email?: string;
  phone?: string;
  consent?: boolean;
}

// Only successful enquiry responses call this; brochure/contact actions stay separate.
export const trackLeadSubmit = (source: string = "Website Form", requirement?: string, measurement: LeadMeasurement = {}) => {
  safeGtag("event", "generate_lead", {
    event_category: "Real Estate Leads",
    event_label: source,
    requirement: requirement || "Not Specified",
  });
  // Do not put contact details in analytics event parameters or browser storage.
  const email = measurement.email?.trim().toLowerCase();
  const digits = measurement.phone?.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
  const phone = digits && /^[6-9]\d{9}$/.test(digits) ? `+91${digits}` : undefined;
  const canMatch = measurement.consent === true && !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  safeGtag("set", "user_data", canMatch ? { email, ...(phone ? { phone_number: phone } : {}) } : null);
  if (GOOGLE_CONVERSION_SEND_TO) {
    safeGtag("event", "conversion", {
      send_to: GOOGLE_CONVERSION_SEND_TO,
      ...(measurement.submissionId ? { transaction_id: measurement.submissionId } : {}),
    });
  }
  safeGtag("set", "user_data", null);
};

// Track Direct Phone Call Clicks
export const trackPhoneClick = (phone: string = "8970198701") => {
  safeGtag("event", "contact", {
    event_category: "Phone Call Click",
    event_label: phone,
    value: 500,
  });

  // Optional separate secondary Ads action; never reuse the submitted-lead label.
  if (process.env.NEXT_PUBLIC_GOOGLE_CONTACT_SEND_TO) trackConversion(process.env.NEXT_PUBLIC_GOOGLE_CONTACT_SEND_TO, 0, "INR");
};

// Track WhatsApp Chat Clicks
export const trackWhatsAppClick = () => {
  safeGtag("event", "contact", {
    event_category: "WhatsApp Click",
    event_label: "Aurora Hills WhatsApp",
    value: 500,
  });

  if (process.env.NEXT_PUBLIC_GOOGLE_CONTACT_SEND_TO) trackConversion(process.env.NEXT_PUBLIC_GOOGLE_CONTACT_SEND_TO, 0, "INR");
};

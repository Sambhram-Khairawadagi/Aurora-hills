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
export const trackConversion = (sendTo?: string, value: number = 0, currency: string = "INR") => {
  const target = sendTo || GOOGLE_CONVERSION_SEND_TO;
  if (!target) return;

  safeGtag("event", "conversion", {
    send_to: target,
    value: value,
    currency: currency,
  });
};

// Track Lead Form Submissions
export const trackLeadSubmit = (source: string = "Website Form", requirement?: string) => {
  // General Google Analytics lead event
  safeGtag("event", "generate_lead", {
    event_category: "Real Estate Leads",
    event_label: source,
    value: 1000,
    requirement: requirement || "Not Specified",
  });

  // Google Ads conversion event if send_to is set
  if (GOOGLE_CONVERSION_SEND_TO) {
    trackConversion(GOOGLE_CONVERSION_SEND_TO, 1000, "INR");
  }
};

// Track Direct Phone Call Clicks
export const trackPhoneClick = (phone: string = "8970198701") => {
  safeGtag("event", "contact", {
    event_category: "Phone Call Click",
    event_label: phone,
    value: 500,
  });

  // Fire Google Ads conversion so inbound phone intent is attributed and counted
  if (GOOGLE_CONVERSION_SEND_TO) {
    trackConversion(GOOGLE_CONVERSION_SEND_TO, 500, "INR");
  }
};

// Track WhatsApp Chat Clicks
export const trackWhatsAppClick = () => {
  safeGtag("event", "contact", {
    event_category: "WhatsApp Click",
    event_label: "Aurora Hills WhatsApp",
    value: 500,
  });

  // Fire Google Ads conversion so inbound WhatsApp intent is attributed and counted
  if (GOOGLE_CONVERSION_SEND_TO) {
    trackConversion(GOOGLE_CONVERSION_SEND_TO, 500, "INR");
  }
};

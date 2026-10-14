export const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "AW-16689411973";
export const GOOGLE_CONVERSION_SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_SEND_TO || "AW-16689411973";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Track pageviews
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GOOGLE_TAG_ID) {
    window.gtag("config", GOOGLE_TAG_ID, {
      page_path: url,
    });
  }
};

// Track Google Ads conversions
export const trackConversion = (sendTo?: string, value: number = 0, currency: string = "INR") => {
  if (typeof window === "undefined" || !window.gtag) return;

  const target = sendTo || GOOGLE_CONVERSION_SEND_TO;
  if (!target) return;

  window.gtag("event", "conversion", {
    send_to: target,
    value: value,
    currency: currency,
  });
};

// Track Lead Form Submissions
export const trackLeadSubmit = (source: string = "Website Form", requirement?: string) => {
  if (typeof window === "undefined" || !window.gtag) return;

  // General Google Analytics lead event
  window.gtag("event", "generate_lead", {
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
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "contact", {
    event_category: "Phone Call Click",
    event_label: phone,
  });
};

// Track WhatsApp Chat Clicks
export const trackWhatsAppClick = () => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "contact", {
    event_category: "WhatsApp Click",
    event_label: "Aurora Hills WhatsApp",
  });
};

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export function getUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  const searchParams = new URLSearchParams(window.location.search);
  const utms: UtmParams = {};

  const source = searchParams.get("utm_source");
  const medium = searchParams.get("utm_medium");
  const campaign = searchParams.get("utm_campaign");
  const term = searchParams.get("utm_term");
  const content = searchParams.get("utm_content");

  if (source) utms.utm_source = source;
  if (medium) utms.utm_medium = medium;
  if (campaign) utms.utm_campaign = campaign;
  if (term) utms.utm_term = term;
  if (content) utms.utm_content = content;

  // Persist to session storage if found
  if (Object.keys(utms).length > 0) {
    try {
      sessionStorage.setItem("aurora_utms", JSON.stringify(utms));
    } catch {
      // Ignore sessionStorage errors
    }
  } else {
    // Try to retrieve from session storage
    try {
      const saved = sessionStorage.getItem("aurora_utms");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore sessionStorage errors
    }
  }

  return utms;
}
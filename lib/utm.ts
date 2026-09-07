export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
}

export function getStoredUtm(): UtmParams {
  if (typeof window === "undefined") return {};

  try {
    const stored = sessionStorage.getItem("aurora_utm_params");
    const parsedStored: UtmParams = stored ? JSON.parse(stored) : {};

    const params = new URLSearchParams(window.location.search);
    const current: UtmParams = {};

    if (params.get("utm_source")) current.utm_source = params.get("utm_source")!;
    if (params.get("utm_medium")) current.utm_medium = params.get("utm_medium")!;
    if (params.get("utm_campaign")) current.utm_campaign = params.get("utm_campaign")!;
    if (params.get("utm_term")) current.utm_term = params.get("utm_term")!;
    if (params.get("utm_content")) current.utm_content = params.get("utm_content")!;
    if (params.get("gclid")) {
      current.gclid = params.get("gclid")!;
      if (!current.utm_source) current.utm_source = "google_ads";
      if (!current.utm_medium) current.utm_medium = "cpc";
    }

    const merged: UtmParams = { ...parsedStored, ...current };

    if (Object.keys(merged).length > 0) {
      sessionStorage.setItem("aurora_utm_params", JSON.stringify(merged));
    }

    return merged;
  } catch {
    return {};
  }
}

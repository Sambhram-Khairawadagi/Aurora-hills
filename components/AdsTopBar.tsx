"use client";

import React, { useEffect, useState } from "react";
import { Phone, X } from "lucide-react";
import { trackPhoneClick } from "@/lib/gtag";

interface AdsTopBarProps {
  onOpenEnquiry: (source?: string) => void;
  onVisibilityChange?: (visible: boolean) => void;
}

export const AdsTopBar: React.FC<AdsTopBarProps> = ({ onOpenEnquiry, onVisibilityChange }) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show this bar only for Google Ads traffic (utm_source=google or utm_medium=cpc)
    const params = new URLSearchParams(window.location.search);
    const isAdTraffic =
      params.get("utm_source") === "google" ||
      params.get("utm_medium") === "cpc" ||
      params.get("gclid") !== null ||
      document.referrer.includes("googleads");

    // Also show if sessionStorage has a gclid (for within-session navigation)
    const hasGclid =
      sessionStorage.getItem("gclid") ||
      sessionStorage.getItem("utm_source") === "google";

    if (isAdTraffic || hasGclid) {
      // Persist the gclid flag for this session
      if (params.get("gclid")) {
        sessionStorage.setItem("gclid", params.get("gclid") || "1");
      }
      if (params.get("utm_source")) {
        sessionStorage.setItem("utm_source", params.get("utm_source") || "");
      }
      setVisible(true);
      onVisibilityChange?.(true);
    }
  }, [onVisibilityChange]);

  const handleDismiss = () => {
    setDismissed(true);
    onVisibilityChange?.(false);
  };

  if (!visible || dismissed) return null;

  return (
    <div
      id="ads-top-bar"
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between gap-2 px-3 py-2 sm:px-6"
      style={{
        background: "linear-gradient(90deg, #0f4c25 0%, #166534 40%, #14532d 100%)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.35)",
      }}
    >
      {/* Left — Urgency message */}
      <div className="flex items-center gap-2 min-w-0">
        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        <span className="text-[11px] sm:text-xs font-bold text-white/90 truncate">
          <span className="text-amber-300 font-black">🪔 Festive Offer Live:</span>{" "}
          <span className="hidden sm:inline">50g Gold on 40×60 | 1.5kg Silver on 30×50 | </span>
          Book a Plot Today
        </span>
      </div>

      {/* Right — CTAs */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Click-to-Call */}
        <a
          href="tel:+918970198701"
          onClick={() => trackPhoneClick("8970198701")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-emerald-900 font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:bg-amber-400 hover:text-black transition-all duration-200 whitespace-nowrap"
          id="ads-bar-call-btn"
        >
          <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
          <span className="hidden xs:inline">Call Now</span>
          <span className="xs:hidden">Call</span>
        </a>

        {/* Enquire Now */}
        <button
          onClick={() => onOpenEnquiry("Ads Top Bar")}
          id="ads-bar-enquire-btn"
          className="px-3 py-1.5 rounded-full bg-amber-400 text-amber-950 font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:bg-amber-300 transition-all duration-200 whitespace-nowrap hidden sm:block"
        >
          Enquire Now →
        </button>

        {/* Dismiss */}
        <button
          onClick={handleDismiss}
          className="p-1 rounded-full text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

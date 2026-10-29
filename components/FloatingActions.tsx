"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, CONTACT_NUMBERS } from "@/lib/projectData";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/gtag";

interface FloatingActionsProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenSiteVisit: () => void;
  onOpenBrochure: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi, I am interested in The Aurora Hills luxury plots in Dharwad. Please share layout plan and pre-launch pricing."
  )}`;

  const salesPhone = CONTACT_NUMBERS[0] || "8970198701";

  return (
    <>
      {/* Floating WhatsApp Action Pill (Desktop Only — Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 animate-fade-in">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105 group border border-white/40"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold uppercase tracking-wider">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Sleek High-Converting Mobile Dual Action Dock */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-xl border-t border-emerald-200/90 px-3.5 pt-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] flex items-center gap-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        {/* Left Action: Direct Phone Call (38% width) */}
        <a
          href={`tel:${salesPhone.replace(/\s+/g, "")}`}
          onClick={() => trackPhoneClick(salesPhone)}
          className="flex-1 py-3 px-2 rounded-xl bg-white border-2 border-emerald-700 text-forest-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-all text-center"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
          <span>Call Sales</span>
        </a>

        {/* Right Action: WhatsApp Price Sheet & Layout (62% width) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="flex-[1.6] py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#25D366]/30 active:scale-95 transition-all text-center tracking-wide"
        >
          <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
          <span>Get Layout on WhatsApp</span>
        </a>
      </div>
    </>
  );
};

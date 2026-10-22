"use client";

import React from "react";
import { Phone, MessageCircle, Calendar, FileText } from "lucide-react";
import { WHATSAPP_NUMBER, CONTACT_NUMBERS } from "@/lib/projectData";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/gtag";

interface FloatingActionsProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenSiteVisit: () => void;
  onOpenBrochure: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenEnquiry,
  onOpenSiteVisit,
  onOpenBrochure,
}) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi, I am interested in The Aurora Hills luxury plots in Dharwad. Please share details and pricing."
  )}`;

  return (
    <>
      {/* Floating WhatsApp Action Pill (Desktop Only — Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 animate-fade-in">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="px-5 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105 group border border-white/40"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold uppercase tracking-wider">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Floating Bottom Navigation Bar on Mobile (4 Direct Thumb Actions: Call, WhatsApp, Site Visit, Enquire) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-xl border-t border-emerald-200/80 px-2 py-2 flex items-center justify-between gap-1 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <a
          href={`tel:${CONTACT_NUMBERS[0].replace(/\s+/g, "")}`}
          onClick={() => trackPhoneClick(CONTACT_NUMBERS[0])}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-1 text-xs font-bold text-forest-950 active:scale-95 transition-transform"
        >
          <div className="p-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span>Call Desk</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-1 text-xs font-bold text-forest-950 active:scale-95 transition-transform"
        >
          <div className="p-1.5 rounded-full bg-[#25D366]/15 text-[#1ebd5a] border border-[#25D366]/40">
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
          </div>
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenSiteVisit}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-1 text-xs font-bold text-forest-950 active:scale-95 transition-transform"
        >
          <div className="p-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <span>Site Visit</span>
        </button>

        <button
          onClick={() => onOpenEnquiry("Floating Mobile CTA")}
          className="flex-[1.3] px-3 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-emerald-600/30 active:scale-95 transition-transform text-center"
        >
          Enquire
        </button>
      </div>
    </>
  );
};

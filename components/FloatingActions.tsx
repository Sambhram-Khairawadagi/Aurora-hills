"use client";

import React from "react";
import { Phone, MessageCircle, Calendar, FileText } from "lucide-react";
import { WHATSAPP_NUMBER, CONTACT_NUMBERS } from "@/lib/projectData";

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
      {/* Floating WhatsApp Action Pill (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 animate-fade-in">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 sm:px-5 sm:py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105 group border border-white/40"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Floating Bottom Navigation Bar on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/90 backdrop-blur-xl border-t border-charcoal-200/50 p-2.5 flex items-center justify-around shadow-2xl">
        <a
          href={`tel:${CONTACT_NUMBERS[0]}`}
          className="flex flex-col items-center gap-1 text-[10px] font-bold text-charcoal-700 hover:text-emerald-700"
        >
          <div className="p-1.5 rounded-full neu-inset text-emerald-600">
            <Phone className="w-4 h-4" />
          </div>
          <span>Call Desk</span>
        </a>

        <button
          onClick={onOpenSiteVisit}
          className="flex flex-col items-center gap-1 text-[10px] font-bold text-charcoal-700 hover:text-emerald-700"
        >
          <div className="p-1.5 rounded-full neu-inset text-emerald-600">
            <Calendar className="w-4 h-4" />
          </div>
          <span>Site Visit</span>
        </button>

        <button
          onClick={() => onOpenEnquiry("Floating Mobile CTA")}
          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white text-xs font-black uppercase tracking-wider shadow-md"
        >
          Enquire Now
        </button>
      </div>
    </>
  );
};

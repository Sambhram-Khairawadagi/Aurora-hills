"use client";

import React from "react";
import { Phone, MessageSquare, Calendar, Download, Sparkles } from "lucide-react";
import { CONTACT_NUMBERS } from "@/lib/projectData";

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
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello, I am interested in The Aurora Hills, Hosa Dharwad. Please share the latest plot availability, pricing and project details."
    );
    window.open(`https://wa.me/919019765265?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Floating Minimalist WhatsApp Pill Action (Desktop & Mobile) */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-20 sm:bottom-8 right-5 z-40 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group backdrop-blur-xl border border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-300 text-xs font-bold">
          Chat on WhatsApp
        </span>
      </button>

      {/* Sticky Bottom Frosted Glass Dock for Mobile Visitors */}
      <div className="fixed bottom-3 left-3 right-3 z-40 bg-forest-950/85 border border-white/10 px-3 py-2 rounded-2xl flex items-center justify-between gap-2 sm:hidden backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
        <a
          href={`tel:${CONTACT_NUMBERS[0]}`}
          className="flex-1 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs font-bold flex items-center justify-center gap-1.5 active:bg-white/10"
        >
          <Phone className="w-3.5 h-3.5 text-gold-400" />
          <span>Call</span>
        </a>

        <button
          onClick={handleWhatsApp}
          className="flex-1 py-2.5 rounded-xl bg-emerald-600/90 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={() => onOpenEnquiry("Mobile Sticky Bar")}
          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-forest-950 text-xs font-black uppercase tracking-wider flex items-center justify-center shadow-lg"
        >
          <span>Enquire</span>
        </button>

        <button
          onClick={onOpenSiteVisit}
          className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-gold-300 text-xs font-bold flex items-center justify-center"
          title="Book Site Visit"
        >
          <Calendar className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};

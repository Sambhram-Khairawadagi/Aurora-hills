"use client";

import React from "react";
import { Phone, MessageSquare, Calendar, Download } from "lucide-react";
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
      {/* Floating WhatsApp Action Button (Desktop & Mobile) */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-20 sm:bottom-8 right-5 z-40 p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold">
          Chat on WhatsApp
        </span>
      </button>

      {/* Sticky Bottom Action Bar for Mobile Visitors */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-forest-950/98 border-t border-forest-800 px-3 py-2.5 flex items-center justify-between gap-2 sm:hidden backdrop-blur-xl shadow-2xl">
        <a
          href={`tel:${CONTACT_NUMBERS[0]}`}
          className="flex-1 py-2 rounded-xl bg-forest-900 border border-forest-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow"
        >
          <Phone className="w-3.5 h-3.5 text-gold-400" />
          <span>Call</span>
        </a>

        <button
          onClick={handleWhatsApp}
          className="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={() => onOpenEnquiry("Mobile Sticky Bar")}
          className="flex-1 py-2 rounded-xl bg-gold-400 text-forest-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg"
        >
          <span>Enquire</span>
        </button>

        <button
          onClick={onOpenSiteVisit}
          className="py-2 px-2.5 rounded-xl bg-forest-800 text-gold-300 text-xs font-bold flex items-center justify-center"
          title="Book Site Visit"
        >
          <Calendar className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};

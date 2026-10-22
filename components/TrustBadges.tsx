"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Landmark, Receipt } from "lucide-react";
import { APPROVAL_CARDS } from "@/lib/projectData";

export const TrustBadges: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    "na-kjp": <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
    "hduda": <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
    "loans": <Landmark className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
    "tax": <Receipt className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
  };

  return (
    <section className="relative z-20 py-3 sm:py-5 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {APPROVAL_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="p-2.5 sm:p-3.5 lg:p-4 rounded-xl sm:rounded-2xl vibrant-card flex flex-col justify-between group shadow-xs hover:shadow-md transition-all"
          >
            <div className="flex-1 flex flex-col">
              {/* Header row: Compact Icon + Highlight Pill */}
              <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2">
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl vibrant-icon-emerald shrink-0">
                  {iconMap[card.id] || <ShieldCheck className="w-4 h-4 text-white" />}
                </div>
                <span className="text-[7.5px] sm:text-[9px] uppercase font-black tracking-tight sm:tracking-wider vibrant-badge-emerald px-2 py-0.5 rounded-full text-center whitespace-nowrap leading-none shrink-0 shadow-xs">
                  {card.highlight}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xs sm:text-sm lg:text-base font-black text-forest-950 font-serif group-hover:text-emerald-600 transition-colors leading-tight">
                  {card.title} {card.subtitle}
                </h3>
                <p className="text-[10px] sm:text-xs text-charcoal-700 mt-0.5 sm:mt-1 leading-snug font-normal line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

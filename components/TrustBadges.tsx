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
            className="p-3.5 sm:p-4 lg:p-5 rounded-2xl vibrant-card flex flex-col justify-between group shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex-1 flex flex-col">
              {/* Header row: Icon + Highlight Pill */}
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-2.5">
                <div className="p-2 rounded-xl vibrant-icon-emerald shrink-0">
                  {iconMap[card.id] || <ShieldCheck className="w-4 h-4 text-white" />}
                </div>
                <span className="text-xs uppercase font-semibold tracking-normal vibrant-badge-emerald px-3 py-1 rounded-full text-center whitespace-normal leading-snug min-w-0 max-w-full shadow-xs">
                  {card.highlight}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-forest-950 font-sans group-hover:text-emerald-700 transition-colors leading-tight">
                  {card.title} {card.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-700 mt-1 sm:mt-1.5 leading-relaxed font-medium">
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

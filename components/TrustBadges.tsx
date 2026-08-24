"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Landmark, Receipt, Sparkles } from "lucide-react";
import { APPROVAL_CARDS } from "@/lib/projectData";

export const TrustBadges: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    "na-kjp": <ShieldCheck className="w-6 h-6 text-white" />,
    "hduda": <CheckCircle2 className="w-6 h-6 text-white" />,
    "loans": <Landmark className="w-6 h-6 text-white" />,
    "tax": <Receipt className="w-6 h-6 text-white" />,
  };

  return (
    <section className="relative z-20 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {APPROVAL_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-3xl vibrant-card flex flex-col justify-between group h-full"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex items-start justify-between h-14 sm:h-16">
                <div className="p-2.5 sm:p-3 rounded-2xl vibrant-icon-emerald shrink-0">
                  {iconMap[card.id] || <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider vibrant-badge-emerald px-2.5 py-1 rounded-full text-right max-w-[130px] leading-tight">
                  {card.highlight}
                </span>
              </div>

              <div className="mt-2 flex-1">
                <h3 className="text-base sm:text-lg font-black text-forest-950 font-serif group-hover:text-emerald-600 transition-colors">
                  {card.title} {card.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-700 mt-1.5 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>

            <div className="pt-3.5 mt-4 border-t border-emerald-100/80 flex items-center gap-1.5 text-[10px] sm:text-xs font-black text-emerald-800 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span>100% Legally Clear & Sanctioned</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

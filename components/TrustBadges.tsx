"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Landmark, Receipt, Sparkles } from "lucide-react";
import { APPROVAL_CARDS } from "@/lib/projectData";

export const TrustBadges: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    "na-kjp": <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    "hduda": <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
    "loans": <Landmark className="w-6 h-6 text-emerald-600" />,
    "tax": <Receipt className="w-6 h-6 text-emerald-700" />,
  };

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {APPROVAL_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl neu-glass border border-white/90 shadow-xl flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl neu-inset">
                  {iconMap[card.id] || <ShieldCheck className="w-6 h-6 text-emerald-600" />}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-300">
                  {card.highlight}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-forest-950 font-serif group-hover:text-emerald-700 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-charcoal-200/40 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Legally Verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

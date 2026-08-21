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
            className="p-6 rounded-3xl vibrant-card flex flex-col justify-between group"
          >
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl vibrant-icon-emerald">
                  {iconMap[card.id] || <ShieldCheck className="w-6 h-6 text-white" />}
                </div>
                <span className="text-[11px] uppercase font-black tracking-wider vibrant-badge-emerald px-3 py-1 rounded-full">
                  {card.highlight}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-forest-950 font-serif group-hover:text-emerald-600 transition-colors">
                  {card.title} {card.subtitle}
                </h3>
                <p className="text-sm text-charcoal-700 mt-1.5 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>

            <div className="pt-3.5 mt-3.5 border-t border-emerald-100/80 flex items-center gap-1.5 text-xs font-black text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Legally Clear & Sanctioned</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Landmark, FileText, Award } from "lucide-react";
import { APPROVAL_CARDS } from "@/lib/projectData";

export const TrustBadges: React.FC = () => {
  const icons = [
    <ShieldCheck key="1" className="w-6 h-6 text-emerald-400" />,
    <Award key="2" className="w-6 h-6 text-gold-400" />,
    <Landmark key="3" className="w-6 h-6 text-emerald-400" />,
    <FileText key="4" className="w-6 h-6 text-gold-400" />
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {APPROVAL_CARDS.map((card, idx) => (
          <div
            key={card.id}
            className="p-4 sm:p-5 rounded-2xl bg-forest-900/95 border border-gold-400/20 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-gold-400/60 hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-xl bg-forest-950 border border-forest-800 group-hover:border-gold-400/40 transition-colors">
                {icons[idx]}
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                <CheckCircle2 className="w-3 h-3" />
                {card.subtitle}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white font-serif tracking-wide group-hover:text-gold-300 transition-colors">
              {card.title}
            </h3>
            <p className="text-xs text-sand-200 mt-1 line-clamp-2 leading-relaxed">
              {card.description}
            </p>
            <div className="mt-2 text-[10px] uppercase tracking-wider font-semibold text-gold-400/90">
              ? {card.highlight}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

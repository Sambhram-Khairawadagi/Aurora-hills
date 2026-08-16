"use client";

import React from "react";
import { MapPin, LayoutGrid, Trees, Activity, Radio, TrendingUp, Sparkles, Navigation, TreePine } from "lucide-react";
import { WHY_AURORA_HILLS } from "@/lib/projectData";

interface WhyAuroraHillsProps {
  onOpenEnquiry: (source?: string) => void;
}

export const WhyAuroraHills: React.FC<WhyAuroraHillsProps> = ({ onOpenEnquiry }) => {
  const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-6 h-6 text-emerald-600" />,
    LayoutGrid: <LayoutGrid className="w-6 h-6 text-emerald-700" />,
    TreePine: <TreePine className="w-6 h-6 text-emerald-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-emerald-500" />,
    Navigation: <Navigation className="w-6 h-6 text-emerald-600" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-600" />,
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-glass border border-white/90 text-emerald-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Strategic Investment Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Why Choose <span className="green-text-gradient">The Aurora Hills?</span>
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Designed as Dharwad’s prime growth corridor, offering an unmatched harmony of scenic living and rapid capital appreciation.
          </p>
        </div>

        {/* Neomorphic Soft Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_AURORA_HILLS.map((point, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl neu-glass border border-white/90 shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top index indicator */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-2xl neu-inset">
                  {iconMap[point.icon] || <Sparkles className="w-6 h-6 text-emerald-600" />}
                </div>
                <span className="text-xs font-mono font-bold text-emerald-800/40 group-hover:text-emerald-700 transition-colors">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-forest-950 font-serif mb-2 group-hover:text-emerald-700 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-charcoal-200/40 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold">
                  Township Feature
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

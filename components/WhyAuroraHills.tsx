"use client";

import React from "react";
import { MapPin, LayoutGrid, Trees, Activity, Radio, TrendingUp, Sparkles, Navigation, TreePine } from "lucide-react";
import { WHY_AURORA_HILLS } from "@/lib/projectData";

interface WhyAuroraHillsProps {
  onOpenEnquiry: (source?: string) => void;
}

export const WhyAuroraHills: React.FC<WhyAuroraHillsProps> = ({ onOpenEnquiry }) => {
  const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-6 h-6 text-gold-400" />,
    LayoutGrid: <LayoutGrid className="w-6 h-6 text-emerald-400" />,
    TreePine: <TreePine className="w-6 h-6 text-emerald-300" />,
    Sparkles: <Sparkles className="w-6 h-6 text-gold-300" />,
    Navigation: <Navigation className="w-6 h-6 text-blue-400" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section className="py-24 lg:py-32 bg-forest-950 text-white relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Strategic Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight">
            Why Choose <span className="gold-text-gradient">The Aurora Hills?</span>
          </h2>
          <p className="text-sand-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Designed as Dharwad’s prime investment corridor, offering an unmatched harmony of scenic living and rapid capital appreciation.
          </p>
        </div>

        {/* Minimalist Frosted Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_AURORA_HILLS.map((point, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-gold-400/40 backdrop-blur-xl transition-all duration-400 hover:-translate-y-2 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top index indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-gold-400/40 flex items-center justify-center transition-colors">
                  {iconMap[point.icon] || <Sparkles className="w-6 h-6 text-gold-400" />}
                </div>
                <span className="text-xs font-mono font-bold text-white/30 group-hover:text-gold-400/80 transition-colors">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-serif mb-2.5 group-hover:text-gold-300 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-sand-200/80 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold">
                  Verified Feature
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

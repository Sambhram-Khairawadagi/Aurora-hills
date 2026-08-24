"use client";

import React from "react";
import { MapPin, LayoutGrid, Trees, Activity, Radio, TrendingUp, Sparkles, Navigation, TreePine, GraduationCap } from "lucide-react";
import { WHY_AURORA_HILLS } from "@/lib/projectData";

interface WhyAuroraHillsProps {
  onOpenEnquiry: (source?: string) => void;
}

export const WhyAuroraHills: React.FC<WhyAuroraHillsProps> = ({ onOpenEnquiry }) => {
  const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-6 h-6 text-white" />,
    LayoutGrid: <LayoutGrid className="w-6 h-6 text-white" />,
    TreePine: <TreePine className="w-6 h-6 text-white" />,
    Trees: <Trees className="w-6 h-6 text-white" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-white" />,
    Sparkles: <Sparkles className="w-6 h-6 text-white" />,
    Navigation: <Navigation className="w-6 h-6 text-white" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-white" />,
  };

  return (
    <section className="py-24 lg:py-32 vibrant-section-glow text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs sm:text-sm font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Strategic Investment Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Why Choose <span className="vibrant-text-gradient">The Aurora Hills?</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            An unmatched harmony of hill serenity, school proximity, and rapid capital appreciation.
          </p>
        </div>

        {/* Vibrant Real Estate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {WHY_AURORA_HILLS.map((point, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl vibrant-card flex flex-col justify-between group"
            >
              {/* Top index indicator */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3.5 rounded-2xl vibrant-icon-emerald">
                  {iconMap[point.icon] || <Sparkles className="w-6 h-6 text-white" />}
                </div>
                <span className="text-sm font-mono font-black text-emerald-700/50 group-hover:text-emerald-600 transition-colors">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-forest-950 font-serif mb-2 group-hover:text-emerald-700 transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-emerald-100/80 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-emerald-800 font-bold">
                  Township Feature
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

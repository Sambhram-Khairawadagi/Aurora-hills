"use client";

import React from "react";
import { MapPin, LayoutGrid, Trees, Activity, Radio, TrendingUp, Sparkles, Navigation, TreePine, GraduationCap } from "lucide-react";
import { WHY_AURORA_HILLS } from "@/lib/projectData";

interface WhyAuroraHillsProps {
  onOpenEnquiry: (source?: string) => void;
}

export const WhyAuroraHills: React.FC<WhyAuroraHillsProps> = ({ onOpenEnquiry }) => {
  const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-7 h-7 text-emerald-600" />,
    LayoutGrid: <LayoutGrid className="w-7 h-7 text-emerald-700" />,
    TreePine: <TreePine className="w-7 h-7 text-emerald-600" />,
    Trees: <Trees className="w-7 h-7 text-emerald-600" />,
    GraduationCap: <GraduationCap className="w-7 h-7 text-emerald-600" />,
    Sparkles: <Sparkles className="w-7 h-7 text-emerald-500" />,
    Navigation: <Navigation className="w-7 h-7 text-emerald-600" />,
    TrendingUp: <TrendingUp className="w-7 h-7 text-emerald-600" />,
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Strategic Investment Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Why Choose <span className="green-text-gradient">The Aurora Hills?</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Dharwad’s fastest growing residential corridor, offering an unmatched harmony of natural hill serenity, school/college proximity, and rapid capital appreciation.
          </p>
        </div>

        {/* Soft Modern Real Estate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_AURORA_HILLS.map((point, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-emerald-100 shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top index indicator */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-700">
                  {iconMap[point.icon] || <Sparkles className="w-7 h-7 text-emerald-600" />}
                </div>
                <span className="text-sm font-mono font-black text-emerald-900/40 group-hover:text-emerald-700 transition-colors">
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

              <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-emerald-800 font-bold">
                  Township Feature
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

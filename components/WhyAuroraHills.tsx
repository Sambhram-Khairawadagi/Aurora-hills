"use client";

import React from "react";
import {
  MapPin,
  LayoutGrid,
  Trees,
  Sparkles,
  Navigation,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { WHY_AURORA_HILLS } from "@/lib/projectData";

interface WhyAuroraHillsProps {
  onOpenEnquiry: (source?: string) => void;
}

export const WhyAuroraHills: React.FC<WhyAuroraHillsProps> = ({ onOpenEnquiry }) => {
  const iconMap: Record<string, React.ReactNode> = {
    MapPin: <MapPin className="w-6 h-6 text-gold-400" />,
    LayoutGrid: <LayoutGrid className="w-6 h-6 text-emerald-400" />,
    TreePine: <Trees className="w-6 h-6 text-gold-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-emerald-400" />,
    Navigation: <Navigation className="w-6 h-6 text-gold-400" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section className="py-20 bg-forest-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            Distinctive Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Why Choose <span className="gold-text-gradient">The Aurora Hills</span>?
          </h2>
          <p className="text-sand-100 text-sm sm:text-base leading-relaxed">
            Thoughtfully planned plots meeting the best of nature, connectivity, and modern community living in Dharwad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_AURORA_HILLS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-forest-900/60 border border-forest-800/80 hover:border-gold-400/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group"
            >
              <div className="w-14 h-14 rounded-2xl bg-forest-950 border border-forest-800 group-hover:border-gold-400/50 flex items-center justify-center mb-6 shadow-inner transition-colors">
                {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-gold-400" />}
              </div>

              <h3 className="text-xl font-bold text-white font-serif mb-3 group-hover:text-gold-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-sand-200/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenEnquiry("Why Aurora Hills CTA")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 font-bold uppercase tracking-wider text-xs shadow-xl transition-all"
          >
            <span>Enquire for Available Plots</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

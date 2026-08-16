"use client";

import React from "react";
import { Droplet, Zap, Route, Trees, ShieldCheck, Sparkles } from "lucide-react";

export const Infrastructure: React.FC = () => {
  const items = [
    {
      title: "1.5 Lakh Litres Water Tank",
      desc: "Massive dedicated overhead storage tank ensuring high-pressure, uninterrupted 24/7 water supply.",
      icon: <Droplet className="w-6 h-6 text-blue-600" />,
      tag: "Water Security"
    },
    {
      title: "Underground Utilities",
      desc: "Cabled power lines, telecom conduits, and storm drainage concealed beneath tree-lined pedestrian footpaths.",
      icon: <Zap className="w-6 h-6 text-gold-600" />,
      tag: "Aesthetic Living"
    },
    {
      title: "Wide 30ft & 40ft Internal Roads",
      desc: "High-grade smooth asphalt avenues with dedicated curbs, street illumination, and demarcated turning radiuses.",
      icon: <Route className="w-6 h-6 text-emerald-600" />,
      tag: "Seamless Access"
    },
    {
      title: "Centralized HTP & Eco-Design",
      desc: "Modern sewage & wastewater recycling infrastructure preserving Dharwad's natural flora and soil purity.",
      icon: <Trees className="w-6 h-6 text-emerald-700" />,
      tag: "Sustainable"
    }
  ];

  return (
    <section className="py-24 bg-[#F8F7F3] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-glass border border-white/80 text-gold-600 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            Engineering Standards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Robust <span className="gold-text-gradient">Infrastructure & Engineering</span>
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Built to township specifications with durable materials, underground services, and eco-friendly utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl neu-glass border border-white/90 shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl neu-inset">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-600 bg-gold-50/80 px-2.5 py-1 rounded-full border border-gold-200/60">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-forest-950 font-serif group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-charcoal-200/40 flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Township Spec Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

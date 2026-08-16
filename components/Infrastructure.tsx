"use client";

import React from "react";
import { Droplet, Zap, Route, Trees, ShieldCheck, Sparkles, Building } from "lucide-react";

export const Infrastructure: React.FC = () => {
  const items = [
    {
      title: "1.5 Lakh Litres Water Tank",
      desc: "Massive dedicated overhead storage tank ensuring high-pressure, uninterrupted 24/7 water supply.",
      icon: <Droplet className="w-6 h-6 text-blue-400" />,
      tag: "Water Security"
    },
    {
      title: "Underground Utilities",
      desc: "Cabled power lines, telecom conduits, and storm drainage concealed beneath tree-lined pedestrian footpaths.",
      icon: <Zap className="w-6 h-6 text-gold-400" />,
      tag: "Aesthetic Living"
    },
    {
      title: "Wide 30ft & 40ft Internal Roads",
      desc: "High-grade smooth asphalt avenues with dedicated curbs, street illumination, and demarcated turning radiuses.",
      icon: <Route className="w-6 h-6 text-emerald-400" />,
      tag: "Seamless Access"
    },
    {
      title: "Centralized HTP & Eco-Design",
      desc: "Modern sewage & wastewater recycling infrastructure preserving Dharwad's natural flora and soil purity.",
      icon: <Trees className="w-6 h-6 text-emerald-300" />,
      tag: "Sustainable"
    }
  ];

  return (
    <section className="py-24 bg-forest-950 text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Engineering Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight">
            Robust <span className="gold-text-gradient">Infrastructure & Engineering</span>
          </h2>
          <p className="text-sand-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Engineered to perfection with long-lasting civic standards, underground services, and sustainable township design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-gold-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-gold-400/40 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-serif group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-sand-200/80 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
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

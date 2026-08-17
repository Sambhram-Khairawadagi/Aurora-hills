"use client";

import React from "react";
import { Droplet, Zap, Route, Trees, ShieldCheck, Sparkles } from "lucide-react";

export const Infrastructure: React.FC = () => {
  const items = [
    {
      title: "1.5 Lakh Litres Water Reservoir",
      desc: "Massive dedicated elevated storage tank ensuring high-pressure, uninterrupted 24/7 potable water distribution to every plot.",
      icon: <Droplet className="w-7 h-7 text-blue-600" />,
      tag: "Water Security"
    },
    {
      title: "Underground Utilities Network",
      desc: "Concealed electrical lines, high-speed fiber conduits, and storm drainage hidden beneath tree-lined pedestrian footpaths.",
      icon: <Zap className="w-7 h-7 text-amber-600" />,
      tag: "Aesthetic Living"
    },
    {
      title: "Wide 30ft & 40ft Asphalt Roads",
      desc: "High-grade smooth asphalt avenues with dedicated curbs, modern avenue street lighting, and demarcated turning radiuses.",
      icon: <Route className="w-7 h-7 text-emerald-600" />,
      tag: "Seamless Access"
    },
    {
      title: "Centralized HTP & Eco-Harvesting",
      desc: "Modern sewage & wastewater recycling infrastructure with integrated rainwater harvesting preserving Dharwad's pristine hill ecology.",
      icon: <Trees className="w-7 h-7 text-emerald-700" />,
      tag: "Eco Sustainable"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F8F7F3] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Engineering Standards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Robust <span className="green-text-gradient">Infrastructure & Engineering</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Built to strict township specifications with heavy-duty asphalt roads, underground services, and eco-friendly utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl bg-white border border-emerald-100 shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-700">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-forest-950 font-serif group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-charcoal-700 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-emerald-800 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Township Spec Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

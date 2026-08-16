"use client";

import React from "react";
import { INFRASTRUCTURE_HIGHLIGHTS } from "@/lib/projectData";
import { Droplet, Cable, Leaf, Route, Footprints, Compass } from "lucide-react";

export const Infrastructure: React.FC = () => {
  const icons = [
    <Droplet key="1" className="w-6 h-6 text-gold-500" />,
    <Cable key="2" className="w-6 h-6 text-forest-600" />,
    <Leaf key="3" className="w-6 h-6 text-emerald-600" />,
    <Route key="4" className="w-6 h-6 text-gold-500" />,
    <Footprints key="5" className="w-6 h-6 text-forest-600" />,
    <Compass key="6" className="w-6 h-6 text-emerald-600" />,
  ];

  return (
    <section className="py-20 bg-sand-100 text-forest-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-200/70 text-forest-900 text-xs font-semibold uppercase tracking-widest">
            Built for Durability & Comfort
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-forest-950 tracking-tight">
            Infrastructure & Essentials
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Built with strong infrastructure to support everyday needs, sustainability and effortless living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INFRASTRUCTURE_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-sand-200 shadow-xl hover:border-gold-400/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-sand-50 border border-sand-200 group-hover:border-gold-300 transition-colors">
                  {icons[idx]}
                </div>
                <span className="text-xs font-extrabold text-maroon-700 uppercase tracking-wider bg-maroon-50 px-3 py-1 rounded-full border border-maroon-100 font-serif">
                  {item.stat}
                </span>
              </div>

              <h3 className="text-xl font-bold text-forest-950 font-serif mb-2 group-hover:text-forest-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

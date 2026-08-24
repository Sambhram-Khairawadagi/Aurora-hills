"use client";

import React from "react";
import Image from "next/image";
import { Droplet, Zap, Route, Trees, ShieldCheck, Sparkles } from "lucide-react";

export const Infrastructure: React.FC = () => {
  const items = [
    {
      title: "1.5 Lakh Litres Water Reservoir",
      desc: "Elevated storage tank ensuring high-pressure, 24/7 potable water to every plot.",
      icon: <Droplet className="w-6 h-6 text-white" />,
      tag: "Water Security",
      iconClass: "bg-gradient-to-br from-sky-500 to-blue-600 shadow-md shadow-sky-500/30"
    },
    {
      title: "Underground Utilities Network",
      desc: "Concealed electrical lines, fiber conduits, and storm drainage beneath tree-lined footpaths.",
      icon: <Zap className="w-6 h-6 text-white" />,
      tag: "Aesthetic Living",
      iconClass: "bg-gradient-to-br from-amber-500 to-yellow-600 shadow-md shadow-amber-500/30"
    },
    {
      title: "Wide 30ft & 40ft Asphalt Roads",
      desc: "Smooth asphalt avenues with modern street lighting and demarcated turning radiuses.",
      icon: <Route className="w-6 h-6 text-white" />,
      tag: "Seamless Access",
      iconClass: "vibrant-icon-emerald"
    },
    {
      title: "Centralized HTP & Eco-Harvesting",
      desc: "Modern sewage recycling with integrated rainwater harvesting preserving Dharwad's ecology.",
      icon: <Trees className="w-6 h-6 text-white" />,
      tag: "Eco Sustainable",
      iconClass: "bg-gradient-to-br from-emerald-600 to-teal-700 shadow-md shadow-teal-500/30"
    }
  ];

  return (
    <section className="py-24 lg:py-32 vibrant-section-glow text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs sm:text-sm font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Engineering Standards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Robust <span className="vibrant-text-gradient">Infrastructure & Engineering</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Heavy-duty asphalt roads, underground services, and eco-friendly utilities — built to strict township standards.
          </p>
        </div>

        {/* Real Site Photo */}
        <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden bg-white border-2 border-emerald-300/40 p-3 shadow-2xl shadow-emerald-950/10">
          <div className="relative h-[280px] sm:h-[380px] rounded-2xl overflow-hidden">
            <Image
              src="/images/site-office-infra.jpg"
              alt="Aurora Hills On-Site Infrastructure & Development Progress"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-black uppercase tracking-wider bg-emerald-600/90 backdrop-blur-sm px-3 py-1 rounded-full">Actual Site Progress</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl vibrant-card flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl ${item.iconClass}`}>
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider vibrant-badge-emerald px-3 py-1 rounded-full">
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

              <div className="pt-4 mt-4 border-t border-emerald-100/80 flex items-center gap-1.5 text-xs text-emerald-800 font-bold">
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

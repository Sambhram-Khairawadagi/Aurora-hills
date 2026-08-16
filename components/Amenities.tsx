"use client";

import React, { useState } from "react";
import {
  Flower2,
  SunMedium,
  Footprints,
  Bike,
  Dumbbell,
  Trophy,
  Activity,
  Flame,
  CircleDot,
  Landmark,
  Sparkles,
  Smile,
  HeartHandshake,
  Trees,
  Crown,
  Waves,
  Compass,
  Utensils,
  Hotel,
  Coffee,
  Droplet,
  Cable,
  ShieldCheck,
  Leaf,
  Layers,
  ArrowRight
} from "lucide-react";
import { AMENITIES_DATA, AmenityItem } from "@/lib/projectData";

interface AmenitiesProps {
  onOpenEnquiry: (source?: string) => void;
}

export const Amenities: React.FC<AmenitiesProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Wellness",
    "Sports",
    "Family",
    "Community",
    "Leisure",
    "Convenience",
    "Security & Infrastructure",
  ];

  const filteredAmenities =
    activeCategory === "All"
      ? AMENITIES_DATA
      : AMENITIES_DATA.filter((a) => a.category === activeCategory);

  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-gold-400 group-hover:text-forest-950 transition-colors" };
    switch (iconName) {
      case "Flower2": return <Flower2 {...props} />;
      case "SunMedium": return <SunMedium {...props} />;
      case "Footprints": return <Footprints {...props} />;
      case "Bike": return <Bike {...props} />;
      case "Dumbbell": return <Dumbbell {...props} />;
      case "Trophy": return <Trophy {...props} />;
      case "Activity": return <Activity {...props} />;
      case "Flame": return <Flame {...props} />;
      case "CircleDot": return <CircleDot {...props} />;
      case "Landmark": return <Landmark {...props} />;
      case "Sparkles": return <Sparkles {...props} />;
      case "Smile": return <Smile {...props} />;
      case "HeartHandshake": return <HeartHandshake {...props} />;
      case "Trees": return <Trees {...props} />;
      case "Crown": return <Crown {...props} />;
      case "Waves": return <Waves {...props} />;
      case "Compass": return <Compass {...props} />;
      case "Utensils": return <Utensils {...props} />;
      case "Hotel": return <Hotel {...props} />;
      case "Coffee": return <Coffee {...props} />;
      case "Droplet": return <Droplet {...props} />;
      case "Cable": return <Cable {...props} />;
      case "ShieldCheck": return <ShieldCheck {...props} />;
      case "Leaf": return <Leaf {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="amenities" className="py-24 lg:py-32 bg-forest-950 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900 border border-gold-400/40 text-gold-300 text-xs font-bold uppercase tracking-widest shadow-xl">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            20+ World-Class Lifestyle Amenities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight">
            Curated <span className="gold-text-gradient">Lifestyle & Amenities</span>
          </h2>
          <p className="text-sand-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Designed for all generations — integrating health, sports, leisure, wellness, spirituality, and vibrant community living.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-gold-400 via-gold-300 to-amber-400 text-forest-950 shadow-[0_4px_20px_rgba(200,155,60,0.4)] scale-105"
                    : "bg-forest-900/80 text-sand-200 hover:text-white hover:bg-forest-800 border border-forest-800 backdrop-blur-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredAmenities.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-gradient-to-br from-forest-900/70 via-forest-900/50 to-forest-950/80 border border-forest-800/80 hover:border-gold-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-forest-950 border border-forest-800 group-hover:bg-gradient-to-tr group-hover:from-gold-400 group-hover:to-amber-300 group-hover:border-gold-300 flex items-center justify-center transition-all duration-300 shadow-md">
                  {renderIcon(item.iconName)}
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300 bg-gold-950/80 border border-gold-700/60 px-3 py-1 rounded-full shadow-inner">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white font-serif mb-2 group-hover:text-gold-300 transition-colors">
                {item.name}
              </h3>

              <p className="text-xs text-sand-200 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-forest-900 via-forest-850 to-forest-900 border border-gold-400/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-2xl font-bold font-serif text-white">
              Experience the Aurora Hills Lifestyle First-Hand
            </h4>
            <p className="text-sm text-sand-200 max-w-xl">
              Schedule a personalized site tour with our Dharwad plotted community specialists.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry("Amenities Section CTA")}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 text-xs font-black uppercase tracking-wider shadow-xl flex items-center gap-2 flex-shrink-0 transition-transform hover:scale-105 active:scale-95"
          >
            <span>Request Amenities Brochure</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

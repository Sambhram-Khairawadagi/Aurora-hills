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
    const props = { className: "w-5 h-5 text-gold-400 group-hover:text-forest-950 transition-colors" };
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
    <section id="amenities" className="py-20 lg:py-28 bg-forest-950 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            World-Class Lifestyle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Curated <span className="gold-text-gradient">Lifestyle & Amenities</span>
          </h2>
          <p className="text-sand-100 text-sm sm:text-base leading-relaxed">
            Designed for all age groups � blending recreation, fitness, leisure, wellness and community bonding.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-gold-400 text-forest-950 shadow-lg shadow-gold-500/20 font-bold"
                    : "bg-forest-900/80 text-sand-200 hover:text-white hover:bg-forest-800 border border-forest-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredAmenities.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-forest-900/50 border border-forest-800/80 hover:border-gold-400/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-forest-900/90 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-forest-950 border border-forest-800 group-hover:bg-gold-400 group-hover:border-gold-300 flex items-center justify-center transition-colors">
                  {renderIcon(item.iconName)}
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300 bg-gold-950/80 border border-gold-800/60 px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white font-serif mb-2 group-hover:text-gold-300 transition-colors">
                {item.name}
              </h3>

              <p className="text-xs text-sand-200/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-forest-900 via-forest-850 to-forest-900 border border-gold-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold font-serif text-white">
              Experience the Aurora Hills Lifestyle First-Hand
            </h4>
            <p className="text-xs sm:text-sm text-sand-200">
              Schedule a personalized guided walkthrough with our plotted community specialists.
            </p>
          </div>

          <button
            onClick={() => onOpenEnquiry("Amenities Section CTA")}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 flex-shrink-0"
          >
            <span>Request Amenities Brochure</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { 
  Dumbbell, 
  Waves, 
  Trophy, 
  ShieldCheck, 
  Trees, 
  Utensils, 
  Sparkles, 
  Car, 
  ArrowRight,
  Filter,
  CheckCircle2,
  HeartHandshake
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
    "Security & Infrastructure"
  ];

  const filteredAmenities = activeCategory === "All" 
    ? AMENITIES_DATA 
    : AMENITIES_DATA.filter((item) => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Sports":
        return <Dumbbell className="w-5 h-5 text-emerald-700" />;
      case "Wellness":
      case "Leisure":
        return <Trees className="w-5 h-5 text-emerald-700" />;
      case "Community":
      case "Family":
        return <HeartHandshake className="w-5 h-5 text-emerald-700" />;
      case "Security & Infrastructure":
        return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="amenities" className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-glass border border-white/90 text-emerald-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            20+ World-Class Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Curated <span className="green-text-gradient">Lifestyle Amenities</span>
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Immerse yourself in active recreation, serene nature landscapes, and premium wellness facilities designed for all ages.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md scale-105"
                    : "neu-button text-charcoal-700 hover:text-emerald-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Amenities Neomorphic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="p-6 rounded-3xl neu-glass border border-white/90 shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl neu-inset">
                    {getCategoryIcon(amenity.category)}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-300 uppercase">
                    {amenity.badge || amenity.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-forest-950 font-serif group-hover:text-emerald-700 transition-colors">
                    {amenity.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-charcoal-200/40 flex items-center justify-between text-[10px] text-charcoal-500 font-semibold">
                <span>Phase 1 Delivery</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

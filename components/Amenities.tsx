"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Dumbbell, 
  Waves, 
  Trophy, 
  ShieldCheck, 
  Trees, 
  Utensils, 
  Sparkles, 
  ArrowRight,
  Filter,
  CheckCircle2,
  HeartHandshake,
  Sun,
  Coffee,
  Landmark,
  Smile
} from "lucide-react";
import { AMENITIES_DATA, AmenityItem } from "@/lib/projectData";

interface AmenitiesProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
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

  return (
    <section id="amenities" className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title & Intro (Bigger Font) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            20+ World-Class Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Curated <span className="green-text-gradient">Lifestyle Amenities</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Immerse yourself in active recreation, serene landscaped parks, and premium wellness facilities designed for every family member.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg scale-105"
                    : "bg-white hover:bg-emerald-50 text-charcoal-800 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Photo-Rich Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="group rounded-3xl overflow-hidden bg-white border border-emerald-100/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Amenity Visual Image with Overlay Badge */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-emerald-950">
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/90 backdrop-blur-md text-emerald-900 shadow">
                    {amenity.badge || amenity.category}
                  </span>
                </div>

                {/* Bottom Image Title */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg sm:text-xl font-bold font-serif leading-snug group-hover:text-emerald-300 transition-colors">
                    {amenity.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-charcoal-700 leading-relaxed font-normal">
                  {amenity.description}
                </p>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Phase 1 Sanctioned
                  </span>

                  <button
                    onClick={() => onOpenEnquiry("Amenity Card", amenity.name)}
                    className="text-xs font-bold text-forest-950 hover:text-emerald-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

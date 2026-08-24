"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { AMENITIES_DATA } from "@/lib/projectData";

interface AmenitiesProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
}

export const Amenities: React.FC<AmenitiesProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>("Wellness");

  const categories = [
    "Wellness",
    "Sports",
    "Family",
    "Community",
    "Leisure",
    "Security & Infrastructure",
  ];

  const filteredAmenities =
    activeCategory === "All"
      ? AMENITIES_DATA
      : AMENITIES_DATA.filter((item) => item.category === activeCategory);

  return (
    <section
      id="amenities"
      className="py-16 lg:py-24 bg-[#F7F9F6] text-forest-950 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            20+ Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Lifestyle <span className="green-text-gradient">Amenities</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Discover a thoughtfully curated collection of facilities designed to elevate your everyday living.
          </p>
        </div>

        {/* Compact Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide animate-fade-in-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                  : "bg-white hover:bg-emerald-50 text-gray-600 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Minimalist List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 animate-fade-in-up">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              onClick={() => onOpenEnquiry("Amenity List", amenity.name)}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-transparent hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                 <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-forest-950 group-hover:text-emerald-700 transition-colors">
                    {amenity.name}
                  </h3>
                  {amenity.badge && (
                    <span className="text-[9px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                      {amenity.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

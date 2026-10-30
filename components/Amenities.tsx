"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { AMENITIES_DATA } from "@/lib/projectData";

interface AmenitiesProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
}

export const Amenities: React.FC<AmenitiesProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const [expanded, setExpanded] = useState(false);
  const categories = [
    "All",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            20+ Facilities
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 tracking-tight">
            Lifestyle <span className="green-text-gradient">Amenities</span>
          </h2>
          <p className="text-sm sm:text-base font-bold text-forest-900/90 max-w-xl mx-auto leading-relaxed">
            Explore the planned lifestyle offering alongside on-site infrastructure. Confirm individual amenity completion and delivery timelines with our team during your visit.
          </p>
        </div>

        <p className="text-sm text-center text-emerald-900 mb-6">On-site infrastructure: developed roads, paver paths, power feeder pillars and the water reservoir. Ask about the status of each lifestyle amenity.</p>
        {/* Compact Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide animate-fade-in-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setExpanded(false); }} aria-pressed={activeCategory === cat}
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
          {(expanded || activeCategory !== "All" ? filteredAmenities : filteredAmenities.slice(0, 6)).map((amenity) => (
            <div
              key={amenity.id}
              className="group flex flex-col sm:flex-row sm:items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border-2 border-emerald-100/90 hover:border-emerald-500 hover:shadow-lg transition-all duration-300  shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300 shadow-xs mt-0.5">
                 <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-base sm:text-lg font-semibold text-forest-950 font-sans group-hover:text-emerald-700 transition-colors">
                    {amenity.name}
                  </h3>
                  {amenity.badge && (
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {amenity.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-forest-950/80 leading-relaxed mt-1 font-sans">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {activeCategory === "All" && <button className="secondary-button mt-6" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? "Show key amenities" : "Explore all amenities"}</button>}
      </div>
    </section>
  );
};

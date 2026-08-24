"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AMENITIES_DATA, AmenityItem } from "@/lib/projectData";

interface AmenitiesProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
}

export const Amenities: React.FC<AmenitiesProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="amenities"
      className="py-16 lg:py-20 bg-[#F7F9F6] text-forest-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              20+ Facilities
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif text-forest-950 tracking-tight">
              Lifestyle{" "}
              <span className="green-text-gradient">Amenities</span>
            </h2>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Compact Filter Tabs */}
        <div className="flex items-center gap-1.5 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white hover:bg-emerald-50 text-gray-600 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start group bg-white rounded-2xl p-2 border border-emerald-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Compact Image Card */}
              <div className="relative h-44 rounded-2xl overflow-hidden bg-emerald-950 shadow-md">
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category Badge */}
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-emerald-900">
                  {amenity.badge || amenity.category}
                </span>

                {/* Title on Image */}
                <div className="absolute bottom-2.5 left-3 right-3">
                  <h3 className="text-sm font-bold text-white leading-tight drop-shadow-md">
                    {amenity.name}
                  </h3>
                </div>
              </div>

              {/* Compact Info Below */}
              <div className="mt-2.5 px-1">
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                  {amenity.description}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Phase 1 Sanctioned
                  </span>
                  <button
                    onClick={() =>
                      onOpenEnquiry("Amenity Card", amenity.name)
                    }
                    className="text-[10px] font-bold text-gray-500 hover:text-emerald-700 flex items-center gap-0.5 transition-colors"
                  >
                    Enquire
                    <ArrowRight className="w-2.5 h-2.5" />
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

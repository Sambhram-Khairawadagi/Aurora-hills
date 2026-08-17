"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Maximize2, X, Sparkles, MapPin } from "lucide-react";

interface GalleryProps {
  onOpenVideo: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenVideo }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      title: "Panoramic Sunset Viewpoint & Green Hills",
      category: "Actual Site View",
      src: "/images/hero-layout-sunset.png",
      desc: "Scenic elevated hill vantage point overlooking lush greenery in Dharwad City.",
    },
    {
      title: "Family Dream Villa & Garden Living",
      category: "Lifestyle",
      src: "/images/family-happy-home.jpg",
      desc: "Build your customized luxury villa with private lawns in a secure community.",
    },
    {
      title: "Official Sanctioned Layout Map",
      category: "Sanctioned Plan",
      src: "/images/sanctioned-layout-map.jpg",
      desc: "Demarcated residential plots, 30ft/40ft wide roads, parks, and civic amenities.",
    },
    {
      title: "On-Ground Asphalt Roads & Infrastructure",
      category: "Site Progress",
      src: "/images/site-actual-1.jpg",
      desc: "Actual on-site tarred arterial roads and demarcated plot boundary work.",
    },
    {
      title: "Hillside Road Network & Surrounding Greenery",
      category: "Site Progress",
      src: "/images/site-actual-2.jpg",
      desc: "Wide planned roads with serene panoramic hills backdrop.",
    },
    {
      title: "Modern Villa Architecture & Gardens",
      category: "Villa Concept",
      src: "/images/lifestyle-upgrade.jpg",
      desc: "A lifestyle upgrade combining fresh air, natural tranquility, and modern comfort.",
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Actual Photographic Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Real Site Photos & <span className="green-text-gradient">Project Imagery</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Explore authentic on-ground site photographs, layout blueprints, and scenic hill vistas of The Aurora Hills in Dharwad City.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-3xl overflow-hidden bg-white border-2 border-emerald-100 shadow-xl cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-sand-200">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-950 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full shadow-md">
                    {item.category}
                  </span>
                </div>

                {/* Enlarge Button */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 shadow-lg">
                  <Maximize2 className="w-5 h-5" />
                </div>

                {/* Bottom Title & Description */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold font-serif leading-tight group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] sm:h-[75vh]">
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white space-y-1">
              <h4 className="text-xl font-bold font-serif">
                {galleryItems[lightboxIndex].title}
              </h4>
              <p className="text-sm text-white/80">
                {galleryItems[lightboxIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

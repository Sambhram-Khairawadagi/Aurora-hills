"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Maximize2, X, Sparkles } from "lucide-react";

interface GalleryProps {
  onOpenVideo: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenVideo }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      title: "Panoramic Aerial Perspective",
      category: "Aerial View",
      src: "/images/hero-aerial.jpg",
      desc: "Lush green countryside of Dharwad City.",
    },
    {
      title: "2D Master Layout Plan",
      category: "Master Plan",
      src: "/images/master-plan-2d.jpg",
      desc: "Demarcated residential plots, 30ft/40ft wide roads, and community parks.",
    },
    {
      title: "3D Perspective Visualization",
      category: "Perspective",
      src: "/images/master-plan-3d.jpg",
      desc: "Architectural elevation preview of the integrated plotted community in Dharwad City.",
    },
    {
      title: "Regional Connectivity Map",
      category: "Location",
      src: "/images/satellite-map.jpg",
      desc: "High-resolution map showing instant connectivity to NH-4 Highway.",
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-glass border border-white/90 text-emerald-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Visual Project Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Media & <span className="green-text-gradient">Site Imagery</span>
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Explore actual photographic aerial perspectives, master plans, and architectural elevation blueprints of The Aurora Hills, Dharwad City.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-3xl overflow-hidden neu-card border border-white/90 p-3 shadow-xl cursor-pointer"
            >
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-sand-200">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md">
                    {item.category}
                  </span>
                </div>

                {/* Enlarge Button */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Title & Description */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold font-serif leading-tight group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 mt-1 line-clamp-1">
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
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
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
            <div className="mt-4 text-center text-white">
              <h4 className="text-lg font-bold font-serif">
                {galleryItems[lightboxIndex].title}
              </h4>
              <p className="text-xs text-white/70 mt-0.5">
                {galleryItems[lightboxIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

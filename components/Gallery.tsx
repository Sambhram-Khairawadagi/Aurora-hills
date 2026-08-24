"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Maximize2, X, Sparkles } from "lucide-react";

interface GalleryProps {
  onOpenVideo: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenVideo }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galleryItems = [
    {
      title: "Sunset Panorama & Project Branding",
      category: "Actual Site View",
      src: "/images/sunset-panorama-boards.jpg",
      desc: "Golden sunset over the hills with Aurora Hills project boards at the entrance.",
    },
    {
      title: "Welcome Gateway at Sunset",
      category: "Site Entrance",
      src: "/images/welcome-gate-sunset.jpg",
      desc: "The branded welcome arch with paved roads and NA-KJP/HDUDA approval banners.",
    },
    {
      title: "Official Approved Layout Map",
      category: "Approved Plan",
      src: "/images/sanctioned-layout-map.png",
      desc: "Demarcated residential plots with 30ft/40ft wide roads and parks.",
    },
    {
      title: "Internal Avenue & Visitor Access",
      category: "Site Progress",
      src: "/images/internal-avenue-visitors.jpg",
      desc: "Wide asphalt avenue with street lights, branding boards, and visitor transport.",
    },
    {
      title: "Exit Gate & Green Hills Backdrop",
      category: "Site Progress",
      src: "/images/exit-gate-hills.jpg",
      desc: "The 'Thank You' exit arch with panoramic Dharwad hills in the background.",
    },
    {
      title: "Site Office & Infrastructure Progress",
      category: "Construction",
      src: "/images/site-office-infra.jpg",
      desc: "On-site office with water infrastructure and street lighting in progress.",
    },
  ];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  const lightboxModal = lightboxIndex !== null && mounted ? (
    createPortal(
      <div 
        onClick={() => setLightboxIndex(null)}
        className="fixed inset-0 z-[999999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      >
        {/* Top Floating Close Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxIndex(null);
          }}
          className="fixed top-6 right-6 z-[1000000] px-4 py-2 rounded-full bg-white text-forest-950 hover:bg-emerald-600 hover:text-white font-bold text-xs sm:text-sm shadow-2xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-gray-200"
          aria-label="Close Lightbox Modal"
        >
          <X className="w-5 h-5" />
          <span>Close Window (ESC)</span>
        </button>

        {/* Modal Content Box */}
        <div 
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center cursor-default"
        >
          <div className="relative w-full h-[55vh] sm:h-[70vh] rounded-2xl overflow-hidden bg-black/50 shadow-2xl">
            <Image
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].title}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Caption & Dismiss Tip */}
          <div className="mt-4 text-center text-white space-y-1.5 max-w-xl px-4">
            <h4 className="text-lg sm:text-xl font-bold font-serif">
              {galleryItems[lightboxIndex].title}
            </h4>
            <p className="text-xs sm:text-sm text-white/80">
              {galleryItems[lightboxIndex].desc}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white border border-white/20 transition-colors"
              >
                ✕ Click here or press ESC to close
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  ) : null;

  return (
    <section id="gallery" className="py-24 lg:py-32 vibrant-section-glow text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs sm:text-sm font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Actual Photographic Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Real Site Photos & <span className="vibrant-text-gradient">Project Imagery</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Authentic on-ground site photographs and layout blueprints of The Aurora Hills.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-3xl overflow-hidden bg-white border-2 border-emerald-300/40 p-2 shadow-xl shadow-emerald-950/8 cursor-pointer hover:shadow-2xl hover:border-emerald-500 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-sand-200">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Enlarge Button */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-emerald-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 shadow-lg border border-emerald-400">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portal Lightbox */}
      {lightboxModal}
    </section>
  );
};

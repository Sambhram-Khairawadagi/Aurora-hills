"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, X, ChevronLeft, ChevronRight, Sparkles, Maximize2 } from "lucide-react";

interface GalleryProps {
  onOpenVideo: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenVideo }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      src: "/images/hero-aerial.jpg",
      title: "Panoramic Aerial View of Plotted Development",
      category: "Site & Landscape",
    },
    {
      src: "/images/master-plan-2d.jpg",
      title: "2D Master Plan Layout (Mansur & Sanna Somapura)",
      category: "Master Plan",
    },
    {
      src: "/images/master-plan-3d.jpg",
      title: "3D Perspective Layout with Wide Roads & Parks",
      category: "Master Plan",
    },
    {
      src: "/images/satellite-map.jpg",
      title: "Satellite Visual near NH-4 Highway",
      category: "Location",
    },
    {
      src: "/brochure/page-1.jpg",
      title: "Aurora Hills Cover & Official Approvals",
      category: "Brochure",
    },
    {
      src: "/brochure/page-2.jpg",
      title: "Project Amenities & Clubhouse Specifications",
      category: "Amenities",
    },
  ];

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-forest-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-950 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            Visual Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Experience <span className="gold-text-gradient">Aurora Hills</span>
          </h2>
          <p className="text-sand-100 text-sm sm:text-base leading-relaxed">
            Explore high-resolution aerial perspectives, curated master plans, and site layouts.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer border border-forest-800 hover:border-gold-400/50 shadow-xl bg-forest-950"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-forest-900/90 text-gold-300 px-3 py-1 rounded-full border border-forest-700">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gold-400/80 text-forest-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold font-serif text-white group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-sand-200 mt-1 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-gold-400" /> Click to view high-res
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-forest-900/80 text-white hover:text-gold-400 transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-forest-900/80 text-white hover:text-gold-400 transition-colors z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-forest-900/80 text-white hover:text-gold-400 transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-5xl max-h-[85vh] relative w-full h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-full max-h-[75vh]">
                <Image
                  src={galleryItems[lightboxIndex].src}
                  alt={galleryItems[lightboxIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block">
                  {galleryItems[lightboxIndex].category}
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-white mt-1">
                  {galleryItems[lightboxIndex].title}
                </h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

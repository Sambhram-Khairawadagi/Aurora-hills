"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Maximize2, X, Sparkles, Compass } from "lucide-react";

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
      desc: "Lush green countryside of Mansur & Sanna Somapura, Dharwad.",
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
      desc: "Architectural elevation preview of the integrated plotted community.",
    },
    {
      title: "Regional Connectivity Map",
      category: "Location",
      src: "/images/satellite-map.jpg",
      desc: "High-resolution satellite view mapping proximity to NH-4 Highway.",
    },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-forest-950 text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Visual Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight">
            Media & <span className="gold-text-gradient">Visual Gallery</span>
          </h2>
          <p className="text-sand-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Explore high-resolution aerial perspectives, architectural master plan drawings, and landscape surroundings.
          </p>
        </div>

        {/* Minimalist Frosted Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-gold-400/50 bg-white/[0.02] backdrop-blur-xl shadow-2xl cursor-pointer aspect-square transition-all duration-500 hover:-translate-y-2"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Card Meta Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-gold-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white font-serif group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Zoom Hover Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-forest-950/80 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-gold-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
              <span className="text-xs font-bold text-gold-300 uppercase tracking-widest">
                {galleryItems[lightboxIndex].category}
              </span>
              <h3 className="text-xl font-bold font-serif">
                {galleryItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-sand-200 mt-1">
                {galleryItems[lightboxIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

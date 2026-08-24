"use client";

import React, { useRef, useState } from "react";
import { Play, CheckCircle2, Video } from "lucide-react";

interface DevelopmentVideoProps {
  onOpenEnquiry: (source?: string) => void;
}

export const DevelopmentVideo: React.FC<DevelopmentVideoProps> = ({ onOpenEnquiry }) => {
  const videos = [
    { id: 0, src: "/videos/drone-1.mp4", title: "Site Tour Overview", type: "Full HD 1080p", poster: "/images/hero-layout-sunset.png" },
    { id: 1, src: "/videos/drone-2.mp4", title: "Aerial Flyover 1", type: "4K Drone Video", poster: "/images/sunset-panorama-boards.jpg" },
    { id: 2, src: "/videos/drone-3.mp4", title: "Aerial Flyover 2", type: "4K Drone Video", poster: "/images/entrance-gate-branding.jpg" },
    { id: 3, src: "/videos/drone-4.mp4", title: "Site Progress Tour", type: "4K Drone Video", poster: "/images/internal-avenue-visitors.jpg" },
    { id: 4, src: "/videos/drone-5.mp4", title: "Hillside Panorama", type: "4K Drone Video", poster: "/images/exit-gate-hills.jpg" },
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <section id="development" className="py-24 lg:py-32 vibrant-section-glow text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs sm:text-sm font-black uppercase tracking-widest">
            <Video className="w-4 h-4 text-emerald-600" />
            Official Site Walkthrough & Drone Tours
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Watch <span className="vibrant-text-gradient">The Aurora Hills Drone Tours</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Explore the real on-ground development — asphalt roads, hill contours, and scenic sunset vantage point across multiple aerial videos.
          </p>
        </div>

        {/* Video Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="rounded-3xl overflow-hidden bg-white border-2 border-emerald-300/40 p-3 shadow-2xl shadow-emerald-950/10 relative flex flex-col">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl group flex-grow">
                <video
                  ref={(el) => {
                    videoRefs.current[video.id] = el;
                  }}
                  src={video.src}
                  poster={video.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Under Video Quick CTAs */}
        <div className="max-w-4xl mx-auto mt-8 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/50 to-emerald-50 border border-emerald-200/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-950">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>Real-time on-ground footage of roads, plot demarcations, and scenic greenery.</span>
          </div>

          <button
            onClick={() => onOpenEnquiry("Video Section CTA")}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            Book Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};

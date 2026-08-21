"use client";

import React, { useRef, useState } from "react";
import { Play, CheckCircle2, Video } from "lucide-react";

interface DevelopmentVideoProps {
  onOpenEnquiry: (source?: string) => void;
}

export const DevelopmentVideo: React.FC<DevelopmentVideoProps> = ({ onOpenEnquiry }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="development" className="py-24 lg:py-32 vibrant-section-glow text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs sm:text-sm font-black uppercase tracking-widest">
            <Video className="w-4 h-4 text-emerald-600" />
            Official Site Walkthrough & Drone Tour
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Watch <span className="vibrant-text-gradient">The Aurora Hills Drone & Site Tour</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Explore the real on-ground development, asphalt tarred roads, hill contours, and scenic sunset vantage point in Dharwad City.
          </p>
        </div>

        {/* Video Player Frame */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white border-2 border-emerald-300/40 p-3 sm:p-5 shadow-2xl shadow-emerald-950/10 relative">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl group">
            <video
              ref={videoRef}
              src="/aurora-hills.mp4"
              poster="/images/hero-layout-sunset.png"
              controls
              playsInline
              preload="none"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            />

            {/* Custom Play Overlay (shown before video starts) */}
            {!isPlaying && (
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 flex flex-col items-center justify-center cursor-pointer transition-opacity"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 fill-current ml-1" />
                </div>
                <span className="mt-4 px-5 py-2 rounded-full bg-black/70 text-white text-xs sm:text-sm font-black uppercase tracking-wider backdrop-blur-md border border-emerald-300/30 shadow-lg">
                  Click to Play Drone Video
                </span>
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-bold">The Aurora Hills • On-Ground Drone Tour</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-300 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-emerald-400/20">
                    Full HD 1080p
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Under Video Quick CTAs */}
          <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/50 to-emerald-50 border border-emerald-200/80 flex flex-wrap items-center justify-between gap-4">
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
      </div>
    </section>
  );
};

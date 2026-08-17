"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, ExternalLink, MapPin, CheckCircle2, Video, Youtube } from "lucide-react";

interface DevelopmentVideoProps {
  onOpenEnquiry: (source?: string) => void;
  youtubeId?: string;
}

export const DevelopmentVideo: React.FC<DevelopmentVideoProps> = ({ 
  onOpenEnquiry,
  youtubeId = "lTfIzK3zkpc"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideoType, setActiveVideoType] = useState<"youtube" | "site_drone">("youtube");

  // YouTube Video Link: You can customize or update the YouTube Video ID / Link
  const youtubeEmbedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  const directYoutubeLink = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <section id="development" className="py-24 lg:py-32 bg-gradient-to-b from-[#EEF4EA] via-[#F7F9F6] to-[#EEF3EB] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <Youtube className="w-4 h-4 text-red-600" />
            Official Site Walkthrough & Video Tour
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Watch <span className="green-text-gradient">The Aurora Hills Drone & Site Tour</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Explore the real on-ground development, asphalt tarred roads, hill contours, and scenic sunset vantage point in Dharwad City.
          </p>

          {/* Video Type Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-emerald-200 shadow-sm mt-2">
            <button
              onClick={() => { setActiveVideoType("youtube"); setIsPlaying(false); }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeVideoType === "youtube"
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md"
                  : "text-charcoal-700 hover:text-emerald-700"
              }`}
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <span>YouTube Video Walkthrough</span>
            </button>
            <button
              onClick={() => { setActiveVideoType("site_drone"); setIsPlaying(false); }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeVideoType === "site_drone"
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md"
                  : "text-charcoal-700 hover:text-emerald-700"
              }`}
            >
              <Video className="w-4 h-4 text-emerald-600" />
              <span>High-Res Site Drone Video</span>
            </button>
          </div>
        </div>

        {/* Video Player Frame */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white border-2 border-emerald-200 p-3 sm:p-5 shadow-2xl relative">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
            {activeVideoType === "youtube" ? (
              isPlaying ? (
                <iframe
                  src={youtubeEmbedUrl}
                  title="The Aurora Hills Dharwad Official YouTube Tour"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src="/images/hero-layout-sunset.png"
                    alt="The Aurora Hills Dharwad Video Tour Thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center group"
                    aria-label="Play YouTube Video"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 fill-current ml-1" />
                    </div>
                    <span className="mt-4 px-4 py-2 rounded-full bg-black/60 text-white text-xs sm:text-sm font-black uppercase tracking-wider backdrop-blur-md border border-white/20">
                      Click to Play YouTube Video
                    </span>
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Youtube className="w-5 h-5 text-red-500" />
                      <span className="text-sm font-bold">The Aurora Hills • Dharwad City Layout Walkthrough</span>
                    </div>
                    <a
                      href={directYoutubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-1 text-xs font-bold text-emerald-300 hover:text-white bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )
            ) : (
              <video
                src="/aurora-hills.mp4"
                poster="/images/hero-aerial.jpg"
                controls
                autoPlay={isPlaying}
                playsInline
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Under Video Quick CTAs */}
          <div className="mt-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-950">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>Real time on-ground footage of roads, plot demarcations, and scenic greenery.</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={directYoutubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-xs sm:text-sm font-bold text-charcoal-800 hover:text-red-600 flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Youtube className="w-4 h-4 text-red-600" />
                <span>Open YouTube</span>
              </a>

              <button
                onClick={() => onOpenEnquiry("Video Section CTA")}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
              >
                Book Site Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle2 } from "lucide-react";

interface DevelopmentVideoProps {
  onOpenEnquiry: (source?: string) => void;
}

export const DevelopmentVideo: React.FC<DevelopmentVideoProps> = ({ onOpenEnquiry }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="development" className="py-20 lg:py-28 bg-forest-900 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-950 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            Actual Site Aerial Footage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            See the Development <span className="gold-text-gradient">For Yourself</span>
          </h2>
          <p className="text-sand-100 text-sm sm:text-base leading-relaxed">
            From planned roads to landscaped spaces, experience Aurora Hills from above.
          </p>
        </div>

        {/* 16:9 Video Showcase Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/30 shadow-2xl bg-forest-950 aspect-video group">
            {!isPlaying ? (
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero-aerial.jpg"
                  alt="Aurora Hills Actual Site Drone Flythrough"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-forest-950/20" />

                {/* Big Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-gold-500 to-gold-300 text-forest-950 flex items-center justify-center shadow-2xl transform transition-transform duration-300 hover:scale-110 active:scale-95 group-hover:shadow-gold-400/50"
                    aria-label="Play Project Drone Flythrough Video"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                  </button>

                  <div className="mt-6 space-y-1">
                    <span className="text-lg sm:text-xl font-bold font-serif text-white">
                      Watch Promotional & Aerial Video
                    </span>
                    <p className="text-xs sm:text-sm text-sand-200 max-w-md">
                      HD Drone Aerial View of Mansur & Sanna Somapura Township
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-xs bg-forest-900/90 text-gold-300 px-3 py-1 rounded-full border border-forest-700">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                      Starting from ₹35.99 Lakhs
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full bg-black">
                {/* HTML5 Video Showcase with poster fallback and controls */}
                <video
                  src="/assets/aurora-flythrough.mp4"
                  poster="/images/hero-aerial.jpg"
                  autoPlay
                  controls
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/aurora-flythrough.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay mute and close button */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 text-white hover:text-gold-400 backdrop-blur-md"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="px-3 py-1.5 rounded-full bg-black/60 text-xs font-semibold text-white hover:text-gold-400 backdrop-blur-md"
                  >
                    Close Player
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Development Highlights under video */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-forest-950/70 border border-forest-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Centralized Layout</span>
                <span className="text-sand-200">Organized road grid and marked plots</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950/70 border border-forest-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Lush Greenery</span>
                <span className="text-sand-200">Hillside breeze and serene environs</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-forest-950/70 border border-forest-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Ready For Site Visits</span>
                <span className="text-sand-200">Daily transport assistance available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

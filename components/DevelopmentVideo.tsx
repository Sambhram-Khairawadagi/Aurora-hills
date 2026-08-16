"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles, CheckCircle2, ShieldCheck, MapPin, Compass } from "lucide-react";

interface DevelopmentVideoProps {
  onOpenEnquiry: (source?: string) => void;
}

export const DevelopmentVideo: React.FC<DevelopmentVideoProps> = ({ onOpenEnquiry }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="development" className="py-24 lg:py-32 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 text-white relative overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/90 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-widest shadow-lg shadow-gold-500/10">
            <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            Actual Site & Township Video
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight leading-tight">
            See The Development <span className="gold-text-gradient">For Yourself</span>
          </h2>
          <p className="text-sand-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Experience the panoramic landscape, wide internal avenues, lush green surroundings, and prime Dharwad connectivity in action.
          </p>
        </div>

        {/* 16:9 Cinematic Video Theater */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.7)] bg-black aspect-video group">
            {/* HTML5 Native Video Tag */}
            <video
              ref={videoRef}
              src="/aurora-hills.mp4"
              poster="/images/hero-aerial.jpg"
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover cursor-pointer"
              onClick={handleTogglePlay}
            />

            {/* Poster / Play Overlay when video is not yet started */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/40 to-transparent flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all duration-300 group-hover:bg-forest-950/60"
                onClick={handleTogglePlay}
              >
                {/* Glowing Circular Play Button */}
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gold-400/30 blur-lg animate-pulse" />
                  <button
                    onClick={handleTogglePlay}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-gold-500 via-gold-400 to-amber-300 text-forest-950 flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 active:scale-95 group-hover:shadow-gold-500/50"
                    aria-label="Play Drone Video"
                  >
                    <Play className="w-9 h-9 sm:w-11 sm:h-11 fill-current ml-1" />
                  </button>
                </div>

                <div className="mt-8 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-wide">
                    The Aurora Hills Official Video
                  </h3>
                  <p className="text-xs sm:text-sm text-gold-200/90 max-w-md mx-auto">
                    Mansur & Sanna Somapura, Dharwad • Starting from ₹35.99 Lakhs
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs bg-forest-900/90 text-emerald-300 px-3.5 py-1.5 rounded-full border border-emerald-500/30 backdrop-blur-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    NA-KJP & HDUDA Approved
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-forest-900/90 text-gold-300 px-3.5 py-1.5 rounded-full border border-gold-500/30 backdrop-blur-md">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    Near NH-4 Highway
                  </span>
                </div>
              </div>
            )}

            {/* Custom Interactive HUD Controls (Visible when playing or on hover) */}
            <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between transition-opacity duration-300 z-20 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-0"}`}>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="p-3 rounded-full bg-gold-500 text-forest-950 hover:bg-gold-400 transition-colors shadow-lg"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>

                <button
                  onClick={handleToggleMute}
                  className="p-3 rounded-full bg-forest-900/80 text-white hover:text-gold-400 border border-forest-700 transition-colors backdrop-blur-md"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <span className="text-xs font-semibold text-sand-200 hidden sm:inline-block ml-2">
                  The Aurora Hills • Live Site Visual
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry("Video Showcase Player")}
                  className="px-4 py-2 rounded-full bg-forest-900/90 hover:bg-gold-500 hover:text-forest-950 text-gold-300 border border-gold-500/40 text-xs font-bold transition-all"
                >
                  Enquire for Plot
                </button>

                <button
                  onClick={handleFullscreen}
                  className="p-3 rounded-full bg-forest-900/80 text-white hover:text-gold-400 border border-forest-700 transition-colors backdrop-blur-md"
                  title="Fullscreen"
                >
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Development Highlights under video */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-forest-900/80 to-forest-950 border border-forest-800 hover:border-gold-500/30 transition-all flex items-center gap-3.5 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0 text-gold-400">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white text-sm block">Centralized Layout</span>
                <span className="text-sand-200">Organized 30ft/40ft road grid & demarcated plots</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-forest-900/80 to-forest-950 border border-forest-800 hover:border-gold-500/30 transition-all flex items-center gap-3.5 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white text-sm block">1.5 Lakh L Overhead Tank</span>
                <span className="text-sand-200">Dedicated round-the-clock water supply infra</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-forest-900/80 to-forest-950 border border-forest-800 hover:border-gold-500/30 transition-all flex items-center gap-3.5 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white text-sm block">Ready For Site Visits</span>
                <span className="text-sand-200">Complimentary pickup from Dharwad / CBT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

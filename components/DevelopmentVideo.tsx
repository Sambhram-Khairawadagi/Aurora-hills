"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

interface DevelopmentVideoProps {
  onOpenEnquiry: (source?: string) => void;
}

export const DevelopmentVideo: React.FC<DevelopmentVideoProps> = ({ onOpenEnquiry }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  const toggleMute = () => {
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
    <section id="development" className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-glass border border-white/90 text-emerald-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Actual Site Cinema
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Experience <span className="green-text-gradient">The Aurora Hills Drone Tour</span>
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Take a cinematic aerial flight over the development, inspect paved avenues, hill terrain, and actual project boundaries.
          </p>
        </div>

        {/* Cinematic Video Player Frame */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden neu-card border border-white/90 p-3 sm:p-4 shadow-2xl relative">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
            <video
              ref={videoRef}
              src="/aurora-hills.mp4"
              poster="/images/hero-aerial.jpg"
              preload="metadata"
              playsInline
              muted={isMuted}
              loop
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            />

            {/* Ambient Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Center Big Play Button Overlay (when paused) */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-all group"
                aria-label="Play Site Tour Video"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </button>
            )}

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between gap-4 text-white z-10">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <div className="hidden sm:block text-xs font-semibold">
                  <span>The Aurora Hills • Dharwad Drone Tour</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleFullscreen}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenEnquiry("Video Section CTA")}
                  className="hidden sm:flex px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
                >
                  Reserve a Plot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

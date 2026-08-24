"use client";

import React, { useRef, useState } from "react";
import { Play, Video } from "lucide-react";

export const MainShowcaseVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 lg:py-28 relative bg-[#F7F9F6] text-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs sm:text-sm font-black uppercase tracking-widest">
            <Video className="w-4 h-4 text-emerald-600" />
            Featured Project Overview
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            The Aurora Hills <span className="vibrant-text-gradient">Showcase</span>
          </h2>
        </div>

        {/* Large Main Video Player */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-white border-4 border-white shadow-2xl neu-glass group aspect-video">
            <video
              ref={videoRef}
              src="/videos/aurora-hills-main.mp4"
              poster="/images/welcome-gate-sunset.jpg"
              playsInline
              controls
              preload="metadata"
              className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-80'}`}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
            
            {/* Custom Play Button Overlay (Pointer events none so it doesn't block controls) */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 pointer-events-none"
              >
                <div 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-transform duration-300 pointer-events-auto cursor-pointer hover:scale-110"
                  onClick={togglePlay}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-xl">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 ml-1.5" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

"use client";

import React, { useRef, useState } from "react";
import { Play, CheckCircle2, Video, Plane, Film, Car } from "lucide-react";

interface VideoShowcaseProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenSiteVisit?: () => void;
}

const DRONE_VIDEOS = [
  { id: 0, src: "/videos/drone-1.mp4", title: "Site Tour Overview", type: "Full HD 1080p", poster: "/images/posters/drone-1-poster.jpg", tag: "Main Boulevard" },
  { id: 1, src: "/videos/drone-2-compressed.mp4", title: "Aerial Flyover Contours", type: "4K Drone Video", poster: "/images/posters/drone-2-poster.jpg", tag: "Hill Elevation" },
  { id: 2, src: "/videos/drone-3.mp4", title: "Panoramic Vantage Point", type: "4K Drone Video", poster: "/images/posters/drone-3-poster.jpg", tag: "Sunset View" },
  { id: 3, src: "/videos/drone-4-compressed.mp4", title: "Asphalt Road Infrastructure", type: "4K Drone Video", poster: "/images/posters/drone-4-poster.jpg", tag: "Completed Roads" },
];

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  onOpenEnquiry,
  onOpenSiteVisit,
}) => {
  const [activeTab, setActiveTab] = useState<"cinematic" | "drone">("cinematic");
  const [isMainPlaying, setIsMainPlaying] = useState(false);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  const toggleMainPlay = () => {
    if (mainVideoRef.current) {
      if (isMainPlaying) {
        mainVideoRef.current.pause();
      } else {
        mainVideoRef.current.play();
      }
      setIsMainPlaying(!isMainPlaying);
    }
  };

  return (
    <section id="videos" className="py-20 lg:py-28 relative bg-[#F8FAF7] text-forest-950 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <Video className="w-3.5 h-3.5 text-emerald-700" />
            Official Site Walkthrough &amp; Drone Footage
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 tracking-tight">
            Experience The Aurora Hills in Motion
          </h2>
          <p className="text-sm sm:text-base font-semibold text-forest-900/85 leading-relaxed max-w-2xl mx-auto">
            Witness real on-ground development — freshly blacktopped 40ft avenues, natural hill contours, and breathtaking panoramic sunset views.
          </p>

          {/* Interactive Mode Switcher */}
          <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-white border border-emerald-200/90 shadow-xs mt-3">
            <button
              onClick={() => setActiveTab("cinematic")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "cinematic"
                  ? "bg-emerald-700 text-white shadow-md shadow-emerald-800/20"
                  : "text-forest-950 hover:text-emerald-700"
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Project Cinematic Tour</span>
            </button>
            <button
              onClick={() => setActiveTab("drone")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === "drone"
                  ? "bg-emerald-700 text-white shadow-md shadow-emerald-800/20"
                  : "text-forest-950 hover:text-emerald-700"
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>4K Aerial Drone Tours</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Cinematic Walkthrough Theater Player */}
        {activeTab === "cinematic" && (
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden bg-black border-4 border-white shadow-2xl aspect-video group">
              <video
                ref={mainVideoRef}
                src="/videos/aurora-hills-main.mp4"
                poster="/images/welcome-gate-sunset.jpg"
                playsInline
                controls
                preload="metadata"
                className={`w-full h-full object-cover transition-opacity duration-300 ${isMainPlaying ? "opacity-100" : "opacity-85"}`}
                onPlay={() => setIsMainPlaying(true)}
                onPause={() => setIsMainPlaying(false)}
                onEnded={() => setIsMainPlaying(false)}
              />
              
              {!isMainPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs transition-all pointer-events-none"
                >
                  <button 
                    type="button"
                    onClick={toggleMainPlay}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-2xl transition-transform hover:scale-110 pointer-events-auto cursor-pointer"
                    aria-label="Play Video"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center shadow-lg transition-colors">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-1 fill-white" />
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: 4K Drone Aerial Grid */}
        {activeTab === "drone" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto animate-fade-in">
            {DRONE_VIDEOS.map((video) => (
              <div 
                key={video.id} 
                className="rounded-3xl overflow-hidden bg-white border-2 border-emerald-100 p-3 shadow-md hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner flex-grow">
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                    {video.tag}
                  </span>
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="font-bold text-sm text-forest-950">{video.title}</span>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {video.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Under Video Quick Action Strip */}
        <div className="max-w-4xl mx-auto mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-forest-950">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>Visiting from Hubli or Dharwad? Free doorstep cab pickup &amp; drop arranged.</span>
          </div>

          <button
            onClick={() => (onOpenSiteVisit ? onOpenSiteVisit() : onOpenEnquiry("Video Section CTA"))}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all flex items-center justify-center gap-2 flex-shrink-0"
          >
            <Car className="w-4 h-4 text-emerald-200" />
            <span>Book Free Site Visit Cab</span>
          </button>
        </div>

      </div>
    </section>
  );
};

"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Play, Pause, Volume2, VolumeX, Sparkles, MapPin, ShieldCheck, Download, Maximize } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-forest-950 border border-gold-500/40 rounded-3xl overflow-hidden max-w-4xl w-full text-white shadow-[0_25px_70px_rgba(0,0,0,0.9)] relative">
        {/* Header bar */}
        <div className="px-5 py-4 bg-forest-900/90 border-b border-forest-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold font-serif text-white tracking-wide">
              The Aurora Hills • Official Aerial & Project Video
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-forest-800 hover:bg-forest-700 text-white transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center group">
          <video
            ref={videoRef}
            src="/aurora-hills.mp4"
            poster="/images/hero-aerial.jpg"
            autoPlay
            controls
            playsInline
            muted={muted}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          >
            <source src="/aurora-hills.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Footer Banner */}
        <div className="p-4 sm:p-5 bg-forest-950 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-forest-800/80">
          <div className="flex items-center gap-2 text-sand-200">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Mansur & Sanna Somapura, Dharwad • Starting from <strong className="text-gold-300">₹35.99 Lakhs</strong></span>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href="/brochure/the-aurora-hills-brochure.pdf"
              download
              className="px-4 py-2 rounded-xl bg-forest-900 border border-forest-700 text-sand-200 hover:text-white font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download Brochure
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-forest-950 font-bold hover:brightness-110 shadow-lg transition-all"
            >
              Enquire For Plot
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import { X, Play, Volume2, VolumeX, Sparkles } from "lucide-react";
import Image from "next/image";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [muted, setMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-forest-950 border border-gold-400/40 rounded-3xl overflow-hidden max-w-4xl w-full text-white shadow-2xl relative">
        {/* Header bar */}
        <div className="p-4 bg-forest-900/90 border-b border-forest-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold font-serif text-gold-300">
              The Aurora Hills � Promotional & Drone Footage
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-forest-800 hover:bg-forest-700 text-white"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            src="/assets/aurora-flythrough.mp4"
            poster="/images/hero-aerial.jpg"
            autoPlay
            controls
            playsInline
            muted={muted}
            className="w-full h-full object-cover"
          >
            <source src="/assets/aurora-flythrough.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Footer Banner */}
        <div className="p-4 bg-forest-950 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-sand-200">
            Official promotional video � Plots starting from ₹35.99 Lakhs
          </span>
          <a
            href="#contact"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-gold-400 text-forest-950 font-bold hover:bg-gold-300"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
};

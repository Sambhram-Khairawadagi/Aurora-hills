"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, X, Gift } from "lucide-react";

interface FestiveTickerProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
}

export const FestiveTicker: React.FC<FestiveTickerProps> = ({ onOpenEnquiry }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-[#450A14] via-[#7B1123] to-[#450A14] text-white py-1 sm:py-1.5 px-3 sm:px-6 shadow-md border-b border-amber-400/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm">
        
        {/* Left Side Festive Badge */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="p-1 rounded-full bg-amber-400 text-red-950 flex items-center justify-center animate-pulse">
            <Gift className="w-3.5 h-3.5" />
          </span>
          <span className="hidden sm:inline font-black uppercase tracking-wider text-amber-300 text-[11px] sm:text-xs">
            Dasara &amp; Deepawali Special:
          </span>
        </div>

        {/* Center Scrolling / Static Announcement */}
        <div className="flex-1 text-center font-bold tracking-tight text-white/95 truncate">
          <span className="font-kannada text-amber-300 mr-2 font-black">
            ಭೂಮಿ &amp; ಬಂಗಾರ | ಭೂಮಿ &amp; ಬೆಳ್ಳಿ
          </span>
          <span className="hidden md:inline text-white/80">
            • 40×60: <strong className="text-yellow-300">50g Gold</strong> | 30×50: <strong className="text-slate-200">1.5kg Silver</strong> | 30×40: <strong className="text-slate-200">1kg Silver</strong>
          </span>
          <span className="md:hidden text-white/90">
            • Up to <strong className="text-yellow-300">50g Gold</strong> or <strong className="text-slate-200">1.5kg Silver</strong>!
          </span>
        </div>

        {/* Right Side Action Button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => onOpenEnquiry("Top Festive Ticker", "Festive Scheme")}
            className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-amber-300 hover:to-yellow-200 text-red-950 font-black text-[10px] sm:text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1"
          >
            <span>View Scheme</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-white/60 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

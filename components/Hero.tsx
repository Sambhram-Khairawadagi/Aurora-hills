"use client";

import React from "react";
import Image from "next/image";
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Phone
} from "lucide-react";
import { HeroLeadCard } from "@/components/HeroLeadCard";

interface HeroProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenVideo: () => void;
  onOpenBrochure: () => void;
  startingPrice?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiry,
  onOpenVideo,
  onOpenBrochure,
  startingPrice = "₹42 LAKHS*",
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center pt-36 sm:pt-44 lg:pt-48 pb-12 sm:pb-16 overflow-hidden">
      {/* 8K Ultra-Luxury Full-Bleed Background Images (Responsive Mobile 9:16 & Desktop 16:9) */}
      <div className="absolute inset-0 -z-20">
        {/* Mobile Portrait (9:16 Ratio) */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src="/images/aurora-hills-plotted-mobile.png"
            alt="The Aurora Hills Plotted Villa Sanctuary Dharwad (Mobile)"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Desktop Landscape (16:9 Ratio) */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/images/aurora-hills-plotted-masterpiece.png"
            alt="The Aurora Hills Plotted Villa Sanctuary at Sunset Viewpoint"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic Dual Gradient Overlay for Peak Contrast & Welcoming Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 sm:from-black/80 sm:via-black/45 sm:to-black/15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Subtle Ambient Glowing Light Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] animate-liquid-fluid-1" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-amber-400/15 rounded-full blur-[80px] animate-liquid-fluid-3" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full mt-2 sm:mt-0 flex flex-col justify-center">
        
        {/* Developers & Main Project Title Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 sm:mb-7 animate-fade-in max-w-4xl">
          <div className="flex flex-col space-y-1 bg-black/30 px-4 py-2 rounded-2xl backdrop-blur-md border border-white/10 w-fit">
            <h2 className="text-base sm:text-lg md:text-xl font-bold font-sans tracking-widest text-white/90 drop-shadow-md uppercase">
              Sai Smruti Developers
            </h2>
            <p className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] drop-shadow ml-0.5">
              Proudly Presents
            </p>
          </div>

          {/* Desktop Bank Loans Badge Inline */}
          <div className="hidden md:inline-flex items-center gap-2 text-xs sm:text-sm font-black text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-5 py-2.5 rounded-full shadow-[0_4px_20px_rgba(251,191,36,0.3)] border border-amber-200/50 cursor-default">
            <ShieldCheck className="w-4 h-4 text-amber-900" />
            <span>Bank Loans: SBI • HDFC • ICICI • IDFC First</span>
          </div>
        </div>
          
          {/* Massive Project Name */}
          <div className="mt-5 sm:mt-6 mb-6 sm:mb-8">
            <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black font-serif text-white tracking-tighter leading-[1.08] drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
              THE AURORA <br className="sm:hidden" /><span className="hidden sm:inline"> </span>HILLS
              <span className="block text-xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-sans font-extrabold text-amber-300 tracking-tight mt-2 sm:mt-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                Villa Plots in Dharwad
              </span>
            </h1>
            <div className="inline-flex items-center gap-2 mt-3 sm:mt-5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full liquid-glass-pill shadow-lg border border-emerald-400/30 max-w-full">
               <span className="flex h-2.5 w-2.5 relative flex-shrink-0">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
               </span>
               <span className="text-[10px] sm:text-xs font-black tracking-wider sm:tracking-widest text-emerald-300 uppercase drop-shadow truncate">
                 HDUDA &amp; NA-KJP Approved Villa Plots
               </span>
            </div>
          </div>

        {/* Hero Content Showcase & Direct Lead Conversion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">

          {/* Left Column: Value Proposition & Showcase (7 Cols on desktop) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">

            {/* Supporting Welcoming Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-medium max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Luxury villa plots nestled in lush green hills at <a href="https://share.google/lhDyTbBa3vWnMhOFK" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-emerald-300 hover:underline transition-colors">Sunset Viewpoint, Dharwad City</a> — 20+ amenities, wide paved roads, and instant access to top schools, malls &amp; NH-4.
            </p>

            {/* Real Estate Price & Pre-Launch Advantage Card */}
            <div className="p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl liquid-glass-card liquid-glass-shimmer w-full flex flex-col justify-between gap-3 sm:gap-4 relative overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-2xl border-white/25">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-1.5 sm:py-2 rounded-bl-xl shadow-[0_4px_15px_rgba(250,204,21,0.4)] border-b border-l border-yellow-300">
                Pre-Launch Pricing
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-serif flex items-baseline gap-2 mt-0.5 sm:mt-1 drop-shadow-md">
                    <span className="text-xs sm:text-sm font-medium text-white/70">Starting</span>
                    <span className="text-emerald-300 drop-shadow-[0_0_12px_rgba(110,231,183,0.5)]">{startingPrice}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenEnquiry("Hero Price Card")}
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_20px_rgba(255,255,255,0.4)] hover:shadow-[0_6px_28px_rgba(255,255,255,0.6)] transition-all hover:scale-105 active:scale-95 text-center flex-shrink-0"
                >
                  Claim Offer →
                </button>
              </div>

              {/* Festive Deepawali / Dasara Banner inside Price Card */}
              <div className="mt-2 pt-3 border-t border-white/20 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold drop-shadow">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 animate-pulse" />
                  <span>
                    <strong className="text-white">Dasara &amp; Deepawali Special:</strong> 50g Gold or up to 1.5kg Silver Gift!
                  </span>
                </div>
                <a href="#festive-offer" className="text-amber-200 hover:text-white underline font-black text-[11px] uppercase tracking-wider">
                  Explore Scheme →
                </a>
              </div>
            </div>

            {/* Action Buttons (High Contrast & Mobile-Optimized) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2 w-full">
              <button
                onClick={() => onOpenEnquiry("Hero Primary CTA")}
                className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white liquid-glass-emerald rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_50px_rgba(16,185,129,0.8)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
              >
                <span>Enquire for Booking</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Direct Click-to-Call — highest converting CTA for mobile ad traffic */}
              <a
                href="tel:+918970198701"
                id="hero-call-btn"
                className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white rounded-full border-2 border-white/70 hover:bg-white hover:text-emerald-900 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>+91 89701 98701</span>
              </a>

              <a
                href="#festive-offer"
                className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 hover:from-amber-400 hover:to-yellow-400 rounded-full shadow-[0_0_25px_rgba(251,191,36,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-900" />
                <span>Festive Scheme Offer</span>
              </a>
            </div>
          </div>

          {/* Right Column: Instant In-Page Lead & WhatsApp Form (5 Cols on desktop, full width on mobile) */}
          <div className="lg:col-span-5 w-full mt-2 lg:mt-0">
            <HeroLeadCard sourceTag="Hero Instant Card" />
          </div>
        </div>

      </div>
    </section>
  );
};

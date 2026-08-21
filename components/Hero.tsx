"use client";

import React from "react";
import Image from "next/image";
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Trees, 
  Sun, 
  GraduationCap, 
  ShoppingBag, 
  Compass, 
  Award,
  Phone,
  Calendar
} from "lucide-react";

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
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden">
      {/* 8K Ultra-Luxury Full-Bleed Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/aurora-hills-plotted-masterpiece.png"
          alt="The Aurora Hills Plotted Villa Sanctuary at Sunset Viewpoint"
          fill
          priority
          unoptimized
          quality={100}
          sizes="100vw"
          className="object-cover object-[65%_center] sm:object-center"
        />
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
      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full mt-2 sm:mt-0">
        {/* Top Floating Announcement & Approvals Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full liquid-glass-pill shadow-lg w-fit">
            <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-[10px] sm:text-xs lg:text-sm font-black tracking-wider text-white uppercase drop-shadow">
              Hosa Lifestyle • Hosa Dharwad
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-xs font-bold text-emerald-300 drop-shadow">
              NA-KJP & HDUDA Sanctioned
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs lg:text-sm font-bold text-white liquid-glass-pill px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg w-fit">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
            <span className="drop-shadow">Bank Loans: SBI • HDFC • ICICI Approved</span>
          </div>
        </div>

        {/* Hero Content Showcase */}
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          {/* Big Aurora Hills Brand Capsule Header */}
          <div className="flex items-center gap-3 p-2.5 sm:p-3 px-3 sm:px-4 liquid-glass-card liquid-glass-shimmer rounded-xl sm:rounded-2xl max-w-sm sm:max-w-md shadow-xl border border-white/30">
            <div className="bg-white/95 rounded-lg sm:rounded-xl p-1 sm:p-1.5 shadow-sm flex-shrink-0">
              <Image
                src="/images/aurora-hills-logo.png"
                alt="The Aurora Hills Dharwad Logo"
                width={110}
                height={44}
                className="h-7 sm:h-9 w-auto object-contain"
                priority
              />
            </div>
            <div className="border-l-2 border-emerald-400/50 pl-2.5 sm:pl-3">
              <h3 className="text-sm sm:text-base font-black font-serif text-white tracking-wider leading-none drop-shadow-md">
                THE AURORA HILLS
              </h3>
              <p className="text-[9px] sm:text-[11px] uppercase font-extrabold text-emerald-300 tracking-wider mt-0.5 sm:mt-1 drop-shadow">
                Dharwad City's Premier Plotted Sanctuary
              </p>
            </div>
          </div>

          {/* Main Welcoming Bold Headline */}
          <div className="space-y-1.5 sm:space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-white font-serif tracking-tight leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
              Live Closer to <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">Nature.</span> <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(251,191,36,0.35)]">
                Invest in Dharwad's Tomorrow.
              </span>
            </h1>
          </div>

          {/* Supporting Welcoming Copy */}
          <p className="text-xs sm:text-base lg:text-lg text-white/90 leading-relaxed font-medium max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            A master-planned luxury villa plot community nestled in lush green hills at <strong className="text-white font-bold">Sunset Viewpoint, Dharwad City</strong>. Built with 20+ lifestyle amenities, 30ft/40ft wide paved avenues, and instant connectivity to top schools, colleges, malls, and NH-4 highway.
          </p>

          {/* Real Estate Price & Pre-Launch Advantage Card */}
          <div className="p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl liquid-glass-card liquid-glass-shimmer max-w-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 relative overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-2xl border-white/25">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-teal-500 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-bl-xl shadow-lg border-b border-l border-emerald-300/40">
              Pre-Launch Pricing
            </div>

            <div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-300 block drop-shadow">
                Sanctioned Villa Plots
              </span>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-serif flex items-baseline gap-2 mt-0.5 sm:mt-1 drop-shadow-md">
                <span className="text-xs sm:text-sm font-medium text-white/70">Starting</span>
                <span className="text-emerald-300 drop-shadow-[0_0_12px_rgba(110,231,183,0.5)]">{startingPrice}</span>
              </div>
              <div className="text-[11px] sm:text-xs text-emerald-200 mt-0.5 sm:mt-1 flex items-center gap-1.5 font-medium drop-shadow">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Clear Title Deeds • 1,200 to 2,400+ sq.ft Ready</span>
              </div>
            </div>

            <button
              onClick={() => onOpenEnquiry("Hero Price Card")}
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-white text-emerald-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_20px_rgba(255,255,255,0.4)] hover:shadow-[0_6px_28px_rgba(255,255,255,0.6)] transition-all hover:scale-105 active:scale-95 text-center"
            >
              Claim Offer →
            </button>
          </div>

          {/* 4 Proximity Advantage Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 max-w-2xl">
            {[
              { icon: Sun, label: "Sunset View Point", sub: "Panoramic Hills", color: "text-amber-400" },
              { icon: Trees, label: "Greenery & Air", sub: "Zero Pollution", color: "text-emerald-400" },
              { icon: GraduationCap, label: "Near Schools/Univ", sub: "5 Mins to KUD", color: "text-sky-300" },
              { icon: ShoppingBag, label: "Near Malls & D-Mart", sub: "Easy Shopping", color: "text-rose-400" },
            ].map(({ icon: Icon, label, sub, color }) => (
              <div key={label} className="p-2 sm:p-3 rounded-xl sm:rounded-2xl liquid-glass-pill text-center hover:bg-white/20 hover:-translate-y-0.5 transition-all cursor-default shadow-md">
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${color} mx-auto mb-0.5 sm:mb-1 drop-shadow`} />
                <span className="text-[11px] sm:text-xs font-bold text-white block drop-shadow">{label}</span>
                <span className="text-[9px] sm:text-[10px] text-white/70">{sub}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons (High Contrast & Mobile-Optimized) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
            <button
              onClick={() => onOpenEnquiry("Hero Primary CTA")}
              className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white liquid-glass-emerald rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_45px_rgba(16,185,129,0.75)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Enquire for Booking</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={onOpenVideo}
              className="w-full sm:w-auto justify-center group px-5 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-white liquid-glass-btn rounded-full transition-all flex items-center gap-2 hover:-translate-y-0.5 shadow-lg"
            >
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch YouTube Site Tour</span>
            </button>

            <button
              onClick={onOpenBrochure}
              className="w-full sm:w-auto text-center py-2 sm:py-4 text-xs sm:text-sm font-bold text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all drop-shadow"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

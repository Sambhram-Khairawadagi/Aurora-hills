"use client";

import React from "react";
import Image from "next/image";
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Phone,
  MapPin,
  Car
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
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 overflow-hidden">
      {/* Daylight Real-Site Background Images (Responsive Mobile 9:16 & Desktop 16:9) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile Portrait (9:16 Ratio) */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src="/images/aurora-hills-real-site-daylight-mobile.webp"
            alt="The Aurora Hills Plotted Villa Sanctuary Dharwad (Mobile)"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Desktop Landscape (16:9 Ratio) */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/images/aurora-hills-real-site-daylight.webp"
            alt="The Aurora Hills Plotted Villa Sanctuary at Sunset Viewpoint"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* High-Legibility Light Background: Specifically illuminates the marked text zone on the left while preserving pristine landscape and road clarity on the right */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 via-45% to-transparent sm:bg-gradient-to-r sm:from-[#F8FAF7]/95 sm:via-[#F8FAF7]/85 sm:via-48% sm:to-transparent sm:to-72% pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_35%,_rgba(255,255,255,0.95)_0%,_rgba(255,255,255,0.85)_40%,_transparent_72%)] pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-t from-[#F8FAF7] to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full mt-2 sm:mt-0 flex flex-col justify-center">
        
        {/* Developers & Main Project Title Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6 animate-fade-in max-w-4xl">
          <div className="flex flex-col space-y-0.5 bg-white/95 px-4 py-2.5 rounded-2xl backdrop-blur-md border border-emerald-200 shadow-sm w-fit">
            <h2 className="text-xs sm:text-sm font-black font-sans tracking-widest text-emerald-950 uppercase">
              Sai Smruti Developers
            </h2>
            <p className="text-emerald-800 font-black uppercase tracking-[0.2em] text-xs">
              Proudly Presents
            </p>
          </div>

          {/* Desktop Bank Loans Badge Inline */}
          <div className="hidden md:inline-flex items-center gap-2 text-xs sm:text-sm font-black text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-5 py-2.5 rounded-full shadow-md border border-amber-200/60 cursor-default">
            <ShieldCheck className="w-4 h-4 text-amber-900" />
            <span>Bank Loans: SBI • HDFC • ICICI • IDFC First</span>
          </div>
        </div>
          
        {/* Bold Modern Sans Project Title Header (Marked Area) */}
        <div className="mt-3 sm:mt-4 mb-5 sm:mb-7">
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] font-black font-sans text-forest-950 tracking-tight leading-[1.04] drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)]">
            THE AURORA <br className="sm:hidden" /><span className="hidden sm:inline"> </span>HILLS
            <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-sans font-extrabold text-amber-800 tracking-tight mt-2 sm:mt-3 drop-shadow-[0_1px_8px_rgba(255,255,255,0.9)]">
              Villa Plots in Dharwad
            </span>
          </h1>
          <div className="inline-flex items-center gap-2 mt-3 sm:mt-4 px-4 py-2 rounded-full bg-white/95 border border-emerald-300 shadow-sm max-w-full">
             <span className="flex h-2.5 w-2.5 relative flex-shrink-0">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
             </span>
             <span className="text-xs sm:text-sm font-black tracking-wider sm:tracking-widest text-emerald-950 uppercase truncate">
               HDUDA &amp; NA-KJP Approved Villa Plots
             </span>
          </div>
        </div>

        {/* Hero Content Showcase & Direct Lead Conversion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start w-full">

          {/* Left Column: Value Proposition & Showcase (7 Cols on desktop) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">

            {/* Supporting Welcoming Copy with Dedicated Light Frosted Glass Card for 100% Legibility */}
            <div className="space-y-2 sm:space-y-2.5 max-w-2xl bg-white/90 sm:bg-white/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-emerald-200/80 shadow-md">
              <p className="text-base sm:text-lg lg:text-xl font-bold text-forest-950 leading-snug">
                Discover Luxury Living Amidst Nature at{" "}
                <a
                  href="https://share.google/lhDyTbBa3vWnMhOFK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-900 hover:text-emerald-700 hover:underline transition-colors underline decoration-emerald-500/50 font-black"
                >
                  Sunset Viewpoint, Dharwad!
                </a>
              </p>
              <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-semibold">
                Premium villa plots, 20+ world-class amenities, wide paved roads, and seamless access to top schools, malls &amp; NH-4 — your dream lifestyle starts here!
              </p>
            </div>

            {/* Real Estate Price & Pre-Launch Advantage Card (Light Luxury Edition) */}
            <div className="p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-xl border border-emerald-300/80 w-full flex flex-col justify-between gap-3 sm:gap-4 relative overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-xl">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-1.5 sm:py-2 rounded-bl-xl shadow-md border-b border-l border-amber-300">
                Pre-Launch Pricing
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-forest-950 font-sans flex items-baseline gap-2 mt-0.5 sm:mt-1">
                    <span className="text-xs sm:text-sm font-bold text-charcoal-600">Starting</span>
                    <span className="text-emerald-700">{startingPrice}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenEnquiry("Hero Price Card")}
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-forest-950 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:bg-emerald-800 transition-all hover:scale-105 active:scale-95 text-center flex-shrink-0"
                >
                  Claim Offer →
                </button>
              </div>

              {/* Festive Deepawali / Dasara Banner inside Price Card */}
              <div className="mt-2 pt-3 border-t border-emerald-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-amber-900 text-xs sm:text-sm font-bold">
                  <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 animate-pulse" />
                  <span>
                    <strong className="text-forest-950">Dasara &amp; Deepawali Special:</strong> 50g Gold or up to 1.5kg Silver Gift!
                  </span>
                </div>
                <a href="#festive-offer" className="text-amber-800 hover:text-emerald-800 underline font-black text-xs sm:text-sm uppercase tracking-wider">
                  Explore Scheme →
                </a>
              </div>
            </div>

            {/* Action Buttons (High Contrast & Light-Theme Optimized) */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2 w-full">
              <button
                onClick={() => onOpenEnquiry("Hero Primary CTA")}
                className="w-full sm:w-auto justify-center px-5 sm:px-6 lg:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-gradient-to-r from-emerald-700 via-emerald-600 to-forest-900 rounded-full shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 text-center"
              >
                <span>Enquire for Booking</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Direct Click-to-Call */}
              <a
                href="tel:+918970198701"
                id="hero-call-btn"
                className="w-full sm:w-auto justify-center px-5 sm:px-6 lg:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-forest-950 rounded-full bg-white border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 shadow-sm text-center"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700" />
                <span>+91 89701 98701</span>
              </a>

              <a
                href="#festive-offer"
                className="w-full sm:w-auto justify-center px-5 sm:px-6 lg:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 rounded-full shadow-md shadow-amber-400/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 text-center"
              >
                <Sparkles className="w-4 h-4 text-amber-900" />
                <span>Festive Scheme Offer</span>
              </a>
            </div>

            {/* Hubli Proximity & Complimentary Site Visit Pickup Trust Strip */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-300/80 shadow-md text-xs sm:text-sm font-bold text-forest-950">
              <div className="flex items-center gap-1.5 text-emerald-900">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span><strong className="text-forest-950 font-black">20 Mins from Hubli</strong> (via Toll/NH-4 Bypass)</span>
              </div>
              <span className="text-emerald-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-charcoal-800">
                <Car className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span><strong>Free Site Visit Cab Pickup &amp; Drop</strong> across Hubli &amp; Dharwad</span>
              </div>
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

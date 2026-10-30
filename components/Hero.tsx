"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Car } from "lucide-react";
import { HeroLeadCard } from "@/components/HeroLeadCard";

interface HeroProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenSiteVisit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiry, onOpenSiteVisit,
}) => {
  return (
    <section id="hero" className="relative lg:min-h-screen flex flex-col justify-center pt-28 sm:pt-36 lg:pt-40 pb-10 sm:pb-16 overflow-hidden">
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

        {/* High-Legibility Light Background: Specifically illuminates the text zone on the left while preserving pristine landscape and road clarity on the right */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 via-45% to-transparent sm:bg-gradient-to-r sm:from-[#F8FAF7]/95 sm:via-[#F8FAF7]/85 sm:via-50% sm:to-transparent sm:to-75% pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_35%,_rgba(255,255,255,0.95)_0%,_rgba(255,255,255,0.85)_40%,_transparent_72%)] pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-t from-[#F8FAF7] to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Hero Grid: Left Content (7 Cols) & Right In-Page Lead Card (5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center w-full">

          {/* Left Column: Prestigious Luxury Presentation */}
          <div className="lg:col-span-7 space-y-4">

            {/* Developer Tag & Banking Credential */}
            <div className="hidden sm:flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-900 bg-white/90 px-3.5 py-1.5 rounded-full border border-emerald-200/80 shadow-xs">
                Sai Smruti Developers Presents
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-amber-900 bg-amber-50/90 px-3 py-1 rounded-full border border-amber-200 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                SBI &amp; HDFC Pre-Approved
              </span>
            </div>

            {/* Stately Brand Title */}
            <div>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold text-forest-950 tracking-tight leading-[1.08]">
                The Aurora Hills
                <span className="block font-sans text-xl sm:text-2xl md:text-3xl font-medium text-[#7A4B23] tracking-normal mt-2 sm:mt-3">
                  Luxury Villa Plots in Dharwad
                </span>
              </h1>

              {/* Status Badges */}
              <div className="flex flex-wrap items-center gap-2 mt-4 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 font-semibold border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  HDUDA &amp; NA-KJP Approved
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-gray-700 font-medium border border-gray-200 shadow-xs">
                  18 Scenic Acres
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-gray-700 font-medium border border-gray-200 shadow-xs">
                  30×40 · 30×50 · 40×60
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-forest-950 leading-relaxed max-w-xl">
              Villa plots at Sunset Viewpoint, Kelgeri. Explore the approved layout and current availability.
            </p>
            <p className="text-sm text-emerald-900 flex items-center gap-2">
              <Car className="w-4 h-4 shrink-0" /> Free site-visit pickup across Dharwad &amp; Hubli.
            </p>
            <div className="hidden lg:flex flex-wrap gap-3 pt-2">
              <button onClick={() => onOpenEnquiry("Hero Price Sheet")} className="primary-button">Get Layout &amp; Price Sheet</button>
              <button onClick={onOpenSiteVisit} className="secondary-button">Book a Free Site Visit</button>
            </div>
          </div>

          {/* Right Column: Clean, Spacious Instant Lead Form (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <HeroLeadCard sourceTag="Hero Instant Card" />
          </div>

        </div>

      </div>
    </section>
  );
};

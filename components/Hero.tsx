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
      {/* Generated concept landscape; actual development photography remains in the gallery. */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#F8F7F2]">
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="/images/aurora-hills-sunrise-hero.webp"
            alt="Artist’s impression of Aurora Hills-inspired villa plots, native greenery and a winding avenue in the Dharwad hills"
            fill priority quality={85} sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="hidden sm:block absolute inset-0 hero-landscape-scrim pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F8F7F2] to-transparent pointer-events-none" />
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
            <figure className="relative sm:hidden h-40 rounded-2xl overflow-hidden border border-emerald-900/10 shadow-sm">
              <Image src="/images/aurora-hills-sunrise-hero-mobile.webp" alt="Artist’s impression of a landscaped avenue and open plots in the Dharwad hills" fill priority quality={85} sizes="(max-width: 639px) 100vw, 1px" className="object-cover object-[center_76%]" />
              <figcaption className="absolute bottom-2 right-2 rounded bg-white/90 px-2 py-1 text-[11px] text-gray-700">Artist’s impression</figcaption>
            </figure>
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
      <p className="hidden sm:block absolute bottom-3 left-5 z-10 rounded bg-white/85 px-2 py-1 text-xs text-gray-700">Artist’s impression · View actual photos below</p>
    </section>
  );
};

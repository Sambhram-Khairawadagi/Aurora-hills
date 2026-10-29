"use client";

import React from "react";
import Image from "next/image";
import { 
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
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

          {/* Left Column: Prestigious Luxury Presentation */}
          <div className="lg:col-span-7 space-y-6">

            {/* Developer Tag & Banking Credential */}
            <div className="flex flex-wrap items-center gap-3">
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
                  20+ Lifestyle Amenities
                </span>
              </div>
            </div>

            {/* Single Cohesive Glass Card for Value & Pre-Launch Advantage */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-emerald-200/70 shadow-md space-y-4 max-w-2xl">
              <p className="text-base sm:text-lg text-forest-950 leading-relaxed font-medium">
                Discover Dharwad’s most exclusive residential sanctuary at{" "}
                <a
                  href="https://share.google/lhDyTbBa3vWnMhOFK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-900 underline decoration-2 hover:text-emerald-700 transition-colors"
                >
                  Sunset Viewpoint, Kelgeri
                </a>
                . Featuring <strong className="font-bold text-forest-950">40ft blacktop avenues</strong>, <strong className="font-bold text-forest-950">underground cabling</strong>, <strong className="font-bold text-forest-950">20+ lifestyle amenities</strong>, and instant access to schools, universities &amp; NH-4.
              </p>

              {/* Pre-Launch Pricing Advantage Strip */}
              <div className="pt-3.5 border-t border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                    Limited Pre-Launch Advantage
                  </span>
                  <span className="text-lg sm:text-xl font-bold font-sans text-forest-950">
                    Special Pre-Launch Rates on Request
                  </span>
                  <p className="text-xs sm:text-sm text-amber-950 font-bold mt-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 animate-pulse" />
                    <span>Festive Blessing: Assured 50g Gold or up to 1.5kg Silver</span>
                  </p>
                </div>

                <button
                  onClick={() => onOpenEnquiry("Hero Price Card")}
                  className="px-5 py-2.5 rounded-full bg-forest-950 hover:bg-emerald-800 text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-sm hover:scale-[1.02] flex-shrink-0 text-center"
                >
                  Get Price Sheet →
                </button>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
              <button
                onClick={() => onOpenEnquiry("Hero Primary CTA")}
                className="px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm tracking-wide shadow-md shadow-emerald-800/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Enquire for Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+918970198701"
                id="hero-call-btn"
                className="px-6 py-3.5 rounded-full bg-white border border-gray-300 hover:border-emerald-600 text-forest-950 font-medium text-sm transition-all shadow-xs flex items-center justify-center gap-2 hover:bg-emerald-50/50"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>+91 89701 98701</span>
              </a>

              <a
                href="#festive-offer"
                className="px-5 py-3.5 text-amber-900 hover:text-amber-950 font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors underline decoration-amber-400 decoration-2"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>View Festive Offers</span>
              </a>
            </div>

            {/* Dharwad & Hubli Transit Note */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-forest-950 pt-2 font-bold">
              <span className="inline-flex items-center gap-1.5 text-forest-950 bg-white/90 px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                5 Mins to Jubilee Circle
              </span>
              <span className="inline-flex items-center gap-1.5 text-forest-950 bg-white/90 px-3 py-1 rounded-full border border-gray-200 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                20 Mins from Hubli
              </span>
              <span className="inline-flex items-center gap-1.5 text-emerald-950 bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300 shadow-2xs">
                <Car className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                Free Doorstep Cab for Site Visits
              </span>
            </div>

          </div>

          {/* Right Column: Clean, Spacious Instant Lead Form (5 Cols) */}
          <div className="lg:col-span-5 w-full mt-4 lg:mt-0">
            <HeroLeadCard sourceTag="Hero Instant Card" />
          </div>

        </div>

      </div>
    </section>
  );
};

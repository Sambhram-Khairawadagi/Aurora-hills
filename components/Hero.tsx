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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#F0F5EC] via-[#F7F9F6] to-[#EEF4EA]">
      {/* Background Subtle Gradient & Light Embellishments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-lime-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Announcement & Approvals Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-emerald-200 shadow-sm">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-wider text-forest-950 uppercase">
              Hosa Lifestyle, Hosa Dharwad
            </span>
            <span className="hidden sm:inline text-emerald-300">|</span>
            <span className="hidden sm:inline text-xs font-bold text-emerald-800">
              NA-KJP & HDUDA Sanctioned
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-forest-950 bg-emerald-50/80 px-3.5 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Bank Loans: SBI • HDFC • ICICI Approved</span>
          </div>
        </div>

        {/* 2-Column Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand, Headline, Value Props & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Big Aurora Hills Brand Logo Header */}
            <div className="flex items-center gap-4 p-3.5 bg-white/90 rounded-2xl border border-emerald-100 shadow-sm max-w-lg">
              <Image
                src="/images/aurora-hills-logo.png"
                alt="The Aurora Hills Dharwad Logo"
                width={120}
                height={52}
                className="h-12 w-auto object-contain"
                priority
              />
              <div className="border-l-2 border-emerald-600/30 pl-3">
                <h3 className="text-base sm:text-lg font-black font-serif text-forest-950 tracking-wider leading-none">
                  THE AURORA HILLS
                </h3>
                <p className="text-[11px] sm:text-xs uppercase font-extrabold text-emerald-800 tracking-wider mt-0.5">
                  Dharwad City's Premier Plotted Sanctuary
                </p>
              </div>
            </div>

            {/* Main Bold Headline (Larger Font) */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-forest-950 font-serif tracking-tight leading-[1.12]">
                Live Closer to Nature. <br />
                <span className="green-text-gradient">
                  Invest in Dharwad's Tomorrow.
                </span>
              </h1>
            </div>

            {/* Supporting Copy (Enlarged) */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-medium max-w-2xl">
              A master-planned luxury villa plot community nestled in lush green hills at <strong>Sunset Viewpoint, Dharwad City</strong>. Built with 20+ lifestyle amenities, 30ft/40ft wide paved avenues, and instant connectivity to top schools, colleges, malls, and NH-4 highway.
            </p>

            {/* Real Estate Price & Pre-Launch Advantage Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/95 border-2 border-emerald-600/30 shadow-xl max-w-xl flex flex-wrap items-center justify-between gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-green-600 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-bl-xl shadow">
                Pre-Launch Pricing
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-800 block">
                  Sanctioned Villa Plots
                </span>
                <div className="text-3xl sm:text-4xl font-black text-forest-950 font-serif flex items-baseline gap-2 mt-1">
                  <span className="text-sm font-semibold text-charcoal-600">Starting</span>
                  <span className="green-text-gradient">{startingPrice}</span>
                </div>
                <div className="text-xs text-emerald-900 mt-1 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Clear Title Deeds • 1,200 to 2,400+ sq.ft Ready
                </div>
              </div>

              <button
                onClick={() => onOpenEnquiry("Hero Price Card")}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-black text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
              >
                Claim Offer
              </button>
            </div>

            {/* Key Proximity & Advantage Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 max-w-2xl">
              <div className="p-2.5 rounded-xl bg-white/80 border border-emerald-100 shadow-sm text-center">
                <Sun className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                <span className="text-xs font-bold text-forest-950 block">Sunset View Point</span>
                <span className="text-[10px] text-charcoal-600">Panoramic Hills</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 border border-emerald-100 shadow-sm text-center">
                <Trees className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-forest-950 block">Greenery & Fresh Air</span>
                <span className="text-[10px] text-charcoal-600">Zero Pollution</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 border border-emerald-100 shadow-sm text-center">
                <GraduationCap className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-forest-950 block">Near Schools & Univ</span>
                <span className="text-[10px] text-charcoal-600">5 Mins to KUD</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 border border-emerald-100 shadow-sm text-center">
                <ShoppingBag className="w-5 h-5 text-rose-500 mx-auto mb-1" />
                <span className="text-xs font-bold text-forest-950 block">Near Malls & D-Mart</span>
                <span className="text-[10px] text-charcoal-600">Easy Shopping</span>
              </div>
            </div>

            {/* Action Buttons (Larger Size & High Contrast) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenEnquiry("Hero Primary CTA")}
                className="px-8 py-4 text-sm sm:text-base font-black uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Enquire for Booking</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenVideo}
                className="px-6 py-4 text-sm sm:text-base font-bold text-forest-950 bg-white/90 hover:bg-white border border-emerald-200 rounded-full shadow-md transition-all flex items-center gap-2.5 group hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span>Watch YouTube Site Tour</span>
              </button>

              <button
                onClick={onOpenBrochure}
                className="px-4 py-4 text-sm font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 transition-colors"
              >
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Column: Real Layout Image & Family in Garden Showcase */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Real Layout Sunset Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-white shadow-2xl p-2.5">
              <div className="relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/hero-layout-sunset.png"
                  alt="The Aurora Hills Dharwad Actual Layout at Sunset Viewpoint"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Top Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-900/90 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider shadow">
                    🌿 Actual Sunset Viewpoint Layout
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold font-serif leading-tight">
                    Scenic Hill Crest & Demarcated Plots
                  </h3>
                  <p className="text-xs text-emerald-100 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    Karnatak University Ridge, Dharwad City
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Family & Garden Lifestyle Card */}
            <div className="p-4 rounded-3xl bg-white border border-emerald-100 shadow-xl flex items-center gap-4 hover:shadow-2xl transition-shadow">
              <div className="relative w-28 h-24 sm:w-32 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-emerald-200 shadow bg-emerald-50">
                <Image
                  src="/images/family-happy-home.jpg"
                  alt="Happy Family Building Their Dream Villa in Garden at Aurora Hills"
                  fill
                  sizes="130px"
                  className="object-cover object-top"
                />
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Your Dream Home Destination
                </div>
                <h4 className="text-sm sm:text-base font-bold text-forest-950 font-serif leading-tight">
                  Build Your Villa in Nature's Lap
                </h4>
                <p className="text-xs text-charcoal-700 leading-snug">
                  Lush garden lawns, 100% pure air, and a secure gated township.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

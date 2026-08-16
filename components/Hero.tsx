"use client";

import React from "react";
import Image from "next/image";
import { Play, Sparkles, ArrowRight, ShieldCheck, MapPin, CheckCircle2, Trees, Award, Building } from "lucide-react";
import { ThreeScene } from "@/components/ThreeScene";

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
  startingPrice = "₹35.99 LAKHS*",
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#F7F9F6]">
      {/* 3D Three.js Interactive WebGL Scene (Lush Green Grass Hills) */}
      <ThreeScene />

      {/* Light Green Ambient Radiant Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] ambient-glow-light-green" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] ambient-glow-light-emerald" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Primary Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag & Project Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full neu-glass border border-white/90 shadow-md">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: "10s" }} />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-800 uppercase">
                Hosa Lifestyle, Hosa Dharwad
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs text-emerald-700 font-bold">NA-KJP & HDUDA Sanctioned</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm tracking-[0.35em] uppercase font-black text-emerald-700 font-serif">
                THE AURORA HILLS • DHARWAD CITY
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-forest-950 font-serif tracking-tight leading-[1.12]">
                LIVE CLOSER TO NATURE.{" "}
                <span className="block green-text-gradient">
                  INVEST IN TOMORROW.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl font-normal">
              A master-planned luxury plotted sanctuary in Dharwad City. Crafted with 20+ lifestyle amenities, 30ft/40ft wide arterial avenues, scenic hill views, and instant NH-4 highway connectivity.
            </p>

            {/* Neomorphic Price Card */}
            <div className="p-5 sm:p-6 rounded-3xl neu-glass border border-white/90 max-w-xl shadow-xl flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-widest font-bold text-emerald-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Pre-Launch Pricing Advantage
                </div>
                <div className="text-2xl sm:text-3xl font-black text-forest-950 flex items-baseline gap-2 mt-1">
                  <span className="text-xs sm:text-sm font-semibold text-charcoal-600">Plots Starting From</span>
                  <span className="green-text-gradient font-serif">{startingPrice}</span>
                </div>
                <div className="text-[11px] text-emerald-800 mt-1 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Clear Title Deeds • SBI, HDFC & ICICI Approved
                </div>
              </div>

              <button
                onClick={() => onOpenEnquiry("Hero Price Card")}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs shadow-md transition-transform hover:scale-105"
              >
                Claim Offer
              </button>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenEnquiry("Hero Primary CTA")}
                className="px-8 py-4 text-sm font-black uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVideo}
                className="px-6 py-4 text-sm font-bold text-forest-950 neu-button rounded-full transition-all flex items-center gap-2.5 group hover:-translate-y-0.5"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Site Video</span>
              </button>

              <button
                onClick={onOpenBrochure}
                className="px-4 py-4 text-xs font-bold text-charcoal-700 hover:text-emerald-700 underline underline-offset-4 transition-colors"
              >
                Brochure PDF
              </button>
            </div>

            {/* Location Indicator */}
            <div className="pt-2 flex items-center gap-2 text-xs text-charcoal-600 font-medium">
              <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Dharwad City | 15–20 Mins from Hubli-Dharwad Twin City Corridor</span>
            </div>
          </div>

          {/* Right Column: 3D Feature Preview Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-3xl neu-glass border border-white/90 shadow-xl flex items-start gap-4 transition-transform hover:-translate-y-1">
              <div className="p-3 rounded-2xl neu-inset text-emerald-700 flex-shrink-0">
                <Trees className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-forest-950 font-bold text-sm font-serif">Serene Greenery & Fresh Air</h3>
                <p className="text-xs text-charcoal-600 mt-0.5">Surrounded by rolling green landscapes and unpolluted hill atmosphere.</p>
              </div>
            </div>

            <div className="p-5 rounded-3xl neu-glass border border-white/90 shadow-xl flex items-start gap-4 transition-transform hover:-translate-y-1">
              <div className="p-3 rounded-2xl neu-inset text-emerald-700 flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-forest-950 font-bold text-sm font-serif">4 Tier Sanctions Cleared</h3>
                <p className="text-xs text-charcoal-600 mt-0.5">NA-KJP, HDUDA, SBI/HDFC Loans & Updated Property Tax records.</p>
              </div>
            </div>

            <div className="p-5 rounded-3xl neu-glass border border-white/90 shadow-xl flex items-start gap-4 transition-transform hover:-translate-y-1">
              <div className="p-3 rounded-2xl neu-inset text-emerald-700 flex-shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-forest-950 font-bold text-sm font-serif">1.5 Lakh Litres Water Infra</h3>
                <p className="text-xs text-charcoal-600 mt-0.5">Massive overhead water tank, underground power grid & HTP drainage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

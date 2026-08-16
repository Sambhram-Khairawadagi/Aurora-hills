"use client";

import React from "react";
import Image from "next/image";
import { Play, Sparkles, ArrowRight, ShieldCheck, MapPin, CheckCircle2, Trees, Award, Building, Compass } from "lucide-react";

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
    <section id="hero" className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-forest-950">
      {/* Background Aerial Landscape */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-aerial.jpg"
          alt="The Aurora Hills Dharwad Aerial Plotted Development View"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/60 to-transparent" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(6,21,14,0.95)]" />
      </div>

      {/* Floating Ambient Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag & Project Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-forest-900/90 border border-gold-400/40 backdrop-blur-md shadow-2xl">
              <Sparkles className="w-4 h-4 text-gold-400 animate-spin" style={{ animationDuration: "10s" }} />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-gold-300 uppercase">
                Hosa Lifestyle, Hosa Dharwad
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-emerald-300 font-semibold">NA-KJP & HDUDA Approved</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-xs sm:text-sm tracking-[0.35em] uppercase font-bold text-gold-400 font-serif">
                THE AURORA HILLS • DHARWAD
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-serif tracking-tight leading-[1.12]">
                LIVE CLOSER TO NATURE.{" "}
                <span className="block gold-text-gradient">
                  INVEST IN TOMORROW.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-sand-100 leading-relaxed max-w-2xl font-normal">
              A master-planned luxury plotted sanctuary in Dharwad. Crafted with 20+ lifestyle amenities, 30ft/40ft wide arterial avenues, scenic hill views, and instant NH-4 highway connectivity.
            </p>

            {/* Price Highlight Glass Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-forest-900/90 via-forest-900/80 to-forest-950/90 border border-gold-400/40 backdrop-blur-xl max-w-xl shadow-2xl flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-widest font-bold text-gold-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                  Pre-Launch Exclusive Offer
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline gap-2 mt-1">
                  <span className="text-xs sm:text-sm font-medium text-sand-200">Plots Starting From</span>
                  <span className="gold-text-gradient font-serif">{startingPrice}</span>
                </div>
                <div className="text-[11px] text-emerald-300 mt-1 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  HDUDA & NA-KJP Clear Titles • Bank Loans Approved
                </div>
              </div>

              <button
                onClick={() => onOpenEnquiry("Hero Price Card")}
                className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-xs shadow-lg transition-all"
              >
                Claim Offer
              </button>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenEnquiry("Hero Primary CTA")}
                className="px-8 py-4 text-sm font-black uppercase tracking-wider text-forest-950 bg-gradient-to-r from-gold-400 via-gold-300 to-amber-400 hover:from-gold-300 hover:to-gold-500 rounded-full shadow-[0_10px_30px_rgba(200,155,60,0.4)] hover:shadow-[0_15px_40px_rgba(200,155,60,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVideo}
                className="px-6 py-4 text-sm font-bold text-white bg-forest-900/90 hover:bg-forest-800 border border-gold-500/30 hover:border-gold-400 rounded-full backdrop-blur-md transition-all flex items-center gap-2.5 group shadow-xl"
              >
                <div className="w-7 h-7 rounded-full bg-gold-400 text-forest-950 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Site Video</span>
              </button>

              <button
                onClick={onOpenBrochure}
                className="px-5 py-4 text-xs font-semibold text-sand-200 hover:text-white underline underline-offset-4 transition-colors"
              >
                Download Brochure (PDF)
              </button>
            </div>

            {/* Location Indicator */}
            <div className="pt-2 flex items-center gap-2 text-xs text-sand-200">
              <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Mansur + Sanna Somapura, Dharwad | 15–20 Mins from Hubli-Dharwad Twin City</span>
            </div>
          </div>

          {/* Right Column: Key Feature Highlights Glass Cards (Desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-forest-900/90 to-forest-950/90 border border-forest-800/80 backdrop-blur-xl shadow-2xl flex items-start gap-4 hover:border-gold-500/40 transition-all group">
                <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                  <Trees className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Serene Greenery & Fresh Air</h3>
                  <p className="text-xs text-sand-200 mt-0.5">Surrounded by rolling green landscapes and peaceful natural terrain.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-forest-900/90 to-forest-950/90 border border-forest-800/80 backdrop-blur-xl shadow-2xl flex items-start gap-4 hover:border-gold-500/40 transition-all group">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-forest-950 transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">4 Tier Government Approvals</h3>
                  <p className="text-xs text-sand-200 mt-0.5">NA-KJP, HDUDA, Bank Loans & Property Tax fully cleared.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-forest-900/90 to-forest-950/90 border border-forest-800/80 backdrop-blur-xl shadow-2xl flex items-start gap-4 hover:border-gold-500/40 transition-all group">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30 group-hover:bg-blue-500 group-hover:text-forest-950 transition-colors">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">1.5 Lakh Litres Water Infra</h3>
                  <p className="text-xs text-sand-200 mt-0.5">Massive overhead water tank, underground power lines & HTP drainage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

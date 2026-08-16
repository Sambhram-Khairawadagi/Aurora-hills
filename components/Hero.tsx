"use client";

import React from "react";
import Image from "next/image";
import { Play, Sparkles, ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

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
  startingPrice = "?35.99 LAKHS*",
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-forest-950">
      {/* Background Aerial Landscape with cinematic treatment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-aerial.jpg"
          alt="The Aurora Hills Dharwad Aerial Plotted Development View"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 animate-pulse-subtle"
        />
        {/* Layered Gradient Overlays to guarantee high text contrast and deep forest brand aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/40 to-transparent" />
        {/* Subtle decorative vignetting */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(6,21,14,0.9)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Tag & Project Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/90 border border-gold-400/40 backdrop-blur-md shadow-lg animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold-400 animate-spin" style={{ animationDuration: "8s" }} />
            <span className="text-xs md:text-sm font-semibold tracking-wider text-gold-200 uppercase">
              Hosa Lifestyle, Hosa Dharwad
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-emerald-300 font-medium">NA-KJP & HDUDA Approved</span>
          </div>

          {/* Project Title & Main Headline */}
          <div className="space-y-2">
            <h2 className="text-sm md:text-base tracking-[0.3em] uppercase font-bold text-gold-400 font-serif">
              THE AURORA HILLS
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight leading-[1.15] drop-shadow-md">
              LIVE CLOSER TO NATURE.{" "}
              <span className="block gold-text-gradient">
                INVEST IN TOMORROW.
              </span>
            </h1>
          </div>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-sand-100/90 leading-relaxed max-w-2xl font-light">
            A premium, thoughtfully planned plotted community in Dharwad, designed around lifestyle, connectivity, greenery and long-term value.
          </p>

          {/* Price Highlight Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-forest-900/80 border border-gold-400/30 backdrop-blur-md max-w-xl shadow-xl flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-widest font-semibold text-sand-200">
                Exclusive Promotional Pricing
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline gap-2">
                <span className="text-sm font-normal text-gold-300">Plots Starting From</span>
                <span className="gold-text-gradient font-serif">{startingPrice}</span>
              </div>
              <div className="text-[10px] text-gray-300 italic">
                *Government approvals cleared. Bank loans available.
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Direct NH-4 Highway Access
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenEnquiry("Hero Primary CTA")}
              className="px-8 py-4 text-sm font-bold uppercase tracking-wider text-forest-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 hover:from-gold-300 hover:to-gold-500 rounded-full shadow-2xl shadow-gold-500/30 hover:shadow-gold-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#about"
              className="px-6 py-4 text-sm font-semibold text-white bg-forest-900/80 hover:bg-forest-800/90 border border-forest-700 hover:border-gold-400/50 rounded-full backdrop-blur-md transition-all flex items-center gap-2"
            >
              Explore Project
            </a>

            <button
              onClick={onOpenVideo}
              className="px-6 py-4 text-sm font-semibold text-gold-300 hover:text-white bg-forest-950/80 hover:bg-forest-900 border border-gold-400/30 hover:border-gold-400 rounded-full backdrop-blur-md transition-all flex items-center gap-2 group"
            >
              <div className="w-6 h-6 rounded-full bg-gold-400/20 group-hover:bg-gold-400 text-gold-300 group-hover:text-forest-950 flex items-center justify-center transition-colors">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Watch Project Video</span>
            </button>
          </div>

          {/* Quick Location Indicator */}
          <div className="pt-2 flex items-center gap-2 text-xs text-sand-200">
            <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>Mansur + Sanna Somapura, Dharwad | 15�20 Mins from Hubli-Dharwad Twin City</span>
          </div>
        </div>
      </div>
    </section>
  );
};

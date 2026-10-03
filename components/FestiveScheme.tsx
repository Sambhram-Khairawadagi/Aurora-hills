"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  Gift, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  TreePine, 
  Landmark, 
  Maximize2, 
  X,
  Flame,
  Award
} from "lucide-react";
import { FESTIVE_SCHEME_DATA, FestiveSchemeItem } from "@/lib/projectData";

interface FestiveSchemeProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
}

export const FestiveScheme: React.FC<FestiveSchemeProps> = ({ onOpenEnquiry }) => {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  return (
    <section id="festive-offer" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#FAF6E8] via-[#F4E7B5]/30 to-[#F7F9F6] text-[#14281D] overflow-hidden border-y border-amber-200/60">
      {/* Decorative Traditional Toran & Festive Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-red-800 via-amber-500 to-emerald-800 opacity-90 shadow-sm" />
      
      {/* Subtle Festive Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-400/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Dharwad City Limits Tag */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/95 border-2 border-amber-300 shadow-md shadow-amber-900/5 text-amber-950 font-black text-xs sm:text-sm tracking-wider uppercase">
            <MapPin className="w-4 h-4 text-red-600 fill-red-600" />
            <span>WITHIN DHARWAD CITY LIMITS</span>
          </div>
        </div>

        {/* Traditional Festive Crest Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4 mb-14">
          
          {/* Ornate Dasara & Deepawali Header Badge */}
          <div className="inline-block relative">
            <div className="relative px-8 sm:px-12 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-[#450A14] via-[#7B1123] to-[#450A14] text-white shadow-2xl border-2 border-amber-400/70 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent pointer-events-none" />
              
              <div className="flex items-center justify-center gap-2 text-amber-300 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Special Festive Celebration</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight text-white drop-shadow-md">
                THIS DASARA & DEEPAWALI <br className="sm:hidden" />
                <span className="text-amber-300">SPECIAL</span>
              </h2>
            </div>
          </div>

          {/* Authentic Bilingual Tagline */}
          <div className="pt-2">
            <h3 className="font-kannada text-2xl sm:text-3xl md:text-4xl font-black text-red-900 tracking-normal drop-shadow-sm leading-relaxed">
              ಭೂಮಿ &amp; ಬಂಗಾರ <span className="text-amber-600 mx-2">|</span> ಭೂಮಿ &amp; ಬೆಳ್ಳಿ
            </h3>
            <p className="text-sm sm:text-lg font-serif italic text-amber-950 font-bold tracking-wide mt-1">
              "A Precious Beginning. A Precious Honour."
            </p>
          </div>

          <p className="text-charcoal-700 text-xs sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Celebrate auspicious new beginnings in Dharwad City's most scenic plotted community. 
            Book your sanctioned residential plot this festive season and receive authentic 
            <strong className="text-red-900 font-extrabold"> 50g Pure Gold</strong> or 
            <strong className="text-slate-800 font-extrabold"> up to 1.5kg Silver</strong> as a permanent festive blessing.
          </p>

          <div className="flex items-center justify-center gap-3 pt-1">
            <button
              onClick={() => setIsPosterModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-900 hover:text-red-900 bg-amber-100 hover:bg-amber-200/80 px-4 py-2 rounded-full border border-amber-300 transition-colors shadow-sm"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-800" />
              <span>View Official Festival Poster</span>
            </button>
          </div>
        </div>

        {/* 3 Festive Plot Cards Matching the Poster */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1: 40x60 PLOT -> 50 GRAMS GOLD */}
          <div className="relative rounded-3xl bg-white border-2 border-amber-400 shadow-2xl hover:shadow-[0_20px_50px_rgba(245,158,11,0.25)] transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5">
            {/* Top Plot Badge */}
            <div className="bg-[#60101D] text-white text-center py-3.5 px-4 relative overflow-hidden">
              <span className="inline-block text-xl sm:text-2xl font-black font-serif tracking-wider">
                40 × 60 PLOT
              </span>
              <p className="text-[10px] text-amber-200 uppercase tracking-widest font-bold mt-0.5">
                2,400 SQ.FT • GRAND LUXURY VILLA
              </p>
            </div>

            {/* Visual Icon Illustration Card */}
            <div className="p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-amber-50/70 via-white to-amber-50/40 relative">
              
              {/* Gold Ornament Illustration Container */}
              <div className="relative w-44 h-40 sm:w-48 sm:h-44 flex items-center justify-center my-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/30 to-yellow-200/20 rounded-full blur-xl animate-pulse" />
                
                {/* Stylized Gold Bars & Coins Icon Representation */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative w-28 h-20 bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 rounded-lg shadow-xl border border-yellow-200 flex flex-col justify-center items-center transform -rotate-3 hover:rotate-0 transition-transform">
                    <span className="text-[9px] font-black tracking-widest text-amber-950 uppercase">FINE GOLD</span>
                    <span className="text-xs font-black text-amber-950">999.9</span>
                    <span className="text-[8px] font-bold text-amber-900">NET WT 50g</span>
                  </div>
                  <div className="w-14 h-14 -mt-4 bg-gradient-to-tr from-yellow-500 via-amber-300 to-yellow-200 rounded-full shadow-lg border-2 border-white flex items-center justify-center text-amber-950 font-black text-xs">
                    🪙
                  </div>
                </div>
              </div>

              {/* Gold Ribbon Bar */}
              <div className="w-full mt-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-amber-950 shadow-lg border border-amber-200">
                <span className="block text-2xl sm:text-3xl font-black font-serif tracking-tight drop-shadow-sm">
                  50 GRAMS GOLD
                </span>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-900 block mt-0.5">
                  Guaranteed Festive Reward
                </span>
              </div>
            </div>

            {/* Scheme Details & CTA */}
            <div className="p-6 pt-2 flex flex-col flex-1 justify-between bg-white border-t border-amber-100">
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs font-bold text-gray-600 pb-2 border-b border-gray-100">
                  <span>Dimension:</span>
                  <span className="text-forest-950 font-black">40ft × 60ft</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-600 pb-2 border-b border-gray-100">
                  <span>Total Area:</span>
                  <span className="text-forest-950 font-black">2,400 sq.ft</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-600 pb-2 border-b border-gray-100">
                  <span>Approval:</span>
                  <span className="text-emerald-700 font-black">HDUDA &amp; NA-KJP</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-600">
                  <span>Starting Price:</span>
                  <span className="text-emerald-800 font-black text-sm">₹84 Lakhs*</span>
                </div>
              </div>

              <button
                onClick={() => onOpenEnquiry("Festive Offer 40x60 (50g Gold)", "40x60 Plot (50g Gold Offer)")}
                className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-red-900 via-amber-700 to-red-900 hover:from-red-800 hover:to-amber-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-950/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Claim 50g Gold Scheme</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: 30x50 PLOT -> 1.5 KG SILVER */}
          <div className="relative rounded-3xl bg-white border-2 border-emerald-400 shadow-2xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.25)] transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5">
            {/* Top Plot Badge */}
            <div className="bg-[#0A2E1D] text-white text-center py-3.5 px-4 relative overflow-hidden">
              <span className="inline-block text-xl sm:text-2xl font-black font-serif tracking-wider">
                30 × 50 PLOT
              </span>
              <p className="text-[10px] text-emerald-200 uppercase tracking-widest font-bold mt-0.5">
                1,500 SQ.FT • SPACIOUS GARDEN VILLA
              </p>
            </div>

            {/* Visual Icon Illustration Card */}
            <div className="p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/40 relative">
              
              {/* Silver Ornaments Illustration Container */}
              <div className="relative w-44 h-40 sm:w-48 sm:h-44 flex items-center justify-center my-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-300/30 to-emerald-200/20 rounded-full blur-xl animate-pulse" />
                
                {/* Dual Silver Kalash Icon Representation */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <div className="w-16 h-20 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400 rounded-t-full rounded-b-2xl shadow-xl border-2 border-white flex flex-col items-center justify-center text-slate-800">
                    <span className="text-xl">🏺</span>
                    <span className="text-[7px] font-black tracking-widest mt-1">SILVER</span>
                  </div>
                  <div className="w-16 h-20 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400 rounded-t-full rounded-b-2xl shadow-xl border-2 border-white flex flex-col items-center justify-center text-slate-800">
                    <span className="text-xl">🏺</span>
                    <span className="text-[7px] font-black tracking-widest mt-1">SILVER</span>
                  </div>
                </div>
              </div>

              {/* Silver Ribbon Bar */}
              <div className="w-full mt-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 text-slate-900 shadow-lg border border-slate-300">
                <span className="block text-2xl sm:text-3xl font-black font-serif tracking-tight drop-shadow-sm">
                  1.5 KG SILVER
                </span>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-950 block mt-0.5">
                  Guaranteed Festive Reward
                </span>
              </div>
            </div>

            {/* Scheme Details & CTA */}
            <div className="p-6 pt-2 flex flex-col flex-1 justify-between bg-white border-t border-emerald-100">
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs font-bold text-gray-600 pb-2 border-b border-gray-100">
                  <span>Dimension:</span>
                  <span className="text-forest-950 font-black">30ft × 50ft</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-600 pb-2 border-b border-gray-100">
                  <span>Total Area:</span>
                  <span className="text-forest-950 font-black">1,500 sq.ft</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-600 pb-2 border-b border-gray-100">
                  <span>Approval:</span>
                  <span className="text-emerald-700 font-black">HDUDA &amp; NA-KJP</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-600">
                  <span>Starting Price:</span>
                  <span className="text-emerald-800 font-black text-sm">₹52.5 Lakhs*</span>
                </div>
              </div>

              <button
                onClick={() => onOpenEnquiry("Festive Offer 30x50 (1.5kg Silver)", "30x50 Plot (1.5kg Silver Offer)")}
                className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 hover:from-emerald-700 hover:to-teal-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Claim 1.5kg Silver Scheme</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: 30x40 PLOT -> 1 KG SILVER */}
          <div className="relative rounded-3xl bg-white border-2 border-slate-400 shadow-2xl hover:shadow-[0_20px_50px_rgba(71,85,105,0.25)] transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5">
            {/* Top Plot Badge */}
            <div className="bg-[#1E293B] text-white text-center py-3.5 px-4 relative overflow-hidden">
              <span className="inline-block text-xl sm:text-2xl font-black font-serif tracking-wider">
                30 × 40 PLOT
              </span>
              <p className="text-[10px] text-slate-300 uppercase tracking-widest font-bold mt-0.5">
                1,200 SQ.FT • 3BHK CONTEMPORARY VILLA
              </p>
            </div>

            {/* Visual Icon Illustration Card */}
            <div className="p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 relative">
              
              {/* Single Silver Kalash Illustration Container */}
              <div className="relative w-44 h-40 sm:w-48 sm:h-44 flex items-center justify-center my-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/40 to-slate-300/30 rounded-full blur-xl animate-pulse" />
                
                {/* Single Silver Kalash Icon Representation */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-20 h-24 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400 rounded-t-full rounded-b-2xl shadow-xl border-2 border-white flex flex-col items-center justify-center text-slate-800">
                    <span className="text-2xl">🏺</span>
                    <span className="text-[8px] font-black tracking-widest mt-1">SILVER KALASH</span>
                  </div>
                </div>
              </div>

              {/* Silver Ribbon Bar */}
              <div className="w-full mt-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 text-slate-900 shadow-lg border border-slate-300">
                <span className="block text-2xl sm:text-3xl font-black font-serif tracking-tight drop-shadow-sm">
                  1 KG SILVER
                </span>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-700 block mt-0.5">
                  Guaranteed Festive Reward
                </span>
              </div>
            </div>

            {/* Scheme Details & CTA */}
            <div className="p-6 pt-2 flex flex-col flex-1 justify-between bg-white border-t border-slate-100">
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs font-bold text-gray-600 pb-2 border-b border-gray-100">
                  <span>Dimension:</span>
                  <span className="text-forest-950 font-black">30ft × 40ft</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-600 pb-2 border-b border-gray-100">
                  <span>Total Area:</span>
                  <span className="text-forest-950 font-black">1,200 sq.ft</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-600 pb-2 border-b border-gray-100">
                  <span>Approval:</span>
                  <span className="text-emerald-700 font-black">HDUDA &amp; NA-KJP</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-600">
                  <span>Starting Price:</span>
                  <span className="text-emerald-800 font-black text-sm">₹42 Lakhs*</span>
                </div>
              </div>

              <button
                onClick={() => onOpenEnquiry("Festive Offer 30x40 (1kg Silver)", "30x40 Plot (1kg Silver Offer)")}
                className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-slate-800 via-slate-900 to-black hover:from-slate-700 hover:to-slate-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-slate-950/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Claim 1kg Silver Scheme</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* 4 Poster Feature Badges */}
        <div className="mt-12 pt-8 border-t border-amber-200/80 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            
            <div className="p-3.5 rounded-2xl bg-white/80 border border-amber-200/60 shadow-sm flex flex-col items-center">
              <Award className="w-6 h-6 text-emerald-700 mb-1" />
              <span className="text-xs sm:text-sm font-black text-forest-950 uppercase tracking-wider">Premium Layout</span>
              <span className="text-[10px] text-gray-500 font-medium">Asphalted Wide Roads</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 border border-amber-200/60 shadow-sm flex flex-col items-center">
              <TreePine className="w-6 h-6 text-emerald-600 mb-1" />
              <span className="text-xs sm:text-sm font-black text-forest-950 uppercase tracking-wider">Green Surroundings</span>
              <span className="text-[10px] text-gray-500 font-medium">Lush Sunset Hills</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 border border-amber-200/60 shadow-sm flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-amber-600 mb-1" />
              <span className="text-xs sm:text-sm font-black text-forest-950 uppercase tracking-wider">NA-KJP Approved</span>
              <span className="text-[10px] text-gray-500 font-medium">100% Legal Clearances</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 border border-amber-200/60 shadow-sm flex flex-col items-center">
              <Landmark className="w-6 h-6 text-blue-700 mb-1" />
              <span className="text-xs sm:text-sm font-black text-forest-950 uppercase tracking-wider">HUDDA Approved</span>
              <span className="text-[10px] text-gray-500 font-medium">Government Sanctioned</span>
            </div>

          </div>

          {/* Campaign Partners & Contact Helpline Strip */}
          <div className="mt-8 p-4 sm:p-6 rounded-3xl bg-gradient-to-r from-red-950 via-[#60101D] to-red-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-amber-400 text-red-950">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                  Official Marketing Partners: Property Basket &amp; Reachmaxx
                </p>
                <p className="text-xs text-white/80 font-medium">
                  Plots | Villas | A Brighter Tomorrow • *T&amp;C Apply
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+918970198701"
                className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-red-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-105 transition-transform flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 8970198701</span>
              </a>
              <a
                href="tel:+91735331107"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-black text-xs sm:text-sm uppercase tracking-wider border border-white/20 hover:scale-105 transition-transform"
              >
                <span>735331107</span>
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Full Resolution Official Poster Modal Lightbox */}
      {isPosterModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setIsPosterModalOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-3xl p-3 sm:p-5 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
              <div className="flex items-center gap-2 text-forest-950">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h4 className="font-serif font-black text-sm sm:text-base">
                  Official Dasara &amp; Deepawali Special Offer Poster
                </h4>
              </div>
              <button
                onClick={() => setIsPosterModalOpen(false)}
                className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-inner bg-slate-100">
              <Image
                src={FESTIVE_SCHEME_DATA.posterImage}
                alt="Dasara & Deepawali Special Offer Poster - The Aurora Hills Dharwad"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-gray-500 font-medium">
                *Offer applicable on confirmed plot bookings during festive season.
              </span>
              <button
                onClick={() => {
                  setIsPosterModalOpen(false);
                  onOpenEnquiry("Festival Poster Modal CTA");
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-red-800 to-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
              >
                Claim Offer Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

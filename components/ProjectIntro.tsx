"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Trees, Check, ShieldCheck, MapPin, Sun, GraduationCap, ShoppingBag } from "lucide-react";

interface ProjectIntroProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenLayout: () => void;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
  onOpenEnquiry,
  onOpenLayout,
}) => {
  return (
    <section id="about" className="py-24 lg:py-32 vibrant-section-glow text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Gallery Panel */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-emerald-300/40 p-3.5 shadow-2xl shadow-emerald-950/10">
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/entrance-gate-branding.jpg"
                  alt="The Aurora Hills Dharwad - Actual Site Entrance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Stat Pill Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-300/60 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-black text-emerald-700 tracking-wider">
                    Plotted Sanctuary
                  </span>
                  <div className="text-base font-black text-forest-950 font-serif">
                    Residential Villa Plots
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-black text-emerald-700 block">
                    30ft & 40ft Paved Roads
                  </span>
                  <span className="text-xs text-charcoal-700 font-medium">
                    Underground Electricity
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs sm:text-sm font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              About The Development
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight leading-tight">
              An Architectural Eden in <br />
              <span className="vibrant-text-gradient">Dharwad City</span>
            </h2>

            <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed font-normal">
              <strong className="text-forest-950 font-bold">The Aurora Hills</strong> is Dharwad’s premier master-planned plotted community at <a href="https://share.google/lhDyTbBa3vWnMhOFK" target="_blank" rel="noopener noreferrer" className="text-emerald-900 font-bold hover:text-emerald-600 hover:underline transition-colors">Sunset Viewpoint, Karnatak University</a>, offering scenic green views and effortless connectivity to NH-4 and top educational hubs.
            </p>

            {/* Strategic Location Highlights Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50/70 border border-emerald-300/50 space-y-2 shadow-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-700" />
                <span className="text-xs sm:text-sm uppercase tracking-wider font-black text-emerald-900">
                  Prime Address • <a href="https://share.google/lhDyTbBa3vWnMhOFK" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 hover:underline transition-colors">Sunset Viewpoint, Dharwad</a>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-700 font-medium">
                5 mins to Karnatak University, 10 mins to SDM, 7 mins to D-Mart, adjacent to NH-4.
              </p>
            </div>

            {/* Key Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "HDUDA Approved Layout",
                "NA-KJP Clear Title Deeds",
                "1.5L Litres Overhead Water Tank",
                "Bank Loan Ready (SBI, HDFC, ICICI)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-900 font-bold">
                  <div className="w-6 h-6 rounded-full vibrant-icon-emerald flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={() => onOpenEnquiry("About Section CTA")}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:scale-105"
              >
                Request Availability
              </button>

              <button
                onClick={onOpenLayout}
                className="px-6 py-3.5 rounded-full bg-white border border-emerald-300 text-xs sm:text-sm font-bold text-forest-950 flex items-center gap-2 transition-all hover:text-emerald-700 hover:border-emerald-500 shadow-sm"
              >
                <span>View Approved Layout</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

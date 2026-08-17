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
    <section id="about" className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Gallery Panel */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-emerald-100 p-3 shadow-2xl">
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/aerial-layout-sunset.jpg"
                  alt="The Aurora Hills Dharwad City Scenic Layout"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Stat Pill Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-black text-emerald-800 tracking-wider">
                    Plotted Sanctuary
                  </span>
                  <div className="text-base font-black text-forest-950 font-serif">
                    Residential Villa Plots
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-800 block">
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              About The Development
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight leading-tight">
              An Architectural Eden in <br />
              <span className="green-text-gradient">Dharwad City</span>
            </h2>

            <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed font-normal">
              <strong>The Aurora Hills</strong> is Dharwad City’s premier master-planned plotted residential community. Situated on the scenic ridge at <strong>Sunset Viewpoint, Karnatak University, Dharwad</strong>, it offers an unpolluted microclimate, panoramic green views, and effortless connectivity to NH-4 highway and top educational hubs.
            </p>

            {/* Strategic Location Highlights Box */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-700" />
                <span className="text-xs sm:text-sm uppercase tracking-wider font-black text-emerald-900">
                  Prime Address • Sunset Viewpoint, Dharwad
                </span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-700 font-medium">
                Unmatched strategic position: 5 mins to Karnatak University, 10 mins to SDM, 7 mins to D-Mart, adjacent to NH-4 Highway.
              </p>
            </div>

            {/* Key Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-800 font-bold">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>HDUDA Sanctioned Layout</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-800 font-bold">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>NA-KJP Clear Title Deeds</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-800 font-bold">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>1.5L Litres Overhead Water Tank</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-800 font-bold">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Bank Loan Ready (SBI, HDFC, ICICI)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={() => onOpenEnquiry("About Section CTA")}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-transform hover:scale-105"
              >
                Request Availability
              </button>

              <button
                onClick={onOpenLayout}
                className="px-6 py-3.5 rounded-full bg-white border border-emerald-200 text-xs sm:text-sm font-bold text-forest-950 flex items-center gap-2 transition-colors hover:text-emerald-700 shadow-sm"
              >
                <span>View Sanctioned Layout</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

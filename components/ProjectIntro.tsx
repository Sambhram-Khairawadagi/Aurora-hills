"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Trees, Check, ShieldCheck, MapPin } from "lucide-react";

interface ProjectIntroProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenMasterPlan: () => void;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
  onOpenEnquiry,
  onOpenMasterPlan,
}) => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Gallery Panel */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden neu-card border border-white/90 p-3 shadow-2xl">
              <div className="relative h-[380px] sm:h-[450px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/master-plan-3d.jpg"
                  alt="The Aurora Hills Dharwad City 3D Perspective"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Stat Pill Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-4 rounded-2xl neu-glass border border-white/90 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                    Plotted Sanctuary
                  </span>
                  <div className="text-sm font-black text-forest-950 font-serif">
                    Residential Villa Plots
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-800 block">
                    30ft & 40ft Roads
                  </span>
                  <span className="text-[11px] text-charcoal-600">
                    Underground Electrification
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-glass border border-white/90 text-emerald-800 text-xs font-bold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              About The Development
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight leading-tight">
              An Architectural Eden in <br />
              <span className="green-text-gradient">Dharwad City</span>
            </h2>

            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed">
              <strong>The Aurora Hills</strong> is Dharwad City’s premier planned residential sanctuary. Situated in the tranquil green environs of Dharwad City, adjacent to the National Highway NH-4, it provides effortless connectivity to the Hubli-Dharwad Twin City corridor.
            </p>

            {/* Strategic Location Highlights Box */}
            <div className="p-4 rounded-2xl neu-inset border border-white/80 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-700">
                  Prime Location • Dharwad City
                </span>
              </div>
              <p className="text-xs text-charcoal-700 font-medium">
                High-growth residential corridor with instant access to NH-4 Highway and the Twin City network.
              </p>
            </div>

            {/* Key Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-charcoal-800 font-semibold">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>HDUDA Sanctioned Layout</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-charcoal-800 font-semibold">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>NA-KJP Approved Clear Titles</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-charcoal-800 font-semibold">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>1.5L Litres Overhead Water Tank</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-charcoal-800 font-semibold">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>SBI & HDFC Bank Loan Ready</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={() => onOpenEnquiry("About Section CTA")}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-transform hover:scale-105"
              >
                Request Availability
              </button>

              <button
                onClick={onOpenMasterPlan}
                className="px-6 py-3.5 rounded-full neu-button text-xs font-bold text-forest-950 flex items-center gap-1.5 transition-colors hover:text-emerald-700"
              >
                <span>View Master Plan</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

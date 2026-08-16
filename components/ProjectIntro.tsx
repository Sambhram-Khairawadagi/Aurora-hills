"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle, Sparkles, ArrowUpRight, Trees, Compass, ShieldCheck } from "lucide-react";

interface ProjectIntroProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenMasterPlan: () => void;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
  onOpenEnquiry,
  onOpenMasterPlan,
}) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-sand-50 text-forest-950 relative overflow-hidden">
      {/* Decorative leaf motifs and background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Media Column with Layered Aesthetics */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/hero-aerial.jpg"
                  alt="Aurora Hills Dharwad Nature Plotted Living"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block px-3 py-1 bg-gold-500/90 text-forest-950 text-xs font-bold uppercase rounded-full mb-2">
                    Master Planned Community
                  </div>
                  <div className="text-xl font-bold font-serif">
                    Mansur & Sanna Somapura, Dharwad
                  </div>
                  <p className="text-xs text-sand-100 mt-1 font-kannada">
                    ????? : ????? + ???? ???????, ????? : ??????
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-forest-900 text-white p-5 rounded-2xl shadow-2xl border border-gold-400/40 max-w-xs backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gold-400 text-forest-950 font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gold-300 uppercase tracking-wider">
                    Smart City Zone
                  </div>
                  <div className="text-sm font-bold font-serif text-white">
                    Corporation & HUDA Approved
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold tracking-wider uppercase">
              <Trees className="w-3.5 h-3.5 text-forest-600" />
              A Lifestyle Upgrade in Dharwad
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-maroon-700 font-serif">
                The Perfect Plots In Dharwad You Could Find
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 font-serif leading-tight">
                Never Before Lifestyle Comes to Dharwad
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Situated in the heart of Dharwad city along <strong>National Highway NH-4</strong>, <strong>Aurora Hills</strong> stands as one of the premier township destinations for anyone seeking a dream home or high-value land investment in Hubli-Dharwad.
              </p>
              <p>
                This Corporation & HDUDA approved project is strategically located in a fast-developing Smart City zone, combining wide internal roads, centralized HTP layout planning, underground infrastructure, and lush green mountain surroundings.
              </p>
            </div>

            {/* Feature Bullets from brochure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Centralized HTP layout planning",
                "Wide asphalt roads & underground cabling",
                "15�20 mins to Hubli-Dharwad Twin City",
                "Close to major IT parks & universities",
                "Clear titles with bank loan approvals",
                "Grand clubhouse & wellness amenities",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-forest-600 mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-forest-900">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenEnquiry("Project Intro Section")}
                className="px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-forest-900 hover:bg-forest-800 rounded-full shadow-xl transition-all flex items-center gap-2 hover:shadow-forest-900/30"
              >
                <span>Discover Aurora Hills</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenMasterPlan}
                className="px-6 py-3.5 text-sm font-semibold text-forest-900 hover:text-gold-600 border border-forest-300 hover:border-gold-500 rounded-full transition-colors flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-gold-500" />
                <span>View Master Plan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

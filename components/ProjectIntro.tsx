"use client";

import React from "react";
import Image from "next/image";
import { Trees, Compass, ArrowRight, ShieldCheck, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

interface ProjectIntroProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenMasterPlan: () => void;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
  onOpenEnquiry,
  onOpenMasterPlan,
}) => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-forest-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Glass Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[4/3] group">
              <Image
                src="/images/hero-aerial.webp"
                alt="The Aurora Hills Dharwad Lifestyle Community"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />

              {/* Floating Frosted Glass Pill over Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-forest-950/80 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold-300">
                    Bilingual Legal Title
                  </span>
                  <div className="text-xs font-semibold text-white font-kannada">
                    ಗ್ರಾಮ : ಮನಸೂರ + ಸಣ್ಣ ಸೋಮಾಪುರ, ತಾಲೂಕ : ಧಾರವಾಡ
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/30 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Storytelling & Key Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gold-300 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Never-Before Lifestyle Comes to Dharwad
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight leading-tight">
                Designed for Serenity. <br />
                <span className="gold-text-gradient">Built for Prosperity.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-sand-200 leading-relaxed font-light">
              <strong>The Aurora Hills</strong> is Dharwad’s landmark residential plotted township, nestled in the scenic green lap of Mansur & Sanna Somapura. Crafted to deliver an elevated lifestyle, the project blends pure hillside air with state-of-the-art urban infrastructure.
            </p>

            {/* 3 Minimalist Glass Stat Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
                <div className="text-2xl font-black text-gold-300 font-serif">15-20</div>
                <div className="text-xs font-bold text-white mt-1">Minutes</div>
                <div className="text-[11px] text-sand-300">To Twin City Hubli-Dharwad</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
                <div className="text-2xl font-black text-emerald-300 font-serif">1.5 Lakh L</div>
                <div className="text-xs font-bold text-white mt-1">Overhead Tank</div>
                <div className="text-[11px] text-sand-300">Continuous Water Supply</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
                <div className="text-2xl font-black text-gold-300 font-serif">100%</div>
                <div className="text-xs font-bold text-white mt-1">Clear Titles</div>
                <div className="text-[11px] text-sand-300">NA-KJP & HDUDA Sanctioned</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => onOpenEnquiry("About Section CTA")}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
              >
                <span>Request Project Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenMasterPlan}
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-all"
              >
                View Master Layout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

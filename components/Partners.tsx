"use client";

import React from "react";
import Image from "next/image";
import { Handshake, Award, ShieldCheck, Sparkles } from "lucide-react";
import { PARTNERS_INFO } from "@/lib/projectData";

export const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-forest-950 text-white border-t border-forest-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            Marketing & Brand Alliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
            Project Marketing & <span className="gold-text-gradient">Brand Partners</span>
          </h2>
          <p className="text-sand-100 text-xs sm:text-sm">
            Backed by trusted industry leaders in real estate marketing and creative brand architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Property Basket Card */}
          <div className="p-8 rounded-3xl bg-forest-900/80 border border-forest-800 hover:border-gold-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-300 bg-gold-950/80 border border-gold-800/60 px-3 py-1 rounded-full">
                  Marketed By
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">Verified Partner</span>
              </div>

              {/* Logo Frame */}
              <div className="p-4 rounded-2xl bg-white/95 border border-sand-300 flex items-center justify-center h-28">
                <Image
                  src="/images/property-basket-logo.png"
                  alt="Property Basket - Carry the Reality, Powered by SAMSO"
                  width={220}
                  height={70}
                  className="object-contain max-h-20"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold font-serif text-white">
                  PROPERTY BASKET
                </h3>
                <div className="text-xs font-semibold text-gold-300">
                  Carry the Reality � <span className="text-sand-200">Powered by SAMSO</span>
                </div>
              </div>

              <p className="text-xs text-sand-200 leading-relaxed">
                {PARTNERS_INFO.propertyBasket.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-forest-800 flex items-center gap-2 text-xs text-gold-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Authorized Marketing & Sales Management</span>
            </div>
          </div>

          {/* Reachmaxx Card */}
          <div className="p-8 rounded-3xl bg-forest-900/80 border border-forest-800 hover:border-gold-400/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-300 bg-gold-950/80 border border-gold-800/60 px-3 py-1 rounded-full">
                  Brand & Creative
                </span>
                <span className="text-[11px] text-gold-400 font-medium">Strategic Partner</span>
              </div>

              {/* Logo Frame */}
              <div className="p-4 rounded-2xl bg-white/95 border border-sand-300 flex items-center justify-center h-28">
                <Image
                  src="/images/reachmax-logo.png"
                  alt="Reachmaxx - Idea Rules the World"
                  width={220}
                  height={70}
                  className="object-contain max-h-20"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold font-serif text-white">
                  REACHMAXX
                </h3>
                <div className="text-xs font-semibold text-gold-300">
                  Idea Rules the World
                </div>
              </div>

              <p className="text-xs text-sand-200 leading-relaxed">
                {PARTNERS_INFO.reachmaxx.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-forest-800 flex items-center gap-2 text-xs text-gold-300">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Creative Brand Architecture & Communications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

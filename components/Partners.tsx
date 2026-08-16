"use client";

import React from "react";
import Image from "next/image";
import { Handshake, Award, Sparkles, Building } from "lucide-react";

export const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-forest-950 text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-gold-300 text-xs font-bold uppercase tracking-widest">
            <Handshake className="w-3.5 h-3.5 text-gold-400" />
            Strategic Marketing Partners
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
            Promoted & Marketed By
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Partner 1: Property Basket */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-gold-400/40 backdrop-blur-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 shadow-xl">
            <div className="relative w-48 h-20 bg-white/5 rounded-2xl border border-white/10 p-3 flex items-center justify-center">
              <Image
                src="/images/property-basket-logo.png"
                alt="Property Basket - Powered by SAMSO"
                width={160}
                height={60}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-white">Property Basket</h3>
              <p className="text-xs text-gold-300 font-medium">“Carry the Reality” • Powered by SAMSO</p>
              <p className="text-xs text-sand-200 mt-2 font-light max-w-xs">
                Official strategic real estate marketing and project execution advisory partner.
              </p>
            </div>
          </div>

          {/* Partner 2: Reachmaxx */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-gold-400/40 backdrop-blur-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 shadow-xl">
            <div className="relative w-48 h-20 bg-white/5 rounded-2xl border border-white/10 p-3 flex items-center justify-center">
              <Image
                src="/images/reachmax-logo.png"
                alt="Reachmaxx - Idea Rules the World"
                width={160}
                height={60}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif text-white">Reachmaxx</h3>
              <p className="text-xs text-gold-300 font-medium">“Idea Rules the World”</p>
              <p className="text-xs text-sand-200 mt-2 font-light max-w-xs">
                Creative brand ideation, campaign strategy, and digital outreach specialists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Navigation, Car, Clock, Compass, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { CONNECTIVITY_HIGHLIGHTS } from "@/lib/projectData";

interface LocationConnectivityProps {
  onOpenEnquiry: (source?: string) => void;
}

export const LocationConnectivity: React.FC<LocationConnectivityProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<"map" | "satellite">("map");

  return (
    <section id="location" className="py-24 lg:py-32 bg-forest-950 text-white relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold-300 text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            Strategic Dharwad Hub
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight">
            Location & <span className="gold-text-gradient">Connectivity Advantage</span>
          </h2>
          <p className="text-sand-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Strategically located at Mansur & Sanna Somapura, Dharwad with rapid seamless connectivity to NH-4 Highway and the Twin City network.
          </p>

          {/* Map vs Satellite Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mt-4">
            <button
              onClick={() => setActiveTab("map")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "map"
                  ? "bg-gold-400 text-forest-950 shadow-md scale-105"
                  : "text-sand-200 hover:text-white"
              }`}
            >
              Route & Landmarks Map
            </button>
            <button
              onClick={() => setActiveTab("satellite")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "satellite"
                  ? "bg-gold-400 text-forest-950 shadow-md scale-105"
                  : "text-sand-200 hover:text-white"
              }`}
            >
              Satellite Landscape View
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Map Canvas Card */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col justify-between">
            <div className="relative min-h-[380px] sm:min-h-[460px] bg-black">
              <Image
                src={activeTab === "map" ? "/images/satellite-map.jpg" : "/images/hero-aerial.jpg"}
                alt="The Aurora Hills Dharwad Connectivity Map"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent pointer-events-none" />

              {/* Floating Pin Highlight */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-forest-950/85 border border-white/10 backdrop-blur-xl shadow-2xl max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold text-white font-serif">The Aurora Hills</span>
                </div>
                <p className="text-[11px] text-sand-300">
                  Mansur + Sanna Somapura, Dharwad (Adjacent to NH-4 Bypass)
                </p>
              </div>
            </div>

            {/* Map Action Strip */}
            <div className="p-5 bg-white/[0.02] border-t border-white/10 flex items-center justify-between gap-4">
              <div className="text-xs text-sand-200">
                Direct GPS navigation & road directions
              </div>
              <a
                href="https://maps.google.com/?q=Dharwad+NH4+Mansur"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gold-300 flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Travel Times Grid */}
          <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
            {CONNECTIVITY_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-gold-400/40 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.04] flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-gold-400/30 text-gold-400 transition-colors flex-shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-sand-300">{item.distance}</span>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-bold text-gold-300 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}

            {/* Bilingual Location Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-forest-900/60 to-forest-950/80 border border-gold-400/30 backdrop-blur-xl space-y-1 text-xs">
              <span className="text-[10px] uppercase tracking-wider font-bold text-gold-400">
                Official Revenue Village Record
              </span>
              <div className="font-semibold text-white font-kannada text-xs">
                ಗ್ರಾಮ : ಮನಸೂರ + ಸಣ್ಣ ಸೋಮಾಪುರ, ತಾಲೂಕ : ಧಾರವಾಡ
              </div>
              <div className="text-[11px] text-sand-300">
                (Village: Mansur + Sanna Somapura, Taluka: Dharwad)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

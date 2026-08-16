"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Navigation, Compass, ExternalLink, Clock, Plane, Train, Bus, ShieldCheck } from "lucide-react";
import { CONNECTIVITY_HIGHLIGHTS } from "@/lib/projectData";

interface LocationConnectivityProps {
  onOpenEnquiry: (source?: string) => void;
}

export const LocationConnectivity: React.FC<LocationConnectivityProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<"map" | "satellite">("map");

  return (
    <section id="location" className="py-20 lg:py-28 bg-forest-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            Strategic Location & Proximity
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
            Connected to <span className="gold-text-gradient">What Matters</span>
          </h2>
          <p className="text-sand-100 text-sm sm:text-base leading-relaxed">
            Situated near NH-4 Highway, combining peaceful green tranquility with effortless transit to Hubli-Dharwad Twin City and Hubli Airport.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Connectivity Cards Left */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-forest-900/80 border border-forest-800 space-y-4">
              <h3 className="text-lg font-bold font-serif text-gold-300 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-gold-400" />
                Key Connectivity Highlights
              </h3>

              <div className="space-y-3">
                {CONNECTIVITY_HIGHLIGHTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-forest-950/80 border border-forest-800 hover:border-gold-400/40 transition-colors flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-forest-900 text-gold-400 flex-shrink-0 mt-0.5">
                      {idx === 2 ? <Plane className="w-4 h-4" /> : idx === 3 ? <Train className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-white">{item.title}</span>
                        <span className="text-xs font-extrabold text-gold-300">{item.time}</span>
                      </div>
                      <p className="text-[11px] text-sand-200 mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-gray-400 italic">
                *Travel times stated in project brochure are approximate and subject to road traffic conditions.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-emerald-300">Google Maps Navigation</div>
                <div className="text-[11px] text-sand-200">Mansur & Sanna Somapura, Dharwad</div>
              </div>
              <a
                href="https://maps.google.com/?q=Dharwad+NH4+Mansur"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gold-400 hover:bg-gold-300 text-forest-950 text-xs font-bold flex items-center gap-1.5 shadow-md flex-shrink-0"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Right */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-gold-400/30 shadow-2xl bg-forest-900">
              {/* Tab Selector */}
              <div className="p-3 bg-forest-950 border-b border-forest-800 flex items-center justify-between">
                <span className="text-xs font-bold text-gold-300 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  The Aurora Hills Location Visual
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("map")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      activeTab === "map" ? "bg-gold-400 text-forest-950 font-bold" : "text-sand-200 hover:text-white"
                    }`}
                  >
                    Satellite Visual
                  </button>
                  <button
                    onClick={() => setActiveTab("satellite")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      activeTab === "satellite" ? "bg-gold-400 text-forest-950 font-bold" : "text-sand-200 hover:text-white"
                    }`}
                  >
                    Open Street Map
                  </button>
                </div>
              </div>

              {/* Map Display */}
              <div className="relative aspect-[16/10] bg-forest-950 flex items-center justify-center overflow-hidden">
                {activeTab === "map" ? (
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/satellite-map.jpg"
                      alt="The Aurora Hills Dharwad Satellite Location Map"
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-forest-950/90 text-white px-3 py-1.5 rounded-lg border border-gold-400/40 text-xs font-bold flex items-center gap-1.5 backdrop-blur-md">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      THE AURORA HILLS SITE
                    </div>
                  </div>
                ) : (
                  <iframe
                    title="Aurora Hills Dharwad Location Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=74.95%2C15.42%2C75.05%2C15.49&layer=mapnik&marker=15.4589%2C75.0078"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Map Footer Info */}
              <div className="p-4 bg-forest-950 text-xs text-sand-200 flex flex-wrap items-center justify-between gap-3">
                <span className="font-kannada">????? : ????? + ???? ???????, ????? : ??????</span>
                <button
                  onClick={() => onOpenEnquiry("Location Map CTA")}
                  className="text-gold-300 hover:text-white font-bold underline"
                >
                  Book Free Site Visit Pickup ?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

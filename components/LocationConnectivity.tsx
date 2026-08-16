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
    <section id="location" className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-glass border border-white/90 text-emerald-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            Strategic Connectivity Hub
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Location & <span className="green-text-gradient">Travel Time Advantage</span>
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Strategically located at Dharwad City with rapid seamless connectivity to NH-4 Highway and the Twin City network.
          </p>

          {/* Map vs Satellite Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-full neu-inset mt-4">
            <button
              onClick={() => setActiveTab("map")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "map"
                  ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md scale-105"
                  : "text-charcoal-700 hover:text-emerald-700"
              }`}
            >
              Route & Landmarks Map
            </button>
            <button
              onClick={() => setActiveTab("satellite")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "satellite"
                  ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md scale-105"
                  : "text-charcoal-700 hover:text-emerald-700"
              }`}
            >
              Satellite Landscape View
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Map Canvas Card */}
          <div className="lg:col-span-7 neu-card border border-white/90 p-3 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="relative min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden bg-sand-100">
              <Image
                src={activeTab === "map" ? "/images/satellite-map.jpg" : "/images/hero-aerial.jpg"}
                alt="The Aurora Hills Dharwad City Connectivity Map"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating Pin Highlight */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl neu-glass border border-white/90 shadow-xl max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-forest-950 font-serif">The Aurora Hills</span>
                </div>
                <p className="text-[11px] text-charcoal-600">
                  Dharwad City, Karnataka (Near NH-4 Bypass)
                </p>
              </div>
            </div>

            {/* Map Action Strip */}
            <div className="p-4 flex items-center justify-between gap-4">
              <div className="text-xs text-charcoal-700 font-semibold">
                Direct GPS navigation & road directions
              </div>
              <a
                href="https://maps.app.goo.gl/3EnF93gjmTueXy667"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full neu-button text-xs font-bold text-forest-950 hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Travel Times Grid */}
          <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
            {CONNECTIVITY_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl neu-glass border border-white/90 shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl neu-inset text-emerald-700 flex-shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-forest-950 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-charcoal-600">{item.distance}</span>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-300">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}

            {/* Prime City Location Card */}
            <div className="p-5 rounded-2xl neu-inset border border-white/80 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-700">
                  Prime Dharwad City Address
                </span>
              </div>
              <p className="text-xs text-charcoal-700 leading-relaxed font-medium">
                Situated directly in Dharwad City with effortless access to IT hubs, top educational institutes, and transport arteries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

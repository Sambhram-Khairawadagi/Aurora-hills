"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  MapPin, 
  Navigation, 
  Car, 
  Clock, 
  GraduationCap, 
  ShoppingBag, 
  Sun, 
  Train, 
  Plane,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  QrCode
} from "lucide-react";
import { CONNECTIVITY_CATEGORIES } from "@/lib/projectData";

interface LocationConnectivityProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenQR?: () => void;
}

export const LocationConnectivity: React.FC<LocationConnectivityProps> = ({ onOpenEnquiry, onOpenQR }) => {
  const [activeCategory, setActiveCategory] = useState<"education" | "shopping" | "transit" | "nature">("education");

  return (
    <section id="location" className="py-24 lg:py-32 vibrant-section-glow text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs sm:text-sm font-black uppercase tracking-widest">
            <MapPin className="w-4 h-4 text-emerald-600" />
            Prime Dharwad City Location
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Strategic Location & <span className="vibrant-text-gradient">Landmark Proximities</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Minutes from top schools, universities, malls, and major highways.
          </p>

          {/* Proximity Category Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            {[
              { id: "education", label: "Schools & Colleges", icon: GraduationCap },
              { id: "shopping", label: "Malls & Supermarkets", icon: ShoppingBag },
              { id: "transit", label: "Highways & Transit", icon: Car },
              { id: "nature", label: "Sunset View & Lakes", icon: Sun },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id as any)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 transition-all ${
                  activeCategory === id
                    ? "bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-105"
                    : "bg-white text-charcoal-800 border border-emerald-200/80 hover:bg-emerald-50 shadow-sm"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Map & Proximity Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Real Satellite & Regional Map */}
          <div className="lg:col-span-7 bg-white border-2 border-emerald-300/40 p-4 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/10 flex flex-col justify-between">
            <div className="relative min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden bg-sand-100">
              <Image
                src="/images/satellite-map.jpg"
                alt="The Aurora Hills Dharwad City Connectivity Map"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Pin Highlight */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-300/60 shadow-xl max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-sm font-black text-forest-950 font-serif">The Aurora Hills</span>
                </div>
                <p className="text-xs text-charcoal-700 font-medium">
                  Sunset Viewpoint, Karnatak University, Dharwad
                </p>
                <div className="mt-2 text-[11px] font-bold text-emerald-800 vibrant-badge-emerald px-2.5 py-0.5 rounded-full inline-block">
                  Adjacent to NH-4 Highway
                </div>
              </div>
            </div>

            {/* Map Action Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs sm:text-sm text-charcoal-700 font-bold">
                GPS Coordinates: 15.4589° N, 74.9902° E
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {onOpenQR && (
                  <button
                    onClick={onOpenQR}
                    className="px-4 py-2.5 rounded-full bg-white border border-emerald-300/80 text-forest-950 hover:text-emerald-700 text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm hover:shadow-md transition-all"
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    <span>Scan Location QR</span>
                  </button>
                )}
                <a
                  href="https://maps.app.goo.gl/3EnF93gjmTueXy667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-105"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Selected Category Proximity Cards */}
          <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
            <div className="space-y-3">
              {CONNECTIVITY_CATEGORIES[activeCategory].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl vibrant-card flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl vibrant-icon-emerald flex-shrink-0">
                      {activeCategory === "education" && <GraduationCap className="w-5 h-5 text-white" />}
                      {activeCategory === "shopping" && <ShoppingBag className="w-5 h-5 text-white" />}
                      {activeCategory === "transit" && <Car className="w-5 h-5 text-white" />}
                      {activeCategory === "nature" && <Sun className="w-5 h-5 text-white" />}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-forest-950 group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-xs text-charcoal-600 font-medium">{item.distance}</span>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="text-xs sm:text-sm font-black vibrant-badge-emerald px-3.5 py-1.5 rounded-full">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

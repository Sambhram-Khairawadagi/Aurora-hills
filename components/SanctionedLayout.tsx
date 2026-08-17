"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, ZoomOut, RotateCcw, Download, Sparkles, MapPin, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface SanctionedLayoutProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
  onOpenBrochure: () => void;
}

export const SanctionedLayout: React.FC<SanctionedLayoutProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
}) => {
  const [activeLayoutView, setActiveLayoutView] = useState<"blueprint" | "site_roads" | "kannada_plan">("blueprint");
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const getLayoutImageSrc = () => {
    switch (activeLayoutView) {
      case "blueprint":
        return "/images/sanctioned-layout-map.jpg";
      case "site_roads":
        return "/images/site-actual-1.jpg";
      case "kannada_plan":
        return "/images/layout-kannada-details.jpg";
      default:
        return "/images/sanctioned-layout-map.jpg";
    }
  };

  return (
    <section id="layout" className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            HDUDA & NA-KJP Approved Plan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Sanctioned <span className="green-text-gradient">Layout Plan & Site Progress</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Inspect the officially approved layout plan, demarcated plot boundaries, 30ft/40ft wide asphalt avenues, and actual on-site road work.
          </p>

          {/* View Mode Buttons */}
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white border border-emerald-200 shadow-sm mt-2">
            <button
              onClick={() => { setActiveLayoutView("blueprint"); handleResetZoom(); }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeLayoutView === "blueprint"
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md"
                  : "text-charcoal-700 hover:text-emerald-700"
              }`}
            >
              Sanctioned Master Blueprint
            </button>
            <button
              onClick={() => { setActiveLayoutView("site_roads"); handleResetZoom(); }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeLayoutView === "site_roads"
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md"
                  : "text-charcoal-700 hover:text-emerald-700"
              }`}
            >
              Actual On-Ground Roads
            </button>
            <button
              onClick={() => { setActiveLayoutView("kannada_plan"); handleResetZoom(); }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeLayoutView === "kannada_plan"
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md"
                  : "text-charcoal-700 hover:text-emerald-700"
              }`}
            >
              Official Government Plan
            </button>
          </div>
        </div>

        {/* Layout Viewer Card with Zoom Controls */}
        <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-emerald-200 p-3 sm:p-5 shadow-2xl">
          <div className="relative min-h-[450px] sm:min-h-[580px] rounded-2xl overflow-hidden bg-sand-50 flex items-center justify-center">
            <div
              className="relative w-full h-full min-h-[450px] sm:min-h-[580px] transition-transform duration-300 ease-out flex items-center justify-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <Image
                src={getLayoutImageSrc()}
                alt="The Aurora Hills Dharwad Sanctioned Layout"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />
            </div>

            {/* Zoom HUD */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
              <button
                onClick={handleZoomIn}
                className="p-3 rounded-xl bg-white/90 hover:bg-white text-forest-950 shadow-md transition-colors border border-gray-200"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-3 rounded-xl bg-white/90 hover:bg-white text-forest-950 shadow-md transition-colors border border-gray-200"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-3 rounded-xl bg-white/90 hover:bg-white text-forest-950 shadow-md transition-colors border border-gray-200"
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Real Estate Plot Dimension Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-emerald-100 shadow-xl flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs uppercase font-extrabold text-emerald-800 tracking-wider">
                Popular Villa Plot
              </span>
              <h3 className="text-2xl font-black font-serif text-forest-950 mt-1">1,200 sq.ft</h3>
              <p className="text-sm text-charcoal-700 mt-1 font-medium">30 x 40 ft • Ideal for 3BHK Luxury Villa</p>
              <p className="text-sm font-black text-emerald-800 mt-2">Starting ₹42 Lakhs*</p>
            </div>
            <button
              onClick={() => onOpenEnquiry("Sanctioned Plan 30x40", "1,200 sq.ft (30x40)")}
              className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
            >
              Enquire Plot Availability
            </button>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-emerald-100 shadow-xl flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs uppercase font-extrabold text-emerald-800 tracking-wider">
                Family Villa Plot
              </span>
              <h3 className="text-2xl font-black font-serif text-forest-950 mt-1">1,500 sq.ft</h3>
              <p className="text-sm text-charcoal-700 mt-1 font-medium">30 x 50 ft • Spacious Garden Living</p>
              <p className="text-sm font-black text-emerald-800 mt-2">Starting ₹52.5 Lakhs*</p>
            </div>
            <button
              onClick={() => onOpenEnquiry("Sanctioned Plan 30x50", "1,500 sq.ft (30x50)")}
              className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
            >
              Enquire Plot Availability
            </button>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-emerald-100 shadow-xl flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs uppercase font-extrabold text-emerald-800 tracking-wider">
                Premium Corner Estate
              </span>
              <h3 className="text-2xl font-black font-serif text-forest-950 mt-1">2,400 sq.ft</h3>
              <p className="text-sm text-charcoal-700 mt-1 font-medium">40 x 60 ft • Grand Hillside Mansion</p>
              <p className="text-sm font-black text-emerald-800 mt-2">Starting ₹84 Lakhs*</p>
            </div>
            <button
              onClick={() => onOpenEnquiry("Sanctioned Plan 40x60", "2,400 sq.ft (40x60)")}
              className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
            >
              Enquire Plot Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

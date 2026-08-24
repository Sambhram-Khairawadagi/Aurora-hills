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
        return "/images/sanctioned-layout-map.png";
      case "site_roads":
        return "/images/site-actual-1.jpg";
      case "kannada_plan":
        return "/images/layout-kannada-details.jpg";
      default:
        return "/images/sanctioned-layout-map.png";
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
            Officially approved layout plan with demarcated plot boundaries and actual on-site road work.
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
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Layout Viewer Card with Zoom Controls */}
          <div className="w-full lg:w-3/4 relative rounded-3xl overflow-hidden bg-white border-2 border-emerald-200 p-3 sm:p-5 shadow-2xl flex-shrink-0">
            <div className="relative min-h-[450px] sm:min-h-[580px] rounded-2xl overflow-hidden bg-sand-50 flex items-center justify-center">
              <div
                className="relative w-full h-full min-h-[450px] sm:min-h-[580px] transition-transform duration-300 ease-out flex items-center justify-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <Image
                  src={getLayoutImageSrc()}
                  alt="The Aurora Hills Dharwad Sanctioned Layout"
                  fill
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

          {/* Sidebar Plot Details */}
          <div className="w-full lg:w-1/4 flex flex-col">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-emerald-100">
              <h3 className="text-lg sm:text-xl font-black font-serif text-forest-950 mb-6 border-b border-emerald-100 pb-4">
                Available Dimensions
              </h3>
              
              <div className="space-y-6">
                {/* Plot 1 */}
                <div 
                  className="group border-l-2 border-transparent hover:border-emerald-500 pl-4 transition-all cursor-pointer" 
                  onClick={() => onOpenEnquiry("Sanctioned Plan 30x40", "1,200 sq.ft (30x40)")}
                >
                  <h4 className="text-xl font-black text-forest-950 mt-1 group-hover:text-emerald-700 transition-colors">1,200 sq.ft</h4>
                  <p className="text-xs text-gray-500 mt-1 font-medium">30 × 40 ft • 3BHK Luxury Villa</p>
                  <p className="text-xs font-bold text-emerald-800 mt-1">Starting ₹42 Lakhs*</p>
                </div>

                {/* Plot 2 */}
                <div 
                  className="group border-l-2 border-transparent hover:border-emerald-500 pl-4 transition-all cursor-pointer" 
                  onClick={() => onOpenEnquiry("Sanctioned Plan 30x50", "1,500 sq.ft (30x50)")}
                >
                  <h4 className="text-xl font-black text-forest-950 mt-1 group-hover:text-emerald-700 transition-colors">1,500 sq.ft</h4>
                  <p className="text-xs text-gray-500 mt-1 font-medium">30 × 50 ft • Spacious Garden Living</p>
                  <p className="text-xs font-bold text-emerald-800 mt-1">Starting ₹52.5 Lakhs*</p>
                </div>

                {/* Plot 3 */}
                <div 
                  className="group border-l-2 border-transparent hover:border-emerald-500 pl-4 transition-all cursor-pointer" 
                  onClick={() => onOpenEnquiry("Sanctioned Plan 40x60", "2,400 sq.ft (40x60)")}
                >
                  <h4 className="text-xl font-black text-forest-950 mt-1 group-hover:text-emerald-700 transition-colors">2,400 sq.ft</h4>
                  <p className="text-xs text-gray-500 mt-1 font-medium">40 × 60 ft • Grand Hillside Mansion</p>
                  <p className="text-xs font-bold text-emerald-800 mt-1">Starting ₹84 Lakhs*</p>
                </div>
              </div>

              <button
                onClick={() => onOpenEnquiry("Sanctioned Plan Sidebar", "Any Size")}
                className="w-full mt-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

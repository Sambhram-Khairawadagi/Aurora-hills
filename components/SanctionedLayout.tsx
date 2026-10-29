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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            HDUDA &amp; NA-KJP Approved Plan
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 tracking-tight">
            Approved <span className="green-text-gradient">Layout Plan &amp; Site Progress</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Officially approved layout plan with demarcated plot boundaries and completed physical road infrastructure.
          </p>

          {/* View Mode Buttons */}
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white border border-emerald-200 shadow-sm mt-2">
            <button
              onClick={() => { setActiveLayoutView("blueprint"); handleResetZoom(); }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeLayoutView === "blueprint"
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-md"
                  : "text-charcoal-700 hover:text-emerald-700"
              }`}
            >
              Approved Master Blueprint
            </button>
            <button
              onClick={() => { setActiveLayoutView("site_roads"); handleResetZoom(); }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
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
                  alt="The Aurora Hills Dharwad Approved Layout"
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
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
                Festive Rewards Active
              </span>
              <h3 className="font-serif text-xl font-bold text-forest-950 mb-5 border-b border-gray-100 pb-3">
                Available Dimensions
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5">
                {/* Plot 1 */}
                <div 
                  className="group border-l-2 border-transparent hover:border-emerald-600 pl-3.5 transition-all cursor-pointer bg-gray-50/70 p-3 rounded-r-xl" 
                  onClick={() => onOpenEnquiry("Approved Plan 30x40 (1kg Silver)", "1,200 sq.ft (30x40)")}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-bold text-forest-950 group-hover:text-emerald-700 transition-colors">1,200 sq.ft</h4>
                    <span className="text-xs font-medium text-slate-700 bg-slate-200/80 px-2.5 py-0.5 rounded-full">30 × 40</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5 font-normal">3BHK Luxury Villa</p>
                  <p className="text-xs font-semibold text-emerald-800 mt-0.5">Price on Request</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-md bg-white border border-gray-200 text-slate-800 text-[11px] font-medium">
                    🎁 1 KG Hallmarked Silver
                  </span>
                </div>

                {/* Plot 2 */}
                <div 
                  className="group border-l-2 border-transparent hover:border-emerald-600 pl-3.5 transition-all cursor-pointer bg-emerald-50/40 p-3 rounded-r-xl" 
                  onClick={() => onOpenEnquiry("Approved Plan 30x50 (1.5kg Silver)", "1,500 sq.ft (30x50)")}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-bold text-forest-950 group-hover:text-emerald-700 transition-colors">1,500 sq.ft</h4>
                    <span className="text-xs font-medium text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full">30 × 50</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5 font-normal">Spacious Garden Living</p>
                  <p className="text-xs font-semibold text-emerald-800 mt-0.5">Price on Request</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-md bg-white border border-emerald-200 text-emerald-900 text-[11px] font-medium">
                    🎁 1.5 KG Hallmarked Silver
                  </span>
                </div>

                {/* Plot 3 */}
                <div 
                  className="group border-l-2 border-transparent hover:border-emerald-600 pl-3.5 transition-all cursor-pointer bg-amber-50/50 p-3 rounded-r-xl" 
                  onClick={() => onOpenEnquiry("Approved Plan 40x60 (50g Gold)", "2,400 sq.ft (40x60)")}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-bold text-forest-950 group-hover:text-emerald-700 transition-colors">2,400 sq.ft</h4>
                    <span className="text-xs font-medium text-amber-950 bg-amber-100 px-2.5 py-0.5 rounded-full">40 × 60</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5 font-normal">Grand Hillside Mansion</p>
                  <p className="text-xs font-semibold text-emerald-800 mt-0.5">Price on Request</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-md bg-white border border-amber-200 text-amber-950 text-[11px] font-medium">
                    🎁 50g 22K Gold
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenEnquiry("Approved Plan Sidebar", "Any Size")}
                className="w-full mt-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all"
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

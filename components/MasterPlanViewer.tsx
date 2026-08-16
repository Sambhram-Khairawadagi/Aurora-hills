"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Download, CheckCircle, MapPin, Compass, Sparkles, Layers } from "lucide-react";

interface MasterPlanViewerProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenBrochure: () => void;
}

export const MasterPlanViewer: React.FC<MasterPlanViewerProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"2D" | "3D">("2D");

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <section id="master-plan" className="py-24 lg:py-32 bg-sand-50 text-forest-950 relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1B4332_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900 text-gold-300 text-xs font-bold uppercase tracking-widest shadow-md">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            Vastu-Compliant Master Layout
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Curated <span className="text-maroon-700">Master Plan Layout</span>
          </h2>
          <p className="text-forest-800 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Thoughtfully planned plotted enclave with wide 30ft/40ft internal asphalt roads, landscaped green buffers, underground drainage, and dedicated community zones.
          </p>

          {/* View Toggle Bar */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-sand-200 border border-sand-300 shadow-inner mt-4">
            <button
              onClick={() => { setViewMode("2D"); handleResetZoom(); }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                viewMode === "2D"
                  ? "bg-forest-950 text-gold-300 shadow-lg scale-105"
                  : "text-forest-900 hover:text-forest-700"
              }`}
            >
              2D Master Layout Plan
            </button>
            <button
              onClick={() => { setViewMode("3D"); handleResetZoom(); }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                viewMode === "3D"
                  ? "bg-forest-950 text-gold-300 shadow-lg scale-105"
                  : "text-forest-900 hover:text-forest-700"
              }`}
            >
              3D Perspective View
            </button>
          </div>
        </div>

        {/* Master Plan Canvas Container */}
        <div className="relative bg-white rounded-3xl border border-forest-800/15 shadow-[0_20px_50px_rgba(15,45,30,0.1)] overflow-hidden">
          {/* Controls Strip */}
          <div className="p-4 sm:p-5 bg-sand-100/90 border-b border-sand-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-forest-950">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Village: Mansur + Sanna Somapura, Taluka: Dharwad</span>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomIn}
                className="px-3 py-2 rounded-xl bg-white border border-sand-300 hover:bg-sand-50 text-forest-900 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4 text-gold-600" />
                <span className="hidden sm:inline">Zoom In</span>
              </button>
              <button
                onClick={handleZoomOut}
                className="px-3 py-2 rounded-xl bg-white border border-sand-300 hover:bg-sand-50 text-forest-900 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4 text-gold-600" />
                <span className="hidden sm:inline">Zoom Out</span>
              </button>
              <button
                onClick={handleResetZoom}
                className="px-3 py-2 rounded-xl bg-white border border-sand-300 hover:bg-sand-50 text-forest-900 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4 text-forest-700" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Canvas */}
          <div className="relative min-h-[460px] sm:min-h-[580px] lg:min-h-[660px] flex items-center justify-center p-4 sm:p-8 bg-sand-50/60 overflow-auto">
            <div
              className="relative transition-transform duration-300 ease-out origin-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <Image
                src={viewMode === "2D" ? "/images/master-plan-2d.jpg" : "/images/master-plan-3d.jpg"}
                alt={`The Aurora Hills Dharwad ${viewMode} Curated Master Plan`}
                width={1200}
                height={800}
                className="rounded-2xl shadow-xl object-contain max-w-full h-auto border border-sand-300"
                priority
              />
            </div>
          </div>

          {/* Quick Plot Dimensions Highlight Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-sand-200 bg-sand-100/60 text-forest-950 p-4 sm:p-5 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center font-bold text-xs flex-shrink-0">
                30x40
              </div>
              <div className="text-xs">
                <span className="font-bold block">1,200 sq.ft Plots</span>
                <span className="text-forest-700">Compact luxury villa plots</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center font-bold text-xs flex-shrink-0">
                30x50
              </div>
              <div className="text-xs">
                <span className="font-bold block">1,500 sq.ft Plots</span>
                <span className="text-forest-700">Most popular family villa size</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center font-bold text-xs flex-shrink-0">
                40x60
              </div>
              <div className="text-xs">
                <span className="font-bold block">2,400 sq.ft Plots</span>
                <span className="text-forest-700">Premium corner & park-facing plots</span>
              </div>
            </div>
          </div>

          {/* Footer Call to Action Strip */}
          <div className="p-6 sm:p-8 bg-forest-950 text-white flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-bold font-serif text-gold-300">
                Download Official Master Layout PDF
              </h4>
              <p className="text-xs text-sand-200">
                Receive the high-res layout map with exact plot numbering, dimensions, and road widths.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/brochure/the-aurora-hills-brochure.pdf"
                download="the-aurora-hills-master-plan.pdf"
                className="px-6 py-3 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-xs font-bold border border-forest-700 flex items-center gap-2 transition-colors shadow-md"
              >
                <Download className="w-4 h-4 text-gold-400" />
                Download PDF
              </a>

              <button
                onClick={() => onOpenEnquiry("Master Plan Check Availability")}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 text-xs font-black uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
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

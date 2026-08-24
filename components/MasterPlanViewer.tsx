"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, ZoomOut, RotateCcw, Download, Sparkles, MapPin, Compass, ArrowRight, Box, Layers } from "lucide-react";
import { ThreeMasterPlan3D } from "@/components/ThreeMasterPlan3D";

interface MasterPlanViewerProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
  onOpenBrochure: () => void;
}

export const MasterPlanViewer: React.FC<MasterPlanViewerProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
}) => {
  const [viewMode, setViewMode] = useState<"3d_interactive" | "2d_layout" | "3d_perspective">("3d_interactive");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [selectedPlotDetail, setSelectedPlotDetail] = useState<string>("1,200 sq.ft (30x40 ft)");

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <section id="master-plan" className="py-24 lg:py-32 bg-[#F7F9F6] text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-glass border border-white/90 text-emerald-800 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Box className="w-3.5 h-3.5 text-emerald-600" />
            Township Architecture & 3D WebGL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Master Layout & <span className="green-text-gradient">3D Township Explorer</span>
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Inspect the complete layout in interactive 3D, switch between high-definition 2D approved blueprints, and explore plot dimensions.
          </p>

          {/* View Mode Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-full neu-inset">
            <button
              onClick={() => setViewMode("3d_interactive")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                viewMode === "3d_interactive"
                  ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md scale-105"
                  : "text-charcoal-700 hover:text-emerald-700"
              }`}
            >
              Interactive 3D WebGL
            </button>
            <button
              onClick={() => setViewMode("2d_layout")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                viewMode === "2d_layout"
                  ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md scale-105"
                  : "text-charcoal-700 hover:text-emerald-700"
              }`}
            >
              Approved 2D Master Plan
            </button>
            <button
              onClick={() => setViewMode("3d_perspective")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                viewMode === "3d_perspective"
                  ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-md scale-105"
                  : "text-charcoal-700 hover:text-emerald-700"
              }`}
            >
              3D Perspective Elevation
            </button>
          </div>
        </div>

        {/* Master Plan Canvas Container */}
        {viewMode === "3d_interactive" ? (
          <ThreeMasterPlan3D
            onSelectPlot={(info) => setSelectedPlotDetail(info)}
          />
        ) : (
          <div className="relative rounded-3xl overflow-hidden neu-card border border-white/90 p-3 sm:p-4 shadow-2xl bg-white">
            <div className="relative min-h-[450px] sm:min-h-[580px] rounded-2xl overflow-hidden bg-sand-100 flex items-center justify-center">
              <div
                className="relative w-full h-full min-h-[450px] sm:min-h-[580px] transition-transform duration-300 ease-out"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <Image
                  src={viewMode === "2d_layout" ? "/images/master-plan-2d.jpg" : "/images/master-plan-3d.jpg"}
                  alt="The Aurora Hills Dharwad Master Layout Plan"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain"
                />
              </div>

              {/* Floating Zoom HUD */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                <button
                  onClick={handleZoomIn}
                  className="p-2.5 rounded-xl neu-glass text-forest-950 hover:text-emerald-700 shadow-md transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-2.5 rounded-xl neu-glass text-forest-950 hover:text-emerald-700 shadow-md transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="p-2.5 rounded-xl neu-glass text-forest-950 hover:text-emerald-700 shadow-md transition-colors"
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Plot Dimensions & CTAs Strip */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl neu-glass border border-white/90 shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                Standard Plot Dimension
              </span>
              <h3 className="text-xl font-bold font-serif text-forest-950">1,200 sq.ft</h3>
              <p className="text-xs text-charcoal-600">30 x 40 ft • Ideal for Villas</p>
            </div>
            <button
              onClick={() => onOpenEnquiry("Master Plan 30x40", "1,200 sq.ft (30x40)")}
              className="px-4 py-2 rounded-full neu-button text-xs font-bold text-forest-950 hover:text-emerald-700"
            >
              Enquire
            </button>
          </div>

          <div className="p-6 rounded-3xl neu-glass border border-white/90 shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                Large Plot Dimension
              </span>
              <h3 className="text-xl font-bold font-serif text-forest-950">1,500 sq.ft</h3>
              <p className="text-xs text-charcoal-600">30 x 50 ft • Spacious Luxury</p>
            </div>
            <button
              onClick={() => onOpenEnquiry("Master Plan 30x50", "1,500 sq.ft (30x50)")}
              className="px-4 py-2 rounded-full neu-button text-xs font-bold text-forest-950 hover:text-emerald-700"
            >
              Enquire
            </button>
          </div>

          <div className="p-6 rounded-3xl neu-glass border border-white/90 shadow-lg flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                Premium Corner Plot
              </span>
              <h3 className="text-xl font-bold font-serif text-forest-950">2,400 sq.ft</h3>
              <p className="text-xs text-charcoal-600">40 x 60 ft • Grand Estate</p>
            </div>
            <button
              onClick={() => onOpenEnquiry("Master Plan 40x60", "2,400 sq.ft (40x60)")}
              className="px-4 py-2 rounded-full neu-button text-xs font-bold text-forest-950 hover:text-emerald-700"
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

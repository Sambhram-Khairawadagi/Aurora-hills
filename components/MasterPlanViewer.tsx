"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Download, CheckCircle, MapPin, Compass } from "lucide-react";

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
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <section id="master-plan" className="py-20 lg:py-28 bg-sand-50 text-forest-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest">
            Carefully Structured Layout
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-forest-950 tracking-tight">
            Curated <span className="text-maroon-700">Master Plan</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            The master plan of Aurora Hills is thoughtfully designed to offer well-planned residential plots with wide roads, optimum land utilization, open green spaces, and integrated infrastructure.
          </p>

          {/* View Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-sand-200 border border-sand-300 pt-1">
            <button
              onClick={() => { setViewMode("2D"); handleResetZoom(); }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                viewMode === "2D"
                  ? "bg-forest-900 text-white shadow-md"
                  : "text-forest-950 hover:text-forest-700"
              }`}
            >
              2D Master Layout Plan
            </button>
            <button
              onClick={() => { setViewMode("3D"); handleResetZoom(); }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                viewMode === "3D"
                  ? "bg-forest-900 text-white shadow-md"
                  : "text-forest-950 hover:text-forest-700"
              }`}
            >
              3D Perspective Layout
            </button>
          </div>
        </div>

        {/* Master Plan Container */}
        <div className="relative bg-white rounded-3xl border border-sand-300 shadow-2xl overflow-hidden">
          {/* Top Control Bar */}
          <div className="p-4 bg-sand-100/90 border-b border-sand-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-forest-900">
              <Compass className="w-4 h-4 text-maroon-700" />
              <span>Village: Mansur + Sanna Somapura, Taluk: Dharwad (2023)</span>
            </div>

            {/* Zoom & View Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-lg bg-white border border-sand-300 hover:bg-sand-50 text-forest-900 text-xs font-bold flex items-center gap-1 shadow-sm"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
                <span className="hidden sm:inline">Zoom In</span>
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-lg bg-white border border-sand-300 hover:bg-sand-50 text-forest-900 text-xs font-bold flex items-center gap-1 shadow-sm"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
                <span className="hidden sm:inline">Zoom Out</span>
              </button>
              <button
                onClick={handleResetZoom}
                className="p-2 rounded-lg bg-white border border-sand-300 hover:bg-sand-50 text-forest-900 text-xs font-bold flex items-center gap-1 shadow-sm"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Reset</span>
              </button>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 rounded-lg bg-forest-900 text-gold-300 hover:bg-forest-800 text-xs font-bold flex items-center gap-1 shadow-sm"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Interactive Image Viewer Canvas */}
          <div className="relative min-h-[480px] lg:min-h-[640px] flex items-center justify-center p-4 sm:p-8 bg-sand-50 overflow-auto cursor-grab active:cursor-grabbing">
            <div
              className="relative transition-transform duration-300 ease-out origin-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <Image
                src={viewMode === "2D" ? "/images/master-plan-2d.jpg" : "/images/master-plan-3d.jpg"}
                alt={`The Aurora Hills Dharwad ${viewMode} Curated Master Plan`}
                width={1200}
                height={800}
                className="rounded-xl shadow-lg object-contain max-w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Master Plan Footer Specifications Strip */}
          <div className="p-6 bg-forest-950 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <div className="text-sm font-bold font-serif text-gold-300">
                Planned Plot Dimensions & Wide Roads
              </div>
              <p className="text-xs text-sand-200">
                Centralized zoning with designated parks, club house, open spaces, and underground utility conduits.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/brochure/the-aurora-hills-brochure.pdf"
                download="the-aurora-hills-master-plan.pdf"
                className="px-5 py-2.5 rounded-full bg-forest-800 hover:bg-forest-700 text-white text-xs font-bold border border-forest-600 flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-gold-400" />
                Download PDF
              </a>

              <button
                onClick={() => onOpenEnquiry("Master Plan Enquiry")}
                className="px-6 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                Check Plot Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

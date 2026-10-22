"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  Maximize2,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Layers,
  Trees,
  Compass,
  Zap,
  MapPin,
  FileCheck,
} from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: "roads" | "plots" | "infra" | "plan";
  categoryLabel: string;
  badge: string;
  src: string;
  desc: string;
}

interface GalleryProps {
  onOpenVideo?: () => void;
  onOpenEnquiry?: (source?: string, requirement?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({
  onOpenVideo,
  onOpenEnquiry,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galleryItems: GalleryItem[] = [
    {
      id: "avenue-median",
      title: "Dual-Lane Asphalt Avenue with Flowering Median",
      category: "roads",
      categoryLabel: "Avenues & Greenery",
      badge: "Main Boulevard",
      src: "/images/gallery/oct-avenue-flowering-median.webp",
      desc: "Freshly asphalted 40ft main boulevard featuring a manicured central median with flowering shrubs, street lighting, and clear views of the Dharwad hills.",
    },
    {
      id: "hillside-plots",
      title: "Terraced Hillside Villa Plots & Panoramic Contours",
      category: "plots",
      categoryLabel: "Villa Plots & Views",
      badge: "Hilltop Elevation",
      src: "/images/gallery/oct-panoramic-hillside-plots.webp",
      desc: "Sweeping view of the naturally terraced villa plots with boundary fencing, internal layout roads, and lush green countryside backdrop.",
    },
    {
      id: "hilltop-staircase",
      title: "Landscaped Hilltop Staircase & Water Reservoir Deck",
      category: "infra",
      categoryLabel: "Infrastructure & Utilities",
      badge: "Water & Gazebo",
      src: "/images/gallery/oct-hilltop-staircase-reservoir.webp",
      desc: "Architectural steps with handrails, bougainvillea, and marigolds leading directly up to the hilltop overhead water tank and sunset vantage deck.",
    },
    {
      id: "main-boulevard",
      title: "Central Avenue Looking Towards Hilltop Reservoir",
      category: "roads",
      categoryLabel: "Avenues & Greenery",
      badge: "40ft Road",
      src: "/images/gallery/oct-main-boulevard-water-tank.webp",
      desc: "Wide central spine road with dual LED streetlights, curb drainage, and terraced plots climbing gracefully up the hillside.",
    },
    {
      id: "plot-demarcation",
      title: "Individual Villa Plot Demarcation (Plot #184)",
      category: "plots",
      categoryLabel: "Villa Plots & Views",
      badge: "Plot Demarcation",
      src: "/images/gallery/oct-demarcated-plot-marker-184.webp",
      desc: "Clearly demarcated residential plots with official survey stone markers, concrete kerb edging, and underground storm drainage channels.",
    },
    {
      id: "flowerbeds-kerbs",
      title: "Landscaped Kerbside Flowerbeds & Survey Markers",
      category: "roads",
      categoryLabel: "Avenues & Greenery",
      badge: "Avenue Landscaping",
      src: "/images/gallery/oct-landscaped-kerbs-flowerbeds.webp",
      desc: "Lush marigold flowerbeds along the paved roadway kerb with official boundary demarcation stones and mountain vistas.",
    },
    {
      id: "paver-crossroads",
      title: "Finished Paver Pedestrian Footpaths & Crossroads",
      category: "infra",
      categoryLabel: "Infrastructure & Utilities",
      badge: "Pedestrian Walkways",
      src: "/images/gallery/oct-paver-walkways-crossroads.webp",
      desc: "Interlocking concrete paver pedestrian sidewalks at internal layout crossroads, designed for safe family morning walks.",
    },
    {
      id: "underground-power",
      title: "Underground Power Feeder Pillars & Electrification",
      category: "infra",
      categoryLabel: "Infrastructure & Utilities",
      badge: "Underground Power",
      src: "/images/gallery/oct-underground-power-feeder.webp",
      desc: "State-of-the-art underground electrical distribution boxes and street lighting poles installed cleanly alongside paved footpaths.",
    },
    {
      id: "hduda-billboard",
      title: "Official HDUDA & NA-KJP Approved Site Billboard",
      category: "plan",
      categoryLabel: "Approved Masterplan",
      badge: "100% Legal Approval",
      src: "/images/gallery/oct-hduda-approved-billboard.webp",
      desc: "Authentic on-site project signage displaying HDUDA and NA-KJP approvals, assuring 100% legal safety and clear titles.",
    },
    {
      id: "rose-garden-median",
      title: "Blooming Rose Garden Along Central Median",
      category: "roads",
      categoryLabel: "Avenues & Greenery",
      badge: "Central Median",
      src: "/images/gallery/oct-central-median-rose-garden.webp",
      desc: "Red roses and ornamental palms planted along the concrete-curbed avenue median extending toward the township plateau.",
    },
    {
      id: "avenue-plantations",
      title: "Dual Sidewalks, Transformers & Tree Plantations",
      category: "infra",
      categoryLabel: "Infrastructure & Utilities",
      badge: "Township Utilities",
      src: "/images/gallery/oct-avenue-plantations-utilities.webp",
      desc: "Dual interlocking paver sidewalks with tree plantations, dedicated electrical transformer substations, and clear layout roads.",
    },
    {
      id: "hilltop-approach",
      title: "Hilltop Approach Road & Elevated Contours",
      category: "plots",
      categoryLabel: "Villa Plots & Views",
      badge: "Scenic Vantage",
      src: "/images/gallery/oct-hilltop-approach-boulevard.webp",
      desc: "Ascending layout avenue connecting prime hillside plots to the top ridge with streetlights and stormwater drains in place.",
    },
    {
      id: "security-arch",
      title: "Grand Entrance Welcome Arch & Main Boulevard",
      category: "roads",
      categoryLabel: "Avenues & Greenery",
      badge: "Main Entrance",
      src: "/images/gallery/oct-security-arch-gateway-boulevard.webp",
      desc: "Welcome arch framework at the entrance of The Aurora Hills opening onto the wide paved township avenue.",
    },
    {
      id: "paver-laying",
      title: "Interlocking Paver Laying & Avenue Tree Planting",
      category: "roads",
      categoryLabel: "Avenues & Greenery",
      badge: "Avenue Progress",
      src: "/images/gallery/oct-paver-laying-avenue-trees.webp",
      desc: "Active installation of interlocking concrete paver blocks alongside freshly planted avenue shade trees and roadside drainage.",
    },
    {
      id: "perimeter-fence",
      title: "Perimeter Security Fence & Royal Palm Plantations",
      category: "roads",
      categoryLabel: "Avenues & Greenery",
      badge: "Green Boundary",
      src: "/images/gallery/oct-perimeter-fence-palm-plantations.webp",
      desc: "Chainlink security fencing lined with young ornamental royal palms and curbside concrete borders.",
    },
    {
      id: "boundary-fence",
      title: "Boundary Landscaping & Plantation Along Roadway",
      category: "roads",
      categoryLabel: "Avenues & Greenery",
      badge: "Landscaped Kerb",
      src: "/images/gallery/oct-boundary-fence-ornamental-greenery.webp",
      desc: "Lush bougainvillea, ficus, and palm greenery nurtured along the layout's protective boundary fence.",
    },
    {
      id: "panoramic-vista",
      title: "Panoramic Hillside Vista of Terraced Plots & Roads",
      category: "plots",
      categoryLabel: "Villa Plots & Views",
      badge: "Valley View",
      src: "/images/gallery/oct-panoramic-terraced-layout-vista.webp",
      desc: "Elevated vantage point capturing multiple tiers of contoured villa plots, asphalt roads, and distant scenic greenery.",
    },
    {
      id: "retaining-wall",
      title: "Contoured Retaining Wall & Amphitheater Tiering",
      category: "plots",
      categoryLabel: "Villa Plots & Views",
      badge: "Ground Engineering",
      src: "/images/gallery/oct-stepped-retaining-wall-contour.webp",
      desc: "Solid reinforced concrete retaining walls and stepped leveling engineered to preserve the natural hilltop topography.",
    },
    {
      id: "water-reservoir-boulevard",
      title: "Overhead Water Tank & Hilltop Boulevard Access",
      category: "infra",
      categoryLabel: "Infrastructure & Utilities",
      badge: "Water Reservoir",
      src: "/images/gallery/oct-hilltop-water-reservoir-boulevard.webp",
      desc: "Dedicated high-capacity overhead water reservoir standing atop the ridge with smooth curved asphalt road access.",
    },
    {
      id: "transformer-substation",
      title: "Electrical Transformer Substation & Level Plots",
      category: "infra",
      categoryLabel: "Infrastructure & Utilities",
      badge: "Dedicated Power",
      src: "/images/gallery/oct-electrical-transformer-contour.webp",
      desc: "Heavy-duty electrical transformer substation unit installed to ensure continuous uninterrupted high-voltage power distribution.",
    },
    {
      id: "paver-power-pillar",
      title: "Finished Paver Footpath & Underground Power Pillar",
      category: "infra",
      categoryLabel: "Infrastructure & Utilities",
      badge: "Sidewalk Infra",
      src: "/images/gallery/oct-paver-footpath-power-pillar.webp",
      desc: "Level interlocking paver sidewalk with underground electrical distribution pillar and avenue curb stones.",
    },
    {
      id: "utility-power-pole",
      title: "Electrification Distribution Mast & Storm Drainage",
      category: "infra",
      categoryLabel: "Infrastructure & Utilities",
      badge: "Power & Drainage",
      src: "/images/gallery/oct-utility-power-pole-drainage.webp",
      desc: "Three-phase electrical distribution pole with underground cabling sleeves and concrete stormwater drainage channels.",
    },
    {
      id: "underground-water-network",
      title: "Underground High-Pressure Water Supply Pipeline",
      category: "infra",
      categoryLabel: "Infrastructure & Utilities",
      badge: "Water Network",
      src: "/images/gallery/oct-underground-water-pipeline.webp",
      desc: "Individual plot potable water connection pipeline and underground utility trenches along the plot boundaries.",
    },
    {
      id: "sanctioned-masterplan",
      title: "Official Sanctioned HDUDA Layout Masterplan",
      category: "plan",
      categoryLabel: "Approved Masterplan",
      badge: "Sanctioned Blueprint",
      src: "/images/sanctioned-layout-map.png",
      desc: "Official approved layout blueprint showing residential plot dimensions (30x40, 30x50, 40x60, odd sizes), road widths, and public open green spaces.",
    },
  ];

  const categories = [
    { key: "all", label: "All Photos", icon: Layers, count: galleryItems.length },
    { key: "roads", label: "Avenues & Greenery", icon: Trees, count: galleryItems.filter(i => i.category === "roads").length },
    { key: "plots", label: "Villa Plots & Views", icon: Compass, count: galleryItems.filter(i => i.category === "plots").length },
    { key: "infra", label: "Infrastructure & Utilities", icon: Zap, count: galleryItems.filter(i => i.category === "infra").length },
    { key: "plan", label: "Approved Masterplan", icon: FileCheck, count: galleryItems.filter(i => i.category === "plan").length },
  ];

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  // Close lightbox on Escape key & Arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex, handlePrev, handleNext]);

  const currentLightboxItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  const lightboxModal = currentLightboxItem && mounted ? (
    createPortal(
      <div
        onClick={() => setLightboxIndex(null)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="fixed inset-0 z-[999999] bg-black/92 backdrop-blur-2xl flex items-center justify-center p-2.5 sm:p-6 animate-fade-in select-none"
      >
        {/* Top Controls Header */}
        <div className="fixed top-3 left-3 right-3 sm:top-6 sm:left-6 sm:right-6 z-[1000000] flex items-center justify-between pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Photo {lightboxIndex! + 1} of {filteredItems.length}
            </span>
            <span className="text-white/40">|</span>
            <span className="text-emerald-300 hidden sm:inline">
              {currentLightboxItem.badge}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
            className="pointer-events-auto px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-forest-950 hover:bg-emerald-600 hover:text-white font-bold text-xs sm:text-sm shadow-2xl flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-gray-200"
            aria-label="Close Lightbox"
          >
            <X className="w-4 h-4" />
            <span>Close</span>
            <span className="text-xs opacity-60 font-mono hidden sm:inline">(ESC)</span>
          </button>
        </div>

        {/* Previous Navigation Arrow */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="fixed left-2 sm:left-6 z-[1000000] w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-emerald-600 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
          aria-label="Previous Photo"
        >
          <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
        </button>

        {/* Next Navigation Arrow */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="fixed right-2 sm:right-6 z-[1000000] w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-emerald-600 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
          aria-label="Next Photo"
        >
          <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
        </button>

        {/* Modal Main Content Box */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-6xl w-full flex flex-col items-center cursor-default pt-14 pb-2 sm:pb-4"
        >
          {/* Main Image Container */}
          <div className="relative w-full h-[50vh] sm:h-[65vh] rounded-2xl sm:rounded-3xl overflow-hidden bg-black/60 shadow-2xl border border-white/10 flex items-center justify-center">
            <Image
              src={currentLightboxItem.src}
              alt={currentLightboxItem.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain"
              priority
            />
          </div>

          {/* Caption & Actions Card */}
          <div className="mt-3 sm:mt-4 w-full max-w-3xl px-3.5 py-3 sm:py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-400/30 uppercase tracking-wider">
                  {currentLightboxItem.categoryLabel}
                </span>
                <span className="text-xs text-white/70 font-medium">
                  {currentLightboxItem.badge}
                </span>
              </div>
              <h4 className="text-base sm:text-xl font-bold font-sans text-white">
                {currentLightboxItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-2 sm:line-clamp-none">
                {currentLightboxItem.desc}
              </p>
            </div>

            {/* Quick Inquiry CTA */}
            {onOpenEnquiry && (
              <button
                type="button"
                onClick={() => {
                  setLightboxIndex(null);
                  onOpenEnquiry(
                    `Gallery Photo: ${currentLightboxItem.title}`,
                    `Inquiry regarding site photo: ${currentLightboxItem.title}`
                  );
                }}
                className="w-full sm:w-auto flex-shrink-0 px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5"
              >
                <span>Book Free Site Visit</span>
              </button>
            )}
          </div>
        </div>
      </div>,
      document.body
    )
  ) : null;

  return (
    <section
      id="gallery"
      className="py-14 sm:py-20 lg:py-28 vibrant-section-glow text-forest-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4 mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black font-sans text-forest-950 tracking-tight whitespace-normal lg:whitespace-nowrap">
            Real Site Photos &amp;{" "}
            <span className="vibrant-text-gradient">Township Progress</span>
          </h2>

          <p className="text-charcoal-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            See the actual on-ground transformation: 40ft wide finished asphalt boulevards, flowering medians, <br className="hidden sm:inline" />
            demarcated villa plots, underground power feeder pillars, and hilltop water reservoir.
          </p>
        </div>

        {/* Filter Tabs — Horizontal Swipeable Bar on Mobile */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 -mx-3.5 sm:mx-0 sm:flex-wrap sm:justify-center mb-6 sm:mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key);
                  setLightboxIndex(null);
                }}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "bg-forest-950 text-white shadow-xl shadow-forest-950/20 scale-105"
                    : "bg-white text-forest-900 hover:bg-emerald-50 border border-emerald-200/60 shadow-sm"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? "text-emerald-400" : "text-emerald-700"}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-black ${
                    isActive
                      ? "bg-emerald-500/30 text-emerald-200"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid — Clean Photos in 2-Cols on Mobile & 3-Cols on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {filteredItems.map((item, idx) => {
            const isHiddenOnMobile =
              activeCategory === "all" && !showAllMobile && idx >= 8;
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border-2 border-emerald-300/40 p-1.5 sm:p-2.5 shadow-md sm:shadow-xl shadow-emerald-950/8 cursor-pointer hover:shadow-2xl hover:border-emerald-500 hover:-translate-y-1.5 transition-all duration-300 ${
                  isHiddenOnMobile ? "hidden sm:block" : "block"
                }`}
              >
                <div className="relative h-36 xs:h-44 sm:h-72 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden bg-sand-200">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle Hover Enlarge Button */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-emerald-600/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 shadow-xl border border-emerald-400">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Progressive Disclosure Expand Button */}
        {activeCategory === "all" && !showAllMobile && (
          <div className="mt-6 text-center sm:hidden">
            <button
              type="button"
              onClick={() => setShowAllMobile(true)}
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-forest-950 to-emerald-950 text-white font-black text-xs uppercase tracking-wider shadow-xl border border-emerald-500/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>View All 24 Development Photos (+16 More)</span>
            </button>
          </div>
        )}

        {/* Bottom Tour Booking Banner */}
        <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-forest-950 via-forest-900 to-emerald-950 p-5 sm:p-8 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 border border-emerald-500/30">
          <div className="space-y-1.5 sm:space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
              <Calendar className="w-3.5 h-3.5" />
              <span>Complimentary Weekend Site Visits Available</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black font-sans">
              Want to walk on these finished avenues in person?
            </h3>
            <p className="text-white/90 text-xs sm:text-sm max-w-xl font-medium">
              We arrange comfortable AC pickup and drop from Hubli &amp; Dharwad for
              you and your family to inspect available villa plots.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
            {onOpenEnquiry && (
              <button
                type="button"
                onClick={() =>
                  onOpenEnquiry(
                    "Township Gallery Bottom Banner",
                    "Complimentary site visit request to inspect finished roads and plots"
                  )
                }
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-forest-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer text-center"
              >
                Schedule Free Site Visit
              </button>
            )}

            {onOpenVideo && (
              <button
                type="button"
                onClick={onOpenVideo}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md hover:scale-105 active:scale-95 transition-all cursor-pointer text-center"
              >
                Watch Drone Video
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Portal Lightbox */}
      {lightboxModal}
    </section>
  );
};

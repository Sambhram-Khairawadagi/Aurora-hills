"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { FestiveScheme } from "@/components/FestiveScheme";
import { ProjectIntro } from "@/components/ProjectIntro";
import { MainShowcaseVideo } from "@/components/MainShowcaseVideo";
import { DevelopmentVideo } from "@/components/DevelopmentVideo";
import { Amenities } from "@/components/Amenities";
import { SanctionedLayout } from "@/components/SanctionedLayout";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { AdsTopBar } from "@/components/AdsTopBar";

// Dynamically load heavy below-the-fold components

const Gallery = dynamic(
  () => import("@/components/Gallery").then((mod) => mod.Gallery),
  { ssr: true }
);

const LocationConnectivity = dynamic(
  () => import("@/components/LocationConnectivity").then((mod) => mod.LocationConnectivity),
  { ssr: true }
);

const WhyAuroraHills = dynamic(
  () => import("@/components/WhyAuroraHills").then((mod) => mod.WhyAuroraHills),
  { ssr: true }
);

const LocalSeoFaq = dynamic(
  () => import("@/components/LocalSeoFaq").then((mod) => mod.LocalSeoFaq),
  { ssr: true }
);

const DirectAnswerHub = dynamic(
  () => import("@/components/DirectAnswerHub").then((mod) => mod.DirectAnswerHub),
  { ssr: true }
);

// Dynamically load modals on-demand (zero impact on initial bundle)
const EnquiryModal = dynamic(
  () => import("@/components/EnquiryModal").then((mod) => mod.EnquiryModal),
  { ssr: false }
);

const SiteVisitModal = dynamic(
  () => import("@/components/SiteVisitModal").then((mod) => mod.SiteVisitModal),
  { ssr: false }
);

const BrochureModal = dynamic(
  () => import("@/components/BrochureModal").then((mod) => mod.BrochureModal),
  { ssr: false }
);

const QRCodeModal = dynamic(
  () => import("@/components/QRCodeModal").then((mod) => mod.QRCodeModal),
  { ssr: false }
);

const VideoModal = dynamic(
  () => import("@/components/VideoModal").then((mod) => mod.VideoModal),
  { ssr: false }
);

export default function HomePage() {
  // Modal states
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySource, setEnquirySource] = useState("Direct CTA");
  const [enquiryRequirement, setEnquiryRequirement] = useState("");

  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isQROpen, setIsQROpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Dynamic settings from backend (default starting price is ₹42 Lakhs)
  const [startingPrice, setStartingPrice] = useState("₹42 Lakhs");
  const [hasAdsTopBar, setHasAdsTopBar] = useState(false);

  useEffect(() => {
    // Log page view analytics
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "page_view",
        metadata: {
          path: "/",
          referrer: typeof document !== "undefined" ? document.referrer : "",
          url: typeof window !== "undefined" ? window.location.href : ""
        }
      })
    }).catch(() => {});

    // Fetch site settings
    fetch("/api/admin/settings")
      .then((res) => res.json())
      .then((data) => {
        const price = data?.settings?.starting_price || data?.starting_price;
        if (price) {
          setStartingPrice(price);
        }
      })
      .catch(() => {});
  }, []);

  const handleOpenEnquiry = (source?: string, requirement?: string) => {
    setEnquirySource(source || "Direct CTA");
    setEnquiryRequirement(requirement || "");
    setIsEnquiryOpen(true);
  };

  const handleOpenSiteVisit = () => {
    setIsSiteVisitOpen(true);
  };

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

  const handleOpenQR = () => {
    setIsQROpen(true);
  };

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleScrollToLayout = () => {
    const el = document.getElementById("layout");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9F6] text-[#14281D] selection:bg-emerald-600 selection:text-white font-sans antialiased relative">
      {/* Google Ads Traffic Urgency Bar — visible only to CPC visitors */}
      <AdsTopBar
        onOpenEnquiry={handleOpenEnquiry}
        onVisibilityChange={setHasAdsTopBar}
      />

      {/* Top Navbar with Prominent Big Logo */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        onOpenBrochure={handleOpenBrochure}
        onOpenSiteVisit={handleOpenSiteVisit}
        hasAdsTopBar={hasAdsTopBar}
      />

      <main className="relative z-10">
        {/* Real Estate Hero Section with Sunset Layout & Family in Garden */}
        <Hero
          onOpenEnquiry={handleOpenEnquiry}
          onOpenVideo={handleOpenVideo}
          onOpenBrochure={handleOpenBrochure}
          startingPrice={startingPrice}
        />

        {/* 4 Trust Approvals Strip */}
        <TrustBadges />

        {/* Photographic Media & Site Gallery — Directly below NA-KJP Approved section */}
        <Gallery
          onOpenVideo={handleOpenVideo}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Dedicated Dasara & Deepawali Gold & Silver Festive Scheme Section */}
        <FestiveScheme onOpenEnquiry={handleOpenEnquiry} />

        {/* Project Introduction */}
        <ProjectIntro
          onOpenEnquiry={handleOpenEnquiry}
          onOpenLayout={handleScrollToLayout}
        />

        {/* Standalone Main Video Showcase */}
        <MainShowcaseVideo />

        {/* Official Drone Video Tour & Actual Site Footage */}
        <DevelopmentVideo
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Photo-Rich Lifestyle Amenities */}
        <Amenities onOpenEnquiry={handleOpenEnquiry} />

        {/* Sanctioned Layout Blueprint & Real Construction Progress */}
        <SanctionedLayout
          onOpenEnquiry={handleOpenEnquiry}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* Strategic Location & Landmark Proximity Hub */}
        <LocationConnectivity
          onOpenEnquiry={handleOpenEnquiry}
          onOpenQR={handleOpenQR}
        />

        {/* Strategic Investment Advantages & Why Aurora Hills */}
        <WhyAuroraHills
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* High-Intent Locality Explorer Hub */}
        <section className="py-12 sm:py-16 bg-[#F4F8F3] border-t border-b border-emerald-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-extrabold uppercase tracking-wider mb-2">
                📍 Strategic Locality Quick Links
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-sans text-forest-950 tracking-tight">
                Explore Plots &amp; Sites by Locality
              </h3>
              <p className="text-sm font-semibold text-emerald-950/80 mt-1">
                Fast-track access to layout dimensions, bank approvals, and scenic site views
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-5xl mx-auto">
              {[
                { href: "/plots-in-dharwad", label: "Plots in Dharwad", badge: "High Demand" },
                { href: "/#faq", label: "Plots in Hubli Dharwad", badge: "Twin-City" },
                { href: "/#location", label: "Plots near Karnatak University", badge: "5 Mins" },
                { href: "/#location", label: "Plots near NH-4 Dharwad", badge: "Highway" },
                { href: "/#layout", label: "30×40 Sites in Dharwad", badge: "1,200 sq.ft" },
                { href: "/#layout", label: "30×50 Sites in Dharwad", badge: "1,500 sq.ft" },
                { href: "/#layout", label: "40×60 Sites in Dharwad", badge: "2,400 sq.ft" },
                { href: "/#faq", label: "HDUDA Approved Plots Dharwad", badge: "Sanctioned" },
                { href: "/#faq", label: "Bank Loan Plots Dharwad", badge: "SBI / HDFC" },
                { href: "/#faq", label: "Gated Community Dharwad", badge: "20+ Amenities" },
                { href: "/plots-in-dharwad", label: "Villa Plots in Dharwad", badge: "Luxury" },
                { href: "/#location", label: "Plots near Sunset Viewpoint", badge: "Scenic Hills" },
              ].map(({ href, label, badge }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="group px-4 py-2.5 rounded-xl border-2 border-emerald-200/90 bg-white hover:border-emerald-600 hover:bg-emerald-50 text-forest-950 font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>{label}</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 group-hover:bg-emerald-200 px-2 py-0.5 rounded-md">
                    {badge}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Answer Engine Optimization (AEO) Direct Knowledge Hub */}
        <DirectAnswerHub
          onOpenEnquiry={handleOpenEnquiry}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        {/* Comprehensive Local SEO Hub & Real Estate FAQ */}
        <LocalSeoFaq
          onOpenEnquiry={handleOpenEnquiry}
          onOpenBrochure={handleOpenBrochure}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        {/* Official Marketing Partners */}
        <Partners />
      </main>

      {/* Corporate Footer with Big Logo */}
      <Footer
        onOpenBrochure={handleOpenBrochure}
        onOpenQR={handleOpenQR}
      />

      {/* Floating Action Bar on Mobile/Desktop */}
      <FloatingActions
        onOpenEnquiry={handleOpenEnquiry}
        onOpenSiteVisit={handleOpenSiteVisit}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* Interactive Modals */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        source={enquirySource}
        defaultRequirement={enquiryRequirement}
      />

      <SiteVisitModal
        isOpen={isSiteVisitOpen}
        onClose={() => setIsSiteVisitOpen(false)}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <QRCodeModal
        isOpen={isQROpen}
        onClose={() => setIsQROpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}

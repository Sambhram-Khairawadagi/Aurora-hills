"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ProjectIntro } from "@/components/ProjectIntro";
import { WhyAuroraHills } from "@/components/WhyAuroraHills";
import { DevelopmentVideo } from "@/components/DevelopmentVideo";
import { Infrastructure } from "@/components/Infrastructure";
import { Amenities } from "@/components/Amenities";
import { SanctionedLayout } from "@/components/SanctionedLayout";
import { LocationConnectivity } from "@/components/LocationConnectivity";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

// Dynamically load heavy below-the-fold components
const FutureReturnsCalculator = dynamic(
  () => import("@/components/FutureReturnsCalculator").then((mod) => mod.FutureReturnsCalculator),
  { ssr: true }
);

const Gallery = dynamic(
  () => import("@/components/Gallery").then((mod) => mod.Gallery),
  { ssr: true }
);

const SiteVisitSection = dynamic(
  () => import("@/components/SiteVisitSection").then((mod) => mod.SiteVisitSection),
  { ssr: true }
);

const EnquirySection = dynamic(
  () => import("@/components/EnquirySection").then((mod) => mod.EnquirySection),
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
      {/* Top Navbar with Prominent Big Logo */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        onOpenBrochure={handleOpenBrochure}
        onOpenSiteVisit={handleOpenSiteVisit}
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

        {/* Project Introduction */}
        <ProjectIntro
          onOpenEnquiry={handleOpenEnquiry}
          onOpenLayout={handleScrollToLayout}
        />

        {/* Why Choose Aurora Hills */}
        <WhyAuroraHills onOpenEnquiry={handleOpenEnquiry} />

        {/* Official Drone Video Tour & Actual Site Footage */}
        <DevelopmentVideo
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Infrastructure & Engineering */}
        <Infrastructure />

        {/* Photo-Rich Lifestyle Amenities */}
        <Amenities onOpenEnquiry={handleOpenEnquiry} />

        {/* Sanctioned Layout Blueprint & Real Construction Progress */}
        <SanctionedLayout
          onOpenEnquiry={handleOpenEnquiry}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* Location & Proximities to Schools, Colleges, Malls */}
        <LocationConnectivity 
          onOpenEnquiry={handleOpenEnquiry} 
          onOpenQR={handleOpenQR}
        />

        {/* Transparent Pricing Calculator starting at ₹42 Lakhs */}
        <PriceCalculator
          onOpenEnquiry={handleOpenEnquiry}
          startingPrice={startingPrice}
        />

        {/* Dharwad Future Returns & Land Appreciation Calculator */}
        <FutureReturnsCalculator
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Photographic Media & Site Gallery */}
        <Gallery onOpenVideo={handleOpenVideo} />

        {/* Book a Site Visit Section */}
        <SiteVisitSection />

        {/* Plot Enquiry Lead Form Section */}
        <EnquirySection />

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

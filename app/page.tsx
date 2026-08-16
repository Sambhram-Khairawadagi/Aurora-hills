"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ProjectIntro } from "@/components/ProjectIntro";
import { WhyAuroraHills } from "@/components/WhyAuroraHills";
import { DevelopmentVideo } from "@/components/DevelopmentVideo";
import { Infrastructure } from "@/components/Infrastructure";
import { Amenities } from "@/components/Amenities";
import { MasterPlanViewer } from "@/components/MasterPlanViewer";
import { LocationConnectivity } from "@/components/LocationConnectivity";
import { PriceCalculator } from "@/components/PriceCalculator";
import { Gallery } from "@/components/Gallery";
import { SiteVisitSection } from "@/components/SiteVisitSection";
import { EnquirySection } from "@/components/EnquirySection";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

import { EnquiryModal } from "@/components/EnquiryModal";
import { SiteVisitModal } from "@/components/SiteVisitModal";
import { BrochureModal } from "@/components/BrochureModal";
import { QRCodeModal } from "@/components/QRCodeModal";
import { VideoModal } from "@/components/VideoModal";

export default function HomePage() {
  // Modal states
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySource, setEnquirySource] = useState("Direct CTA");
  const [enquiryRequirement, setEnquiryRequirement] = useState("");

  const [isSiteVisitOpen, setIsSiteVisitOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isQROpen, setIsQROpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Dynamic settings from backend if available
  const [startingPrice, setStartingPrice] = useState("₹35.99 Lakhs");

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

  const handleScrollToMasterPlan = () => {
    const el = document.getElementById("master-plan");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9F6] text-[#14281D] selection:bg-emerald-600 selection:text-white font-sans antialiased relative">
      {/* Top Navbar */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiry}
        onOpenBrochure={handleOpenBrochure}
        onOpenSiteVisit={handleOpenSiteVisit}
      />

      <main className="relative z-10">
        {/* Hero Section with Three.js 3D Background */}
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
          onOpenMasterPlan={handleScrollToMasterPlan}
        />

        {/* Why Choose Aurora Hills */}
        <WhyAuroraHills onOpenEnquiry={handleOpenEnquiry} />

        {/* Development Video Showcase */}
        <DevelopmentVideo
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Infrastructure & Engineering */}
        <Infrastructure />

        {/* Categorized Amenities */}
        <Amenities onOpenEnquiry={handleOpenEnquiry} />

        {/* Curated Master Plan Viewer with Three.js 3D WebGL */}
        <MasterPlanViewer
          onOpenEnquiry={handleOpenEnquiry}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* Location & Connectivity */}
        <LocationConnectivity onOpenEnquiry={handleOpenEnquiry} />

        {/* Transparent Pricing & Plot Calculator */}
        <PriceCalculator
          onOpenEnquiry={handleOpenEnquiry}
          startingPrice={startingPrice}
        />

        {/* Visual Media Gallery */}
        <Gallery onOpenVideo={handleOpenVideo} />

        {/* Book a Site Visit Section */}
        <SiteVisitSection />

        {/* Plot Enquiry Lead Form Section */}
        <EnquirySection />

        {/* Official Marketing Partners */}
        <Partners />
      </main>

      {/* Corporate Footer */}
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

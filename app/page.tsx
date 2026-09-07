"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ProjectIntro } from "@/components/ProjectIntro";
import { MainShowcaseVideo } from "@/components/MainShowcaseVideo";
import { DevelopmentVideo } from "@/components/DevelopmentVideo";
import { Amenities } from "@/components/Amenities";
import { SanctionedLayout } from "@/components/SanctionedLayout";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { WhyAuroraHills } from "@/components/WhyAuroraHills";
import { LocationConnectivity } from "@/components/LocationConnectivity";
import { LocalSeoFaq } from "@/components/LocalSeoFaq";

const Gallery = dynamic(
  () => import("@/components/Gallery").then((mod) => mod.Gallery),
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

const LeadGate = dynamic(
  () => import("@/components/LeadGate").then((mod) => mod.LeadGate),
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

        {/* Why Choose The Aurora Hills — Investment Value & Hubli-Dharwad Growth */}
        <WhyAuroraHills onOpenEnquiry={handleOpenEnquiry} />

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

        {/* Strategic Location & Proximities to Hubli, Dharwad, Airport, Highway */}
        <LocationConnectivity
          onOpenEnquiry={handleOpenEnquiry}
          onOpenQR={handleOpenQR}
        />

        {/* Photographic Media & Site Gallery */}
        <Gallery onOpenVideo={handleOpenVideo} />

        {/* Master Local Real Estate Guide & FAQ (Google Snippet Optimized) */}
        <LocalSeoFaq
          onOpenEnquiry={handleOpenEnquiry}
          onOpenBrochure={handleOpenBrochure}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

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

      {/* Lead Capture Gate — scroll-triggered mandatory form for new visitors */}
      <LeadGate />
    </div>
  );
}

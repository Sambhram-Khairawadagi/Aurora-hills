"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { FestiveScheme } from "@/components/FestiveScheme";


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

  // Ad-specific header visibility
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
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        <TrustBadges />
        <SanctionedLayout onOpenEnquiry={handleOpenEnquiry} onOpenBrochure={handleOpenBrochure} />
        <LocationConnectivity onOpenEnquiry={handleOpenEnquiry} onOpenQR={handleOpenQR} />
        <Gallery onOpenVideo={handleOpenVideo} onOpenEnquiry={handleOpenEnquiry} onOpenSiteVisit={handleOpenSiteVisit} />
        <DevelopmentVideo onOpenSiteVisit={handleOpenSiteVisit} />
        <Amenities onOpenEnquiry={handleOpenEnquiry} />
        <FestiveScheme onOpenEnquiry={handleOpenEnquiry} />
        <DirectAnswerHub onOpenEnquiry={handleOpenEnquiry} onOpenSiteVisit={handleOpenSiteVisit} />
        <section id="about" className="py-12 sm:py-16 px-4 bg-emerald-950 text-white text-center">
          <p className="text-sm text-emerald-100 mb-3">Sai Smruti Developers · The Aurora Hills</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold">See your future address in person</h2>
          <p className="max-w-xl mx-auto mt-4 text-base text-emerald-50 leading-relaxed">Walk the site, review the approved layout and discuss available plots with our team. Complimentary pickup across Dharwad and Hubli.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button className="primary-button" onClick={handleOpenSiteVisit}>Book a Free Site Visit</button>
            <button className="secondary-button" onClick={() => handleOpenEnquiry("Final Price Sheet CTA")}>Get Layout &amp; Price Sheet</button>
          </div>
        </section>
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

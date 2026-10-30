"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { FestiveTicker } from "@/components/FestiveTicker";

interface NavbarProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
  onOpenBrochure: () => void;
  onOpenSiteVisit: () => void;
  hasAdsTopBar?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
  onOpenSiteVisit,
  hasAdsTopBar = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "Site Photos", href: "#gallery" },
    { label: "Festive Scheme 🎁", href: "#festive-offer", isSpecial: true },
    { label: "Location", href: "#location" },
    { label: "Amenities", href: "#amenities" },
    { label: "Layout", href: "#layout" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        hasAdsTopBar ? "top-[44px]" : "top-0"
      }`}
    >
      {!hasAdsTopBar && <FestiveTicker onOpenEnquiry={onOpenEnquiry} />}
      <div className="py-1 px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-500 px-5 sm:px-7 flex items-center justify-between ${isScrolled
              ? "bg-white/95 backdrop-blur-xl border border-white/60 shadow-xl shadow-emerald-950/10 py-2 mt-0.5"
              : "bg-white/85 backdrop-blur-md border border-white/50 shadow-lg py-2 mt-0.5"
            }`}
        >
        {/* Brand Logo - Compact */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <Image
            src="/images/aurora-hills-logo-transparent.png"
            alt="The Aurora Hills"
            width={160}
            height={50}
            className="h-11 sm:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation Links - Animated */}
        <nav className="hidden lg:flex items-center gap-2 lg:gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative px-2.5 py-1 text-sm font-bold transition-all whitespace-nowrap group ${
                link.isSpecial
                  ? "text-red-900 bg-amber-100 hover:bg-amber-200/90 px-3.5 py-1 rounded-full border border-amber-300 shadow-sm font-semibold animate-pulse-subtle"
                  : "text-gray-700 hover:text-emerald-700"
              }`}
            >
              {link.label}
              {!link.isSpecial && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-emerald-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* CTA Button & Contact - More Prominent */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6 flex-shrink-0">
          <button
            onClick={() => onOpenEnquiry("Navbar CTA")}
            className="px-6 py-3 rounded-full bg-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-sm hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap flex items-center gap-2"
          >
            <span>Get Price Sheet</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenEnquiry("Mobile Quick CTA")}
            className="sm:hidden px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-semibold uppercase tracking-wider shadow-md shadow-emerald-500/30 whitespace-nowrap"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-3.5 sm:mx-auto max-w-lg bg-white/95 backdrop-blur-2xl rounded-3xl p-4 border border-white/60 shadow-2xl animate-fade-in space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <Image
              src="/images/aurora-hills-logo-transparent.png"
              alt="The Aurora Hills"
              width={100}
              height={36}
              className="h-8 w-auto object-contain"
            />
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Pre-Launch Phase
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2.5 rounded-xl text-sm font-bold text-center transition-all ${
                  link.isSpecial
                    ? "col-span-2 bg-gradient-to-r from-[#450A14] via-[#7B1123] to-[#450A14] text-amber-300 font-semibold border border-amber-400/50 shadow-md py-3"
                    : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry("Mobile Menu CTA");
            }}
            className="w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-wide shadow-sm flex items-center justify-center gap-2"
          >
            <span>Enquire for Plot Booking</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenEnquiry: (source?: string) => void;
  onOpenBrochure: () => void;
  onOpenSiteVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
  onOpenSiteVisit,
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
    { label: "About", href: "#about" },
    { label: "Site Tour", href: "#development" },
    { label: "Amenities", href: "#amenities" },
    { label: "Layout", href: "#layout" },
    { label: "Location", href: "#location" },
    { label: "Pricing", href: "#pricing" },
    { label: "Future ROI", href: "#roi-calculator" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-3 sm:px-6 lg:px-8">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-lg ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border border-emerald-100 shadow-emerald-950/10"
            : "bg-white/90 backdrop-blur-md border border-white/80 shadow-md"
        }`}
      >
        {/* Brand Logo Only (NO text wording beside it) */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <div className="relative h-11 sm:h-12 w-auto flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/images/aurora-hills-logo.png"
              alt="The Aurora Hills"
              width={160}
              height={56}
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links (Single-Line No-Wrap) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 p-1 rounded-full neu-inset">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 xl:px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold text-charcoal-800 hover:text-emerald-700 hover:bg-white/90 transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Single High-Impact Action Button */}
        <div className="hidden sm:flex items-center flex-shrink-0">
          <button
            onClick={() => onOpenEnquiry("Navbar CTA")}
            className="px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95 whitespace-nowrap flex items-center gap-2"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenEnquiry("Mobile Quick CTA")}
            className="sm:hidden px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-black uppercase tracking-wider whitespace-nowrap"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl neu-button text-forest-950"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-lg mx-auto bg-white/95 backdrop-blur-xl rounded-3xl p-5 border border-emerald-100 shadow-2xl animate-fade-in space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <Image
              src="/images/aurora-hills-logo.png"
              alt="The Aurora Hills"
              width={120}
              height={45}
              className="h-10 w-auto object-contain"
            />
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Plots From ₹42 Lakhs
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl neu-button text-sm font-bold text-charcoal-800 text-left hover:text-emerald-700 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-emerald-600">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-charcoal-200/40 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry("Mobile Menu CTA");
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white text-xs font-black uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
            >
              <span>Enquire for Plot Booking</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

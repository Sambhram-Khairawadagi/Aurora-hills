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
    { label: "Amenities", href: "#amenities" },
    { label: "Layout", href: "#layout" },
    { label: "Location", href: "#location" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 px-3 py-1.5 flex items-center justify-between ${isScrolled
            ? "bg-white/95 backdrop-blur-md border border-emerald-100 shadow-lg shadow-emerald-950/8"
            : "bg-white/80 backdrop-blur-md border border-white/60 shadow-md"
          }`}
      >
        {/* Brand Logo - Compact */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <Image
            src="/images/aurora-hills-logo.png"
            alt="The Aurora Hills"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links - Compact */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1 rounded-full text-[13px] font-semibold text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Compact */}
        <div className="hidden sm:flex items-center flex-shrink-0">
          <button
            onClick={() => onOpenEnquiry("Navbar CTA")}
            className="px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-wide shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenEnquiry("Mobile Quick CTA")}
            className="sm:hidden px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold tracking-wide whitespace-nowrap"
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-lg mx-auto bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-emerald-100 shadow-2xl animate-fade-in space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <Image
              src="/images/aurora-hills-logo.png"
              alt="The Aurora Hills"
              width={100}
              height={36}
              className="h-8 w-auto object-contain"
            />
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              From ₹42L
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl text-sm font-semibold text-gray-700 text-center hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
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

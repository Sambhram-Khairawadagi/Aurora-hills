"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Menu, X, Sparkles, Phone, Download } from "lucide-react";

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
    { label: "Sanctioned Layout", href: "#layout" },
    { label: "Location", href: "#location" },
    { label: "Pricing", href: "#pricing" },
    { label: "Future Returns", href: "#roi-calculator" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-3 sm:px-6 lg:px-8">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border border-emerald-100 shadow-emerald-950/10"
            : "bg-white/90 backdrop-blur-md border border-white/80 shadow-md"
        }`}
      >
        {/* Brand Logo & Name (BIG SIZE & HIGH VISIBILITY) */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative h-12 sm:h-14 w-auto flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/images/aurora-hills-logo.png"
              alt="The Aurora Hills Dharwad Logo"
              width={140}
              height={56}
              className="h-11 sm:h-13 w-auto object-contain drop-shadow-sm"
              priority
            />
          </div>
          <div className="hidden sm:block border-l-2 border-emerald-600/30 pl-3">
            <span className="text-base sm:text-lg font-black font-serif text-forest-950 tracking-wider block leading-tight">
              THE AURORA HILLS
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-extrabold green-text-gradient">
              Dharwad City • Luxury Villa Plots
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Larger Font) */}
        <nav className="hidden xl:flex items-center gap-1.5 p-1.5 rounded-full neu-inset">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-sm font-bold text-charcoal-800 hover:text-emerald-700 hover:bg-white/90 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenSiteVisit}
            className="px-4 py-2.5 rounded-full neu-button text-sm font-bold text-forest-950 flex items-center gap-2 hover:text-emerald-700 transition-colors shadow-sm"
          >
            <Calendar className="w-4 h-4 text-emerald-600" />
            <span>Book Site Visit</span>
          </button>

          <button
            onClick={() => onOpenEnquiry("Navbar CTA")}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white text-sm font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => onOpenEnquiry("Mobile Quick CTA")}
            className="md:hidden px-3.5 py-2 rounded-full bg-emerald-600 text-white text-xs font-black uppercase"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl neu-button text-forest-950"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-2 max-w-lg mx-auto bg-white/95 backdrop-blur-xl rounded-3xl p-5 border border-emerald-100 shadow-2xl animate-fade-in space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Image
                src="/images/aurora-hills-logo.png"
                alt="The Aurora Hills"
                width={100}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="font-serif font-black text-sm text-forest-950">THE AURORA HILLS</span>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              Starts ₹42 Lakhs
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
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white text-sm font-black uppercase tracking-wider shadow-md"
            >
              Enquire for Plot Booking
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSiteVisit();
              }}
              className="w-full py-3 rounded-full neu-button text-sm font-bold text-forest-950 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>Schedule Free Site Tour</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="w-full py-2.5 text-xs font-bold text-emerald-800 flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Sanctioned Brochure</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Menu, X, Sparkles } from "lucide-react";

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
    { label: "Site Video", href: "#development" },
    { label: "Amenities", href: "#amenities" },
    { label: "Master Plan", href: "#master-plan" },
    { label: "Location", href: "#location" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 px-5 py-2.5 flex items-center justify-between ${
          isScrolled
            ? "neu-glass shadow-lg border border-white/90"
            : "bg-white/70 backdrop-blur-md border border-white/70 shadow-sm"
        }`}
      >
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl neu-button flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
            <Image
              src="/images/aurora-hills-logo.png"
              alt="The Aurora Hills Logo"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="text-sm sm:text-base font-black font-serif text-forest-950 tracking-widest block leading-none">
              THE AURORA HILLS
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold green-text-gradient">
              Dharwad • Luxury Plots
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full neu-inset">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-charcoal-700 hover:text-emerald-700 hover:bg-white/80 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenSiteVisit}
            className="px-4 py-2 rounded-full neu-button text-xs font-bold text-forest-950 flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>Site Visit</span>
          </button>

          <button
            onClick={() => onOpenEnquiry("Navbar CTA")}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full neu-button text-forest-950"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-lg mx-auto neu-glass rounded-3xl p-5 border border-white/90 shadow-2xl animate-fade-in space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl neu-button text-xs font-bold text-charcoal-800 text-center hover:text-emerald-700"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-charcoal-200/40 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry("Mobile Menu CTA");
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white text-xs font-black uppercase tracking-wider shadow-md"
            >
              Enquire for Plot Booking
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSiteVisit();
              }}
              className="w-full py-3 rounded-full neu-button text-xs font-bold text-forest-950 flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Schedule Free Site Tour</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

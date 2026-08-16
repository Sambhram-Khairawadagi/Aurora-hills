"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, Menu, X, Download, Calendar, ShieldCheck } from "lucide-react";
import { CONTACT_NUMBERS } from "@/lib/projectData";

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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Amenities", href: "#amenities" },
    { label: "Master Plan", href: "#master-plan" },
    { label: "Location", href: "#location" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Announcement & Verified Hotline Bar */}
      <header className="bg-forest-950 text-gold-100 text-xs border-b border-forest-800/80 relative z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              NA-KJP & HDUDA Approved Plotted Township
            </span>
            <span className="text-forest-600">|</span>
            <span className="text-sand-200">Mansur & Sanna Somapura, Dharwad (Near NH-4)</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span className="text-gray-300">Hotlines:</span>
              <a
                href={`tel:${CONTACT_NUMBERS[0]}`}
                className="font-semibold text-gold-300 hover:text-white transition-colors"
              >
                {CONTACT_NUMBERS[0]}
              </a>
              <span className="text-forest-600">/</span>
              <a
                href={`tel:${CONTACT_NUMBERS[1]}`}
                className="font-semibold text-gold-300 hover:text-white transition-colors"
              >
                {CONTACT_NUMBERS[1]}
              </a>
            </div>

            <button
              onClick={onOpenBrochure}
              className="flex items-center gap-1 text-gold-300 hover:text-white font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download Brochure
            </button>
          </div>
        </div>
      </header>

      {/* Main Sticky Navigation */}
      <nav
        className={`fixed top-0 md:top-auto left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-forest-950/95 backdrop-blur-md shadow-2xl py-3 border-b border-forest-800/80"
            : "bg-gradient-to-b from-forest-950/90 via-forest-950/60 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-forest-900/90 flex items-center justify-center shadow-lg group-hover:border-gold-400 transition-colors overflow-hidden p-1">
              {/* Geometric emblem */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-gold-300" fill="currentColor">
                <path d="M50 5 C25 5 5 25 5 50 C5 75 25 95 50 95 C75 95 95 75 95 50 C95 25 75 5 50 5 Z M50 15 C69 15 85 31 85 50 C85 69 69 85 50 85 C31 85 15 69 15 50 C15 31 31 15 50 15 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
                <path d="M25 65 L50 25 L75 65 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
                <circle cx="50" cy="50" r="12" fill="currentColor" fillOpacity="0.3"/>
                <path d="M20 75 Q50 60 80 75" fill="none" stroke="currentColor" strokeWidth="3"/>
              </svg>
            </div>
            <div>
              <div className="font-serif tracking-widest text-lg md:text-xl font-bold uppercase text-white leading-tight">
                THE AURORA <span className="text-gold-400">HILLS</span>
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase font-semibold text-emerald-400">
                Hosa Lifestyle, Hosa Dharwad
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-sand-100 hover:text-gold-300 transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSiteVisit}
              className="px-4 py-2 text-xs font-semibold text-gold-300 hover:text-white border border-gold-400/50 hover:border-gold-400 rounded-full transition-all flex items-center gap-1.5 bg-forest-900/50 backdrop-blur-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Site Visit
            </button>

            <button
              onClick={() => onOpenEnquiry("Navbar CTA")}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-forest-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 hover:from-gold-300 hover:to-gold-500 rounded-full shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-forest-950/98 border-b border-forest-800 px-6 py-6 space-y-4 animate-fade-in backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-3 pb-4 border-b border-forest-800">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-200 hover:text-gold-300 py-1.5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs text-sand-200 mb-1">Direct Helpline:</div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-gold-300">
                {CONTACT_NUMBERS.map((num) => (
                  <a key={num} href={`tel:${num}`} className="bg-forest-900 px-3 py-1.5 rounded-lg border border-forest-800">
                    ?? {num}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSiteVisit();
                }}
                className="w-full py-2.5 text-xs font-bold text-gold-300 border border-gold-400/50 rounded-xl bg-forest-900/80 text-center"
              >
                Book Site Visit
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry("Mobile Menu");
                }}
                className="w-full py-2.5 text-xs font-bold text-forest-950 bg-gold-400 rounded-xl text-center shadow-lg"
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

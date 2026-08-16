"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X, Download, Calendar, ShieldCheck, ChevronRight } from "lucide-react";
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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Video", href: "#development" },
    { label: "Amenities", href: "#amenities" },
    { label: "Master Plan", href: "#master-plan" },
    { label: "Location", href: "#location" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 sm:py-4 px-3 sm:px-6 lg:px-8">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${
        isScrolled
          ? "bg-forest-950/75 backdrop-blur-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] px-4 sm:px-6 py-2.5"
          : "bg-forest-950/40 backdrop-blur-md border border-white/5 px-4 sm:px-6 py-3"
      }`}>
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-gold-400/30 flex items-center justify-center overflow-hidden p-1 group-hover:border-gold-400/60 transition-all">
              <Image
                src="/images/aurora-hills-logo.png"
                alt="The Aurora Hills Dharwad Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold font-serif text-white tracking-widest block leading-none">
                THE AURORA HILLS
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-gold-300/90 font-medium">
                Hosa Lifestyle • Dharwad
              </span>
            </div>
          </Link>

          {/* Desktop Minimal Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-sand-200/90 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_NUMBERS[0]}`}
              className="text-xs font-semibold text-sand-200 hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-white/5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{CONTACT_NUMBERS[0]}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry("Navbar CTA")}
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-forest-950 bg-gradient-to-r from-gold-400 via-gold-300 to-amber-400 hover:from-gold-300 hover:to-gold-500 shadow-[0_0_20px_rgba(200,155,60,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-3xl bg-forest-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-4 animate-fade-in max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-sand-200 text-xs font-medium hover:text-white hover:bg-white/10 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3 h-3 text-gold-400/60" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenEnquiry("Mobile Menu CTA"); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-forest-950 text-xs font-bold uppercase tracking-wider text-center shadow-lg"
            >
              Enquire For Plot
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSiteVisit(); }}
              className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              Book Site Visit
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBrochure(); }}
              className="w-full py-2 rounded-xl text-xs text-sand-300 hover:text-white flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              Download Brochure (PDF)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Download, QrCode, ShieldCheck, Heart, Sun, Trees, Sparkles } from "lucide-react";
import { CONTACT_NUMBERS, EMAIL_ADDRESS } from "@/lib/projectData";
import { PageViewCounter } from "./PageViewCounter";

interface FooterProps {
  onOpenBrochure: () => void;
  onOpenQR: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure, onOpenQR }) => {
  return (
    <footer className="bg-gradient-to-b from-[#EEF5EA] to-[#E3EDE0] border-t border-emerald-300/60 text-forest-950 pt-16 pb-24 sm:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-200/70">
          {/* Brand & Summary (Big Logo & Clear Description) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <Image
                src="/images/aurora-hills-logo-transparent.png"
                alt="The Aurora Hills Dharwad Logo"
                width={130}
                height={54}
                className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm"
              />
              <div className="border-l-2 border-emerald-500/40 pl-3">
                <span className="text-lg sm:text-xl font-black font-serif text-forest-950 tracking-wider block leading-tight">
                  THE AURORA HILLS
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-black vibrant-text-gradient">
                  Dharwad City • Luxury Plots
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed max-w-md font-medium">
              Dharwad City’s premier planned residential sanctuary at Sunset Viewpoint. NA-KJP & HDUDA approved layout starting from <strong className="text-emerald-900 font-bold">₹42 Lakhs</strong> with clear titles and 20+ lifestyle amenities.
            </p>

            <PageViewCounter />

            <div className="p-4 rounded-2xl bg-white/90 border border-emerald-300/40 shadow-sm text-sm space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="text-xs uppercase font-black text-emerald-800 tracking-wider">
                  Site Address
                </span>
              </div>
              <div className="font-bold text-forest-950">
                <a href="https://share.google/lhDyTbBa3vWnMhOFK" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors hover:underline">
                  Sunset Viewpoint, Karnatak University, Dharwad City, Karnataka (Near NH-4)
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-emerald-900">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-charcoal-700 font-medium">
              <li><a href="#hero" className="hover:text-emerald-700 transition-colors">Overview</a></li>
              <li><a href="#about" className="hover:text-emerald-700 transition-colors">About Project</a></li>
              <li><a href="#development" className="hover:text-emerald-700 transition-colors">Site Video & Drone Tour</a></li>
              <li><a href="#amenities" className="hover:text-emerald-700 transition-colors">20+ Lifestyle Amenities</a></li>
              <li><a href="#layout" className="hover:text-emerald-700 transition-colors">Approved Layout Plan</a></li>
              <li><a href="#location" className="hover:text-emerald-700 transition-colors">Location & Connectivity</a></li>
              <li><a href="#faq" className="hover:text-emerald-700 transition-colors">Buyer Guide & FAQ</a></li>
              <li><a href="#gallery" className="hover:text-emerald-700 transition-colors">Real Photo Gallery</a></li>
            </ul>
          </div>

          {/* Developer Helpline & Downloads */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-emerald-900">
              Direct Helpline & Downloads
            </h4>

            <div className="space-y-3 text-sm text-charcoal-700 font-medium">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-bold">{CONTACT_NUMBERS.join(" • ")}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{EMAIL_ADDRESS}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBrochure}
                className="px-5 py-2.5 rounded-full bg-white border border-emerald-200 text-sm font-bold text-forest-950 hover:text-emerald-700 flex items-center gap-2 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-emerald-600" />
                <span>Brochure PDF</span>
              </button>

              <button
                onClick={onOpenQR}
                className="px-5 py-2.5 rounded-full bg-white border border-emerald-200 text-sm font-bold text-forest-950 hover:text-emerald-700 flex items-center gap-2 transition-colors shadow-sm"
              >
                <QrCode className="w-4 h-4 text-emerald-600" />
                <span>Location QR</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-xs sm:text-sm text-charcoal-600 text-center md:text-left">
          <div className="flex flex-col gap-2 md:gap-1.5">
            <p>© 2026 The Aurora Hills Dharwad City. All Rights Reserved.</p>
            <div className="text-[10px] sm:text-xs text-charcoal-500/80 font-medium tracking-wide flex justify-center md:justify-start items-center gap-2 uppercase">
              <span>Designed & Maintained by</span>
              <Image 
                src="/images/property-basket-logo-transparent.png" 
                alt="Property Basket Logo" 
                width={100} 
                height={30} 
                className="h-6 w-auto object-contain opacity-80"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-charcoal-700 flex-wrap">
            <Link href="/admin" className="hover:text-emerald-700 transition-colors font-bold">
              Admin Portal
            </Link>
            <span className="text-emerald-300">•</span>
            <span className="font-bold">HDUDA / NA-KJP Approved Project</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

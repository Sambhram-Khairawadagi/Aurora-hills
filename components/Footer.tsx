"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Download, QrCode, ShieldCheck, Heart } from "lucide-react";
import { CONTACT_NUMBERS, EMAIL_ADDRESS } from "@/lib/projectData";

interface FooterProps {
  onOpenBrochure: () => void;
  onOpenQR: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure, onOpenQR }) => {
  return (
    <footer className="bg-[#EEF3EB] border-t border-charcoal-200/60 text-forest-950 pt-16 pb-24 sm:pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-charcoal-200/50">
          {/* Brand & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl neu-button flex items-center justify-center p-1.5">
                <Image
                  src="/images/aurora-hills-logo.png"
                  alt="The Aurora Hills Logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-base font-black font-serif text-forest-950 tracking-wider block">
                  THE AURORA HILLS
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold green-text-gradient">
                  Dharwad City • Luxury Plots
                </span>
              </div>
            </div>

            <p className="text-xs text-charcoal-700 leading-relaxed max-w-sm">
              Dharwad City’s premier planned residential sanctuary. NA-KJP & HDUDA sanctioned layout with clear titles and 20+ lifestyle amenities.
            </p>

            <div className="p-3.5 rounded-2xl neu-inset text-xs space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider">
                  Location
                </span>
              </div>
              <div className="font-bold text-forest-950">
                Dharwad City, Karnataka (Near NH-4 Highway)
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-emerald-800">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-700">
              <li><a href="#hero" className="hover:text-emerald-700 transition-colors">Overview</a></li>
              <li><a href="#about" className="hover:text-emerald-700 transition-colors">About Project</a></li>
              <li><a href="#development" className="hover:text-emerald-700 transition-colors">Site Video Tour</a></li>
              <li><a href="#amenities" className="hover:text-emerald-700 transition-colors">20+ Amenities</a></li>
              <li><a href="#master-plan" className="hover:text-emerald-700 transition-colors">Interactive 3D Master Plan</a></li>
              <li><a href="#location" className="hover:text-emerald-700 transition-colors">Location & Connectivity</a></li>
              <li><a href="#pricing" className="hover:text-emerald-700 transition-colors">Pricing & Estimator</a></li>
            </ul>
          </div>

          {/* Developer Helpline & Downloads */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-emerald-800">
              Direct Helpline & Downloads
            </h4>

            <div className="space-y-2 text-xs text-charcoal-700">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{CONTACT_NUMBERS.join(" • ")}</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{EMAIL_ADDRESS}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <button
                onClick={onOpenBrochure}
                className="px-4 py-2 rounded-full neu-button text-xs font-bold text-forest-950 hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>Brochure PDF</span>
              </button>

              <button
                onClick={onOpenQR}
                className="px-4 py-2 rounded-full neu-button text-xs font-bold text-forest-950 hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
              >
                <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>QR GPS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-charcoal-600">
          <p>© 2026 The Aurora Hills Dharwad City. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-emerald-700 transition-colors font-semibold">
              Admin Portal
            </Link>
            <span>•</span>
            <span>RERA / HDUDA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

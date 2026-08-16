"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, QrCode, FileText, Lock, ShieldCheck, Heart } from "lucide-react";
import { CONTACT_NUMBERS } from "@/lib/projectData";

interface FooterProps {
  onOpenBrochure: () => void;
  onOpenQR: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure, onOpenQR }) => {
  return (
    <footer className="bg-forest-950 text-white border-t border-white/5 relative z-10 pb-24 sm:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-gold-400/30 flex items-center justify-center p-1">
                <Image
                  src="/images/aurora-hills-logo.png"
                  alt="The Aurora Hills Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-bold font-serif text-white tracking-widest block">
                  THE AURORA HILLS
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-gold-300">
                  Hosa Lifestyle • Hosa Dharwad
                </span>
              </div>
            </div>

            <p className="text-xs text-sand-300 leading-relaxed max-w-sm font-light">
              Dharwad’s premier planned plotted sanctuary. Experience hill breezes, underground civic utilities, and rapid highway access in Mansur & Sanna Somapura.
            </p>

            <div className="text-xs text-emerald-300 font-kannada pt-1">
              ಗ್ರಾಮ : ಮನಸೂರ + ಸಣ್ಣ ಸೋಮಾಪುರ, ತಾಲೂಕ : ಧಾರವಾಡ
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-sand-300">
              <li><a href="#hero" className="hover:text-gold-300 transition-colors">Home Overview</a></li>
              <li><a href="#about" className="hover:text-gold-300 transition-colors">About Project</a></li>
              <li><a href="#development" className="hover:text-gold-300 transition-colors">Site Video</a></li>
              <li><a href="#amenities" className="hover:text-gold-300 transition-colors">Amenities (20+)</a></li>
              <li><a href="#master-plan" className="hover:text-gold-300 transition-colors">Master Plan</a></li>
              <li><a href="#location" className="hover:text-gold-300 transition-colors">Location Route</a></li>
              <li><a href="#pricing" className="hover:text-gold-300 transition-colors">Pricing from ₹35.99 L</a></li>
            </ul>
          </div>

          {/* Contact Helpline Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Direct Contact Lines
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {CONTACT_NUMBERS.map((num) => (
                <a
                  key={num}
                  href={`tel:${num}`}
                  className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/10 border border-white/5 text-sand-200 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3 h-3 text-gold-400" />
                  <span>{num}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenBrochure}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-sand-200 flex items-center gap-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-gold-400" />
                Brochure PDF
              </button>

              <button
                onClick={onOpenQR}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-sand-200 flex items-center gap-1.5 transition-colors"
              >
                <QrCode className="w-3.5 h-3.5 text-gold-400" />
                Scan QR Code
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Strip */}
        <div className="pt-8 border-t border-white/5 text-[10px] text-sand-400 leading-relaxed space-y-2 font-light">
          <p>
            <strong>Disclaimer:</strong> The visuals, artistic impressions, floor plans, and layout representations shown on this website are for illustrative and representational purposes only. All dimensions, specifications, prices, and terms are subject to change by the developers in compliance with applicable local laws and government approvals. This web portal does not constitute a legal offering.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-sand-400">
            <div>
              © {new Date().getFullYear()} The Aurora Hills, Dharwad. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="/admin" className="hover:text-gold-300 flex items-center gap-1">
                <Lock className="w-3 h-3" />
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, ShieldCheck, Download, ExternalLink, QrCode } from "lucide-react";
import { CONTACT_NUMBERS } from "@/lib/projectData";

interface FooterProps {
  onOpenBrochure: () => void;
  onOpenQR: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure, onOpenQR }) => {
  return (
    <footer className="bg-forest-950 text-white border-t border-forest-800 relative z-10 pb-20 sm:pb-8">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-forest-900 flex items-center justify-center p-1">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold-400" fill="currentColor">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4"/>
                  <path d="M25 65 L50 25 L75 65 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
                </svg>
              </div>
              <div>
                <div className="font-serif tracking-widest text-lg font-bold uppercase text-white">
                  THE AURORA <span className="text-gold-400">HILLS</span>
                </div>
                <div className="text-[10px] tracking-widest uppercase font-semibold text-emerald-400">
                  Hosa Lifestyle, Hosa Dharwad
                </div>
              </div>
            </div>

            <p className="text-xs text-sand-200 leading-relaxed max-w-sm">
              The Aurora Hills � where thoughtfully planned plots meet nature, connectivity and modern community living in Dharwad, Karnataka.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-emerald-400">
              <span className="bg-forest-900 px-2.5 py-1 rounded-md border border-forest-800">? NA-KJP Approved</span>
              <span className="bg-forest-900 px-2.5 py-1 rounded-md border border-forest-800">? HDUDA Approved</span>
              <span className="bg-forest-900 px-2.5 py-1 rounded-md border border-forest-800">? Bank Loans</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-sand-200">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Project</a></li>
              <li><a href="#amenities" className="hover:text-gold-400 transition-colors">Amenities (20+)</a></li>
              <li><a href="#master-plan" className="hover:text-gold-400 transition-colors">Curated Master Plan</a></li>
              <li><a href="#location" className="hover:text-gold-400 transition-colors">Location & Route</a></li>
              <li><a href="#pricing" className="hover:text-gold-400 transition-colors">Pricing from ₹35.99 L</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Col 3: Verified Contact Lines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-300">
              Helpline & Enquiry
            </h4>
            <div className="space-y-2 text-xs text-sand-200">
              {CONTACT_NUMBERS.map((num) => (
                <a
                  key={num}
                  href={`tel:${num}`}
                  className="flex items-center gap-2 hover:text-gold-300 font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>{num}</span>
                </a>
              ))}

              <div className="pt-2 text-[11px] text-gray-400 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Mansur + Sanna Somapura, Dharwad, Karnataka (Near NH-4)</span>
              </div>
            </div>
          </div>

          {/* Col 4: Marketing & QR */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-300">
              Marketing & Layout QR
            </h4>

            <div className="p-4 rounded-2xl bg-forest-900/90 border border-forest-800 space-y-2">
              <div className="text-[11px] text-sand-200">
                <strong className="text-white block">Marketed by Property Basket</strong>
                Powered by SAMSO
              </div>
              <div className="text-[11px] text-gold-300">
                Brand Partner: <strong>Reachmaxx</strong>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={onOpenQR}
                  className="px-3 py-1.5 rounded-lg bg-forest-950 text-gold-300 hover:text-white border border-forest-700 text-xs font-semibold flex items-center gap-1.5"
                >
                  <QrCode className="w-3.5 h-3.5" /> Scan QR
                </button>
                <button
                  onClick={onOpenBrochure}
                  className="px-3 py-1.5 rounded-lg bg-gold-400 text-forest-950 text-xs font-bold flex items-center gap-1.5 shadow"
                >
                  <Download className="w-3.5 h-3.5" /> PDF
                </button>
              </div>
            </div>

            <Link href="/admin" className="text-[11px] text-gray-400 hover:text-gold-300 flex items-center gap-1">
              <span>Admin CRM Portal</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Real Estate Legal Disclaimer as Required */}
        <div className="mt-12 pt-8 border-t border-forest-800/80 space-y-4">
          <div className="p-5 rounded-2xl bg-forest-900/60 border border-forest-800 text-[11px] text-gray-300 leading-relaxed">
            <strong className="text-sand-100 uppercase tracking-wider block mb-1">
              Real Estate Disclaimer:
            </strong>
            The information presented on this website is intended for general informational and marketing purposes. Project details, approvals, pricing, availability, amenities, specifications and other information are subject to change. Buyers are advised to independently verify all relevant documents, approvals, specifications, title information, pricing and other details with the authorized representatives before making any purchase decision.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <div>
              � {new Date().getFullYear()} The Aurora Hills. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="hover:text-gold-300 cursor-pointer">Privacy Policy</span>
              <span>�</span>
              <span className="hover:text-gold-300 cursor-pointer">Terms & Conditions</span>
              <span>�</span>
              <span className="hover:text-gold-300 cursor-pointer">Legal Disclaimer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

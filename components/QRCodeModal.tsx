"use client";

import React from "react";
import Image from "next/image";
import { X, QrCode, Sparkles, Navigation, Download } from "lucide-react";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-b from-white to-emerald-50/50 border-2 border-emerald-300/60 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-forest-950 shadow-2xl shadow-emerald-950/20 relative text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-emerald-100 text-charcoal-700 hover:text-emerald-800 transition-colors border border-emerald-200 shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="w-14 h-14 rounded-2xl vibrant-icon-emerald flex items-center justify-center mx-auto mb-4">
          <QrCode className="w-7 h-7 text-white" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full vibrant-badge-emerald text-[11px] font-black uppercase tracking-widest mb-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          Official Location QR
        </div>

        <h3 className="text-xl font-bold font-serif text-forest-950 mb-1">
          Scan for Live GPS Directions
        </h3>
        <p className="text-xs text-charcoal-600 mb-5 leading-relaxed">
          Scan with your smartphone camera to open Google Maps navigation directly to <strong>The Aurora Hills</strong>.
        </p>

        {/* Authentic QR Code Image Frame */}
        <div className="p-3 bg-white rounded-2xl shadow-xl inline-block mb-4 border-2 border-emerald-300/50 relative group">
          <div className="relative w-56 h-56 rounded-xl overflow-hidden bg-white flex items-center justify-center">
            <Image
              src="/images/aurora-hills-qr.png"
              alt="The Aurora Hills Dharwad Official Google Maps QR Code"
              width={224}
              height={224}
              className="object-contain p-1"
              priority
            />
          </div>
        </div>

        <div className="text-xs text-emerald-900 font-extrabold mb-5 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Sunset Viewpoint, Dharwad City, Karnataka</span>
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href="https://maps.app.goo.gl/3EnF93gjmTueXy667"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Navigation className="w-4 h-4" />
            <span>Open Google Maps Directly</span>
          </a>

          <a
            href="/images/aurora-hills-qr.png"
            download="Aurora-Hills-Location-QR.png"
            className="w-full py-2.5 rounded-full bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-emerald-600" />
            <span>Download QR Code Image</span>
          </a>
        </div>
      </div>
    </div>
  );
};

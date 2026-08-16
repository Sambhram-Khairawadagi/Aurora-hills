"use client";

import React from "react";
import { X, QrCode, Sparkles, Navigation, MapPin } from "lucide-react";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-forest-900/95 via-forest-900/85 to-forest-950/95 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-white shadow-2xl relative text-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-sand-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-gold-400 flex items-center justify-center mx-auto mb-4">
          <QrCode className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold font-serif text-white mb-1">
          Scan for Instant Mobile Map
        </h3>
        <p className="text-xs text-sand-300 mb-6">
          Scan with your smartphone camera to open Google Maps GPS navigation to the site.
        </p>

        {/* Dynamic Simulated QR Canvas */}
        <div className="p-4 bg-white rounded-2xl shadow-xl inline-block mb-4">
          <div className="w-48 h-48 bg-gray-950 rounded-lg p-2 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-2 border-2 border-white/20 rounded grid grid-cols-6 grid-rows-6 gap-1 p-1">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-sm ${
                    i % 2 === 0 || i % 5 === 0 || i === 0 || i === 5 || i === 30 || i === 35
                      ? "bg-white"
                      : "bg-transparent"
                  }`}
                />
              ))}
            </div>
            <div className="relative z-10 bg-forest-950 border border-gold-400 p-2 rounded-lg text-gold-300 text-[10px] font-bold font-serif shadow-lg">
              AURORA HILLS
            </div>
          </div>
        </div>

        <div className="text-[11px] text-emerald-300 font-kannada mb-4">
          ಗ್ರಾಮ : ಮನಸೂರ + ಸಣ್ಣ ಸೋಮಾಪುರ, ತಾಲೂಕ : ಧಾರವಾಡ
        </div>

        <a
          href="https://maps.google.com/?q=Dharwad+NH4+Mansur"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gold-300 transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Open Google Maps Directly</span>
        </a>
      </div>
    </div>
  );
};

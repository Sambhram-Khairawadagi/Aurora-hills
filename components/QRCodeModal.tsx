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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#F7F9F6] border border-white/90 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-forest-950 shadow-2xl relative text-center neu-card">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full neu-button text-charcoal-700 hover:text-forest-950 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-2xl neu-inset text-emerald-700 flex items-center justify-center mx-auto mb-4">
          <QrCode className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold font-serif text-forest-950 mb-1">
          Scan for Mobile Directions
        </h3>
        <p className="text-xs text-charcoal-600 mb-6">
          Scan with your smartphone camera to open Google Maps GPS navigation directly to The Aurora Hills.
        </p>

        {/* Dynamic Simulated QR Canvas */}
        <div className="p-4 bg-white rounded-2xl shadow-md inline-block mb-4 border border-charcoal-200">
          <div className="w-48 h-48 bg-forest-950 rounded-lg p-2 flex flex-col items-center justify-center relative overflow-hidden">
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
            <div className="relative z-10 bg-emerald-600 text-white p-2 rounded-lg text-[10px] font-black font-serif shadow-lg">
              AURORA HILLS
            </div>
          </div>
        </div>

        <div className="text-xs text-emerald-800 font-bold mb-4">
          Dharwad City, Karnataka
        </div>

        <a
          href="https://maps.app.goo.gl/3EnF93gjmTueXy667"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full neu-button text-xs font-bold text-forest-950 hover:text-emerald-700 transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-emerald-600" />
          <span>Open Google Maps Directly</span>
        </a>
      </div>
    </div>
  );
};

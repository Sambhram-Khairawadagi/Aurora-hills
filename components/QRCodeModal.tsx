"use client";

import React from "react";
import { X, QrCode, MapPin, Compass, ExternalLink } from "lucide-react";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-forest-950 border border-gold-400/40 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-white shadow-2xl relative text-center">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-forest-900 text-gray-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-gold-400/20 text-gold-400 border border-gold-400/30 flex items-center justify-center mx-auto mb-4">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold font-serif text-white">
          Scan to View Layout in Map
        </h3>

        <p className="text-xs text-sand-200 mt-1 mb-5">
          Scan this QR Code with your smartphone camera to open the Master Plan & Google Navigation coordinates.
        </p>

        {/* QR Code Frame */}
        <div className="p-4 bg-white rounded-2xl border-2 border-gold-400/40 inline-block shadow-xl">
          {/* Authentic QR generated code representation */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent("https://theaurorahills.in/#master-plan")}`}
            alt="The Aurora Hills Dharwad Layout QR Code"
            width={180}
            height={180}
            className="rounded-lg"
          />
        </div>

        <div className="mt-4 text-[11px] text-gray-300 font-kannada">
          ಗ್ರಾಮ : ಮನಸೂರ + ಸಣ್ಣ ಸೋಮಾಪುರ, ತಾಲೂಕ : ಧಾರವಾಡ : ಗ್ರಾಮ : ಮನಸೂರ + ಸಣ್ಣ ಸೋಮಾಪುರ, ತಾಲೂಕ : ಧಾರವಾಡ + ಗ್ರಾಮ : ಮನಸೂರ + ಸಣ್ಣ ಸೋಮಾಪುರ, ತಾಲೂಕ : ಧಾರವಾಡ ಗ್ರಾಮ : ಮನಸೂರ + ಸಣ್ಣ ಸೋಮಾಪುರ, ತಾಲೂಕ : ಧಾರವಾಡ, ಗ್ರಾಮ : ಮನಸೂರ + ಸಣ್ಣ ಸೋಮಾಪುರ, ತಾಲೂಕ : ಧಾರವಾಡ : ಗ್ರಾಮ : ಮನಸೂರ + ಸಣ್ಣ ಸೋಮಾಪುರ, ತಾಲೂಕ : ಧಾರವಾಡ
        </div>

        <div className="mt-4 pt-4 border-t border-forest-800">
          <a
            href="#master-plan"
            onClick={onClose}
            className="text-xs font-bold text-gold-300 hover:text-white inline-flex items-center gap-1"
          >
            <span>Open Layout View on Screen</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

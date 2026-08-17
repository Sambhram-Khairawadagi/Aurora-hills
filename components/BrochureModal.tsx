"use client";

import React, { useState } from "react";
import { X, Download, FileText, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          requirement: "Digital Brochure Download",
          purpose: "Both",
          source: "Brochure Modal Form",
        }),
      });

      setDownloadReady(true);
      confetti({ particleCount: 60, spread: 70 });
      window.open("/brochure/the-aurora-hills-brochure.pdf", "_blank");
    } catch {
      window.open("/brochure/the-aurora-hills-brochure.pdf", "_blank");
      setDownloadReady(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDirectDownload = () => {
    window.open("/brochure/the-aurora-hills-brochure.pdf", "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#F7F9F6] border border-white/90 rounded-3xl p-6 sm:p-8 max-w-md w-full text-forest-950 shadow-2xl relative neu-card">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full neu-button text-charcoal-700 hover:text-forest-950 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl neu-inset text-emerald-700">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-serif text-forest-950">
              The Aurora Hills Brochure
            </h3>
            <span className="text-xs text-charcoal-600">Official Project PDF (5 Pages)</span>
          </div>
        </div>

        {downloadReady ? (
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold font-serif text-forest-950">
              Download Started!
            </h4>
            <p className="text-xs text-charcoal-700">
              Your official PDF brochure is downloading. If it didn&apos;t start automatically, click below:
            </p>
            <a
              href="/brochure/the-aurora-hills-brochure.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <Download className="w-4 h-4" /> Download PDF Now
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Enter your contact details to download the high-resolution digital brochure, master plan layout, and pricing sheets.
            </p>

            <div>
              <label className="block text-[11px] font-bold text-charcoal-700 uppercase tracking-wider mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-charcoal-700 uppercase tracking-wider mb-1">Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-charcoal-700 uppercase tracking-wider mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Optional email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-xs"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <Download className="w-4 h-4" />
              <span>{loading ? "Preparing PDF..." : "Download Official Brochure"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

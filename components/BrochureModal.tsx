"use client";

import React, { useState } from "react";
import { X, Download, FileText, CheckCircle2, Send, Lock } from "lucide-react";
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
          requirement: "Brochure Download Request",
          purpose: "Investment",
          source: "Brochure Download Modal",
        }),
      });

      setDownloadReady(true);
      confetti({ particleCount: 50, spread: 60 });
      // Trigger automatic download
      window.open("/brochure/the-aurora-hills-brochure.pdf", "_blank");
    } catch (err) {
      // Fallback direct download
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
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-forest-950 border border-gold-400/40 rounded-3xl p-6 sm:p-8 max-w-md w-full text-white shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-forest-900 text-gray-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-gold-400/20 text-gold-400 border border-gold-400/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-serif text-white">
              The Aurora Hills Brochure
            </h3>
            <span className="text-xs text-sand-200">Official Project PDF (5 Pages)</span>
          </div>
        </div>

        {downloadReady ? (
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold font-serif text-white">
              Download Started!
            </h4>
            <p className="text-xs text-sand-200">
              Your official PDF brochure is downloading. If it didn\'t start automatically, click below:
            </p>
            <a
              href="/brochure/the-aurora-hills-brochure.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-400 text-forest-950 text-xs font-bold uppercase tracking-wider"
            >
              <Download className="w-4 h-4" /> Download PDF Now
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <p className="text-xs text-sand-200 leading-relaxed">
              Enter your contact details to download the high-resolution digital brochure, complete master plan layout and pricing information.
            </p>

            <div>
              <label className="block text-xs font-semibold text-sand-200 mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-sand-200 mb-1">Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-sand-200 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Optional email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{loading ? "Preparing PDF..." : "Download Official Brochure"}</span>
            </button>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={handleDirectDownload}
                className="text-[11px] text-gray-400 hover:text-gold-300 underline"
              >
                Skip & download directly without enquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

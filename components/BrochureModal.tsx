"use client";

import { Modal } from "@/components/Modal";
import React, { useState, useEffect } from "react";
import { X, Download, FileText, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { getStoredUtm } from "@/lib/utm";
import { trackLeadSubmit } from "@/lib/gtag";
import confetti from "canvas-confetti";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  useEffect(() => { if (!isOpen) { setDownloadReady(false); } }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    setErrorMsg("");
    if (!/^[6-9]\d{9}$/.test(cleanPhone) || name.trim().length < 2) { setErrorMsg("Enter your name and a valid 10-digit mobile number."); return; }
    setLoading(true);

    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      setLoading(false);
      setLoading(false);
      return;
    }
    const finalName = trimmedName;

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: finalName,
          phone: cleanPhone,
          email,
          requirement: "Digital Brochure Download",
          purpose: "Both",
          source: "Brochure Modal Form",
          ...getStoredUtm(),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) { setErrorMsg(result.error || "We could not save your request. Please try again."); return; }
      trackLeadSubmit("Brochure Modal Form", "Digital Brochure Download");
      setDownloadReady(true);
      confetti({ particleCount: 60, spread: 70 });

    } catch {
      setErrorMsg("Your request could not be sent. Please try again or call our team.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="bg-[#F7F9F6] border border-white/90 rounded-3xl p-6 sm:p-8 max-w-md w-full text-forest-950 shadow-2xl relative neu-card max-h-[90vh] overflow-y-auto">
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
            <h3 className="text-lg font-semibold font-sans text-forest-950">
              The Aurora Hills Brochure
            </h3>
            <span className="text-xs sm:text-sm text-charcoal-700 font-medium">Official Project PDF (5 Pages)</span>
          </div>
        </div>

        {downloadReady ? (
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-semibold font-sans text-forest-950">
              Your Brochure Is Ready
            </h4>
            <p className="text-sm text-charcoal-700 font-medium">
              Your enquiry has been received. Choose Download PDF below to open the brochure. Our team can help with current pricing.
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
            {errorMsg && <p role="alert" className="text-sm text-red-700">{errorMsg}</p>}
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-medium">
              Enter your contact details to download the high-resolution digital brochure, and master plan. Our team will share current pricing separately.
            </p>

            <div>
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                Your Name <span className="text-rose-600 font-bold">*</span>
              </label>
              <input
                type="text" autoComplete="name" minLength={2}
                required placeholder="e.g. Dr. Patil / Ramesh"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-base"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">Mobile Number *</label>
              <input
                type="tel" autoComplete="tel-national" inputMode="numeric" maxLength={10} pattern="[6-9][0-9]{9}"
                required
                placeholder="10-digit mobile"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-base"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Optional email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-base"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white text-xs font-semibold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <Download className="w-4 h-4" />
              <span>{loading ? "Preparing PDF..." : "Download Official Brochure"}</span>
            </button>
          </form>
        )}
      </div>
    </Modal>
  );
};

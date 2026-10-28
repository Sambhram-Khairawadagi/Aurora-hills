"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, Phone, Mail, User } from "lucide-react";
import confetti from "canvas-confetti";

import { getStoredUtm } from "@/lib/utm";
import { trackLeadSubmit } from "@/lib/gtag";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  defaultRequirement?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  source = "Modal Form",
  defaultRequirement = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: defaultRequirement || "40x60 Plot (50g Gold Offer)",
    purpose: "Build a Home",
    preferred_contact: "Phone",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (defaultRequirement) {
      setFormData((prev) => ({ ...prev, requirement: defaultRequirement }));
    }
  }, [defaultRequirement]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMsg("Please provide a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    const finalName = trimmedName;

    try {
      const utmParams = getStoredUtm();
      const finalSource = utmParams.utm_source
        ? `Google Ads (${utmParams.utm_campaign || source})`
        : source;

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: finalName,
          phone: cleanPhone,
          source: finalSource,
          ...utmParams,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        confetti({ particleCount: 70, spread: 80 });
        trackLeadSubmit(finalSource, formData.requirement);
      } else {
        setErrorMsg(data.error || "Submission failed. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#F7F9F6] border border-white/90 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-forest-950 shadow-2xl relative neu-card max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full neu-button text-charcoal-700 hover:text-forest-950 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 rounded-2xl neu-inset text-emerald-700">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black font-sans text-forest-950">
              Request Exclusive Details
            </h3>
            <span className="text-xs sm:text-sm text-charcoal-700 font-medium">The Aurora Hills • Dharwad</span>
          </div>
        </div>

        {/* Festive Dasara & Deepawali Scheme Alert */}
        <div className="p-3 rounded-2xl bg-gradient-to-r from-[#450A14] via-[#7B1123] to-[#450A14] text-white mb-4 border border-amber-400/60 shadow-md flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-full bg-amber-400 text-red-950 text-xs font-black">🪔</span>
            <div className="text-xs leading-snug">
              <span className="font-black text-amber-300 block">Dasara &amp; Deepawali Festive Special</span>
              <span className="text-white/90 font-medium">Bookings qualify for 50g Gold or up to 1.5kg Silver!</span>
            </div>
          </div>
          <span className="text-xs uppercase tracking-wider font-black bg-amber-400 text-red-950 px-2.5 py-0.5 rounded-full flex-shrink-0">
            Active
          </span>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-black font-sans text-forest-950">
              Thank You{formData.name.trim() ? `, ${formData.name.trim()}` : ""}!
            </h4>
            <p className="text-sm text-charcoal-700 max-w-sm mx-auto font-medium">
              Your inquiry has been submitted. Our property consultant will call you at <strong>+91 {formData.phone.replace(/[^0-9]/g, "")}</strong> with complete pricing and festive offer details.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Field 1: Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                Full Name <span className="text-rose-600 font-bold">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 pointer-events-none" />
                <input
                  type="text"
                  required placeholder="e.g. Dr. Patil / Ramesh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-3.5 py-3 neu-input text-forest-950 placeholder-charcoal-400 text-base sm:text-sm font-medium"
                />
              </div>
            </div>

            {/* Field 2: Phone */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                Mobile Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 pointer-events-none" />
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3.5 py-3 neu-input text-forest-950 placeholder-charcoal-400 text-base sm:text-sm font-medium"
                />
              </div>
            </div>

            {/* Field 3: Plot Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                Plot Interested In
              </label>
              <select
                value={formData.requirement}
                onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                className="w-full px-3.5 py-3 neu-input text-forest-950 text-base sm:text-sm bg-[#F0F4ED] font-semibold"
              >
                <option value="40x60 Plot (50g Gold Offer)">40 × 60 ft (2,400 sq.ft) — 🎁 Win 50g Gold</option>
                <option value="30x50 Plot (1.5kg Silver Offer)">30 × 50 ft (1,500 sq.ft) — 🎁 Win 1.5kg Silver</option>
                <option value="30x40 Plot (1kg Silver Offer)">30 × 40 ft (1,200 sq.ft) — 🎁 Win 1kg Silver</option>
                <option value="Corner / Odd Size Plot">Corner / Odd Size Plot</option>
                <option value="Not decided yet">Not decided yet — Show me all options</option>
              </select>
            </div>

            {errorMsg && (
              <div className="p-2.5 bg-red-100 border border-red-300 rounded-xl text-red-700 text-xs font-semibold">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? "Submitting..." : "Get Pricing & Layout Plan"}</span>
            </button>

            {/* WhatsApp Alternative CTA */}
            <a
              href={`https://wa.me/918970198701?text=${encodeURIComponent("Hi, I am interested in The Aurora Hills plots in Dharwad. Please share pricing and layout plan details.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full border-2 border-[#25D366] text-[#128C5E] font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all duration-200"
            >
              <span>💬</span>
              <span>WhatsApp Instead</span>
            </a>

            <p className="text-center text-xs text-charcoal-600 font-medium">
              🔒 Your number is safe. Our consultant calls within 15 minutes.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

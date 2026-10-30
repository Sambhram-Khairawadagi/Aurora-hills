"use client";

import { Modal } from "@/components/Modal";
import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, Phone, Mail, User } from "lucide-react";
import confetti from "canvas-confetti";

import { getStoredUtm } from "@/lib/utm";
import { trackLeadSubmit, trackWhatsAppClick } from "@/lib/gtag";

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
    requirement: defaultRequirement || "Not decided yet",
    purpose: "Build a Home",
    preferred_contact: "Phone",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setFormData((prev) => ({ ...prev, requirement: defaultRequirement || "Not decided yet" }));
  }, [defaultRequirement]);

  useEffect(() => { if (!isOpen) { setSubmitted(false); } }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMsg("Please provide a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const trimmedName = formData.name.trim();
    if (trimmedName.length < 2) {
      setLoading(false);
      setErrorMsg("Please enter your full name.");
      return;
    }

    const finalName = trimmedName;

    try {
      const utmParams = getStoredUtm();
      const finalSource = utmParams.utm_source
        ? `${utmParams.utm_source} (${utmParams.utm_campaign || source})`
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
    <Modal open={isOpen} onClose={onClose}>
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
            <h3 className="text-xl font-semibold font-sans text-forest-950">
              Get Layout & Price Sheet
            </h3>
            <span className="text-xs sm:text-sm text-charcoal-700 font-medium">The Aurora Hills • Dharwad</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-5">Choose a plot size and our team will share current availability and pricing.</p>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-semibold font-sans text-forest-950">
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
                  type="text" autoComplete="name" minLength={2}
                  required placeholder="e.g. Dr. Patil / Ramesh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-3.5 py-3 neu-input text-forest-950 placeholder-charcoal-400 text-base font-medium"
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
                  type="tel" autoComplete="tel-national" inputMode="numeric" maxLength={10} pattern="[6-9][0-9]{9}"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3.5 py-3 neu-input text-forest-950 placeholder-charcoal-400 text-base font-medium"
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
                className="w-full px-3.5 py-3 neu-input text-forest-950 text-base bg-[#F0F4ED] font-semibold"
              >
                {formData.requirement && !["40x60 Plot (50g Gold Offer)", "30x50 Plot (1.5kg Silver Offer)", "30x40 Plot (1kg Silver Offer)", "Corner / Odd Size Plot", "Not decided yet"].includes(formData.requirement) && <option value={formData.requirement}>{formData.requirement}</option>}
                <option value="40x60 Plot (50g Gold Offer)">40 × 60 · 2,400 sq.ft</option>
                <option value="30x50 Plot (1.5kg Silver Offer)">30 × 50 · 1,500 sq.ft</option>
                <option value="30x40 Plot (1kg Silver Offer)">30 × 40 · 1,200 sq.ft</option>
                <option value="Corner / Odd Size Plot">Corner / Odd Size Plot</option>
                <option value="Not decided yet">Not decided yet</option>
              </select>
            </div>

            {errorMsg && (
              <div role="alert" className="p-2.5 bg-red-100 border border-red-300 rounded-xl text-red-700 text-xs font-semibold">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-semibold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? "Submitting..." : "Get Pricing & Layout Plan"}</span>
            </button>

            {/* WhatsApp Alternative CTA */}
            <a
              href={`https://wa.me/918970198701?text=${encodeURIComponent("Hi, I am interested in The Aurora Hills plots in Dharwad. Please share pricing and layout plan details.")}`}
              onClick={trackWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full border-2 border-[#25D366] text-[#128C5E] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all duration-200"
            >
              <span>💬</span>
              <span>WhatsApp Instead</span>
            </a>

            <p className="text-center text-xs text-charcoal-600 font-medium">
              🔒 Your number is safe. Our team will contact you about this enquiry.
            </p>
          </form>
        )}
      </div>
    </Modal>
  );
};

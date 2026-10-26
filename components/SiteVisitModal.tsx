"use client";

import React, { useState } from "react";
import { X, Calendar, CheckCircle2, ShieldCheck, Sparkles, Clock, Car } from "lucide-react";
import confetti from "canvas-confetti";
import { getStoredUtm } from "@/lib/utm";
import { trackLeadSubmit } from "@/lib/gtag";

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferred_date: "",
    preferred_time: "11:00 AM",
    visitors: 2,
    transport_required: "Yes",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10 || !formData.preferred_date) {
      setErrorMsg("Please provide your 10-digit mobile number and preferred date.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const finalName = formData.name.trim() || "Interested Buyer";

    try {
      const utmParams = getStoredUtm();
      const finalSource = utmParams.utm_source
        ? `Google Ads Site Visit (${utmParams.utm_campaign || "Search"})`
        : "Site Visit Modal";

      const res = await fetch("/api/site-visits", {
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
        trackLeadSubmit(finalSource, "Site Visit Request");
      } else {
        setErrorMsg(data.error || "Failed to schedule. Please call us.");
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
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black font-sans text-forest-950">
              Book a Free Site Visit
            </h3>
            <span className="text-sm text-charcoal-700 font-medium">Personalized plot inspection in Dharwad</span>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-sans text-forest-950">
              Visit Booked!
            </h4>
            <p className="text-sm text-charcoal-700 max-w-sm mx-auto font-medium">
              Thank you{formData.name.trim() ? `, ${formData.name.trim()}` : ""}. Our tour manager will contact you at <strong>+91 {formData.phone.replace(/[^0-9]/g, "")}</strong> to confirm your complimentary pickup details for <strong>{formData.preferred_date}</strong>.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Free Cab Pickup Highlight */}
            <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs font-bold flex items-center gap-2">
              <span className="text-base flex-shrink-0">🚗</span>
              <span><strong>Complimentary Cab Pickup &amp; Drop:</strong> Available across Hubli or Dharwad for your family site visit.</span>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                Full Name <span className="text-charcoal-500 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Dr. Patil / Ramesh"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-base sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-base sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                  className="w-full px-3.5 py-2.5 neu-input text-forest-950 text-base sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                  Time Slot
                </label>
                <select
                  value={formData.preferred_time}
                  onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                  className="w-full px-3.5 py-2.5 neu-input text-forest-950 text-base sm:text-sm bg-[#F0F4ED]"
                >
                  <option value="10:00 AM">Morning (10:00 AM)</option>
                  <option value="11:30 AM">Morning (11:30 AM)</option>
                  <option value="02:30 PM">Afternoon (02:30 PM)</option>
                  <option value="04:30 PM">Evening (04:30 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                  Pickup Needed?
                </label>
                <select
                  value={formData.transport_required}
                  onChange={(e) => setFormData({ ...formData, transport_required: e.target.value })}
                  className="w-full px-3.5 py-2.5 neu-input text-forest-950 text-base sm:text-sm bg-[#F0F4ED]"
                >
                  <option value="Yes">Yes (Complimentary Pickup)</option>
                  <option value="No">No (Own Vehicle)</option>
                </select>
              </div>
            </div>

            {errorMsg && (
              <div className="p-2.5 bg-red-100 border border-red-300 rounded-xl text-red-700 text-xs font-semibold">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <Calendar className="w-4 h-4" />
              <span>{loading ? "Booking..." : "Confirm Site Visit"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

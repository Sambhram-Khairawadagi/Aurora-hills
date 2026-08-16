"use client";

import React, { useState } from "react";
import { X, Send, Phone, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  defaultRequirement?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  source = "Popup Modal",
  defaultRequirement = "1200 sq.ft (30x40)",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: defaultRequirement,
    purpose: "Build a Home",
    preferred_contact: "Phone",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
          utm_source: new URLSearchParams(window.location.search).get("utm_source") || "direct",
          utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || "",
          utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        confetti({ particleCount: 70, spread: 60 });
      } else {
        setErrorMessage(data.error || "Submission failed. Please check details.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please call our hotline directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-forest-950 border border-gold-400/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-forest-900 text-gray-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-widest mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          The Aurora Hills � Hosa Dharwad
        </div>

        <h3 className="text-2xl font-bold font-serif text-white">
          Enquire for Plot Booking
        </h3>
        <p className="text-xs text-sand-200 mt-1 mb-5">
          Get verified pricing starting from ₹35.99 Lakhs, layout maps & current plot inventory.
        </p>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-serif text-white">
              Enquiry Received!
            </h4>
            <p className="text-xs text-sand-200 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Our official project advisor will contact you on <strong>{formData.phone}</strong> shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-gold-400 text-forest-950 text-xs font-bold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs">
                {errorMessage}
              </div>
            )}

            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
            />

            <div>
              <label className="block text-xs font-semibold text-sand-200 mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Patil"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-sand-200 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-sand-200 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-sand-200 mb-1">Plot Size Interest</label>
                <select
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                >
                  <option value="1200 sq.ft (30x40)">1,200 sq.ft (30x40)</option>
                  <option value="1500 sq.ft (30x50)">1,500 sq.ft (30x50)</option>
                  <option value="2400 sq.ft (40x60)">2,400 sq.ft (40x60)</option>
                  <option value="Corner / Custom Plot">Corner / Custom Plot</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-sand-200 mb-1">Purpose</label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                >
                  <option value="Build a Home">Build a Home</option>
                  <option value="Investment">Investment</option>
                  <option value="Both">Both</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-sand-200 mb-1">Message / Questions</label>
              <textarea
                rows={2}
                placeholder="I am interested in available plots at Aurora Hills..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? "Submitting..." : "Submit Enquiry"}</span>
            </button>

            <div className="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Privacy Protected � Zero Spam Guarantee</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

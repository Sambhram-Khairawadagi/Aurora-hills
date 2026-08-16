"use client";

import React, { useState } from "react";
import { X, Send, Phone, Mail, User, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { CONTACT_NUMBERS } from "@/lib/projectData";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  defaultRequirement?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  source = "Modal CTA",
  defaultRequirement = "1,200 sq.ft (30x40)",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: defaultRequirement || "1,200 sq.ft (30x40)",
    purpose: "Build a Home",
    preferred_contact: "Phone",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg("Please provide your name and phone number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: `Modal: ${source}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        confetti({ particleCount: 70, spread: 80 });
      } else {
        setErrorMsg(data.error || "Submission failed. Please call us directly.");
      }
    } catch {
      setErrorMsg("Network error. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-forest-900/95 via-forest-900/85 to-forest-950/95 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-sand-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-2xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-white">
              Thank You!
            </h3>
            <p className="text-sm text-sand-200">
              We have received your enquiry for <strong className="text-gold-300">{formData.requirement}</strong>. Our project specialist will call you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold-300 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Sparkles className="w-3 h-3 text-gold-400" />
                The Aurora Hills • Dharwad
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Enquire for Plot Availability
              </h3>
              <p className="text-xs text-sand-300">
                Plots starting from <strong className="text-gold-300">₹35.99 Lakhs</strong> • Mansur & Sanna Somapura.
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-sand-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-gold-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-sand-300 mb-1.5">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-gold-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-sand-300 mb-1.5">
                  Plot Requirement
                </label>
                <select
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-forest-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-400"
                >
                  <option value="1,200 sq.ft (30x40)">1,200 sq.ft (30x40)</option>
                  <option value="1,500 sq.ft (30x50)">1,500 sq.ft (30x50)</option>
                  <option value="2,400 sq.ft (40x60)">2,400 sq.ft (40x60)</option>
                  <option value="Custom Estate Plot">Custom Estate</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-sand-300 mb-1.5">
                  Purpose
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-forest-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-400"
                >
                  <option value="Build a Home">Build a Home</option>
                  <option value="Investment">Investment</option>
                  <option value="Both">Both</option>
                </select>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-950/60 border border-red-800 rounded-xl text-red-300 text-xs">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? "Submitting..." : "Get Price Sheet & Layout"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

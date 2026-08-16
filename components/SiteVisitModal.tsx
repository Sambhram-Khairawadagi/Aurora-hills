"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Car, Phone, Mail, User, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

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
    if (!formData.name || !formData.phone || !formData.preferred_date) {
      setErrorMsg("Please fill in your name, phone, and preferred date.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/site-visits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Modal Site Visit Form",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        confetti({ particleCount: 70, spread: 80 });
      } else {
        setErrorMsg(data.error || "Failed to schedule visit.");
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
              Visit Scheduled!
            </h3>
            <p className="text-sm text-sand-200">
              Thank you, <strong className="text-gold-300">{formData.name}</strong>. Our driver / tour manager will coordinate your pickup on <strong>{formData.preferred_date}</strong>.
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
                <Calendar className="w-3 h-3 text-gold-400" />
                Complimentary Tour
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Book a Guided Site Tour
              </h3>
              <p className="text-xs text-sand-300">
                Explore actual plots with complimentary pickup assistance from Dharwad.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
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
                  placeholder="10-digit phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-sand-300 mb-1.5">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-sand-300 mb-1.5">
                  Time Slot
                </label>
                <select
                  value={formData.preferred_time}
                  onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-forest-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-400"
                >
                  <option value="10:00 AM">Morning (10:00 AM)</option>
                  <option value="11:30 AM">Morning (11:30 AM)</option>
                  <option value="02:30 PM">Afternoon (02:30 PM)</option>
                  <option value="04:30 PM">Evening (04:30 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-sand-300 mb-1.5">
                Complimentary Transport Required?
              </label>
              <select
                value={formData.transport_required}
                onChange={(e) => setFormData({ ...formData, transport_required: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-forest-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-400"
              >
                <option value="Yes">Yes (Pickup from Dharwad / CBT / Railway Station)</option>
                <option value="No">No (Coming by Own Vehicle)</option>
              </select>
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
              <Calendar className="w-4 h-4" />
              <span>{loading ? "Booking..." : "Confirm Site Visit"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

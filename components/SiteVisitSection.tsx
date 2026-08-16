"use client";

import React, { useState } from "react";
import { Calendar, Clock, Car, Phone, Mail, User, CheckCircle2, ShieldCheck, Sparkles, Send } from "lucide-react";
import confetti from "canvas-confetti";

interface SiteVisitSectionProps {
  onSuccess?: () => void;
}

export const SiteVisitSection: React.FC<SiteVisitSectionProps> = ({ onSuccess }) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.preferred_date) {
      setErrorMsg("Please provide your name, contact phone, and preferred visit date.");
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
          source: "Site Visit Section Form",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        confetti({ particleCount: 70, spread: 70 });
        if (onSuccess) onSuccess();
      } else {
        setErrorMsg(data.error || "Failed to schedule visit. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="site-visit" className="py-24 lg:py-32 bg-forest-950 text-white relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold-300 text-xs font-bold uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            Complimentary Tour
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight">
            Schedule a <span className="gold-text-gradient">Site Visit</span>
          </h2>
          <p className="text-sand-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Walk the paved avenues, inspect actual plot boundaries, and enjoy complimentary pickup from Dharwad / CBT.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-forest-900/80 via-forest-900/50 to-forest-950/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-2xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-white">
                  Site Visit Confirmed!
                </h3>
                <p className="text-sm text-sand-200 max-w-md mx-auto">
                  Thank you, <strong className="text-gold-300">{formData.name}</strong>. Our project coordinator will call you to confirm your pickup details for <strong>{formData.preferred_date}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-300 mb-2">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-sand-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-300 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-sand-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-300 mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.preferred_date}
                        onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-300 mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferred_time}
                      onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-400 transition-colors"
                    >
                      <option value="10:00 AM">Morning (10:00 AM)</option>
                      <option value="11:30 AM">Morning (11:30 AM)</option>
                      <option value="02:30 PM">Afternoon (02:30 PM)</option>
                      <option value="04:30 PM">Evening (04:30 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-300 mb-2">
                      Transport Assistance?
                    </label>
                    <select
                      value={formData.transport_required}
                      onChange={(e) => setFormData({ ...formData, transport_required: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-400 transition-colors"
                    >
                      <option value="Yes">Yes (Complimentary Pickup)</option>
                      <option value="No">No (Coming by Own Vehicle)</option>
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
                  className="w-full py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-300 to-amber-400 hover:from-gold-300 hover:to-gold-500 text-forest-950 font-black text-xs uppercase tracking-wider shadow-2xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{loading ? "Scheduling..." : "Confirm Site Visit"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

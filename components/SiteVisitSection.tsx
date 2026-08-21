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
    <section id="site-visit" className="py-24 lg:py-32 vibrant-section-glow text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs font-black uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            Complimentary Site Visit
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Schedule a <span className="vibrant-text-gradient">Personal Tour</span>
          </h2>
          <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Walk the paved avenues, inspect actual plot boundaries, and enjoy complimentary pickup from Dharwad / CBT.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-b from-white to-emerald-50/50 border-2 border-emerald-300/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-950/10">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-forest-950">
                  Site Visit Confirmed!
                </h3>
                <p className="text-sm text-charcoal-700 max-w-md mx-auto">
                  Thank you, <strong className="text-emerald-700">{formData.name}</strong>. Our tour manager will call you to confirm your pickup details for <strong>{formData.preferred_date}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 neu-input text-forest-950 placeholder-charcoal-400 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 neu-input text-forest-950 placeholder-charcoal-400 text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferred_date}
                      onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                      className="w-full px-4 py-3 neu-input text-forest-950 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferred_time}
                      onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                      className="w-full px-4 py-3 neu-input text-forest-950 text-xs bg-[#F0F4ED]"
                    >
                      <option value="10:00 AM">Morning (10:00 AM)</option>
                      <option value="11:30 AM">Morning (11:30 AM)</option>
                      <option value="02:30 PM">Afternoon (02:30 PM)</option>
                      <option value="04:30 PM">Evening (04:30 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                      Transport Assistance?
                    </label>
                    <select
                      value={formData.transport_required}
                      onChange={(e) => setFormData({ ...formData, transport_required: e.target.value })}
                      className="w-full px-4 py-3 neu-input text-forest-950 text-xs bg-[#F0F4ED]"
                    >
                      <option value="Yes">Yes (Complimentary Pickup)</option>
                      <option value="No">No (Coming by Own Vehicle)</option>
                    </select>
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-100 border border-red-300 rounded-xl text-red-700 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99]"
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

"use client";

import React, { useState } from "react";
import { Phone, Mail, User, Send, CheckCircle2, MessageSquare, ShieldCheck, Sparkles, Building } from "lucide-react";
import confetti from "canvas-confetti";
import { CONTACT_NUMBERS } from "@/lib/projectData";

interface EnquirySectionProps {
  onSuccess?: () => void;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "1,200 sq.ft (30x40)",
    purpose: "Build a Home",
    preferred_contact: "Phone",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg("Please provide your name and contact phone number.");
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
          source: "Main Enquiry Form",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        confetti({ particleCount: 70, spread: 80 });
        if (onSuccess) onSuccess();
      } else {
        setErrorMsg(data.error || "Submission failed. Please call us directly.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-forest-950 text-white relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Call Hub */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold-300 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Direct Developer Desk
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight leading-tight">
              Get in Touch for <br />
              <span className="gold-text-gradient">Exclusive Pricing</span>
            </h2>

            <p className="text-sand-200 text-sm sm:text-base leading-relaxed font-light">
              Speak directly with our project advisory team to reserve corner plots, review sanctions, and avail pre-launch discounts.
            </p>

            {/* Direct Telephone Numbers Card */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl space-y-3">
              <div className="text-xs uppercase tracking-wider font-bold text-gold-400">
                Official Helpline Lines (Click to Call):
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CONTACT_NUMBERS.map((num, idx) => (
                  <a
                    key={idx}
                    href={`tel:${num}`}
                    className="p-3 rounded-2xl bg-white/5 hover:bg-gold-500 hover:text-forest-950 border border-white/10 text-white text-xs font-bold flex items-center gap-2 transition-all group"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400 group-hover:text-forest-950" />
                    <span>{num}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-forest-900/80 via-forest-900/50 to-forest-950/90 border border-white/10 backdrop-blur-2xl shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-2xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    Enquiry Received!
                  </h3>
                  <p className="text-sm text-sand-200 max-w-md mx-auto">
                    Thank you, <strong className="text-gold-300">{formData.name}</strong>. Our senior consultant will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sand-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sand-300 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sand-300 mb-2">
                        Plot Size Interest
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        <option value="1,200 sq.ft (30x40)">1,200 sq.ft (30 x 40 ft)</option>
                        <option value="1,500 sq.ft (30x50)">1,500 sq.ft (30 x 50 ft)</option>
                        <option value="2,400 sq.ft (40x60)">2,400 sq.ft (40 x 60 ft)</option>
                        <option value="Custom Estate Plot">Custom Estate Plot</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sand-300 mb-2">
                        Purchase Purpose
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        <option value="Build a Home">Build a Home (Residential)</option>
                        <option value="Investment">Long Term Investment</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sand-300 mb-2">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. East facing plot, loan assistance requested..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                    />
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
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Submitting..." : "Request Price & Details"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { Phone, Mail, User, Send, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
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
    <section id="contact" className="py-24 lg:py-32 vibrant-section-glow text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Call Hub */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Direct Developer Desk
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight leading-tight">
              Get in Touch for <br />
              <span className="vibrant-text-gradient">Exclusive Pricing</span>
            </h2>

            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal">
              Speak directly with our team to reserve plots, review sanctions, and avail pre-launch discounts.
            </p>

            {/* Direct Telephone Numbers Card */}
            <div className="p-6 rounded-3xl vibrant-card shadow-lg space-y-3">
              <div className="text-xs uppercase tracking-wider font-extrabold text-emerald-800">
                Official Helpline Numbers (Click to Call):
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CONTACT_NUMBERS.map((num, idx) => (
                  <a
                    key={idx}
                    href={`tel:${num}`}
                    className="p-3 rounded-2xl bg-white border border-emerald-200/80 text-forest-950 hover:text-emerald-700 text-xs font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-sm group"
                  >
                    <div className="p-1.5 rounded-lg vibrant-icon-emerald">
                      <Phone className="w-3.5 h-3.5 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <span>{num}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Guarantees Pill */}
            <div className="flex items-center gap-4 text-xs text-emerald-900 font-bold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Privacy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Brokerage</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Direct Owner Desk</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-white to-emerald-50/50 border-2 border-emerald-300/40 shadow-2xl shadow-emerald-950/10">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-forest-950">
                    Enquiry Received!
                  </h3>
                  <p className="text-sm text-charcoal-700 max-w-md mx-auto">
                    Thank you, <strong className="text-emerald-700">{formData.name}</strong>. Our senior consultant will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 neu-input text-forest-950 placeholder-charcoal-400 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 neu-input text-forest-950 placeholder-charcoal-400 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                        Plot Size Interest
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-4 py-3 neu-input text-forest-950 text-xs bg-[#F0F4ED]"
                      >
                        <option value="1,200 sq.ft (30x40)">1,200 sq.ft (30 x 40 ft)</option>
                        <option value="1,500 sq.ft (30x50)">1,500 sq.ft (30 x 50 ft)</option>
                        <option value="2,400 sq.ft (40x60)">2,400 sq.ft (40 x 60 ft)</option>
                        <option value="Custom Estate Plot">Custom Estate Plot</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                        Purchase Purpose
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-4 py-3 neu-input text-forest-950 text-xs bg-[#F0F4ED]"
                      >
                        <option value="Build a Home">Build a Home (Residential)</option>
                        <option value="Investment">Long Term Investment</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                      Specific Requirements / Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. East facing plot, loan assistance requested..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-xs"
                    />
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

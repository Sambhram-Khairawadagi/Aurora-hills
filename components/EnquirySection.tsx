"use client";

import React, { useState } from "react";
import { Phone, User, Send, CheckCircle2, ShieldCheck, Sparkles, Download, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";
import { CONTACT_NUMBERS, WHATSAPP_NUMBER } from "@/lib/projectData";
import { getStoredUtm } from "@/lib/utm";
import { trackLeadSubmit, trackPhoneClick, trackWhatsAppClick } from "@/lib/gtag";

interface EnquirySectionProps {
  onSuccess?: () => void;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "30x40 Plot (1,200 sq.ft)",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.name.trim() || cleanPhone.length < 10) {
      setErrorMsg("Please provide your name and a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const utmParams = getStoredUtm();
      const finalSource = utmParams.utm_source
        ? `Google Ads (${utmParams.utm_campaign || "Footer Enquiry Form"})`
        : "Footer Enquiry Form";

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: cleanPhone,
          email: "",
          requirement: formData.requirement,
          purpose: "Plot Purchase / Investment",
          preferred_contact: "Phone",
          message: "Submitted via main website contact section.",
          source: finalSource,
          ...utmParams,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        confetti({ particleCount: 75, spread: 85 });
        trackLeadSubmit(finalSource, formData.requirement);
        if (onSuccess) onSuccess();
      } else {
        setErrorMsg(data.error || "Submission failed. Please call us directly.");
      }
    } catch {
      setErrorMsg("Network error. Please call our sales desk directly.");
    } finally {
      setLoading(false);
    }
  };

  const salesPhone = CONTACT_NUMBERS[0] || "8970198701";

  return (
    <section id="contact" className="py-20 lg:py-28 vibrant-section-glow text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Direct Call Desk & Trust Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Direct Developer Desk
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight leading-tight">
              Get in Touch for <br />
              <span className="vibrant-text-gradient">Exclusive Plot Pricing</span>
            </h2>

            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-normal">
              Speak directly with our senior consultant to review HDUDA sanctions, check available plot numbers, and claim active festive rewards.
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
                    href={`tel:${num.replace(/\s+/g, "")}`}
                    onClick={() => trackPhoneClick(num)}
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
            <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-900 font-bold">
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
                <span>SBI Loan Approved</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting 3-Field Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-white to-emerald-50/50 border-2 border-emerald-400/50 shadow-2xl shadow-emerald-950/10">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-forest-950">
                    Enquiry Received!
                  </h3>
                  <p className="text-sm text-charcoal-700 max-w-md mx-auto">
                    Thank you, <strong className="text-emerald-700">{formData.name}</strong>. Our senior consultant will call you at <strong>{formData.phone}</strong> within 15 minutes with complete pricing and layout details.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hi, I submitted an enquiry for ${formData.requirement} at The Aurora Hills. Please send details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={trackWhatsAppClick}
                      className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#1ebd5a] transition-all"
                    >
                      Chat on WhatsApp 🟢
                    </a>
                    <a
                      href="/brochure/the-aurora-hills-brochure.pdf"
                      download
                      className="px-5 py-2.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider hover:bg-emerald-200 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" /> Download Brochure PDF
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Festive Alert Banner */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#450A14] via-[#7B1123] to-[#450A14] text-white mb-5 border border-amber-400/60 shadow-md flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="p-1.5 rounded-full bg-amber-400 text-red-950 text-xs font-black">🪔</span>
                      <div>
                        <p className="text-xs font-black text-amber-300">
                          DASARA &amp; DEEPAWALI SPECIAL SCHEME
                        </p>
                        <p className="text-[11px] text-white/85 font-medium">
                          Book a plot &amp; receive up to <strong className="text-amber-200">50g Gold</strong> or <strong className="text-slate-200">1.5kg Silver</strong> guaranteed!
                        </p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-wider bg-amber-400 text-red-950 px-2.5 py-1 rounded-full flex-shrink-0">
                      Active
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Ramesh Patil"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 neu-input text-forest-950 placeholder-charcoal-400 text-xs sm:text-sm bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                          WhatsApp Mobile Number *
                        </label>
                        <div className="relative flex items-center">
                          <span className="absolute left-3 text-xs font-bold text-charcoal-500 border-r border-charcoal-300 pr-2">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            placeholder="10-digit number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, "") })}
                            className="w-full pl-16 pr-4 py-3 neu-input text-forest-950 placeholder-charcoal-400 text-xs sm:text-sm font-bold bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Plot Size Interest
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-4 py-3 neu-input text-forest-950 text-xs sm:text-sm bg-white font-medium"
                      >
                        <option value="40x60 Plot (50g Gold Offer)">40 × 60 (2,400 sq.ft) — 🎁 50g Gold Festive Offer</option>
                        <option value="30x50 Plot (1.5kg Silver Offer)">30 × 50 (1,500 sq.ft) — 🎁 1.5kg Silver Festive Offer</option>
                        <option value="30x40 Plot (1kg Silver Offer)">30 × 40 (1,200 sq.ft) — 🎁 1kg Silver Festive Offer</option>
                        <option value="Custom Estate / Corner Plot">Custom Estate / Corner Plot</option>
                      </select>
                    </div>

                    {errorMsg && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-semibold">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-[#25D366] to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? "Submitting..." : "Get Pricing & Layout Plan"}</span>
                    </button>

                    {/* WhatsApp Quick Alternative */}
                    <div className="pt-2 text-center">
                      <span className="text-[11px] text-charcoal-500 block mb-1.5">or prefer chatting right away?</span>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          "Hi, I am interested in The Aurora Hills plots in Dharwad. Please share details and pricing on WhatsApp."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackWhatsAppClick}
                        className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 hover:text-emerald-950 hover:underline"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                        <span>Chat Directly with Sales Desk on WhatsApp</span>
                      </a>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

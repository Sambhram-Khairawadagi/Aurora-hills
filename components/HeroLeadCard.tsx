"use client";

import React, { useState } from "react";
import { Phone, CheckCircle2, ShieldCheck, Sparkles, Send, Download } from "lucide-react";
import confetti from "canvas-confetti";
import { getStoredUtm } from "@/lib/utm";
import { trackLeadSubmit, trackPhoneClick, trackWhatsAppClick } from "@/lib/gtag";
import { WHATSAPP_NUMBER, CONTACT_NUMBERS } from "@/lib/projectData";

interface HeroLeadCardProps {
  sourceTag?: string;
  className?: string;
}

const PLOT_OPTIONS = [
  { label: "30×40", sub: "1,200 sq.ft" },
  { label: "30×50", sub: "1,500 sq.ft" },
  { label: "40×60", sub: "2,400 sq.ft" },
  { label: "Odd Size", sub: "Custom" },
];

export const HeroLeadCard: React.FC<HeroLeadCardProps> = ({
  sourceTag = "Hero Instant Form",
  className = "",
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPlot, setSelectedPlot] = useState("30×40");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    // Clean phone number
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMsg("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const utmParams = getStoredUtm();
      const finalSource = utmParams.utm_source
        ? `${utmParams.utm_source} (${utmParams.utm_campaign || sourceTag})`
        : sourceTag;

      const requirementStr = `${selectedPlot} Plot Enquiry`;

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          phone: cleanPhone,
          email: "",
          requirement: requirementStr,
          purpose: "Plot Purchase / Investment",
          preferred_contact: "WhatsApp",
          message: `Inquired via Instant Hero Card for ${selectedPlot}. Sent directly to WhatsApp.`,
          source: finalSource,
          ...utmParams,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        confetti({ particleCount: 80, spread: 90 });
        trackLeadSubmit(finalSource, requirementStr);

      } else {
        setErrorMsg(data.error || "Submission failed. Please call us directly.");
      }
    } catch {
      setErrorMsg("Network issue. Please tap 'Call Consultant' below.");
    } finally {
      setLoading(false);
    }
  };

  const salesPhone = CONTACT_NUMBERS[0] || "8970198701";

  return (
    <div
      className={`rounded-3xl bg-white/95 backdrop-blur-xl border border-gray-200/90 shadow-xl p-6 sm:p-8 text-forest-950 relative overflow-hidden ${className}`}
    >
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold font-sans text-forest-950 tracking-tight">
              Get Layout &amp; Price Sheet
            </h3>
            <p className="text-xs sm:text-sm text-forest-900/90 font-semibold mt-1 leading-relaxed">
              Request the approved layout and current prices. Our sales team will follow up on your enquiry.
            </p>
          </div>

          {/* Plot Size Selector */}
          <div className="pt-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-forest-950 block mb-2">
              Select Preferred Plot Dimension:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {PLOT_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt.label}
                  aria-pressed={selectedPlot === opt.label}
                  onClick={() => setSelectedPlot(opt.label)}
                  className={`py-2.5 px-1.5 rounded-xl text-center border transition-all flex flex-col items-center justify-center min-h-[44px] ${
                    selectedPlot === opt.label
                      ? "bg-emerald-800 text-white border-emerald-900 shadow-md font-semibold"
                      : "bg-emerald-50/50 hover:bg-emerald-100/60 text-forest-950 border-emerald-200/90 font-bold"
                  }`}
                >
                  <span className="block text-xs sm:text-sm leading-tight whitespace-nowrap">{opt.label}</span>
                  {opt.sub ? (
                    <span
                      className={`hidden sm:block text-xs mt-0.5 leading-tight ${
                        selectedPlot === opt.label ? "text-emerald-100 font-bold" : "text-forest-900/80 font-bold"
                      }`}
                    >
                      {opt.sub}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-3 pt-1">
            <div>
              <label htmlFor="hero-name" className="text-xs font-semibold text-forest-950 block mb-1">
                Your Full Name <span className="text-rose-600 font-black">*</span>
              </label>
              <input
                id="hero-name" autoComplete="name" minLength={2}
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl border-2 border-emerald-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-500/30 text-base text-forest-950 bg-white shadow-xs outline-none transition-all placeholder:text-gray-400 font-bold"
              />
            </div>

            <div>
              <label htmlFor="hero-phone" className="text-xs font-semibold text-forest-950 block mb-1">
                WhatsApp Mobile Number <span className="text-rose-600 font-black">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3.5 text-xs sm:text-sm font-semibold text-gray-600 border-r border-gray-200 pr-2">
                  +91
                </span>
                <input
                  id="hero-phone" autoComplete="tel-national" inputMode="numeric" pattern="[6-9][0-9]{9}"
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="Enter 10-digit number"
                  className="w-full pl-16 pr-4 py-3 rounded-xl border-2 border-emerald-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-500/30 text-base font-semibold text-forest-950 bg-white shadow-xs outline-none transition-all placeholder:text-gray-400 placeholder:font-normal"
                />
              </div>
            </div>
          </div>

          {errorMsg && (
            <p role="alert" className="text-sm text-rose-700 bg-rose-50 p-2.5 rounded-lg border border-rose-200 font-medium">
              {errorMsg}
            </p>
          )}

          {/* Sleek, High-Converting Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 sm:py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending Details...
              </span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Request Layout &amp; Price Sheet</span>
              </>
            )}
          </button>

          {/* Trust Guarantees */}
          <div className="pt-2 text-center space-y-1.5">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600 font-normal">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Used to respond to your enquiry</span>
              <span>•</span>
              <span>Direct Developer Rate</span>
            </div>

            <div className="text-xs text-gray-600 font-normal">
              Need immediate answers?{" "}
              <a
                href={`tel:${salesPhone.replace(/\s+/g, "")}`}
                onClick={() => trackPhoneClick(salesPhone)}
                className="font-semibold text-emerald-800 hover:underline inline-flex items-center gap-1 ml-1"
              >
                <Phone className="w-3 h-3" /> Call +91 {salesPhone}
              </a>
            </div>
          </div>
        </form>
      ) : (
        /* Instant Success Screen */
        <div className="py-6 text-center space-y-3 animate-fade-in">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-serif text-2xl font-bold text-forest-950">
            Request Received!
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
            Your enquiry has been received. Download the brochure below or continue on WhatsApp to request current pricing from our sales team.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hi, I just submitted an enquiry for The Aurora Hills plots in Dharwad. Please share the layout plan.`
              )}`}
              onClick={trackWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#1ebd5a] transition-all flex items-center justify-center gap-1.5"
            >
              Continue on WhatsApp
            </a>
            <a
              href="/brochure/the-aurora-hills-brochure.pdf"
              download="The-Aurora-Hills-Brochure.pdf"
              className="px-5 py-2.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-semibold uppercase tracking-wider border border-emerald-200 hover:bg-emerald-100 transition-all flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Download Brochure
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

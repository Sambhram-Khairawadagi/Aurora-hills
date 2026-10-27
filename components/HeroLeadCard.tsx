"use client";

import React, { useState } from "react";
import { Phone, CheckCircle2, ShieldCheck, Sparkles, Send, Download } from "lucide-react";
import confetti from "canvas-confetti";
import { getStoredUtm } from "@/lib/utm";
import { trackLeadSubmit, trackPhoneClick } from "@/lib/gtag";
import { WHATSAPP_NUMBER, CONTACT_NUMBERS } from "@/lib/projectData";

interface HeroLeadCardProps {
  sourceTag?: string;
  className?: string;
}

const PLOT_OPTIONS = [
  { label: "30×40", sub: "1,200 sq.ft" },
  { label: "30×50", sub: "1,500 sq.ft" },
  { label: "40×60", sub: "2,400 sq.ft" },
  { label: "Odd Size", sub: "" },
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

    // Clean phone number
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const utmParams = getStoredUtm();
      const finalSource = utmParams.utm_source
        ? `Google Ads (${utmParams.utm_campaign || sourceTag})`
        : sourceTag;

      const requirementStr = `${selectedPlot} Plot Enquiry`;

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || "Interested Buyer",
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

        // Pre-compose WhatsApp URL
        const waText = encodeURIComponent(
          `Hi, I just submitted an enquiry on your website for The Aurora Hills plots in Dharwad (${requirementStr}). Please send me the HDUDA Layout Plan PDF and Price List on WhatsApp.`
        );
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

        // Automatically trigger PDF download after 1 second
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = "/brochure/the-aurora-hills-brochure.pdf";
          link.download = "The-Aurora-Hills-Brochure-Layout.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 800);

        // Redirect to WhatsApp chat after 2 seconds for instant conversation
        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 2000);
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
      className={`rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-emerald-500/40 shadow-2xl p-4 sm:p-6 text-forest-950 relative overflow-hidden ${className}`}
    >
      {/* Top Auspicious Festive Pill & Urgency Scarcity Pill */}
      <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-amber-300/40">
        <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse flex-shrink-0" />
          <span className="truncate">Deepawali Offer Active</span>
        </div>
        <span className="text-[11px] font-black text-rose-800 bg-rose-50 border border-rose-200/80 px-2.5 py-0.5 rounded-full flex-shrink-0 shadow-sm animate-pulse">
          ⚡ Only 7 Plots in Phase 1
        </span>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <h3 className="text-lg sm:text-xl font-black font-sans text-forest-950 leading-tight">
              Get HDUDA Layout Map &amp; Pricing
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-700 font-medium mt-0.5">
              Receive official sanctioned layout PDF &amp; price sheet directly on WhatsApp.
            </p>
            {/* Dharwad & Hubli Cab Pickup Mini-Banner */}
            <div className="mt-2 py-1 px-2.5 rounded-xl bg-emerald-50/90 border border-emerald-200/80 text-[11px] text-emerald-950 font-bold flex items-center gap-1.5">
              <span className="flex-shrink-0">🚗</span>
              <span className="truncate">Visiting from Dharwad or Hubli? Complimentary doorstep cab pickup available.</span>
            </div>
          </div>

          {/* Plot Size Selector */}
          <div>
            <label className="text-xs sm:text-sm font-black uppercase tracking-wider text-charcoal-800 block mb-1.5">
              Select Plot Size of Interest:
            </label>
            <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
              {PLOT_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt.label}
                  onClick={() => setSelectedPlot(opt.label)}
                  className={`py-1.5 px-0.5 sm:px-1 rounded-xl text-center border transition-all flex flex-col items-center justify-center min-h-[44px] ${
                    selectedPlot === opt.label
                      ? "bg-emerald-700 text-white border-emerald-800 shadow-md scale-102 font-black"
                      : "bg-emerald-50/70 text-charcoal-800 border-emerald-200 hover:bg-emerald-100 font-bold"
                  }`}
                >
                  <span className="block text-xs sm:text-sm leading-none whitespace-nowrap">{opt.label}</span>
                  {opt.sub ? (
                    <span
                      className={`block text-[10px] sm:text-xs mt-0.5 leading-none font-bold ${
                        selectedPlot === opt.label ? "text-emerald-100" : "text-charcoal-600"
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
          <div className="space-y-2.5">
            <div>
              <label className="text-xs sm:text-sm font-bold text-charcoal-800 block mb-1">
                Your Name <span className="text-charcoal-500 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Dr. Patil / Ramesh"
                className="w-full px-3.5 py-2.5 rounded-xl border border-charcoal-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-base sm:text-sm text-forest-950 bg-white shadow-inner outline-none transition-all font-medium"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm font-bold text-charcoal-800 block mb-1">
                WhatsApp Mobile Number <span className="text-rose-600 font-bold">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-xs sm:text-sm font-black text-charcoal-700 border-r border-charcoal-300 pr-2">
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="Enter 10-digit number"
                  className="w-full pl-20 pr-3.5 py-2.5 rounded-xl border-2 border-emerald-600/60 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-base sm:text-sm font-bold text-forest-950 bg-white shadow-inner outline-none transition-all placeholder:font-normal"
                />
              </div>
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-rose-700 bg-rose-50 p-2 rounded-lg border border-rose-200 font-semibold">
              {errorMsg}
            </p>
          )}

          {/* High-Impact Green WhatsApp CTA Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-[#25D366] to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/50 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending Details...
              </span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Get Layout &amp; Prices on WhatsApp 🟢</span>
              </>
            )}
          </button>

          {/* Trust Guarantees */}
          <div className="pt-1 flex flex-col items-center gap-1.5 text-center">
            <div className="flex items-center gap-3 text-xs text-charcoal-700 font-semibold">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Privacy Protected
              </span>
              <span>•</span>
              <span className="text-emerald-700 font-bold">Instant Delivery</span>
            </div>

            <div className="text-xs sm:text-sm text-charcoal-700 pt-0.5 font-medium">
              Need immediate answers?{" "}
              <a
                href={`tel:${salesPhone.replace(/\s+/g, "")}`}
                onClick={() => trackPhoneClick(salesPhone)}
                className="font-black text-emerald-800 hover:underline inline-flex items-center gap-1 ml-1"
              >
                <Phone className="w-3.5 h-3.5" /> Call +91 {salesPhone}
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
          <h4 className="text-xl font-bold font-sans text-forest-950">
            Request Received!
          </h4>
          <p className="text-xs sm:text-sm text-charcoal-700 max-w-xs mx-auto">
            Your brochure and layout map are downloading. Our consultant is also reaching out on WhatsApp at <strong>+91 {phone}</strong>.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hi, I just submitted an enquiry for The Aurora Hills plots in Dharwad. Please share the layout plan.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-black uppercase tracking-wider shadow-md hover:bg-[#1ebd5a] transition-all flex items-center justify-center gap-1.5"
            >
              Open in WhatsApp 🟢
            </a>
            <a
              href="/brochure/the-aurora-hills-brochure.pdf"
              download="The-Aurora-Hills-Brochure.pdf"
              className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-300 hover:bg-emerald-200 transition-all flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Direct PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

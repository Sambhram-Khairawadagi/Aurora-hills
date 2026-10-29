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
    if (!trimmedName) {
      setErrorMsg("Please enter your full name.");
      return;
    }

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
      className={`rounded-3xl bg-white/95 backdrop-blur-xl border border-gray-200/90 shadow-xl p-6 sm:p-8 text-forest-950 relative overflow-hidden ${className}`}
    >
      {/* Top Auspicious Status Header */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-100">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-900 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/70">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          Pre-Launch Advantage
        </span>
        <span className="text-xs text-amber-900 font-medium">
          🎁 Assured Festive Gifts
        </span>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="font-serif text-2xl font-bold text-forest-950 tracking-tight">
              Get Layout Map &amp; Pricing
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-normal mt-1 leading-relaxed">
              Official HDUDA sanctioned layout &amp; pre-launch price sheet sent directly to WhatsApp.
            </p>
          </div>

          {/* Plot Size Selector */}
          <div className="pt-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 block mb-2">
              Select Preferred Plot Dimension:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {PLOT_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt.label}
                  onClick={() => setSelectedPlot(opt.label)}
                  className={`py-2.5 px-1.5 rounded-xl text-center border transition-all flex flex-col items-center justify-center min-h-[50px] ${
                    selectedPlot === opt.label
                      ? "bg-emerald-800 text-white border-emerald-800 shadow-sm font-semibold"
                      : "bg-gray-50 hover:bg-emerald-50/50 text-gray-800 border-gray-200 font-medium"
                  }`}
                >
                  <span className="block text-xs sm:text-sm leading-tight whitespace-nowrap">{opt.label}</span>
                  {opt.sub ? (
                    <span
                      className={`block text-[10px] sm:text-xs mt-0.5 leading-tight ${
                        selectedPlot === opt.label ? "text-emerald-100" : "text-gray-500 font-normal"
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
              <label className="text-xs font-semibold text-gray-700 block mb-1">
                Your Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Dr. Patil / Ramesh"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-sm text-forest-950 bg-white shadow-xs outline-none transition-all placeholder:text-gray-400 font-normal"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-700 block mb-1">
                WhatsApp Mobile Number <span className="text-rose-600">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3.5 text-xs sm:text-sm font-semibold text-gray-600 border-r border-gray-200 pr-2">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="Enter 10-digit number"
                  className="w-full pl-16 pr-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-sm font-medium text-forest-950 bg-white shadow-xs outline-none transition-all placeholder:text-gray-400 placeholder:font-normal"
                />
              </div>
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-rose-700 bg-rose-50 p-2.5 rounded-lg border border-rose-200 font-medium">
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
                <span>Get Layout &amp; Prices on WhatsApp</span>
              </>
            )}
          </button>

          {/* Trust Guarantees */}
          <div className="pt-2 text-center space-y-1.5">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-normal">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Privacy Protected</span>
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
            Your brochure and layout map are downloading. Our consultant is also reaching out on WhatsApp at <strong>+91 {phone}</strong>.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hi, I just submitted an enquiry for The Aurora Hills plots in Dharwad. Please share the layout plan.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#1ebd5a] transition-all flex items-center justify-center gap-1.5"
            >
              Open in WhatsApp
            </a>
            <a
              href="/brochure/the-aurora-hills-brochure.pdf"
              download="The-Aurora-Hills-Brochure.pdf"
              className="px-5 py-2.5 rounded-full bg-emerald-50 text-emerald-900 text-xs font-semibold uppercase tracking-wider border border-emerald-200 hover:bg-emerald-100 transition-all flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Direct PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

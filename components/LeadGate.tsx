"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Send, CheckCircle2, Sparkles, Lock, ArrowRight, X } from "lucide-react";
import { getStoredUtm } from "@/lib/utm";
import confetti from "canvas-confetti";

const STORAGE_KEY = "lead_gate_unlocked";
const SCROLL_THRESHOLD = 0.30; // 30% of page height

export const LeadGate: React.FC = () => {
  const [gateActive, setGateActive] = useState(false);
  const [alreadyUnlocked, setAlreadyUnlocked] = useState(true); // default true to prevent flash
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "1,200 sq.ft (30x40)",
    purpose: "Build a Home",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Check localStorage on mount
  useEffect(() => {
    try {
      const unlocked = localStorage.getItem(STORAGE_KEY);
      if (unlocked) {
        setAlreadyUnlocked(true);
        setGateActive(false);
        return;
      }
    } catch {
      // localStorage unavailable
    }
    setAlreadyUnlocked(false);
  }, []);

  // Scroll listener — activate gate when user scrolls past threshold
  useEffect(() => {
    if (alreadyUnlocked || gateActive) return;

    const handleScroll = () => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) {
          setAlreadyUnlocked(true);
          setGateActive(false);
          return;
        }
      } catch {}

      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = scrollY / docHeight;
      if (scrollPercent >= SCROLL_THRESHOLD) {
        setGateActive(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alreadyUnlocked, gateActive]);

  // Lock body scroll only when gate is active and form is not yet submitted
  useEffect(() => {
    if (gateActive && !submitted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [gateActive, submitted]);

  const handleDismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
    setAlreadyUnlocked(true);
    setGateActive(false);
    document.body.style.overflow = "";
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || formData.name.trim().length < 2) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const utmParams = getStoredUtm();
      const adSource = utmParams.utm_source ? `Google Ads (${utmParams.utm_campaign || "Lead Gate"})` : "Lead Gate";
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: cleanPhone,
          source: adSource,
          ...utmParams,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        // Persist unlock immediately to both localStorage and component state
        try {
          localStorage.setItem(STORAGE_KEY, String(Date.now()));
        } catch {}

        setAlreadyUnlocked(true);
        setSubmitted(true);

        // Safe celebration confetti
        try {
          confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 } });
        } catch {}

        // Auto-dismiss after 1.8 seconds
        setTimeout(() => {
          handleDismiss();
        }, 1800);
      } else {
        setErrorMsg(data.error || "Submission failed. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [formData, handleDismiss]);

  // Don't render anything if already unlocked or gate not yet triggered
  if (alreadyUnlocked || !gateActive) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    >
      {/* Blurred overlay — covers full screen */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

      {/* Form card */}
      <div
        className="relative z-10 bg-[#F7F9F6] border border-white/90 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-forest-950 shadow-2xl neu-card max-h-[90vh] overflow-y-auto"
      >
        {/* Google Ads Policy-Safe Dismiss Button */}
        <button
          type="button"
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-full text-charcoal-400 hover:text-charcoal-800 hover:bg-black/5 transition-colors focus:outline-none"
          aria-label="Close dialog"
          title="Skip to explore"
        >
          <X className="w-5 h-5" />
        </button>
        {submitted ? (
          /* ── Success State ── */
          <div className="text-center py-6 sm:py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-serif text-forest-950">
              Welcome, {formData.name}!
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-700 max-w-sm mx-auto leading-relaxed font-medium">
              Thank you for your interest in The Aurora Hills. Our property consultant will contact you shortly. Enjoy exploring the full layout and pricing!
            </p>
            
            <div className="pt-2">
              <button
                type="button"
                onClick={handleDismiss}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Continue Exploring Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ── Form State ── */
          <>
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-2xl neu-inset text-emerald-700">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-forest-950">
                  Unlock Full Access
                </h3>
                <span className="text-[10px] sm:text-xs text-charcoal-600 font-medium">
                  The Aurora Hills • Premium Plots in Dharwad
                </span>
              </div>
            </div>

            <p className="text-xs text-charcoal-600 mb-5 leading-relaxed font-medium">
              Share your details to explore the complete project — pricing, layout, amenities, and exclusive offers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-xs"
                  autoFocus
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Optional email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 neu-input text-forest-950 placeholder-charcoal-400 text-xs"
                  />
                </div>
              </div>

              {/* Plot Config + Purpose */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    Plot Configuration
                  </label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-3.5 py-2.5 neu-input text-forest-950 text-xs bg-[#F0F4ED]"
                  >
                    <option value="1,200 sq.ft (30x40)">1,200 sq.ft (30x40)</option>
                    <option value="1,500 sq.ft (30x50)">1,500 sq.ft (30x50)</option>
                    <option value="1,650 sq.ft (33x50)">1,650 sq.ft (33x50)</option>
                    <option value="2,400 sq.ft (40x60)">2,400 sq.ft (40x60)</option>
                    <option value="Odd Sizes">Odd Sizes</option>
                    <option value="Custom Estate Plot">Custom Estate Plot</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    Purchase Purpose
                  </label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-3.5 py-2.5 neu-input text-forest-950 text-xs bg-[#F0F4ED]"
                  >
                    <option value="Build a Home">Build a Home</option>
                    <option value="Investment">Investment</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>

              {/* Error */}
              {errorMsg && (
                <div className="p-2.5 bg-red-100 border border-red-300 rounded-xl text-red-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:from-emerald-500 hover:to-green-600 text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Submitting..." : "Unlock & Continue Exploring"}</span>
              </button>

              {/* Trust line */}
              <div className="text-center pt-1 mb-2">
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="text-[11px] text-charcoal-500 hover:text-charcoal-800 underline transition-colors"
                >
                  Skip and continue exploring website
                </button>
              </div>
              <p className="text-[10px] text-center text-charcoal-500 mt-2">
                🔒 Your information is secure. By submitting, you agree to our <a href="/privacy-policy" className="underline hover:text-emerald-700">Privacy Policy</a> & <a href="/terms-and-conditions" className="underline hover:text-emerald-700">Terms</a>.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

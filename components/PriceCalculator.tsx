"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, HelpCircle, Landmark } from "lucide-react";

interface PriceCalculatorProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
  startingPrice?: string;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({
  onOpenEnquiry,
  startingPrice = "₹35.99 LAKHS*",
}) => {
  const [selectedSize, setSelectedSize] = useState<string>("1200");

  const plotOptions = [
    { size: "1200", label: "1,200 sq.ft", dimensions: "30 x 40 ft", estimate: "Starting ₹35.99 L*", tag: "Popular", emi: "Approx. ₹22,500/mo" },
    { size: "1500", label: "1,500 sq.ft", dimensions: "30 x 50 ft", estimate: "Starting ₹44.99 L*", tag: "Family Villa", emi: "Approx. ₹28,000/mo" },
    { size: "2400", label: "2,400 sq.ft", dimensions: "40 x 60 ft", estimate: "Starting ₹71.99 L*", tag: "Corner / Estate", emi: "Approx. ₹45,000/mo" },
    { size: "Custom", label: "Custom Estate", dimensions: "Custom Dimensions", estimate: "On Request", tag: "Exclusive", emi: "Flexible Bank Loan" },
  ];

  const currentOption = plotOptions.find((p) => p.size === selectedSize) || plotOptions[0];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-forest-950 text-white relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold-300 text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-gold-400" />
            Transparent Pricing & Loan Support
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight">
            Plot Sizes & <span className="gold-text-gradient">Investment Estimator</span>
          </h2>
          <p className="text-sand-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Choose your desired plot dimension to view estimated starting prices, dimensions, and bank loan approvals.
          </p>
        </div>

        {/* Minimalist Glass Calculator Board */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-forest-900/80 via-forest-900/60 to-forest-950/90 rounded-3xl border border-white/10 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8">
          {/* Plot Selection Pills */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-sand-300 mb-4">
              Select Preferred Plot Dimension:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {plotOptions.map((opt) => (
                <button
                  key={opt.size}
                  onClick={() => setSelectedSize(opt.size)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                    selectedSize === opt.size
                      ? "bg-gradient-to-tr from-gold-500/20 to-gold-400/10 border-gold-400/80 shadow-[0_0_25px_rgba(200,155,60,0.2)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white font-serif">{opt.label}</span>
                    <span className="text-[9px] uppercase font-bold text-gold-300 bg-white/5 px-2 py-0.5 rounded-full">
                      {opt.tag}
                    </span>
                  </div>
                  <div className="text-[11px] text-sand-300 font-mono">{opt.dimensions}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Option Summary Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-1">
              <span className="text-xs text-sand-300 uppercase tracking-wider font-semibold">
                Plot Configuration
              </span>
              <div className="text-2xl font-bold font-serif text-white">
                {currentOption.label}
              </div>
              <div className="text-xs text-gold-300 font-mono">
                Dimensions: {currentOption.dimensions}
              </div>
            </div>

            <div className="space-y-1 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <span className="text-xs text-sand-300 uppercase tracking-wider font-semibold">
                Estimated Price
              </span>
              <div className="text-2xl sm:text-3xl font-black gold-text-gradient font-serif">
                {currentOption.estimate}
              </div>
              <div className="text-xs text-emerald-300 flex items-center gap-1 font-medium">
                <Landmark className="w-3.5 h-3.5 text-emerald-400" />
                {currentOption.emi}
              </div>
            </div>

            <div className="pt-2 md:pt-0 flex flex-col justify-center gap-2.5">
              <button
                onClick={() => onOpenEnquiry("Plot Calculator", `${currentOption.label} (${currentOption.dimensions})`)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 text-xs font-black uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
              >
                <span>Book This Plot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-[10px] text-center text-sand-300 italic">
                *Taxes, registration & layout maintenance extra as applicable.
              </span>
            </div>
          </div>

          {/* Loan & Approval Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">HDUDA & NA-KJP</span>
                <span className="text-sand-300">Sanctioned layout plan</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">SBI & HDFC Approved</span>
                <span className="text-sand-300">Fast-track loan processing</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Clear Title Deed</span>
                <span className="text-sand-300">Zero legal encumbrances</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

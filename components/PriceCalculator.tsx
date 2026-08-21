"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, HelpCircle, Landmark } from "lucide-react";

interface PriceCalculatorProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
  startingPrice?: string;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({
  onOpenEnquiry,
  startingPrice = "₹42 LAKHS*",
}) => {
  const [selectedSize, setSelectedSize] = useState<string>("1200");

  const plotOptions = [
    { size: "1200", label: "1,200 sq.ft", dimensions: "30 x 40 ft", estimate: "Starting ₹42 Lakhs*", tag: "Most Popular", emi: "Approx. ₹26,500/mo" },
    { size: "1500", label: "1,500 sq.ft", dimensions: "30 x 50 ft", estimate: "Starting ₹52.5 Lakhs*", tag: "Family Villa", emi: "Approx. ₹33,000/mo" },
    { size: "2400", label: "2,400 sq.ft", dimensions: "40 x 60 ft", estimate: "Starting ₹84 Lakhs*", tag: "Corner Estate", emi: "Approx. ₹52,500/mo" },
    { size: "Custom", label: "Custom Plot", dimensions: "Custom Size", estimate: "On Request", tag: "Exclusive", emi: "Flexible Bank Loan" },
  ];

  const currentOption = plotOptions.find((p) => p.size === selectedSize) || plotOptions[0];

  return (
    <section id="pricing" className="py-24 lg:py-32 vibrant-section-glow text-forest-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs sm:text-sm font-black uppercase tracking-widest">
            <Calculator className="w-4 h-4 text-emerald-600" />
            Transparent Pricing & Plot Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Plot Dimensions & <span className="vibrant-text-gradient">Investment Estimator</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Pre-launch pricing advantage starting from ₹42 Lakhs. Pre-approved plot loans available from SBI, HDFC, ICICI and leading nationalized banks.
          </p>
        </div>

        {/* Pricing Calculator Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white to-emerald-50/40 border-2 border-emerald-300/40 p-6 sm:p-10 rounded-3xl shadow-2xl shadow-emerald-900/10 space-y-8">
          {/* Plot Selection Options */}
          <div>
            <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-charcoal-800 mb-4">
              Select Preferred Plot Dimension:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {plotOptions.map((opt) => (
                <button
                  key={opt.size}
                  onClick={() => setSelectedSize(opt.size)}
                  className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                    selectedSize === opt.size
                      ? "bg-gradient-to-tr from-emerald-50 via-white to-teal-50 border-emerald-500 shadow-lg shadow-emerald-500/20 scale-[1.03]"
                      : "border-gray-200 hover:border-emerald-300 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-black text-forest-950 font-serif">{opt.label}</span>
                    <span className="text-[9px] uppercase font-black text-emerald-900 vibrant-badge-emerald px-2 py-0.5 rounded-full">
                      {opt.tag}
                    </span>
                  </div>
                  <div className="text-xs text-charcoal-600 font-mono font-semibold">{opt.dimensions}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Option Summary Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-100/70 via-teal-50/80 to-emerald-50/70 border border-emerald-300/60 grid grid-cols-1 md:grid-cols-3 gap-6 items-center shadow-inner">
            <div className="space-y-1">
              <span className="text-xs text-charcoal-600 uppercase tracking-wider font-extrabold">
                Selected Dimension
              </span>
              <div className="text-2xl sm:text-3xl font-black font-serif text-forest-950">
                {currentOption.label}
              </div>
              <div className="text-xs text-emerald-900 font-mono font-black">
                Dimensions: {currentOption.dimensions}
              </div>
            </div>

            <div className="space-y-1 border-t md:border-t-0 md:border-l border-emerald-300/60 pt-4 md:pt-0 md:pl-6">
              <span className="text-xs text-charcoal-600 uppercase tracking-wider font-extrabold">
                Pre-Launch Price
              </span>
              <div className="text-3xl sm:text-4xl font-black vibrant-text-gradient font-serif">
                {currentOption.estimate}
              </div>
              <div className="text-xs text-emerald-800 flex items-center gap-1 font-black">
                <Landmark className="w-4 h-4 text-emerald-600" />
                {currentOption.emi}
              </div>
            </div>

            <div className="pt-2 md:pt-0 flex flex-col justify-center gap-2.5">
              <button
                onClick={() => onOpenEnquiry("Plot Calculator", `${currentOption.label} (${currentOption.dimensions})`)}
                className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <span>Book This Plot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-[11px] text-center text-charcoal-500 italic">
                *Government stamp duty, registration & taxes extra.
              </span>
            </div>
          </div>

          {/* 3 Trust Pillars Under Calculator */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { title: "HDUDA & NA-KJP", desc: "Sanctioned layout plan" },
              { title: "SBI & HDFC Approved", desc: "Fast-track loan processing" },
              { title: "Clear Title Deed", desc: "Zero legal encumbrances" },
            ].map((pillar) => (
              <div key={pillar.title} className="p-4 rounded-2xl vibrant-card flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl vibrant-icon-emerald flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="font-black text-forest-950 block">{pillar.title}</span>
                  <span className="text-charcoal-600 font-medium">{pillar.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

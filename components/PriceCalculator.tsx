"use client";

import React, { useState } from "react";
import { Calculator, CheckCircle2, ShieldAlert, Sparkles, ArrowRight, PhoneCall } from "lucide-react";
import { CONTACT_NUMBERS } from "@/lib/projectData";

interface PriceCalculatorProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
  startingPrice?: string;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({
  onOpenEnquiry,
  startingPrice = "?35.99 LAKHS*",
}) => {
  const [selectedSize, setSelectedSize] = useState<string>("1200");

  const plotOptions = [
    { size: "1200", label: "1,200 sq.ft", dimensions: "30 x 40 ft", estimate: "Starting ?35.99 L*", tag: "Popular" },
    { size: "1500", label: "1,500 sq.ft", dimensions: "30 x 50 ft", estimate: "Custom Quote", tag: "Villa Plot" },
    { size: "2400", label: "2,400 sq.ft", dimensions: "40 x 60 ft", estimate: "Custom Quote", tag: "Estate Plot" },
    { size: "custom", label: "Corner / Premium", dimensions: "Custom Sizes", estimate: "Exclusive Pricing", tag: "Prime View" },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-sand-100 text-forest-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-200/80 text-forest-900 text-xs font-bold uppercase tracking-widest">
            Investment & Plot Sizing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-forest-950 tracking-tight">
            Transparent <span className="text-maroon-700">Project Pricing</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Ideal for both building your dream home and making a high-yield long term investment in Dharwad.
          </p>
        </div>

        {/* Pricing Showcase Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-sand-300 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          {/* Top Banner */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-sand-200">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-500">
                Official Promotional Price
              </span>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-forest-950 font-serif mt-1">
                STARTING FROM <span className="text-maroon-700">{startingPrice}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenEnquiry("Pricing Card CTA", `${selectedSize} sq.ft`)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-forest-900 to-forest-800 hover:from-forest-800 hover:to-forest-700 text-white text-xs font-bold uppercase tracking-wider shadow-xl flex items-center gap-2"
            >
              <span>Check Current Availability</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>

          {/* Plot Size Options */}
          <div className="py-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-forest-900 mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-gold-600" />
              Select Plot Size Configuration
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {plotOptions.map((opt) => (
                <div
                  key={opt.size}
                  onClick={() => setSelectedSize(opt.size)}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedSize === opt.size
                      ? "border-maroon-700 bg-maroon-50/50 shadow-md"
                      : "border-sand-200 bg-sand-50/70 hover:border-sand-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-forest-900">{opt.label}</span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white text-maroon-700 border border-maroon-200">
                      {opt.tag}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">{opt.dimensions}</div>
                  <div className="text-sm font-bold text-forest-950 font-serif mt-3">
                    {opt.estimate}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Inclusions & Disclaimers */}
          <div className="pt-6 border-t border-sand-200 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-forest-900 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>NA-KJP & HDUDA Clear Title</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Leading Bank Loan Approvals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Underground Power & Water Supply</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-sand-50 border border-sand-200 text-[11px] text-gray-500 leading-relaxed">
              <strong>Price & Availability Disclaimer:</strong> Price and availability are subject to change. Please contact the sales team for current pricing, specific plot layout availability and applicable statutory registration charges.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

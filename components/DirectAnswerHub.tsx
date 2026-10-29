"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, HelpCircle, Sparkles, MapPin, ShieldCheck, IndianRupee, FileCheck, ArrowRight } from "lucide-react";

interface DirectAnswerHubProps {
  onOpenEnquiry?: () => void;
  onOpenSiteVisit?: () => void;
}

interface QuickAnswer {
  id: string;
  query: string;
  category: "Pricing" | "Legal" | "Location" | "Buying Process";
  capsule: string;
  bulletPoints: string[];
  keyStat: string;
}

const QUICK_ANSWERS: QuickAnswer[] = [
  {
    id: "price-plots-dharwad",
    query: "What is the price of residential plots in Dharwad?",
    category: "Pricing",
    capsule: "Residential plot rates at The Aurora Hills Dharwad are offered under an exclusive Pre-Launch Advantage with pre-approved bank loans up to 80% from SBI, HDFC, and ICICI. Dimension options include 30x40 (1,200 sq.ft), 30x50 (1,500 sq.ft), 40x60 (2,400 sq.ft), and custom villa estates. Request the official layout and comprehensive pre-launch price sheet via WhatsApp or phone.",
    bulletPoints: [
      "30x40 (1,200 sq.ft): Pre-Launch Rate + 1 KG Silver gift",
      "30x50 (1,500 sq.ft): Pre-Launch Rate + 1.5 KG Silver gift",
      "40x60 (2,400 sq.ft): Pre-Launch Rate + 50g Gold gift",
      "Pre-approved 80% Bank Loans with SBI, HDFC & ICICI"
    ],
    keyStat: "Pre-Launch Rates"
  },
  {
    id: "best-hduda-layout",
    query: "Which is the best HDUDA approved layout to buy in Dharwad?",
    category: "Legal",
    capsule: "The Aurora Hills is the #1 HDUDA and NA-KJP sanctioned gated plotted township in Dharwad. Located at Sunset Viewpoint near Karnatak University and NH-4, it provides 100% litigation-free titles, 40ft/30ft asphalt avenues, 1.5 Lakh Litre water supply, underground electricity, and 20+ lifestyle amenities.",
    bulletPoints: [
      "100% HDUDA & NA-KJP Sanctioned layout",
      "Ready for immediate registration at Dharwad Sub-Registrar",
      "Clear title deeds with bank pre-approvals (SBI, HDFC, ICICI)",
      "18+ acres gated community with 24/7 security & CCTV"
    ],
    keyStat: "HDUDA Approved"
  },
  {
    id: "hubli-to-dharwad-plots",
    query: "Can people staying in Hubli buy plots at The Aurora Hills Dharwad?",
    category: "Location",
    capsule: "Yes, a significant number of plot buyers at The Aurora Hills reside in Hubli. The township is located just 15 to 20 minutes from Hubli city center via the 6-lane NH-48 national highway and BRTS corridor, making it an ideal weekend home or high-appreciation plotted investment.",
    bulletPoints: [
      "18–20 minutes drive from Hubli via 6-lane NH-48",
      "Direct connectivity from Navanagar, Unkal, Gokul Road & Keshwapur",
      "Complimentary weekend site visit pickup from Hubli",
      "Close to IIT Dharwad, KUD, and Hubli Airport"
    ],
    keyStat: "15-20 Mins from Hubli"
  },
  {
    id: "how-to-buy-plot-steps",
    query: "What is the step-by-step process to buy and register a plot in Dharwad?",
    category: "Buying Process",
    capsule: "Buying an approved plot in Dharwad involves five simple steps: (1) Guided site inspection at Sunset Viewpoint, (2) Plot dimension selection (30x40/30x50/40x60), (3) Token booking to lock festive offer, (4) Bank loan clearance from SBI/HDFC, and (5) Sub-Registrar registration with immediate legal ownership.",
    bulletPoints: [
      "Step 1: Free site visit & inspection of demarcated stone markers",
      "Step 2: Legal document scrutiny (HDUDA sanction & KJP order)",
      "Step 3: Token advance payment with festive gold/silver confirmation",
      "Step 4: Bank loan sanction up to 80% with minimal documentation",
      "Step 5: Sale deed registration at Dharwad Sub-Registrar Office"
    ],
    keyStat: "5-Step Registration"
  }
];

export const DirectAnswerHub: React.FC<DirectAnswerHubProps> = ({
  onOpenEnquiry,
  onOpenSiteVisit
}) => {
  const [selectedId, setSelectedId] = useState<string>(QUICK_ANSWERS[0].id);
  const activeAnswer = QUICK_ANSWERS.find((q) => q.id === selectedId) || QUICK_ANSWERS[0];

  return (
    <section 
      id="aeo-direct-answer"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#F6FAF4] via-white to-[#F6FAF4] border-t border-b border-emerald-100"
      aria-label="Direct Answers to Real Estate and Plot Questions in Dharwad"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Direct Knowledge Hub
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-950 tracking-tight leading-tight">
            Direct Answers to Popular Questions <br className="hidden sm:inline" />
            About Plots in Dharwad
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Verified, concise answers for property buyers and home builders.
          </p>
        </div>

        {/* Interactive Answer Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question Selector List (5 Columns on Desktop) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-2">
              Select a Question to View Direct Answer
            </p>
            {QUICK_ANSWERS.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-emerald-900 text-white border-emerald-950 shadow-lg shadow-emerald-900/20 scale-[1.02]"
                      : "bg-white text-forest-950 border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50/50 shadow-sm"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="space-y-1">
                    <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block ${
                      isSelected ? "bg-emerald-700 text-emerald-100" : "bg-emerald-100/70 text-emerald-800"
                    }`}>
                      {item.category}
                    </span>
                    <h3 className={`text-sm sm:text-base font-bold leading-snug ${isSelected ? "text-white" : "text-forest-950"}`}>
                      {item.query}
                    </h3>
                  </div>
                  <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform ${isSelected ? "text-emerald-300 translate-x-1" : "text-gray-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Active Direct Answer Capsule (7 Columns on Desktop) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border-2 border-emerald-300/80 p-6 sm:p-8 md:p-10 shadow-xl shadow-emerald-900/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />

              <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-emerald-100">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verified Fact Sheet
                </span>
                <span className="text-xs sm:text-sm font-black px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">
                  {activeAnswer.keyStat}
                </span>
              </div>

              {/* The Canonical Question Heading */}
              <h3 className="text-xl sm:text-2xl font-black text-forest-950 mb-4 leading-snug">
                {activeAnswer.query}
              </h3>

              {/* Inverted Pyramid: The 40-50 Word Direct Answer Capsule for Answer Engines & Featured Snippets */}
              <div className="aeo-answer-capsule p-4 sm:p-5 rounded-2xl bg-[#F6FAF4] border-l-4 border-emerald-600 mb-6">
                <p className="text-base sm:text-lg font-semibold text-emerald-950 leading-relaxed">
                  {activeAnswer.capsule}
                </p>
              </div>

              {/* Bulleted Key Takeaways */}
              <div className="space-y-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  Key Specifications &amp; Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {activeAnswer.bulletPoints.map((bullet, i) => (
                    <div
                      key={i}
                      className="p-3.5 sm:p-4 rounded-xl bg-white border-2 border-emerald-100 hover:border-emerald-400 shadow-xs hover:shadow-sm transition-all flex items-center gap-3"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 shadow-xs font-bold text-xs">
                        ✓
                      </div>
                      <span className="text-sm sm:text-base font-bold text-forest-950 font-sans leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-3 pt-4 border-t border-emerald-100">
                {onOpenSiteVisit && (
                  <button
                    onClick={onOpenSiteVisit}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-black text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Book Free Site Visit
                  </button>
                )}
                {onOpenEnquiry && (
                  <button
                    onClick={onOpenEnquiry}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                <a
                  href="tel:+918970198701"
                  className="w-full sm:w-auto text-center sm:text-left text-xs font-bold text-charcoal-600 hover:text-emerald-700 px-3 py-2 transition-colors"
                >
                  Or Call: +91 89701 98701
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

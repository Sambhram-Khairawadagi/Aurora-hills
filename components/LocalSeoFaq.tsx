"use client";

import React, { useState } from "react";
import { 
  ChevronDown, 
  HelpCircle, 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  Landmark, 
  PhoneCall, 
  FileText, 
  Building 
} from "lucide-react";

interface LocalSeoFaqProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
  onOpenBrochure: () => void;
  onOpenSiteVisit?: () => void;
}

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS_DATA: FaqItem[] = [
  {
    category: "Approvals & Legality",
    question: "Are plots at The Aurora Hills Dharwad HDUDA and NA approved?",
    answer:
      "Yes, The Aurora Hills is a 100% legally clear, NA-KJP and HDUDA sanctioned plotted township. Every plot comes with clean marketable titles, sanctioned layout blueprints, and pre-approved home loan options from top national banks including SBI, HDFC, ICICI, and IDFC First Bank."
  },
  {
    category: "Pricing & Investment",
    question: "What is the price of residential plots in Dharwad at The Aurora Hills?",
    answer:
      "Residential plots at The Aurora Hills start from ₹42 Lakhs* under our special pre-launch advantage. We provide transparent pricing with no hidden charges, flexible construction-linked milestone schedules, and comprehensive assistance with bank loans up to 80%."
  },
  {
    category: "Location & Proximity",
    question: "Where is The Aurora Hills located in Dharwad and how far is it from Hubli?",
    answer:
      "The Aurora Hills is situated at the prime Sunset Viewpoint near Karnatak University in Dharwad City, directly accessible from the 6-lane NH-4 Highway. It is 5 minutes from Karnatak University, 10 minutes from Dharwad Railway Station, and just 15 to 20 minutes from the Hubli-Dharwad Twin City commercial hub and Hubli Airport via the high-speed corridor."
  },
  {
    category: "Plot Dimensions",
    question: "What plot dimensions and sizes are available for sale?",
    answer:
      "The layout accommodates a versatile range of plot dimensions tailored for luxury villas and custom residences, including 30x40 (1,200 sq.ft), 30x50 (1,500 sq.ft), 40x60 (2,400 sq.ft), and exclusive park-facing / corner villa land parcels."
  },
  {
    category: "Financing & Loans",
    question: "Can I avail a home or plot loan for buying property at The Aurora Hills?",
    answer:
      "Absolutely. Leading financial partners like State Bank of India (SBI), HDFC Bank, ICICI Bank, and IDFC First have thoroughly vetted the project titles and offer direct plot purchase and home construction loans with competitive interest rates and minimal documentation."
  },
  {
    category: "Township Amenities",
    question: "What amenities are provided in this gated community in Dharwad?",
    answer:
      "The township features 20+ lifestyle and sports amenities including a designer clubhouse, swimming pool, championship tennis court, pickleball court, cricket net arena, futsal turf, serene temple, tree-lined walking tracks, 30ft & 40ft wide asphalt roads, 1.5 lakh litre overhead water tank, underground electricity cabling, and 24/7 security with CCTV surveillance."
  },
  {
    category: "Hubli-Dharwad Real Estate",
    question: "Why is Hubli-Dharwad considered the best location for real estate and plot investment?",
    answer:
      "Hubli-Dharwad is Karnataka's premier twin-city growth corridor. With major institutions like IIT Dharwad, IIIT, Karnatak University, and the industrial FMCG hub, plus seamless connectivity via the Hubli-Dharwad BRTS corridor, 6-lane NH-48, and Hubli Airport, plotted land values here offer exceptional capital appreciation and rental demand."
  }
];

const LOCAL_AREAS = [
  "Plots in Dharwad",
  "Plots in Hubli",
  "Plots in Hubli-Dharwad",
  "Residential Land Dharwad",
  "Real Estate in Dharwad",
  "Real Estate Hubli",
  "HDUDA Approved Plots",
  "NA Plots Dharwad",
  "Plots near Karnatak University",
  "Plots near NH-4 Highway",
  "Plots in Navanagar",
  "Plots in Vidyagiri Dharwad",
  "Plots in Sattur",
  "Plots in Kelgeri Dharwad",
  "Plots near Hubli Airport",
  "Gated Community Dharwad"
];

export const LocalSeoFaq: React.FC<LocalSeoFaqProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
  onOpenSiteVisit
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-gradient-to-b from-[#F7F9F6] via-white to-[#EEF5EA] text-forest-950 relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs sm:text-sm font-black uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            Buyer's Guide & Real Estate Knowledge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Plots & Real Estate in <span className="vibrant-text-gradient">Dharwad & Hubli</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Everything you need to know about purchasing legally verified, HDUDA-approved residential plots and securing high-growth land investments in North Karnataka.
          </p>
        </div>

        {/* 2-Column Layout: Left Authority Content / Right Interactive FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (5 Cols): Strategic Real Estate Guide & Key Indicators */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border-2 border-emerald-300/40 shadow-xl shadow-emerald-950/5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl vibrant-icon-emerald">
                  <Landmark className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-black font-serif text-forest-950">
                    Why Invest in Hubli-Dharwad?
                  </h3>
                  <p className="text-xs text-charcoal-600 font-bold uppercase tracking-wider">
                    Twin-City Economic Growth Corridor
                  </p>
                </div>
              </div>

              <p className="text-sm text-charcoal-700 leading-relaxed font-normal">
                As Karnataka’s largest urban agglomeration after Bengaluru, the <strong>Hubli-Dharwad twin city</strong> is witnessing exponential infrastructure investments. Driven by the <strong>IIT Dharwad campus, IIIT, BRTS high-speed transit corridor</strong>, and expansion along <strong>NH-48</strong>, residential land values are appreciating at an unprecedented rate.
              </p>

              {/* 3 Value Pillars */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-forest-950 block">100% Legal Certainty</span>
                    <span className="text-xs text-charcoal-600">NA-KJP & HDUDA sanctioned layout with clear individual title deeds.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
                  <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-forest-950 block">Rapid Capital Appreciation</span>
                    <span className="text-xs text-charcoal-600">Prime location near Karnatak University & NH-4 bypass promises steady ROI.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
                  <Building className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-forest-950 block">Instant Bank Approvals</span>
                    <span className="text-xs text-charcoal-600">Pre-approved by SBI, HDFC, ICICI, and IDFC First with up to 80% financing.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenEnquiry("SEO Buyer Guide CTA", "Price Quote & Layout Plan")}
                  className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Get Price Quote</span>
                </button>
                <button
                  onClick={onOpenBrochure}
                  className="w-full py-3 px-5 rounded-full bg-white border border-emerald-300/80 text-forest-950 hover:text-emerald-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all"
                >
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>Download Layout</span>
                </button>
              </div>
            </div>

            {/* Quick Micro-Market Area Badges (SEO Keywords) */}
            <div className="p-6 rounded-3xl bg-white/80 border border-emerald-200/60 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Popular Search Localities in Dharwad & Hubli</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {LOCAL_AREAS.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-forest-950 border border-emerald-200/60 hover:bg-emerald-100/70 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Expandable FAQ Accordions */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-emerald-400/80 shadow-xl shadow-emerald-950/5"
                      : "bg-white/90 border-emerald-200/70 hover:border-emerald-300 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 block">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-forest-950 font-serif leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`p-2 rounded-full flex-shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-emerald-600 text-white rotate-180"
                          : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal border-t border-emerald-100/60 animate-fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

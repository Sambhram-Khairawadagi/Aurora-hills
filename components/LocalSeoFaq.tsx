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
    category: "Pricing & Land Value",
    question: "What is the average price of land and residential plots in Dharwad?",
    answer:
      "The average price of residential land and plots in Dharwad typically ranges between ₹2,000 to ₹4,000 per sq.ft depending on location, HDUDA approval status, and amenities. At The Aurora Hills (Kelgerri, adjacent to Karnatak University & NH-4), premium HDUDA & NA-KJP sanctioned villa plots are available under our limited pre-launch advantage with pre-approved bank loans up to 80%. Exact unit pricing and custom site dimensions are provided on request upon booking an enquiry or site visit."
  },
  {
    category: "Plot Dimensions & Cost",
    question: "What is the price of a 30x40 and 30x50 site in Hubballi-Dharwad?",
    answer:
      "A standard 30x40 site (1,200 sq.ft) in Dharwad costs between ₹38 Lakhs to ₹48 Lakhs, while a 30x50 site (1,500 sq.ft) averages ₹48 Lakhs to ₹65 Lakhs. At The Aurora Hills, 30x40, 30x50, and 40x60 plots are offered with exclusive pre-launch booking pricing, complete with all township infrastructure, pre-approved bank loans, and festive booking rewards (Gold/Silver). Contact our sales desk or submit the form for the complete official rate sheet."
  },
  {
    category: "Best Localities",
    question: "Which is the best area to live and buy plots in Dharwad?",
    answer:
      "Kelgerri / Sunset Viewpoint, Vidyagiri, and Sattur near Karnatak University and NH-4 Highway are widely regarded as the best residential areas in Dharwad. Kelgerri offers pristine hill serenity, zero pollution, easy access to Dharwad Railway Station, and swift commuting to Hubli via the 6-lane NH-48 and BRTS corridor, making it the most preferred destination for families and luxury villa builders."
  },
  {
    category: "Approvals & Legality",
    question: "Are plots at The Aurora Hills Dharwad HDUDA and NA approved?",
    answer:
      "Yes, The Aurora Hills is a 100% legally clear, NA-KJP and HDUDA sanctioned plotted township. Every plot comes with clean marketable titles, sanctioned layout blueprints, and pre-approved home loan options from top national banks including SBI, HDFC, ICICI, and IDFC First Bank."
  },
  {
    category: "Location & Proximity",
    question: "Where is The Aurora Hills located in Dharwad and how far is it from Hubli?",
    answer:
      "The Aurora Hills is situated at the prime Sunset Viewpoint near Karnatak University in Dharwad City, directly accessible from the 6-lane NH-4 Highway. It is 5 minutes from Karnatak University, 10 minutes from Dharwad Railway Station, and just 15 to 20 minutes from the Hubli-Dharwad Twin City commercial hub and Hubli Airport via the high-speed corridor."
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
  },
  {
    category: "For Hubli Residents",
    question: "Can people staying in Hubli buy plots in Dharwad? How to reach The Aurora Hills from Hubli?",
    answer:
      "Absolutely! Many plot buyers at The Aurora Hills are Hubli residents. The project is just 15-20 minutes from Hubli city centre via the 6-lane NH-48 / NH-4 highway. You can reach the site easily from Unkal, Navanagar, Gokul Road, or Keshwapur in Hubli. We arrange free site visit pickups from Hubli every weekend — just call +91 89701 98701 to book your slot."
  },
  {
    category: "Investment Returns",
    question: "What is the expected return and capital appreciation on plots in Dharwad?",
    answer:
      "Residential plots in prime Dharwad localities like Kelgerri and Vidyagiri have historically appreciated by 18-25% per year due to rapid infrastructure growth, IIT Dharwad campus development, and NH-48 corridor expansion. At The Aurora Hills, with HDUDA sanction, completed roads, underground power, and water supply already in place, buyers are seeing strong capital gains from the pre-launch stage itself."
  },
  {
    category: "Documents & Registration",
    question: "What documents are required to buy a plot in Dharwad? Is registration easy?",
    answer:
      "To buy a plot in Dharwad, you need: (1) Aadhar Card, (2) PAN Card, (3) Passport-size photos, (4) Income proof for bank loans, (5) Bank statements (6 months). At The Aurora Hills, we assist with end-to-end documentation — from sale deed drafting to sub-registrar office registration in Dharwad. Title deeds are clear with no disputes or litigation."
  },
  {
    category: "Site Progress",
    question: "What is the current development status of The Aurora Hills in Dharwad?",
    answer:
      "As of October 2026, The Aurora Hills has completed: 40ft & 30ft wide finished black asphalt avenues, interlocking paver sidewalks, overhead water tank (1.5 lakh litres), underground power feeder pillars, boundary wall, grand security arch gateway, plot demarcation with stone markers, marigold-planted central medians, and ornamental tree plantations. The township is in advanced stages with 100+ plots already booked."
  },
  {
    category: "Comparison",
    question: "How does The Aurora Hills compare with other plots for sale in Dharwad?",
    answer:
      "Unlike many unapproved layouts in Dharwad, The Aurora Hills is the only fully HDUDA & NA-KJP sanctioned township near Sunset Viewpoint with all physical infrastructure already in place — roads, water, power, boundary, and security. Combined with 20+ amenities, bank pre-approvals from SBI/HDFC/ICICI, clear marketable title deeds, and festive gold/silver booking gifts, it offers unmatched value per square foot in the Hubli-Dharwad market."
  },
  {
    category: "Festive Offers",
    question: "Are there any special offers or discounts on plots in Dharwad during Dasara Deepawali 2026?",
    answer:
      "Yes! Book during our exclusive Dasara & Deepawali Festive Scheme and receive: 50 Grams GOLD with a 40x60 plot, 1.5 KG SILVER with a 30x50 plot, and 1 KG SILVER with a 30x40 plot. These are genuine 22k gold and 925 silver gifts delivered on registration. Contact us on +91 89701 98701 to check scheme validity and plot availability."
  }
];

const LOCAL_AREAS = [
  "Plots in Dharwad",
  "Plots in Hubli",
  "Plots in Hubli-Dharwad",
  "Residential Plots Dharwad",
  "Plots for sale in Dharwad",
  "Plots for sale in Hubli",
  "Land for sale in Dharwad",
  "Sites in Dharwad for sale",
  "Sites in Hubli for sale",
  "HDUDA Approved Plots",
  "NA KJP Plots Dharwad",
  "Villa Plots in Dharwad",
  "Plots near Kelgeri Dharwad",
  "Plots near Karnatak University",
  "Plots near NH-4 Highway",
  "Plots in Vidyagiri Dharwad",
  "Plots in Sattur",
  "Plots in Navanagar Hubli",
  "Plots near SDM College",
  "Plots near Hubli Airport",
  "Gated Community Dharwad",
  "30x40 Site Dharwad",
  "30x50 Site Dharwad",
  "40x60 Site Dharwad",
  "Buy Plot Dharwad",
  "Best Plots in Dharwad",
  "Plots near IIT Dharwad",
  "Investment Plots Dharwad",
  "Plots near Sunset Viewpoint",
  "Plots near Gokul Road Hubli",
  "Plots near Unkal Hubli",
  "Dharwad Real Estate 2026",
  "Hubli Dharwad Property",
  "SBI Approved Plots Dharwad",
  "Bank Loan Plots Dharwad",
  "HDFC Approved Plots Dharwad",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans text-forest-950 tracking-tight">
            Plots & Real Estate in <span className="vibrant-text-gradient">Dharwad &amp; Hubli</span>
          </h2>
          <p className="text-forest-900/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-semibold">
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
                  <h3 className="text-lg font-black font-sans text-forest-950">
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
                    <span className="text-xs sm:text-sm text-charcoal-700">NA-KJP & HDUDA sanctioned layout with clear individual title deeds.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
                  <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-forest-950 block">Rapid Capital Appreciation</span>
                    <span className="text-xs sm:text-sm text-charcoal-700">Prime location near Karnatak University & NH-4 bypass promises steady ROI.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
                  <Building className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-forest-950 block">Instant Bank Approvals</span>
                    <span className="text-xs sm:text-sm text-charcoal-700">Pre-approved by SBI, HDFC, ICICI, and IDFC First with up to 80% financing.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenEnquiry("SEO Buyer Guide CTA", "Price Quote & Layout Plan")}
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 flex-shrink-0" />
                  <span>Get Price Quote</span>
                </button>
                <button
                  onClick={onOpenBrochure}
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-white border border-emerald-300/80 text-forest-950 hover:text-emerald-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all"
                >
                  <FileText className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Download Layout</span>
                </button>
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
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-700 block">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-forest-950 font-sans leading-snug">
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
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-forest-950/90 leading-relaxed font-medium font-sans border-t border-emerald-100/80 animate-fade-in">
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

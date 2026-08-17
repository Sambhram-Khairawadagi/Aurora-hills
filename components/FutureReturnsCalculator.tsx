"use client";

import React, { useState } from "react";
import { 
  TrendingUp, 
  Calculator, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Landmark, 
  GraduationCap, 
  Building2, 
  Plane, 
  Percent, 
  Download,
  Info,
  Calendar
} from "lucide-react";

interface FutureReturnsCalculatorProps {
  onOpenEnquiry: (source?: string, requirement?: string) => void;
}

export const FutureReturnsCalculator: React.FC<FutureReturnsCalculatorProps> = ({ onOpenEnquiry }) => {
  // Investment Inputs
  const [selectedPlot, setSelectedPlot] = useState<"1200" | "1500" | "2400" | "custom">("1200");
  const [customPrice, setCustomPrice] = useState<number>(4200000);
  const [horizonYears, setHorizonYears] = useState<number>(5);
  const [scenario, setScenario] = useState<"conservative" | "expected" | "aggressive">("expected");
  const [showVillaYield, setShowVillaYield] = useState<boolean>(false);

  // Growth Rates based on Dharwad Real Estate Indices
  const growthRates = {
    conservative: 0.118, // 11.8% CAGR (Baseline municipal appreciation)
    expected: 0.145,     // 14.5% CAGR (NH-4 Corridor + IIT/Smart City growth)
    aggressive: 0.172,   // 17.2% CAGR (Rapid villa boom + full township handover)
  };

  const getInitialInvestment = () => {
    switch (selectedPlot) {
      case "1200":
        return 4200000;
      case "1500":
        return 5250000;
      case "2400":
        return 8400000;
      case "custom":
        return customPrice;
      default:
        return 4200000;
    }
  };

  const principal = getInitialInvestment();
  const rate = growthRates[scenario];
  const futureValue = Math.round(principal * Math.pow(1 + rate, horizonYears));
  const netProfit = futureValue - principal;
  const totalReturnPercentage = Math.round(((futureValue - principal) / principal) * 100);

  // Villa potential estimation (if user constructs villa)
  const estimatedVillaRentalMonthly = Math.round((futureValue * 0.06) / 12);
  const estimatedVillaRentalAnnual = Math.round(futureValue * 0.06);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  // Trajectory Milestones for visual chart
  const milestones = [1, 3, 5, 7, 10].map((yr) => {
    const val = Math.round(principal * Math.pow(1 + rate, yr));
    return {
      year: yr,
      value: val,
      gain: val - principal,
      formatted: formatCurrency(val),
      isActive: yr <= horizonYears,
    };
  });

  return (
    <section id="roi-calculator" className="py-24 lg:py-32 bg-gradient-to-b from-[#F7F9F6] via-[#EEF5EA] to-[#F7F9F6] text-forest-950 relative overflow-hidden">
      {/* Radiant Glow Accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-lime-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-black uppercase tracking-widest shadow-sm">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            Dharwad Smart City Growth Predictor
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
            Future Returns & <span className="green-text-gradient">Land Appreciation Calculator</span>
          </h2>
          <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Project your wealth creation backed by verified historical indices and major economic catalysts across Dharwad’s prime NH-4 corridor.
          </p>
        </div>

        {/* Calculator Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Input Controls */}
          <div className="lg:col-span-6 bg-white border-2 border-emerald-200 p-6 sm:p-8 rounded-3xl shadow-xl space-y-8">
            {/* 1. Plot Size Selection */}
            <div>
              <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-charcoal-800 mb-3">
                1. Select Plot Configuration:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedPlot("1200")}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                    selectedPlot === "1200"
                      ? "bg-emerald-50/80 border-emerald-600 shadow-md scale-105"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-black text-forest-950 block">1,200 sq.ft</span>
                  <span className="text-xs text-emerald-800 font-bold">₹42 Lakhs</span>
                </button>

                <button
                  onClick={() => setSelectedPlot("1500")}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                    selectedPlot === "1500"
                      ? "bg-emerald-50/80 border-emerald-600 shadow-md scale-105"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-black text-forest-950 block">1,500 sq.ft</span>
                  <span className="text-xs text-emerald-800 font-bold">₹52.5 Lakhs</span>
                </button>

                <button
                  onClick={() => setSelectedPlot("2400")}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                    selectedPlot === "2400"
                      ? "bg-emerald-50/80 border-emerald-600 shadow-md scale-105"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-black text-forest-950 block">2,400 sq.ft</span>
                  <span className="text-xs text-emerald-800 font-bold">₹84 Lakhs</span>
                </button>
              </div>
            </div>

            {/* 2. Holding Horizon Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs sm:text-sm font-black uppercase tracking-wider text-charcoal-800">
                  2. Investment Holding Horizon:
                </label>
                <span className="text-base sm:text-lg font-black text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
                  {horizonYears} Years
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={horizonYears}
                onChange={(e) => setHorizonYears(Number(e.target.value))}
                className="w-full h-3 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />

              <div className="flex justify-between text-xs text-charcoal-600 font-bold mt-2 px-1">
                <span>1 Year</span>
                <span>3 Years</span>
                <span>5 Years (Standard)</span>
                <span>7 Years</span>
                <span>10 Years</span>
              </div>
            </div>

            {/* 3. Appreciation Scenario Switcher */}
            <div>
              <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-charcoal-800 mb-3">
                3. Market Growth Model:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  onClick={() => setScenario("conservative")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    scenario === "conservative"
                      ? "bg-emerald-700 text-white font-bold shadow-md"
                      : "bg-gray-50 text-charcoal-800 border-gray-200 hover:bg-emerald-50"
                  }`}
                >
                  <span className="text-xs block font-extrabold">Conservative</span>
                  <span className="text-[11px] opacity-90 font-mono">11.8% CAGR</span>
                </button>

                <button
                  onClick={() => setScenario("expected")}
                  className={`p-3 rounded-xl border text-center transition-all relative ${
                    scenario === "expected"
                      ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold shadow-md"
                      : "bg-gray-50 text-charcoal-800 border-gray-200 hover:bg-emerald-50"
                  }`}
                >
                  <span className="text-xs block font-extrabold">Smart City Corridor</span>
                  <span className="text-[11px] opacity-90 font-mono">14.5% CAGR (Expected)</span>
                </button>

                <button
                  onClick={() => setScenario("aggressive")}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    scenario === "aggressive"
                      ? "bg-emerald-800 text-white font-bold shadow-md"
                      : "bg-gray-50 text-charcoal-800 border-gray-200 hover:bg-emerald-50"
                  }`}
                >
                  <span className="text-xs block font-extrabold">High Growth</span>
                  <span className="text-[11px] opacity-90 font-mono">17.2% CAGR</span>
                </button>
              </div>
            </div>

            {/* Villa Rental Yield Toggle */}
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-xs sm:text-sm font-bold text-forest-950 block">
                  Estimate Villa Rental Income Potential
                </span>
                <span className="text-xs text-charcoal-600">
                  Calculate annual passive rental cashflow if you construct a villa.
                </span>
              </div>
              <button
                onClick={() => setShowVillaYield(!showVillaYield)}
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                  showVillaYield ? "bg-emerald-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    showVillaYield ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Right Column: Projected Valuation, Net Wealth Gain & Growth Timeline */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Return Display Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-300 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <span className="text-xs uppercase font-extrabold text-charcoal-600 tracking-wider">
                    Initial Investment
                  </span>
                  <div className="text-xl font-bold text-forest-950 font-serif">
                    {formatCurrency(principal)}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs uppercase font-extrabold text-emerald-800 tracking-wider">
                    Total ROI Gain
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-emerald-700">
                    +{totalReturnPercentage}%
                  </div>
                </div>
              </div>

              {/* Big Future Valuation Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-forest-950 text-white shadow-xl space-y-2 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm uppercase tracking-wider font-extrabold text-emerald-300">
                    Projected Land Valuation in {horizonYears} Years
                  </span>
                  <span className="text-xs font-bold text-emerald-200 bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    {(rate * 100).toFixed(1)}% p.a.
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-white tracking-tight">
                  {formatCurrency(futureValue)}
                </div>

                <div className="pt-2 text-xs sm:text-sm text-emerald-200 flex items-center justify-between font-medium border-t border-emerald-800/80">
                  <span>Estimated Net Capital Profit:</span>
                  <span className="text-base font-black text-lime-300">
                    +{formatCurrency(netProfit)}
                  </span>
                </div>
              </div>

              {/* Optional Villa Rental Yield Breakdown */}
              {showVillaYield && (
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm space-y-1.5 animate-fade-in">
                  <div className="flex items-center gap-1.5 text-amber-900 font-bold">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>Projected Villa Rental Cashflow (@ 6% Yield):</span>
                  </div>
                  <div className="flex justify-between items-center text-charcoal-800 font-bold">
                    <span>Monthly Rental:</span>
                    <span className="text-emerald-800 font-black">{formatCurrency(estimatedVillaRentalMonthly)}/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-charcoal-800 font-bold">
                    <span>Annual Passive Cashflow:</span>
                    <span className="text-emerald-800 font-black">{formatCurrency(estimatedVillaRentalAnnual)}/yr</span>
                  </div>
                </div>
              )}

              {/* Year-by-Year Growth Timeline Bar */}
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase text-charcoal-700 tracking-wider block">
                  Projected Valuation Timeline:
                </span>
                <div className="grid grid-cols-5 gap-2 text-center">
                  {milestones.map((m) => (
                    <div
                      key={m.year}
                      className={`p-2 rounded-xl border text-xs transition-all ${
                        m.year === horizonYears
                          ? "bg-emerald-600 text-white font-black border-emerald-700 shadow-md scale-105"
                          : m.isActive
                          ? "bg-emerald-50 text-forest-950 font-bold border-emerald-200"
                          : "bg-gray-50 text-charcoal-500 border-gray-200"
                      }`}
                    >
                      <span className="text-[10px] block opacity-80">Yr {m.year}</span>
                      <span className="text-[11px] sm:text-xs font-mono font-bold block mt-0.5">{m.formatted}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions & Report Download */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() =>
                    onOpenEnquiry(
                      "Future Returns Calculator",
                      `Plot Investment ${selectedPlot} sq.ft (${formatCurrency(principal)}) with ${horizonYears}-Year ROI Projection`
                    )
                  }
                  className="w-full sm:flex-1 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-700 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  <span>Lock In Pre-Launch Price</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Real Economic Growth Catalysts Card */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-100 shadow-lg space-y-3">
              <h4 className="text-sm font-black uppercase tracking-widest text-emerald-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Why Dharwad Land Appreciates Rapidly:
              </h4>

              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>IIT & IIIT Dharwad Campuses:</strong> Expanding institutional cluster attracting affluent faculty and research professionals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mumigatti-Belur FMCG & Industrial Hub:</strong> 15,000+ new high-income jobs along the NH-4 corridor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>HDUDA Clear Title Advantage:</strong> Sanctioned plotted townships appreciate 25–35% faster than unorganized layouts.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

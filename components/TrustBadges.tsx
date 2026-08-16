"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Landmark, FileCheck2, Award } from "lucide-react";

export const TrustBadges: React.FC = () => {
  const badgeDetails = [
    {
      title: "NA-KJP Approved",
      desc: "Non-Agricultural Conversion & Layout Approval Certified",
      icon: <ShieldCheck className="w-7 h-7 text-emerald-400" />,
      tag: "100% Legal"
    },
    {
      title: "HDUDA Approved",
      desc: "Hubli-Dharwad Urban Development Authority Sanctioned",
      icon: <Award className="w-7 h-7 text-gold-400" />,
      tag: "Verified Plan"
    },
    {
      title: "Bank Loans Approved",
      desc: "Instant Approvals with SBI, HDFC, ICICI, Canara & Axis",
      icon: <Landmark className="w-7 h-7 text-blue-400" />,
      tag: "Easy Financing"
    },
    {
      title: "Property Tax Updated",
      desc: "Zero Dues & Clear Title Records for immediate registration",
      icon: <FileCheck2 className="w-7 h-7 text-amber-400" />,
      tag: "Immediate Sale"
    }
  ];

  return (
    <section className="bg-forest-950 border-y border-forest-800/80 py-10 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-900/50 to-forest-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badgeDetails.map((badge, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-gradient-to-b from-forest-900/80 to-forest-950 border border-forest-800 hover:border-gold-500/50 transition-all duration-300 shadow-xl flex items-start gap-4 group hover:-translate-y-1"
            >
              <div className="p-3 rounded-2xl bg-forest-950 border border-forest-800 group-hover:border-gold-500/40 group-hover:scale-110 transition-all flex-shrink-0">
                {badge.icon}
              </div>

              <div className="space-y-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-white tracking-wide truncate">
                    {badge.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gold-300 bg-gold-500/10 px-2 py-0.5 rounded-full border border-gold-500/30">
                    {badge.tag}
                  </span>
                </div>
                <p className="text-xs text-sand-200 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { BUYER_FAQS } from "@/lib/buyer-faq";

interface DirectAnswerHubProps {
  onOpenEnquiry?: () => void;
  onOpenSiteVisit?: () => void;
}

export const DirectAnswerHub: React.FC<DirectAnswerHubProps> = ({ onOpenEnquiry, onOpenSiteVisit }) => (
  <section id="aeo-direct-answer" className="py-12 lg:py-20 px-4 bg-white" aria-label="Buyer questions">
    <div id="faq" className="max-w-3xl mx-auto">
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center mb-6">Your questions, answered</h2>
      {BUYER_FAQS.map((answer, index) => <details key={answer.id} open={index === 0} className="border-b border-gray-200 py-4">
        <summary className="cursor-pointer font-semibold text-base text-forest-950 py-2">{answer.query}</summary>
        <p className="aeo-answer-capsule text-base text-gray-700 leading-relaxed mt-3">{answer.capsule}</p>
      </details>)}
      <div className="flex flex-wrap justify-center gap-3 mt-6"><button className="primary-button" onClick={onOpenEnquiry}>Get Layout &amp; Price Sheet</button><button className="secondary-button" onClick={onOpenSiteVisit}>Book a Free Site Visit</button></div>
    </div>
  </section>
);

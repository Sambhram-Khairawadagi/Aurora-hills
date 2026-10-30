"use client";
import Image from "next/image";
import { FESTIVE_SCHEME_DATA } from "@/lib/projectData";
export function FestiveScheme({ onOpenEnquiry }: { onOpenEnquiry: (source?: string, requirement?: string) => void }) {
  return <section id="festive-offer" className="py-12 lg:py-20 px-4 sm:px-6 bg-amber-50/60 border-y border-amber-100">
    <div className="max-w-6xl mx-auto">
      <p className="text-center text-sm font-medium text-amber-900 mb-2">Dasara &amp; Deepawali special</p>
      <h2 className="text-center font-serif text-3xl sm:text-4xl font-semibold text-forest-950">A festive gift for your new beginning</h2>
      <p className="text-center font-kannada text-xl text-amber-900 mt-3">{FESTIVE_SCHEME_DATA.kannadaTitle}</p>
      <p className="text-center text-base text-gray-700 max-w-2xl mx-auto mt-3 mb-6">Explore booking benefits for your preferred plot size. Confirm current availability, eligibility and offer terms with our team.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {FESTIVE_SCHEME_DATA.schemes.map(scheme => <article key={scheme.id} className="rounded-2xl border border-amber-200 bg-white p-4 sm:p-5 flex flex-col">
          <div className="flex md:flex-col items-center gap-4 text-left md:text-center">
            <div className="relative w-24 h-28 md:w-full md:h-44 shrink-0"><Image src={scheme.image} alt={`${scheme.giftWeight} ${scheme.giftItem} booking reward`} fill sizes="(max-width: 768px) 96px, 300px" className="object-contain" /></div>
            <div><h3 className="font-serif text-2xl font-semibold">{scheme.dimension} plot</h3><p className="text-sm text-gray-600 mt-1">{scheme.areaSqFt.toLocaleString('en-IN')} sq.ft</p><p className="font-semibold text-amber-900 mt-2">{scheme.giftWeight} {scheme.giftItem}</p></div>
          </div>
          <button className="primary-button w-full mt-4" onClick={() => onOpenEnquiry(`Festive Offer ${scheme.dimension}`, scheme.id === "scheme-40x60" ? "40x60 Plot (50g Gold Offer)" : scheme.id === "scheme-30x50" ? "30x50 Plot (1.5kg Silver Offer)" : "30x40 Plot (1kg Silver Offer)")}>Check Offer &amp; Availability</button>
        </article>)}
      </div>
      <p className="text-center text-sm text-gray-600 mt-5">Limited-period offer. Eligibility and terms apply. <a href="/terms-and-conditions" className="underline">View terms</a>.</p>
    </div>
  </section>;
}

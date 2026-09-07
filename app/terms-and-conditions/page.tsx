"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Scale, AlertCircle, Building2, CheckCircle2, ShieldCheck, MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_NUMBERS, EMAIL_ADDRESS } from "@/lib/projectData";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#F7F9F6] text-[#14281D] selection:bg-emerald-600 selection:text-white font-sans antialiased">
      {/* Header Bar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-200/60 py-4 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/aurora-hills-logo-transparent.png"
              alt="The Aurora Hills"
              width={140}
              height={45}
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs sm:text-sm transition-colors border border-emerald-200/60"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-8">
          {/* Page Badge & Title */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vibrant-badge-emerald text-xs font-black uppercase tracking-widest">
              <Scale className="w-4 h-4 text-emerald-600" />
              Terms of Service
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-sm sm:text-base text-charcoal-600 font-medium">
              Last Updated: September 2026 • The Aurora Hills (Marketed by Property Basket)
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-300/40 shadow-xl shadow-emerald-950/5 space-y-6 text-sm sm:text-base leading-relaxed text-charcoal-800">
            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-600" />
                1. Project & Marketing Representation
              </h2>
              <p>
                The Aurora Hills is a premium plotted residential township development located at Sunset Viewpoint, Karnatak University, Dharwad City, Karnataka, developed by Sai Smruti Developers and exclusively marketed by Property Basket (&quot;Marketing Partner&quot;).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-emerald-600" />
                2. Information Accuracy & Conceptual Renders
              </h2>
              <p>
                All 3D visual renderings, video fly-throughs, elevation drawings, architectural walkthroughs, and artist impressions displayed on this website are conceptual and indicative in nature. Actual site specifications, landscaping, road alignments, and dimensions are subject to sanctioned engineering drawings, approvals from the Hubballi-Dharwad Urban Development Authority (HDUDA), and relevant statutory planning authorities.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                3. Approvals, Sanctions & Titles
              </h2>
              <p>
                The Aurora Hills is developed under NA-KJP approval and HDUDA sanctions. Prospective purchasers are encouraged to inspect official sanction orders, title deeds, KJP maps, and legal search reports made available at our site office during business hours.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950">
                4. Pricing, Taxes & Availability
              </h2>
              <ul className="list-disc pl-6 space-y-1.5 text-charcoal-700">
                <li>Prices displayed (e.g., &quot;Starting from ₹42 Lakhs*&quot;) represent promotional pre-launch baseline figures and are subject to revision without prior notice at developer discretion.</li>
                <li>Statutory government levies including Stamp Duty, Registration Fees, GST (if applicable), HDUDA betterment/khata transfer fees, and legal documentation costs are payable extra as per prevailing government rates.</li>
                <li>Plot allotment is confirmed strictly on a first-come, first-served basis upon receipt of standard token advance and execution of the formal booking agreement.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950">
                5. Bank Loan Approvals
              </h2>
              <p>
                The project is pre-approved for residential land and home loans by financial institutions including State Bank of India (SBI), HDFC Bank, ICICI Bank, and IDFC First Bank. However, individual loan eligibility, interest rates, and sanction limits remain at the sole discretion of the respective lending bank.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950">
                6. Guided Site Visits
              </h2>
              <p>
                Complimentary guided site visits arranged from Dharwad and Hubli are intended for genuine property buyers and their families. Guests visiting the site are requested to follow on-site safety protocols as active infrastructure construction is in progress.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950">
                7. Intellectual Property & Brand Usage
              </h2>
              <p>
                The brand name &quot;The Aurora Hills,&quot; logos, layout blueprints, site photography, copy, and digital designs are the proprietary intellectual property of Sai Smruti Developers and Property Basket. Unauthorized reproduction, scraping, or commercial misuse is strictly prohibited under Indian Copyright Law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950">
                8. Governing Law & Jurisdiction
              </h2>
              <p>
                Any legal claim, dispute, or proceeding arising out of the use of this website or property booking shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Dharwad / Hubballi, Karnataka.
              </p>
            </section>

            <section className="space-y-3 pt-2 border-t border-emerald-100">
              <h2 className="text-xl font-bold font-serif text-forest-950">
                9. Corporate Office & Legal Inquiries
              </h2>
              <div className="space-y-2 pt-1 font-medium">
                <div className="flex items-center gap-2 text-forest-950">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Phone: {CONTACT_NUMBERS.join(" • ")}</span>
                </div>
                <div className="flex items-center gap-2 text-forest-950">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>Email: {EMAIL_ADDRESS}</span>
                </div>
                <div className="flex items-center gap-2 text-forest-950">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Site Office: Sunset Viewpoint, Karnatak University, Dharwad City, Karnataka (Near NH-4)</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

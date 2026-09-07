"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_NUMBERS, EMAIL_ADDRESS } from "@/lib/projectData";

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Legal & Trust
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-forest-950 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-charcoal-600 font-medium">
              Last Updated: September 2026 • The Aurora Hills (Marketed by Property Basket)
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-300/40 shadow-xl shadow-emerald-950/5 space-y-6 text-sm sm:text-base leading-relaxed text-charcoal-800">
            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950 flex items-center gap-2">
                <Eye className="w-5 h-5 text-emerald-600" />
                1. Overview & Commitment
              </h2>
              <p>
                The Aurora Hills (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), marketed by Property Basket, is committed to safeguarding the personal privacy of our website visitors, prospective buyers, and site visit guests. This Privacy Policy outlines the types of information we collect, how it is used, and the measures we take to protect your data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                2. Information We Collect
              </h2>
              <p>When you interact with our website or submit inquiries, we may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-charcoal-700">
                <li><strong>Contact Information:</strong> Full name, phone/mobile number, email address, and city of residence.</li>
                <li><strong>Requirement Details:</strong> Preferred plot size (30x40, 30x50, 40x60, or odd/villa plots), investment timeframe, budget, and financing requirements.</li>
                <li><strong>Site Visit Scheduling:</strong> Preferred dates, pickup requirements from Dharwad or Hubli, and number of guests attending.</li>
                <li><strong>Technical & Analytics Data:</strong> IP address, browser type, device information, pages viewed, time spent, and referral sources to optimize website experience.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950 flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-600" />
                3. How We Use Your Information
              </h2>
              <p>The information collected is used strictly for legitimate real estate inquiry and service fulfillment purposes:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-charcoal-700">
                <li>To contact you regarding layout plans, price quotes, availability of plots, and project brochures.</li>
                <li>To coordinate and confirm guided site visits to The Aurora Hills at Sunset Viewpoint, Dharwad.</li>
                <li>To assist with pre-approved bank loan eligibility (SBI, HDFC, ICICI, IDFC First).</li>
                <li>To improve user experience, website security, and analyze marketing performance.</li>
              </ul>
              <p className="font-bold text-forest-950 pt-1">
                We do NOT sell, rent, trade, or distribute your personal contact information to third-party telemarketers or advertisers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950">
                4. Cookies & Local Storage
              </h2>
              <p>
                Our website utilizes local storage and session cookies to provide a personalized browsing experience, recall your form submission status so you are not prompted repeatedly, and collect anonymous traffic analytics. You can control or disable cookies via your browser settings at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950">
                5. Data Security & Storage
              </h2>
              <p>
                We implement industry-standard SSL encryption across all web traffic and data transmissions. Inquiries submitted through our forms are stored securely with restricted administrative access granted solely to authorized Property Basket property advisors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold font-serif text-forest-950">
                6. Your Rights & Opt-Out
              </h2>
              <p>
                You have the right to access, update, or request the deletion of your personal details from our contact registry at any time. If you wish to stop receiving SMS, WhatsApp updates, or telephone calls regarding The Aurora Hills, please email or call us directly.
              </p>
            </section>

            <section className="space-y-3 pt-2 border-t border-emerald-100">
              <h2 className="text-xl font-bold font-serif text-forest-950">
                7. Contact Our Privacy & Advisory Team
              </h2>
              <p>If you have any questions regarding this Privacy Policy or your personal data, please contact:</p>
              <div className="space-y-2 pt-1 font-medium">
                <div className="flex items-center gap-2 text-forest-950">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Helpline: {CONTACT_NUMBERS.join(" • ")}</span>
                </div>
                <div className="flex items-center gap-2 text-forest-950">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>Email: {EMAIL_ADDRESS}</span>
                </div>
                <div className="flex items-center gap-2 text-forest-950">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Address: Sunset Viewpoint, Karnatak University, Dharwad City, Karnataka, India</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

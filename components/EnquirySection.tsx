"use client";

import React, { useState } from "react";
import { Send, Phone, MessageSquare, Mail, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { CONTACT_NUMBERS } from "@/lib/projectData";
import confetti from "canvas-confetti";

interface EnquirySectionProps {
  onSuccess?: () => void;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "1200 sq.ft (30x40)",
    purpose: "Build a Home",
    preferred_contact: "Phone",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Homepage Enquiry Section",
          utm_source: new URLSearchParams(window.location.search).get("utm_source") || "direct",
          utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || "",
          utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
        if (onSuccess) onSuccess();
      } else {
        setErrorMessage(data.error || "Failed to submit enquiry.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please call our hotline directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      "Hello, I am interested in The Aurora Hills, Hosa Dharwad. Please share the latest plot availability, pricing and project details."
    );
    window.open(`https://wa.me/919019765265?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-sand-50 text-forest-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Direct Helpline & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-widest">
              Direct Developer Hotline
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-forest-950 tracking-tight">
              Find Your Place at <span className="text-maroon-700">Aurora Hills</span>
            </h2>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Connect with our dedicated project advisory team for instant layout maps, plot availability charts, and site visit coordination.
            </p>

            {/* Contact Phone Numbers from brochure */}
            <div className="p-6 rounded-2xl bg-white border border-sand-300 shadow-xl space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Official Contact Numbers
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {CONTACT_NUMBERS.map((num) => (
                  <a
                    key={num}
                    href={`tel:${num}`}
                    className="p-3 rounded-xl bg-sand-50 hover:bg-forest-900 text-forest-950 hover:text-white border border-sand-200 transition-colors flex items-center gap-2 text-xs font-bold group"
                  >
                    <Phone className="w-4 h-4 text-maroon-700 group-hover:text-gold-400" />
                    <span>{num}</span>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (Instant Reply)</span>
              </button>
            </div>
          </div>

          {/* Right Lead Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-sand-300 rounded-3xl p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-forest-950">
                    Thank You for Your Enquiry!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Our sales advisor will reach out to you on <strong>{formData.phone}</strong> with detailed pricing and plot availability.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-forest-900 hover:bg-forest-800"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold font-serif text-forest-950">
                    Request Project Details & Availability
                  </h3>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 text-forest-950 text-xs focus:outline-none focus:border-forest-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 text-forest-950 text-xs focus:outline-none focus:border-forest-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 text-forest-950 text-xs focus:outline-none focus:border-forest-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Preferred Plot Size
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-sand-50 border border-sand-300 text-forest-950 text-xs focus:outline-none focus:border-forest-700"
                      >
                        <option value="1200 sq.ft (30x40)">1,200 sq.ft (30x40)</option>
                        <option value="1500 sq.ft (30x50)">1,500 sq.ft (30x50)</option>
                        <option value="2400 sq.ft (40x60)">2,400 sq.ft (40x60)</option>
                        <option value="Corner / Custom Plot">Corner / Custom Plot</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Purpose of Purchase
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-sand-50 border border-sand-300 text-forest-950 text-xs focus:outline-none focus:border-forest-700"
                      >
                        <option value="Build a Home">Build a Home</option>
                        <option value="Investment">Investment</option>
                        <option value="Both">Both (Living & Appreciation)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Preferred Contact Mode
                      </label>
                      <select
                        value={formData.preferred_contact}
                        onChange={(e) => setFormData({ ...formData, preferred_contact: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-sand-50 border border-sand-300 text-forest-950 text-xs focus:outline-none focus:border-forest-700"
                      >
                        <option value="Phone">Phone Call</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Message / Questions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific plot or price details you would like to know..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-sand-50 border border-sand-300 text-forest-950 text-xs focus:outline-none focus:border-forest-700"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 hover:bg-forest-800 text-white font-bold uppercase tracking-wider text-xs shadow-xl flex items-center justify-center gap-2 transition-all"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-gold-400" />
                        <span>Request Details</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { Calendar, Clock, Users, Car, CheckCircle2, Send, PhoneCall } from "lucide-react";
import confetti from "canvas-confetti";

interface SiteVisitSectionProps {
  onSuccess?: () => void;
}

export const SiteVisitSection: React.FC<SiteVisitSectionProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferred_date: "",
    preferred_time: "10:00 AM",
    visitors: "2",
    transport_required: "No",
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
      const res = await fetch("/api/site-visits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
        if (onSuccess) onSuccess();
      } else {
        setErrorMessage(data.error || "Failed to schedule visit. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Network error. Please call our hotline directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="site-visit" className="py-20 lg:py-28 bg-forest-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-950 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
              Complimentary Guided Tour
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-white tracking-tight">
              Book a <span className="gold-text-gradient">Site Visit</span>
            </h2>

            <p className="text-sand-100 text-sm sm:text-base leading-relaxed">
              Experience the fresh hill breezes, planned road infrastructure, and natural serenity in person. Our project representatives will guide you through the exact plot coordinates.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-forest-950 border border-forest-800 text-gold-400">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Free Transport Assistance</h4>
                  <p className="text-xs text-sand-200">Convenient pickup & drop arranged from Hubli or Dharwad city centers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-forest-950 border border-forest-800 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Document Verification Desk</h4>
                  <p className="text-xs text-sand-200">Inspect original NA-KJP and HDUDA sanctions on-site.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-forest-950/90 border border-gold-400/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    Site Visit Request Received!
                  </h3>
                  <p className="text-sm text-sand-100 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-gold-300">{formData.name}</strong>. Our Aurora Hills team will contact you shortly to confirm your site visit and finalize pickup details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold text-forest-950 bg-gold-400 hover:bg-gold-300"
                  >
                    Schedule Another Visit
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-sand-200 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Patil"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-forest-900 border border-forest-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-sand-200 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-forest-900 border border-forest-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-sand-200 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. anand@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-forest-900 border border-forest-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-sand-200 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferred_date}
                        onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-sand-200 mb-1">
                        Preferred Time
                      </label>
                      <select
                        value={formData.preferred_time}
                        onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                      >
                        <option value="10:00 AM">10:00 AM (Morning)</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="02:00 PM">02:00 PM (Afternoon)</option>
                        <option value="04:30 PM">04:30 PM (Sunset View)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-sand-200 mb-1">
                        No. of Visitors
                      </label>
                      <select
                        value={formData.visitors}
                        onChange={(e) => setFormData({ ...formData, visitors: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4+">4+ Family Members</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-sand-200 mb-1">
                        Transport Needed?
                      </label>
                      <select
                        value={formData.transport_required}
                        onChange={(e) => setFormData({ ...formData, transport_required: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                      >
                        <option value="No">No (Self Driving)</option>
                        <option value="Yes">Yes (Require Pickup)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-sand-200 mb-1">
                      Special Requirements / Message
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific plot facing or pickup location..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 hover:from-gold-300 hover:to-gold-500 text-forest-950 font-bold uppercase tracking-wider text-xs shadow-xl flex items-center justify-center gap-2 transition-all"
                  >
                    {loading ? (
                      <span>Scheduling Site Visit...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Site Visit Request</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-gray-400 text-center">
                    ?? Your details are protected. An authorized representative will call to coordinate.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

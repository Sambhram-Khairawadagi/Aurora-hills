"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Car, CheckCircle2, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/site-visits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Site Visit Modal",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        confetti({ particleCount: 70, spread: 60 });
      } else {
        setErrorMessage(data.error || "Failed to schedule visit.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please call our helpline directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-forest-950 border border-gold-400/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-forest-900 text-gray-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-widest mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          Complimentary Site Tour
        </div>

        <h3 className="text-2xl font-bold font-serif text-white">
          Book a Free Site Visit
        </h3>
        <p className="text-xs text-sand-200 mt-1 mb-5">
          Select your convenient date and time to visit The Aurora Hills at Mansur & Sanna Somapura, Dharwad.
        </p>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-serif text-white">
              Site Visit Requested!
            </h4>
            <p className="text-xs text-sand-200 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Our representative will call on <strong>{formData.phone}</strong> to confirm your slot for {formData.preferred_date}.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-gold-400 text-forest-950 text-xs font-bold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs">
                {errorMessage}
              </div>
            )}

            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
            />

            <div>
              <label className="block text-xs font-semibold text-sand-200 mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-sand-200 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-sand-200 mb-1">Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-sand-200 mb-1">Preferred Time</label>
                <select
                  value={formData.preferred_time}
                  onChange={(e) => setFormData({ ...formData, preferred_time: e.target.value })}
                  className="w-full px-2.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                >
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:30 PM">04:30 PM (Sunset)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-sand-200 mb-1">Visitors</label>
                <select
                  value={formData.visitors}
                  onChange={(e) => setFormData({ ...formData, visitors: e.target.value })}
                  className="w-full px-2.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4+">4+ People</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-sand-200 mb-1">Transport?</label>
                <select
                  value={formData.transport_required}
                  onChange={(e) => setFormData({ ...formData, transport_required: e.target.value })}
                  className="w-full px-2.5 py-2.5 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes (Pickup)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-sand-200 mb-1">Pickup Point / Note</label>
              <textarea
                rows={2}
                placeholder="e.g. Pickup from Dharwad CBT bus stand or nearby landmark..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-forest-900 border border-forest-700 text-white text-xs focus:outline-none focus:border-gold-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-forest-950 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? "Booking Slot..." : "Request Site Visit Slot"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

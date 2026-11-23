"use client";

import React, { useId } from "react";

export const emptyBuyerDetails = { budget: "", location_fit: "", measurement_email: "", measurement_consent: false };
export type BuyerDetailsValue = typeof emptyBuyerDetails;

export function BuyerDetails({ value, onChange }: { value: BuyerDetailsValue; onChange: (value: BuyerDetailsValue) => void }) {
  const id = useId();
  const field = "mt-1 w-full rounded-xl border border-emerald-200 bg-white px-3 py-3 text-base text-forest-950";
  return (
    <details className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 text-forest-950">
      <summary className="cursor-pointer text-sm font-semibold min-h-[28px]">Help us suggest a suitable plot (optional)</summary>
      <div className="mt-3 space-y-3">
        <p className="text-sm">Aurora Hills is in Dharwad. Villa plots start at ₹42 lakh.</p>
        <label className="block text-sm" htmlFor={`${id}-budget`}>Your plot budget
          <select id={`${id}-budget`} className={field} value={value.budget} onChange={e => onChange({ ...value, budget: e.target.value })}>
            <option value="">Prefer to discuss</option>
            <option>Below ₹42 lakh</option><option>₹42–60 lakh</option><option>₹60 lakh–₹1 crore</option><option>Above ₹1 crore</option>
          </select>
        </label>
        <label className="block text-sm" htmlFor={`${id}-location`}>Would a plot in Dharwad suit you?
          <select id={`${id}-location`} className={field} value={value.location_fit} onChange={e => onChange({ ...value, location_fit: e.target.value })}>
            <option value="">Not decided yet</option><option>Yes, Dharwad suits me</option><option>I need more location details</option><option>I only want Hubli</option>
          </select>
        </label>
        <label className="block text-sm" htmlFor={`${id}-email`}>Email for your enquiry (optional)
          <input id={`${id}-email`} type="email" autoComplete="email" className={field} value={value.measurement_email} onChange={e => onChange({ ...value, measurement_email: e.target.value })} />
        </label>
        <label className="flex items-start gap-2 text-xs leading-relaxed" htmlFor={`${id}-consent`}>
          <input id={`${id}-consent`} type="checkbox" className="mt-1 h-4 w-4 shrink-0" checked={value.measurement_consent} onChange={e => onChange({ ...value, measurement_consent: e.target.checked })} />
          <span>Optional: allow my email and phone number to be shared securely with Google to measure which ads lead to enquiries. This does not affect my enquiry. <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">Privacy policy</a></span>
        </label>
      </div>
    </details>
  );
}

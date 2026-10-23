import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plots in Dharwad for Sale | HDUDA Approved Villa Plots | The Aurora Hills",
  description:
    "Buy HDUDA & NA-KJP approved residential plots in Dharwad starting ₹42 Lakhs. 30x40, 30x50 & 40x60 sites near Karnatak University, NH-4 Highway & Sunset Viewpoint. SBI/HDFC bank loans pre-approved. Call +91 89701 98701.",
  alternates: {
    canonical: "https://theaurorahills.com/plots-in-dharwad",
  },
  openGraph: {
    title: "Plots in Dharwad for Sale | HDUDA Approved | The Aurora Hills",
    description:
      "Best residential plots in Dharwad – HDUDA & NA-KJP approved. 30x40, 30x50, 40x60 villa sites near NH-4. Starting ₹42 Lakhs.",
    url: "https://theaurorahills.com/plots-in-dharwad",
    type: "website",
  },
};

export default function PlotsInDharwadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F7F9F6] to-white text-gray-900 font-sans">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/30 border border-emerald-400/40 text-emerald-200 text-xs font-bold uppercase tracking-widest mb-6">
            🏡 HDUDA & NA-KJP Approved — Kelgeri, Dharwad
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            Residential Plots in Dharwad
            <span className="block text-emerald-300 mt-2">Starting ₹42 Lakhs*</span>
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-10">
            Buy premium 30×40, 30×50 & 40×60 villa plots near Karnatak University, NH-4 Highway & Sunset Viewpoint, Dharwad. 100% legally clear title. SBI · HDFC · ICICI bank loans pre-approved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918970198701"
              className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-black text-base uppercase tracking-wider transition-all shadow-xl shadow-emerald-900/50"
            >
              📞 Call: 89701 98701
            </a>
            <Link
              href="/#layout"
              className="px-8 py-4 rounded-full bg-white/10 border border-white/30 hover:bg-white/20 text-white font-black text-base uppercase tracking-wider transition-all"
            >
              View Layout Plan →
            </Link>
          </div>
        </div>
      </section>

      {/* Plot Size Options */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Available Plot Sizes in Dharwad
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the right residential plot size in Dharwad that fits your dream home and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                size: "30×40",
                sqft: "1,200 sq.ft",
                price: "₹42 Lakhs*",
                bonus: "1 KG Silver Gift",
                highlight: false,
              },
              {
                size: "30×50",
                sqft: "1,500 sq.ft",
                price: "₹52.5 Lakhs*",
                bonus: "1.5 KG Silver Gift",
                highlight: true,
              },
              {
                size: "40×60",
                sqft: "2,400 sq.ft",
                price: "₹84 Lakhs*",
                bonus: "50g Gold Gift 🥇",
                highlight: false,
              },
            ].map((plot, i) => (
              <div
                key={i}
                className={`rounded-3xl border-2 p-8 text-center flex flex-col items-center gap-4 ${
                  plot.highlight
                    ? "border-emerald-500 bg-emerald-50 shadow-2xl shadow-emerald-200/80 scale-105"
                    : "border-gray-200 bg-white shadow-md"
                }`}
              >
                <div className="text-5xl font-black text-emerald-700">{plot.size}</div>
                <div className="text-gray-500 font-medium">{plot.sqft}</div>
                <div className="text-3xl font-black text-gray-900">{plot.price}</div>
                <div className="px-4 py-2 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-sm font-bold">
                  🎁 {plot.bonus}
                </div>
                <a
                  href="tel:+918970198701"
                  className="mt-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all w-full"
                >
                  Book This Plot
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">* Pre-launch prices. Subject to availability. T&C apply.</p>
        </div>
      </section>

      {/* Why Dharwad Real Estate */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 text-center">
            Why Buy a Plot in Dharwad in 2026?
          </h2>
          <p className="text-gray-600 text-center text-lg max-w-3xl mx-auto mb-12">
            Dharwad is one of Karnataka's fastest-growing real estate markets. Here's why savvy investors from Hubli, Dharwad, and across North Karnataka are buying residential plots here now.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🏛️",
                title: "IIT Dharwad & IIIT Proximity",
                body: "India's premier engineering institutions have established their campuses near Dharwad, creating massive demand for residential property.",
              },
              {
                icon: "🛣️",
                title: "NH-4 / NH-48 Superhighway Connectivity",
                body: "Dharwad sits on the Bengaluru-Pune NH corridor with seamless connectivity to Hubli, Mumbai, and Bengaluru.",
              },
              {
                icon: "🎓",
                title: "Karnatak University Hub",
                body: "India's top academic institutions — Karnatak University, SDMIT, KLE — are based in Dharwad, driving steady residential demand.",
              },
              {
                icon: "📈",
                title: "25%+ Annual Land Appreciation",
                body: "Prime localities in Dharwad like Kelgeri, Vidyagiri & Sattur have seen plot values appreciate 18-25% year-on-year consistently.",
              },
              {
                icon: "✈️",
                title: "Hubli Airport 20 Mins Away",
                body: "Regular flights to Bengaluru, Mumbai, Hyderabad from Hubli Airport ensure excellent connectivity for business professionals.",
              },
              {
                icon: "🌿",
                title: "Clean Air & Green Environment",
                body: "Dharwad's cool climate, lush Sahyadri landscape, and zero industrial pollution make it Karnataka's most liveable city.",
              },
            ].map((r, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-emerald-100">
                <div className="text-3xl">{r.icon}</div>
                <div>
                  <h3 className="font-black text-gray-900 text-lg mb-1">{r.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 text-center">
            Where Are The Plots Located in Dharwad?
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12">
            The Aurora Hills is strategically located at <strong>Sunset Viewpoint, Kelgeri, Dharwad</strong> — one of the most sought-after residential micro-markets in Hubli-Dharwad.
          </p>
          <div className="bg-emerald-900 text-white rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-emerald-300 mb-4">📍 Landmark Distances from The Aurora Hills</h3>
              {[
                ["Karnatak University, Dharwad", "5 min / 2 km"],
                ["Dharwad Railway Station", "10 min / 4 km"],
                ["Dharwad City Centre", "12 min / 5 km"],
                ["Hubli City (via NH-48)", "20 min / 18 km"],
                ["Hubli Airport", "25 min / 22 km"],
                ["IIT Dharwad Campus", "15 min / 8 km"],
                ["SDM Medical College", "8 min / 3 km"],
                ["NH-4 Highway", "3 min / 1 km"],
              ].map(([place, dist], i) => (
                <div key={i} className="flex justify-between items-center border-b border-emerald-700/50 pb-2">
                  <span className="text-emerald-100 text-sm font-medium">{place}</span>
                  <span className="text-emerald-300 text-sm font-black">{dist}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-black text-emerald-300 mb-4">🗺️ Popular Areas Nearby</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kelgeri", "Vidyagiri", "Sattur", "Rayapur", "Navanagar (Hubli)",
                  "Gokul Road (Hubli)", "Unkal (Hubli)", "Keshwapur (Hubli)", "IIIT Dharwad",
                  "NH-4 Highway", "Sunset Viewpoint", "SDM College Area",
                ].map((area, i) => (
                  <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-700/60 border border-emerald-600 text-emerald-200">
                    {area}
                  </span>
                ))}
              </div>
              <a
                href="https://maps.app.goo.gl/3EnF93gjmTueXy667"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm transition-all"
              >
                📍 Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Approvals */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
            100% Legally Approved Plots in Dharwad
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            The Aurora Hills is fully compliant with all Government of Karnataka regulations. Every plot has a clear, dispute-free title ready for registration.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { badge: "HDUDA Sanctioned", icon: "✅" },
              { badge: "NA-KJP Approved", icon: "✅" },
              { badge: "Clear Title Deeds", icon: "✅" },
              { badge: "SBI Pre-Approved", icon: "✅" },
              { badge: "HDFC Pre-Approved", icon: "✅" },
              { badge: "ICICI Pre-Approved", icon: "✅" },
              { badge: "No Litigation", icon: "✅" },
              { badge: "Encumbrance Free", icon: "✅" },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white rounded-2xl border border-emerald-200 shadow-sm text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-black text-gray-900">{item.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Hubli Residents CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Staying in Hubli? We'll Arrange Your Free Site Visit!
          </h2>
          <p className="text-emerald-200 text-lg mb-10 leading-relaxed">
            Every weekend we run free site visit pickups from Hubli (Navanagar, Gokul Road, Unkal, Keshwapur). The Aurora Hills is just 20 minutes from Hubli via NH-48. Come see the plots, roads, and amenities yourself — absolutely no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918970198701"
              className="px-8 py-4 rounded-full bg-emerald-400 hover:bg-emerald-300 text-emerald-900 font-black text-base uppercase tracking-wider transition-all shadow-xl"
            >
              📞 Call 89701 98701
            </a>
            <a
              href="https://wa.me/918970198701?text=Hi!%20I%20am%20interested%20in%20buying%20a%20plot%20in%20Dharwad.%20Please%20share%20details%20for%20The%20Aurora%20Hills."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/10 border border-white/30 hover:bg-white/20 text-white font-black text-base uppercase tracking-wider transition-all"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Internal Link Back */}
      <div className="text-center py-10">
        <Link href="/" className="text-emerald-700 font-bold hover:underline">
          ← Back to The Aurora Hills Main Website
        </Link>
      </div>
    </main>
  );
}

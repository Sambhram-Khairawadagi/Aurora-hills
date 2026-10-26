# GEMINI.md — Project Memory, Rules & Progress Register

## The Aurora Hills (ದಿ ಅರೋರಾ ಹಿಲ್ಸ್) — Luxury Villa Plots in Dharwad

* **Repository:** [Sambhram-Khairawadagi/Aurora-hills](https://github.com/Sambhram-Khairawadagi/Aurora-hills)
* **Main Branch:** `main`
* **Production URL:** [https://theaurorahills.com](https://theaurorahills.com)
* **Deployment Platform:** Vercel (Auto-deploys on every push to `origin/main`)
* **Core Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Prisma (SQLite), Nodemailer
* **Last Updated:** October 23, 2026

---

## 1. Project Overview & Commercial Identity

The Aurora Hills is an 18-acre luxury residential plotted community located adjacent to **Sunset Viewpoint, Kelgeri, Dharwad City, Karnataka** (Coordinates: `15.4589° N, 74.9902° E`).
* **Approvals:** 100% HDUDA (Hubli-Dharwad Urban Development Authority) & NA-KJP Sanctioned layout.
* **Plot Configurations & Starting Rates:**
  * **30 × 40 (1,200 sq.ft):** Starting from **₹42 Lakhs** (Festive Reward: **1 KG 925 Hallmarked Silver**)
  * **30 × 50 (1,500 sq.ft):** Starting from **₹52.5 Lakhs** (Festive Reward: **1.5 KG 925 Hallmarked Silver**)
  * **40 × 60 (2,400 sq.ft):** Starting from **₹84 Lakhs** (Festive Reward: **50 Grams 22K Hallmarked Gold**)
* **Banking Pre-Approvals:** State Bank of India (SBI), HDFC Bank, ICICI Bank, IDFC First Bank (up to 80% LTV).
* **Completed Infrastructure:** 40ft & 30ft asphalt blacktop avenues, interlocking concrete paver sidewalks, 1.5 Lakh Litre overhead water reservoir, underground electrical cabling with individual feeder pillars, landscaped medians with flowering marigolds, and 20+ lifestyle amenities.

---

## 2. Progress Log & Technical Architecture (October 23, 2026)

### A. Hero Text Legibility & Daylight Visual Contrast (`components/Hero.tsx`)
* **Problem Solved:** Marked left column area in `WhatsApp Image 2026-10-22 at 9.37.48 PM.jpeg` had low contrast against dark trees and grass in the daytime landscape background.
* **Implementation:**
  * Wrapped the supporting copy inside a dedicated frosted glass card:
    ```tsx
    bg-white/90 sm:bg-white/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-emerald-200/80 shadow-md
    ```
  * Added tailored light background wash (`from-[#F8FAF7]/95 via-[#F8FAF7]/85 to-transparent` with radial ellipse gradient) preserving the lush hills and roads on the right while giving 100% legibility to the left column text.

### B. Hubli–Dharwad Local SEO Dominance
* **Dedicated High-Ranking Page (`app/plots-in-dharwad/page.tsx`):**
  * Targets high-intent local queries: `"plots in dharwad"`, `"villa plots in dharwad"`, `"sites for sale in hubli-dharwad"`.
  * Features size comparisons, HDUDA approval badges, distance transit tables, Hubli pickup CTA, and rich OpenGraph/Twitter preview cards.
* **Internal Linking Strip (`app/page.tsx`):**
  * Added an anchor strip between `WhyAuroraHills` and `DirectAnswerHub` directing search engine crawlers and users to `/plots-in-dharwad`.
* **Complete 14-Question `FAQPage` JSON-LD Schema (`app/layout.tsx`):**
  * Synchronized all 14 questions and answers covering pricing, approvals, registration documents, capital appreciation, Hubli commute, and festive schemes.

### C. LLM SEO (Generative Engine Optimization / GEO)
* **Official `/llms.txt` Standard (`public/llms.txt`):**
  * Concise Markdown factsheet for AI search engines (ChatGPT Search, Perplexity AI, Claude, Google Gemini).
* **Deep Knowledge Base (`public/llms-full.txt`):**
  * Encyclopedic reference covering GPS coordinates, exact distances, legal status, infrastructure audit, and layout comparison.
* **AI Bot Directives (`app/robots.ts`):**
  * Explicitly whitelisted `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, and `Applebot-Extended`.
* **Semantic Knowledge Graph (`app/layout.tsx`):**
  * Added `knowsAbout`, `disambiguatingDescription`, and `hasOfferCatalog` with exact pricing and sizes in `schema.org/LocalBusiness`.

### D. Answer Engine Optimization (AEO) & Voice Search
* **Direct Knowledge Hub (`components/DirectAnswerHub.tsx`):**
  * Features 40–50 word "inverted pyramid" answer capsules optimized for Google Featured Snippets (Position 0).
* **`schema.org/HowTo` Structured Data:**
  * 5-step verified process: *"How to Buy and Register a Residential Plot in Dharwad"*.
* **`schema.org/SpeakableSpecification`:**
  * Configured voice readout targeting `#aeo-direct-answer` and `.aeo-answer-capsule` for Google Assistant and Siri.

### E. Crawler Auto-Ping Route (`app/api/ping/route.ts`)
* Built-in endpoint at `/api/ping` allowing instant notification to search engine crawlers with URL-encoded sitemap parameters.

### F. End-to-End Mobile & Tablet Responsive Optimization (Oct 23, 2026)
* **Next.js 14 Official `Viewport` Export (`app/layout.tsx`):** Added explicit `viewport` object (`width: "device-width", initialScale: 1, maximumScale: 5, themeColor: "#0A2E1D"`) preventing viewport miscalculations across mobile Safari, Android Chrome, and Samsung Internet.
* **Universal Reset & Touch Protection (`app/globals.css`):** Enforced `overflow-x: hidden; max-width: 100vw; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: transparent` across `html` and `body` to eliminate horizontal scroll rubber-banding.
* **Hero CTA Flex Wrapping (`components/Hero.tsx`):** Added `sm:flex-wrap` and tablet-optimized padding (`px-5 sm:px-6 lg:px-8`) preventing button overflow on 768px tablet portrait.
* **Instant Lead Card Optimization (`components/HeroLeadCard.tsx`):** Adjusted mobile padding to `p-4 sm:p-6`, tightened plot dimension selector grid (`gap-1 sm:gap-1.5`), and preserved touch targets (min 44px).
* **Floating Mobile Drawer Edge Spacing (`components/Navbar.tsx`):** Added `mx-3.5 sm:mx-auto` so the opened mobile menu card never abuts screen edges on narrow phones.
* **Festive Scheme Tablet Layout (`components/FestiveScheme.tsx`):** Refined card CTA font scaling (`md:text-[13px] lg:text-sm`) for 768px portrait, and added `max-h-[90vh] overflow-y-auto` to the festival poster lightbox modal.
* **Sidebar Layout Tablet Grid (`components/SanctionedLayout.tsx`):** Converted plot dimension details in the sidebar to `grid-cols-1 sm:grid-cols-3 lg:grid-cols-1`, so when the sidebar stacks beneath the layout viewer on tablets, cards sit side-by-side gracefully.
* **Map Badge Contained (`components/LocationConnectivity.tsx`):** Changed floating GPS badge from fixed offset to `top-3 left-3 right-3 sm:right-auto sm:top-6 sm:left-6 sm:max-w-xs`, eliminating overflow on 360px devices.
* **Direct Knowledge Hub & FAQ Sizing (`components/DirectAnswerHub.tsx` & `components/LocalSeoFaq.tsx`):** Added `sm:flex-wrap` and `sm:flex-1` ensuring action buttons split width equally on tablets.
* **iOS Safari Auto-Zoom Fixes (`components/SiteVisitModal.tsx` & `components/BrochureModal.tsx`):** Eliminated `sm:text-xs` (<16px) inputs in favor of `text-base sm:text-sm`, and added `max-h-[90vh] overflow-y-auto` so modal dialogs are scrollable on all screen heights.
* **iOS Home Indicator Inset (`components/FloatingActions.tsx`):** Added `pb-[max(0.5rem,env(safe-area-inset-bottom))]` ensuring sticky bottom action buttons are never covered by the iPhone gesture bar.
* **Plots Landing Page Polish (`app/plots-in-dharwad/page.tsx`):** Full-width mobile CTA buttons (`w-full sm:w-auto text-center`) and balanced tablet card gap/scaling (`lg:scale-105 md:scale-100`).

### G. Conversion Rate Optimization (CRO) & Hubli Buyer Conquesting (Oct 26, 2026)
* **Zero-Friction Modals (Name Made Optional):**
  * Updated [components/EnquiryModal.tsx](file:///e:/websites/aurora%20hills/components/EnquiryModal.tsx), [components/SiteVisitModal.tsx](file:///e:/websites/aurora%20hills/components/SiteVisitModal.tsx), and [components/BrochureModal.tsx](file:///e:/websites/aurora%20hills/components/BrochureModal.tsx).
  * Removed `required` constraint from Name field (`Full Name (Optional)`), defaulting to `"Interested Buyer"` (matches behavior that converted Lead #16). Added strict 10-digit mobile number cleaning and validation.
* **Hubli Proximity & Free Cab Pickup Trust Strip (`components/Hero.tsx`):**
  * Added high-contrast trust pill beneath hero CTA row: *"📍 20 Mins from Hubli (via Toll/NH-4 Bypass) • 🚗 Free Site Visit Cab Pickup & Drop across Hubli & Dharwad"*.
  * Directly eliminates distance hesitation for Hubli buyers (our #1 converting audience @ 50% CVR).
* **Urgency & Scarcity Micro-Banners (`components/HeroLeadCard.tsx` & `components/FestiveScheme.tsx`):**
  * Added `"⚡ Only 7 Plots in Phase 1"` live inventory pill and Hubli family cab pickup note inside the instant lead form.
  * Added Deepawali Phase 1 limited release banner above festive pricing cards.
* **In-Browser Autonomous Verification:**
  * Verified live on local dev server (`http://localhost:3000`) via browser subagent with recorded video artifact `verify_cro_updates`.

---

## 3. Google Ads Campaign & Costing Audit

* **Google Ads Account ID:** `830-030-4291`
* **Campaign Name:** `Search - The Aurora Hills - Hubli Dharwad Plots`
* **Ad Group:** `Aurora ad group`
* **Daily Budget:** ₹1,200/day
* **Bidding Strategy:** Maximize Clicks with **₹52.00 Max CPC limit** *(Raised from ₹48.00 on Oct 24, 2026 to resolve `Limited by bid strategy`)*
* **Geotargeting:** Exclusively `Dharwad, Karnataka` and `Hubballi, Karnataka` (Presence only)
* **Conversion Tracking:** `AW-16689411973/I9fRCMn3upwdEIXvkJY-` (Lead forms, phone clicks, and WhatsApp clicks)

### A. Weekly Performance Metrics (Oct 18 – 23, 2026)
* **Total Spend:** ₹5,258.87
* **Clicks:** 132 | **Impressions:** 828 | **CTR:** 15.94% | **Avg CPC:** ₹39.84
* **Conversions:** **7.00 Leads** | **Cost / conv. (CPL):** **₹751.27**
* **MVP Keywords:**
  * `"sites for sale in hubli"`: 8 clicks → **4 conversions** (50.0% conversion rate) at **₹81.82 per lead**!
  * `"plots in dharwad"`: 8 clicks → **2 conversions** (25.0% conversion rate) at **₹165.91 per lead**!
* **High-Converting Search Terms:**
  * `nexus properties hubballi` (2 clicks → 2 leads at ₹40.90 CPA)
  * `koravi developers hubli` (3 clicks → 2 leads at ₹61.41 CPA)
  * `khb plots for sale in dharwad` (2 clicks → 1 lead at ₹82.84 CPA)

### B. Daily Midday & Full Audits
* **Oct 25, 2026 (Full Day Sunday Audit):**
  * **Spend:** ₹1,728.10 (Weekend budget pacing)
  * **Clicks:** 34 | **Impressions:** 143 | **CTR:** 23.78% | **Avg CPC:** ₹50.83 (100% contained under ₹52.00 limit)
  * **Device Breakdown:** Mobile 97.1% clicks, 100% conversions | Desktop 2.9% clicks
  * **Conversions Verified:** **1 Lead (Interested Buyer - 9611595938)** via keyword `"sites in hubli"` (3 clicks, 1 lead @ ₹151.86 CPA, 33.33% CVR)!
  * **Search Term Conquesting:** Active clicks from `kittur developers hubli` (competitor), `khb site for sale in navanagar hubli` (govt layout), `farm house near hubli dharwad`.
* **Oct 24, 2026 (Full Day):**
  * **Spend:** ~₹500+ | **Clicks:** 10+
  * **Conversions Verified:** **2 High-Intent Paid Leads**:
    * **Vasu C Bangera** (`9545951676`) at 11:30 AM via `"plots in hubli"` (30×40 Investment)
    * **Madhav Gopal Nayak** (`7676757477`) at 7:48 PM via `"sites in hubli for sale"` (40×60 Plot - 50g Gold Offer - Build a Home)
  * **Key Optimization Actions (Executed Live):**
    * Paused positive keyword `"land price in hubli"` (preventing 40% daily budget leakage).
    * Rejected Google suggestion to remove negative keywords `price` / `"land price"`.
    * Added negative keywords: `"low budget"`, `"low budget plots"`, `"under 10 lakhs"`.
    * Raised Max CPC limit from **₹48.00 to ₹52.00** to eliminate `Limited by bid strategy`.
* **Oct 23, 2026 (as of 1:36 PM):**
  * **Spend:** ₹370.35 (30.9% utilized, leaving ₹829.65 for evening peak)
  * **Clicks:** 9 | **Impressions:** 39 | **CTR:** 23.08% | **Avg CPC:** ₹41.15
  * **100% Competitor/Locality Conquesting Searches Today:** `koravi developers hubli` (2 clicks), `koravi developers dharwad` (1 click), `rajeshwari properties hubli` (1 click), `khb sattur 2nd phase dharwad` (1 click).

### C. Campaign-Level Negative Keywords Master List
```text
"land price"
"plot price"
"site price"
"sq ft rate"
"square feet rate"
"guidance value"
"market value"
"government rate"
"valuation"
"cost calculator"
"price list"
"acre"
"acres"
"guntas"
"agricultural land"
"agriculture land"
"farm land"
"farmland"
"krishi bhoomi"
"industrial land"
"commercial land"
"warehouse land"
"factory"
"godown"
"cheap plots"
"low budget"
"low budget plots"
"under 5 lakhs"
"under 10 lakhs"
"under 15 lakhs"
"under 20 lakhs"
"government scheme"
"ashraya scheme"
"pmay"
"lease"
"for rent"
"rental"
"tenant"
"pg"
"hostel"
"jobs"
"vacancy"
"salary"
"broker list"
"agents directory"
"without broker"
"brokerage"
"farm house"
"farmland"
"resort"
"flat"
"flats"
"apartment"
"apartments"
"2bhk"
"3bhk"
"house for sale"
"independent house"
"house for rent"
```

---

## 4. Master Inbound Leads Register (Total: 16 Verified Leads)

Synchronized with sales notification emails (`social.propertybasket@gmail.com`) and Google Ads GCLID tracking:

| # | Date & Time | Prospect Name | Phone Number | Requirement | Channel / Source | Status / Outcome |
| :-: | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | 16/10/2026, 8:21 PM | **Ganesh** | `9019712279` | 40×60 Plot (50g Gold) | Google Ads (`site for sale in dharwad`) | In Follow-up |
| **2** | 17/10/2026, 10:22 AM | **Arpita .S.** | `9036071555` | Digital Brochure | Organic SEO (Google Organic #2) | Layout Shared |
| **3** | 17/10/2026, 2:45 PM | **Sagar Alagundagi** | `8050760688` | 40×60 Plot (50g Gold) | Organic SEO (Navbar CTA) | High-Intent Buyer |
| **4** | 18/10/2026, 7:28 PM | **Kiran** | `8310719879` | 30×40 Plot Enquiry | Google Ads (`sites in dharwad for sale`) | WhatsApp Follow-up |
| **5** | 19/10/2026, 8:27 AM | **Sunil Sappandi** | `9902395967` | Build a Home | Organic SEO (Hero Price Card) | Scheduled Callback |
| **6** | 19/10/2026, 8:45 AM | **Chandra Shekar b k** | `9741113435` | 40×60 Plot Enquiry | Organic SEO (Hero Instant Card) | 🎯 **CONFIRMED SITE VISIT** |
| **7** | 19/10/2026, 4:39 PM | **Ishwar Patil** | `8088817712` | 30×40 Plot Enquiry | Google Ads (`plots in dharwad`) | Fresh Lead / WhatsApp |
| **8** | 19/10/2026, 7:21 PM | **Sampath** | `9886568800` | 40×60 Plot Enquiry | Hero Instant Card (Direct/Organic) | In Follow-up |
| **9** | 21/10/2026, 8:18 AM | **Sunil Sappandi** | `9902395967` | 30×40 Plot Enquiry | Hero Instant Card (Repeat Inquiry) | Re-engaged |
| **10** | 21/10/2026, 8:56 AM | **Mayur** | `6360639230` | 30×40 Plot Enquiry | Hero Instant Card (Direct/Organic) | Dispatched to WhatsApp |
| **11** | 21/10/2026, 1:58 PM | **Anita Bagoji** | `8970926999` | 30×50 Plot Enquiry | Google Ads (`plots in dharwad`) | Fresh Paid Lead |
| **12** | 23/10/2026, 7:27 AM | **Hemanth Kulkarni** | `9449370863` | Build a Home | Hero Price Card (Direct/Organic) | Morning Lead |
| **13** | 23/10/2026, 10:38 AM | **Muttu patil** | `9900518142` | 30×40 Plot Enquiry | Hero Instant Card (Direct/Organic) | Follow-up Dispatched |
| **14** | 24/10/2026, 11:30 AM | **Vasu C Bangera** | `9545951676` | 30×40 Plot Enquiry (Investment) | Google Ads (`plots in hubli`) | Paid Lead (WhatsApp) |
| **15** | 24/10/2026, 7:48 PM | **Madhav Gopal Nayak** | `7676757477` | 40×60 Plot (50g Gold Offer) | Google Ads (`sites in hubli for sale`) | 🎯 **High-Intent (Build a Home)** |
| **16** | 25/10/2026, 4:53 PM | 🌟 **Interested Buyer** | **`9611595938`** | **30×40 Plot Enquiry** | **Google Ads (`sites in hubli`)** | 🎯 **LATEST VERIFIED PAID LEAD** |

---

## 5. Development Guidelines & Operational Rules

1. **PowerShell Syntax on Windows:**
   - Always run commands with `;` statement separators (e.g. `npm run dev; git status`). Never use `&&` in older PowerShell.
   - Run `npm.cmd` when necessary to avoid script execution policy restrictions.
2. **Pre-Commit Verification:**
   - Before pushing commits, always run `npx tsc --noEmit` to ensure zero type errors.
3. **Deployment Safety:**
   - Any commit pushed to `origin/main` automatically initiates a Vercel production build.
   - Serverless SQLite in `lib/db.ts` dynamically handles read-only filesystems by migrating SQLite to `/tmp/dev.db`.
4. **Primary Sales Contact Lines:**
   - Primary WhatsApp & Sales Line: `+91 89701 98701`
   - Secondary Support Lines: `+91 73533 11107`, `+91 98801 66275`, `+91 92425 08288`

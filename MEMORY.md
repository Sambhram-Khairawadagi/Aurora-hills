# Project Memory & Development History — The Aurora Hills

**Repository**: [Sambhram-Khairawadagi/Aurora-hills](https://github.com/Sambhram-Khairawadagi/Aurora-hills)  
**Main Branch**: `main`  
**Hosting & Deployment**: Vercel (Auto-deploys on push to `origin/main`)  
**Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Prisma (SQLite), Nodemailer  
**Last Updated**: October 22, 2026

---

## Latest Update: October 22, 2026 — On-Ground Progress Photo Gallery & Section Repositioning
- **Source Media**: Curated from `OCT-2026-PICS-20261022T083823Z-1-001/OCT-2026-PICS` containing 23 authentic on-ground development progress photos.
- **Curated Selection & WebP Optimization**:
  - Selected the 12 highest-impact photos showcasing:
    - 40ft finished asphalt boulevard with flowering central median & streetlights (`oct-avenue-flowering-median.webp`)
    - Terraced hillside villa plots with panoramic green hill contours (`oct-panoramic-hillside-plots.webp`)
    - Landscaped hillside staircase with bougainvillea leading to water reservoir (`oct-hilltop-staircase-reservoir.webp`)
    - Central avenue climbing toward hilltop reservoir (`oct-main-boulevard-water-tank.webp`)
    - Individual villa plot demarcation with survey stone marker #184 & storm drains (`oct-demarcated-plot-marker-184.webp`)
    - Marigold flowerbed landscaping along paved roadway kerb (`oct-landscaped-kerbs-flowerbeds.webp`)
    - Interlocking concrete paver pedestrian sidewalks & crossroads (`oct-paver-walkways-crossroads.webp`)
    - Underground electrical feeder pillars & street lighting (`oct-underground-power-feeder.webp`)
    - Official on-site HDUDA and NA-KJP approval billboard (`oct-hduda-approved-billboard.webp`)
    - Central median rose garden & ornamental palms (`oct-central-median-rose-garden.webp`)
    - Dual paver walkways, tree plantations, and transformer substations (`oct-avenue-plantations-utilities.webp`)
    - Ascending hilltop avenue connecting prime ridge plots (`oct-hilltop-approach-boulevard.webp`)
    - Sanctioned HDUDA Layout Masterplan (`sanctioned-layout-map.png`)
  - All images resized to max 1920px, subtly enhanced (contrast, vibrance, sharpness), and saved in both `.webp` and `.jpg` in `public/images/gallery/` (compact 350KB-700KB sizes).
- **Clean Photo Aesthetic**:
  - Removed all text overlays, badges, dark gradient masks, and card footers directly over the images to keep pure, pristine, edge-to-edge photography.
  - Interactive Lightbox with keyboard support (ESC, Left/Right arrows), Next/Prev navigation, image counter, and booking CTA.
- **Section Re-Ordering**:
  - Moved `<Gallery />` high up on the homepage in `app/page.tsx` — placed directly after `<ProjectIntro />` (above videos and amenities) so visitors immediately see real on-ground execution.
  - Updated `components/Navbar.tsx` navLinks to display `Site Photos` in natural top-down browsing sequence.

## 1. Project Overview
The Aurora Hills is a premium real estate landing page and management portal for luxury residential villa plots located near NH-4 Highway, Kelgerri, Dharwad, Karnataka. The layout is HDUDA and NA-KJP approved with 20+ world-class amenities.

---

## 2. Key Modules & Architecture

### A. Festive Campaign Module (`components/FestiveScheme.tsx` & `lib/projectData.ts`)
- **Theme**: "Dasara & Deepawali Festive Special" auspicious booking rewards.
- **Plot & Scheme Tiers**:
  1. **40 × 60 Plot (2,400 sq.ft)**:
     - **Reward**: **50 Grams GOLD**
     - **Graphic**: Photorealistic 3D rendered gold bars & coin asset (`/images/festive/festive-50g-gold.webp`).
     - **Specifications**: 40ft × 60ft dimension, 2,400 sq.ft total area, HDUDA & NA-KJP approved.
  2. **30 × 50 Plot (1,500 sq.ft)**:
     - **Reward**: **1.5 KG SILVER**
     - **Graphic**: Photorealistic 3D dual traditional ornate silver Kalash asset (`/images/festive/festive-1-5kg-silver.webp`).
     - **Specifications**: 30ft × 50ft dimension, 1,500 sq.ft total area, HDUDA & NA-KJP approved.
  3. **30 × 40 Plot (1,200 sq.ft)**:
     - **Reward**: **1 KG SILVER**
     - **Graphic**: Photorealistic 3D single ornate traditional silver Kalash asset (`/images/festive/festive-1kg-silver.webp`).
     - **Specifications**: 30ft × 40ft dimension, 1,200 sq.ft total area, HDUDA & NA-KJP approved.
- **Card Design Directives**:
  - Pricing has been removed from all 3 festive cards to focus customer attention on dimensions, areas, government approvals, and claiming festival gifts.
  - CTAs open `EnquiryModal` with pre-filled scheme metadata (`Festive Offer 40x60`, `Festive Offer 30x50`, `Festive Offer 30x40`).
  - Cards upgraded with high-resolution responsive WebP visuals, ambient glow backdrops, and subtle hover zoom transitions.

### B. Sanctioned Layout & Inventory (`components/SanctionedLayout.tsx`)
- High-resolution SVG / Interactive plot plan with pan, zoom, and fullscreen capabilities.
- Sidebar highlights key plot configurations (1,200 sq.ft, 1,500 sq.ft, and 2,400 sq.ft) with festive gift tags.
- Direct download and site-visit booking integration.

### C. Lead Capture & Enquiries (`components/EnquiryModal.tsx`, `components/LeadGate.tsx`, `lib/utm.ts`)
- Automated UTM tracking (`utm_source`, `utm_medium`, `utm_campaign`, etc.) stored in localStorage via `lib/utm.ts`.
- Lead gating on brochure downloads and floor plan inspections.
- Highlight banner in `EnquiryModal` reminding prospects of active 50g Gold and up to 1.5kg Silver festive offers.

### D. Serverless SQLite & Vercel Resilience (`lib/db.ts`, `.agents/rules/serverless-deployment.md`)
- **Vercel / AWS Lambda environment**: Root filesystem is read-only (`/var/task`).
- `lib/db.ts` dynamically detects serverless execution and copies `prisma/dev.db` to `/tmp/dev.db` before connecting.
- Form endpoints (`/api/leads`, `/api/site-visits`) use isolated try-catch blocks and strictly awaited SMTP email dispatch to `social.propertybasket@gmail.com` to guarantee 0% lead loss.

### E. Karnataka Local SEO Dominance Architecture (October 5, 2026)
- **Live Search Status Discovery**:
  - The Aurora Hills reached **Organic #2 on Google** for query `dharwad plots` (ranking immediately beneath Housing.com and outranking 99acres and MagicBricks).
  - Overall search presence showed the site at position 7 when including Google Maps 3-pack and People Also Ask (PAA) units.
- **Exact-Match On-Page Targeting**:
  - Main `<h1>` in `components/Hero.tsx` upgraded to feature `THE AURORA HILLS` with subtitle `Plots in Dharwad & Hubli` to provide maximum topical relevance.
  - Canonical Title in `app/layout.tsx`: `Plots in Dharwad & Hubli | HDUDA Approved Residential Plots for Sale | The Aurora Hills`.
  - Meta description front-loaded with plot dimensions (30x40, 30x50, 40x60), HDUDA approval, and ₹42L starting price.
- **People Also Ask (PAA) Schema & Content Interlocking**:
  - `components/LocalSeoFaq.tsx` and `app/layout.tsx` FAQPage JSON-LD synchronized to directly answer the 4 exact PAA questions shown by Google:
    1. Average land/plot prices in Dharwad (₹2,000–₹4,000/sq.ft vs. ₹42L starting at Aurora Hills).
    2. 30x40 and 30x50 site prices in Hubballi-Dharwad.
    3. Best areas to live in Dharwad (Kelgeri / Sunset Viewpoint, Vidyagiri, Sattur).
    4. HDUDA and NA-KJP legal approvals.
- **On-Page Content Hub Mounts (`app/page.tsx`)**:
  - Mounted previously unrendered `components/LocationConnectivity.tsx` (`#location`) with landmark transit times (Karnatak University, IIT Dharwad, SDM College, NH-48).
  - Mounted `components/WhyAuroraHills.tsx`.
  - Mounted `components/LocalSeoFaq.tsx` (`#faq`) for complete Server-Side Rendered (SSR) indexation.
- **Technical Sitemap Fix (`app/sitemap.ts`)**:
  - Cleaned `app/sitemap.ts` by removing invalid URL hash fragments (`#location`, `#faq`) to strictly comply with Google Search Console sitemap standards.
- **Lead Pipeline & Database Safeguard**:
  - Verified incoming production leads arriving via SMTP to `social.propertybasket@gmail.com`.
  - Restored `lib/db.ts` to ensure clean local and remote builds.

### F. Google Ads & Conversion Engine Architecture (October 14, 2026)
- **Search Campaign Details**:
  - **Campaign Name**: `Search - The Aurora Hills - Hubli Dharwad Plots`
  - **Target Geographies**: Strictly `Dharwad, Karnataka`, `Hubballi, Karnataka`, and `Hubli-Dharwad` (`Presence only`).
  - **Budget & Bidding Calibration**:
    - Daily Budget: ₹1,200/day (~₹36,000/month).
    - Bidding Strategy: **Maximize Clicks** with **₹48.00 Max CPC bid limit** (upgraded from ₹32 on Oct 15 — previous cap was causing "Limited by bid strategy" warning, restricting impressions to only 34/day).
    - Resolved Google default conflict where automated Target CPA had defaulted to ₹2,866.25 against the ₹1,200 budget.
  - **Campaign-Specific Conversion Goals Bound**:
    - Unbound irrelevant default `Leads from messages (Google hosted)`.
    - Explicitly linked **`Submit lead forms`** -> `Aurora Hills - Website Lead` (Tag: `AW-16689411973/I9fRCMn3upwdEIXvkJY-`) as primary conversion.
    - Linked **`Contacts (Website)`** as secondary conversion for direct WhatsApp and Call Desk clicks.
  - **Ad Strength**: **EXCELLENT** with 15 headlines, 4 keyword-rich descriptions, and 6 sitelinks.
  - **Extensions**: Call Asset (`+91 8970198701`), Native In-Ad Lead Form ("More qualified"), 6 sitelinks.
  - **Negative Keywords**: Blocked non-buyers (rentals, jobs, agricultural land, cheap 5 lakh plots, Bangalore/Mysore plots) + additional 14 informational negatives added Oct 15 (estate layout, layout meaning, dharwad map, plot images, plot photos, plot size meaning, site measurement, layout pdf, dharwad layout download, approved layout pdf, layout plan meaning, plot area calculator, gram panchayat layout, site plan drawing).
  - **Keyword Match Types**: All 47 keywords converted from Broad Match → **Phrase Match** on Oct 15 to eliminate irrelevant traffic (was triggering on "estate layout meaning", "dharwad map photos", etc.).
  - **Paused Keywords**: `na plots in hubli dharwad` paused (Not Eligible — Low search volume).
- **Google Tag & Conversion Setup (`app/layout.tsx`, `lib/gtag.ts`, `components/GoogleTag.tsx`)**:
  - Injected Google Tag `AW-16689411973` directly inside `<head>` in `app/layout.tsx` for instant crawler and Tag Assistant detection.
  - **Primary Conversion**: `Aurora Hills - Website Lead` with label `AW-16689411973/I9fRCMn3upwdEIXvkJY-` (Verified and tested live in Tag Assistant).
  - **Secondary Conversion**: `Contact` conversion event automatically fired on WhatsApp pill and Call Desk clicks ([components/FloatingActions.tsx](file:///d:/Sambhram/aurora%20hills/components/FloatingActions.tsx)).
  - **Lead Attribution**: [components/EnquiryModal.tsx](file:///d:/Sambhram/aurora%20hills/components/EnquiryModal.tsx), [components/LeadGate.tsx](file:///d:/Sambhram/aurora%20hills/components/LeadGate.tsx), and [components/SiteVisitModal.tsx](file:///d:/Sambhram/aurora%20hills/components/SiteVisitModal.tsx) now pass dynamic UTM parameters and fire `trackLeadSubmit`.
- **Project Isolation**:
  - Fully segregated from other live projects (`Suraksha Sunrise Park - Sarjapur`). Zero cross-contamination in tags, budgets, or conversion tracking.

### G. Conversion Rate Optimisation & Zero-Lead Diagnostic Fix (October 15, 2026)
- **Root Cause Diagnostic**: On Oct 15, 2026 the campaign recorded 34 impressions, 5 clicks, ₹158.51 spend, and **0 leads**. 5 root causes identified and fixed end-to-end.
- **Google Ads Fixes Applied**:
  1. **Bid Cap Raised**: ₹32 → **₹48** — removed "Limited by bid strategy" constraint. Expected to increase daily impressions from 34 → 150–300.
  2. **Not Eligible Keyword Paused**: `na plots in hubli dharwad` paused (Low search volume — was blocking a keyword slot).
  3. **47 Keywords converted Broad Match → Phrase Match**: Eliminates irrelevant traffic from informational searches; ensures only genuine plot-buyer searches trigger ads.
  4. **14 New Negative Keywords Added at Campaign Level**: Blocks informational, non-buyer searches (estate layout, layout meaning, dharwad map, plot images, etc.).
- **Website Code Fixes Deployed (commit `92b1ee1`)**:
  1. **`components/AdsTopBar.tsx`** (NEW): A fixed urgency strip shown **only to Google Ads visitors** (detected via `utm_source=google`, `utm_medium=cpc`, or `gclid` in URL/sessionStorage). Contains:
     - Direct **Click-to-Call** button: `+91 8970198701`
     - **Enquire Now** CTA button (opens EnquiryModal pre-tagged as "Ads Top Bar" source)
     - Festive offer reminder strip
     - Dismissible with X button
  2. **`components/EnquiryModal.tsx`** — Reduced from 6 fields → **3 fields** (Name, Phone, Plot size) to cut form friction on mobile:
     - Removed: Email, Purchase Purpose, Preferred Contact, Message fields
     - Added: Icon-prefixed inputs (User icon, Phone icon) for cleaner UX
     - Added: **WhatsApp alternative CTA** (`wa.me/918970198701`) below the submit button
     - Changed submit label: "Send Request" → **"Get Pricing & Layout Plan"**
     - Added: Trust line — "🔒 Your number is safe. Our consultant calls within 15 minutes."
  3. **`components/Hero.tsx`** — Added **Click-to-Call button** (`+91 89701 98701`) in the Hero CTA row between "Enquire for Booking" and "Festive Scheme Offer" buttons.
  4. **`app/page.tsx`** — Mounted `<AdsTopBar>` as the first element above `<Navbar>` so it renders above all other fixed elements (z-index: 60).

### H. Conversion Acceleration & Zero-Leakage Funnel Overhaul (October 16, 2026)
- **Forensic Diagnostic**: Over Oct 15 & 16, campaign generated 26 total clicks (12 yesterday + 14 today by 3:15 PM), a phenomenal CTR of 29.17%, but **0 recorded conversions**.
- **Root Causes Fixed**:
  1. **Invisible Form Removed**: Replaced modal-only lead capture with **`components/HeroLeadCard.tsx`** embedded directly in the Hero viewport (7:5 desktop split, full width on mobile). Visitors can enter Name + 10-digit WhatsApp number to instantly receive the HDUDA layout map PDF and pre-filled WhatsApp conversation with sales desk.
  2. **Call & WhatsApp Conversion Blind Spot Fixed**: Updated `lib/gtag.ts` so `trackPhoneClick` and `trackWhatsAppClick` fire Google Ads conversion `AW-16689411973/I9fRCMn3upwdEIXvkJY-`, ensuring high-intent callers and WhatsApp chats are counted as conversions in the Google Ads algorithm.
  3. **Double Mobile Header Overlap Resolved**: Connected `AdsTopBar` and `Navbar` via `hasAdsTopBar` state. Suppressed duplicate `FestiveTicker` and docked `Navbar` neatly at `top-[38px]` when ads top bar is active.
  4. **Bottom Contact Form Revamped**: Updated `components/EnquirySection.tsx` from 6 fields down to 3 fields with full UTM tracking, `trackLeadSubmit` conversion firing, and WhatsApp alternative CTA.
  5. **Floating Action Pill Collision Fixed**: Raised mobile WhatsApp floating button to `bottom-20` in `components/FloatingActions.tsx` to prevent overlapping the mobile bottom call/visit bar.
  6. **Aggregator Negative Keyword Gap Identified**: Identified ₹83.14 wasted today on `99acres dharwad`; documented negative keyword list to block aggregators (`99 acres`, `magicbricks`, `housing.com`, etc.).

### I. End-to-End Live Verification, Multi-Project Isolation & Keyword Calibration (October 16, 2026)
- **Live Production Bundle & HTML Verification**:
  - Live deployment verified on `https://www.theaurorahills.com/` (Commit `4a17b8d` / `622d981`).
  - Google Tag `AW-16689411973` confirmed active in `<head>` and client runtime.
  - Conversion snippet `AW-16689411973/I9fRCMn3upwdEIXvkJY-` confirmed present inside live chunk `/_next/static/chunks/app/layout-b27086002c3d219f.js`.
  - In-page `HeroLeadCard` confirmed rendering live with 10-digit WhatsApp input and festive badge.
- **Conversion Trigger Verification Across All Actions**:
  - **Web Forms** (`HeroLeadCard`, `EnquiryModal`, `EnquirySection`, `SiteVisitModal`, `LeadGate`): Trigger `trackLeadSubmit` -> `AW-16689411973/I9fRCMn3upwdEIXvkJY-` (₹1000 value).
  - **Phone Calls** (`AdsTopBar`, `Hero`, `FloatingActions`, `EnquirySection`): Trigger `trackPhoneClick` -> `AW-16689411973/I9fRCMn3upwdEIXvkJY-` (₹500 value).
  - **WhatsApp Clicks** (`FloatingActions`, `HeroLeadCard`, `EnquirySection`): Trigger `trackWhatsAppClick` -> `AW-16689411973/I9fRCMn3upwdEIXvkJY-` (₹500 value).
  - **Live Lead Dispatch Verified**: Production test lead `cmvatfxey00007533iy824qqn` successfully submitted and delivered to `social.propertybasket@gmail.com`.
- **Multi-Project Isolation Safeguards Verified**:
  - Fully segregated from `Suraksha Sunrise Park - Sarjapur` in Google Ads Account `830-030-4291`.
  - Zero tag overlap: `AW-16689411973/I9fRCMn3upwdEIXvkJY-` is hard-coded strictly on `theaurorahills.com`.
  - Campaign goal isolation: `Search - The Aurora Hills - Hubli Dharwad Plots` conversion goal bound exclusively to `Aurora Hills - Website Lead`.
  - Budget & Geo isolation: Aurora Hills operates on its own ₹1,200/day budget, geo-targeted exclusively to Hubballi-Dharwad presence.
- **Google Ads Keyword Strategy Calibration**:
  - **4 Top Performers** carrying 100% of traffic: `"residential plots in dharwad"`, `"plots in hubli"`, `"site for sale in dharwad"`, `"hubli land for sale"`.
  - **8 New Non-Repetitive Keywords Added**: `"hduda plots"`, `"hduda approved plots"`, `"hduda plots in hubli"`, `"sites in hubli"`, `"sites for sale in hubli"`, `"residential sites in dharwad"`, `"the aurora hills"`, `"aurora hills dharwad"`.
  - **1 Budget-Drain Keyword Deleted**: `"na plots for 3 lakhs in dharwad"`.
  - **Comprehensive Negative Keywords List Deployed**: Blocks aggregators (`99acres`, `magicbricks`), ready-built houses/2BHKs, and farmland.

### J. Conversion Breakthrough & Budget Guardrail Activation (October 16–17, 2026)
- **October 16 Full-Day Milestone**:
  - **First Official Google Ads Conversion Recorded**: 1.00 conversion at ₹788.87 overall cost per conversion.
  - **Star Keyword**: `"sites for sale in dharwad"` generated 6 impressions, 3 clicks (50.0% CTR), and the 1.00 conversion at an astounding **₹124.93 CPA**.
  - **Traffic Surge**: 88 impressions, 20 clicks, **22.73% overall CTR**, ₹788.87 spend (well within ₹1,200 daily budget).
  - **Device Split**: Mobile drove **85.0% of clicks and 100.0% of conversions**, validating mobile CRO overhaul.
- **October 17 Audit & Negative Keyword Guardrail Deployment**:
  - **Purity Check**: Midday audit (12:26 PM) showed 9 clicks, 25 impressions, 36.00% CTR, and 100% genuine plot buyer searches.
  - **Brand Recall**: Direct search query `"the aurora hills"` recorded 2 clicks with 100% CTR.
  - **Campaign-Level Negative Keywords Deployed Live**:
    - Aggregator portals blocked: `"99acres"`, `"99 acres"`, `"magicbricks"`, `"housing.com"`, `"nobroker"`, `"olx"`, `"quikr"`.
    - Built houses & apartments blocked: `"house for sale"`, `"houses for sale"`, `"2 bhk"`, `"2bhk"`, `"3 bhk"`, `"3bhk"`, `"1 bhk"`, `"flat"`, `"flats"`, `"apartment"`, `"apartments"`, `"duplex house"`, `"independent house"`.
    - Farmland & agriculture blocked: `"farm land"`, `"farmland"`, `"agricultural land"`, `"agriculture"`, `"krishi bhoomi"`.
    - Airport flight/airline transit blocked: `"flight"`, `"flights"`, `"airport timings"`, `"flight schedule"`, `"flight status"`, `"airline"`, `"indigo"`, `"star air"`.
    - Generic non-real estate blocked: `"twin city"`, `"twin cities"`.
  - Zero syntax/policy errors encountered; all 34 negative keywords active at campaign level.

### K. Midday Milestone, Confirmed Site Visit & Dimension Scaling (October 19, 2026)
- **Midday Audit Metrics (2:30 PM)**:
  - Spend: ₹496.12 (41.3% budget utilization with ₹704 reserve for evening peak).
  - Clicks: 12 | Impressions: 74 | CTR: **16.22%** | Avg CPC: ₹41.34.
  - Device Share: **Mobile accounts for 91.7% of all traffic and spend**.
- **Real-World Business Results**:
  - **2 Leads Generated**: 1 Confirmed Site Visit + 1 RNR (Ringing No Response).
  - Real Cost Per Lead (CPL): **₹248.06 per lead**.
  - Cost Per Confirmed Site Visit: **₹496.12**.
- **High-Intent Search Query Discovery**:
  - `30 by 40 sites for sale in dharwad` (1 click, 50% CTR, ₹41.01 CPC) directly correlated to high commercial intent.
  - Added 6 phrase match dimension keywords: `"30x40 sites in dharwad"`, `"30x50 sites in dharwad"`, `"40x60 sites in dharwad"`, `"30x40 plots in dharwad"`, `"30x50 plots in dharwad"`, `"40x60 plots in dharwad"`.
- **Negative Keyword Expansion**:
  - Blocked price curiosity: `price`, `"land price"`.
  - Blocked competitor/distant locality: `"mann properties"`, `"gokul road"`, `"priyadarshini colony"`.
- **Ad Creative Alignment**:
  - Updated RSA headlines to prioritize "Sites" over "Plots" (`HDUDA Approved Sites in Dharwad`, `30x40 & 30x50 Sites For Sale`, `Sites Near Sunset Viewpoint`) to maximize local relevance and reduce CPC.

---

## 3. Important Development Guidelines & Gotchas

1. **Windows PowerShell Execution**:
   - Always run `npm.cmd` instead of `npm` to bypass PowerShell script execution policy errors.
   - Command chaining in PowerShell must use `;` instead of `&&`.
2. **TypeScript & Next.js Build**:
   - Excluded directories in `tsconfig.json`: `node_modules_corrupt` and `.next_corrupt`.
   - Before pushing to GitHub, always test with:
     ```powershell
     npm.cmd run build
     ```
   - Ensure 0 build errors across all static/dynamic routes.
3. **Deployment Workflow**:
   - Pushes to `origin main` automatically trigger Vercel deployment.
   - Any modifications to copy, scheme badges, or layout assets must be committed and pushed to `main`.
4. **Google Business Profile (GBP) 3-Pack Optimization**:
   - Target name: *The Aurora Hills - Plots in Dharwad & Hubli*.
   - Categories: Primary: *Real Estate Developer*, Secondary: *Real Estate Agency*.
   - Pin location: Sunset Viewpoint, Kelgeri, Dharwad (`15.4589, 74.9902`).

---

## 4. Key Git Commit History & Milestones
- `8d16411`: Add Dasara & Deepawali Festive Scheme section, cards, and modal integration.
- `3e23837`: Update festive gold label to **`GOLD`** and remove 999.9 reference across UI and data.
- `f6300e0`: Remove pricing rows from all festive scheme cards for clean presentation.
- `40dfa62`: Serverless SQLite `/tmp` fix and lead delivery safeguards for Vercel.
- `be96fac`: Add MEMORY.md capturing project progress, festive scheme specs, and architecture.
- `97a79df`: feat(seo): optimize for #1 Hubli-Dharwad plot rankings, H1 keyword hierarchy, PAA FAQ interlocking, and sitemap compliance.
- `a1855bb`: feat(ads): add Hubli-Dharwad Google Ads strategy blueprint and UTM parameter tracking in modals.
- `e039a19`: feat(analytics): setup Google Tag and conversion tracking on lead forms and site visits.
- `b74a2d3`: feat(gtag): configure active Google Tag AW-16689411973 on website.
- `d2a9e76`: feat(head): inject Google Tag script directly into html head for instant detection.
- `b1e57c3`: feat(conversion): bind exact Aurora Hills lead snippet AW-16689411973/I9fRCMn3upwdEIXvkJY-.
- `58b133d`: feat(analytics): trigger contact conversion on WhatsApp and Call Desk clicks.
- `90e7eeb`: docs: update MEMORY.md and ads strategy with verified Google Tag and Conversion tracking architecture.
- `92b1ee1`: fix(conversion): slim EnquiryModal to 3 fields, add AdsTopBar for Google Ads traffic, add click-to-call in Hero CTA row.
- `3353b2b`: docs: update MEMORY.md with Oct 15 zero-lead diagnostic, all 5 root cause fixes, Google Ads optimisations and website CRO changes.
- `d15e5af`: feat(cro): embed in-page HeroLeadCard, track call/WhatsApp conversions, eliminate mobile header overlap, and revamp EnquirySection.
- `4a17b8d`: docs: finalize commit hash d15e5af in MEMORY.md.
- `622d981`: docs: update comprehensive negative keyword master list in ads strategy.
- `6d3f2ea`: docs: document live production verification, multi-project isolation, and keyword calibration.
- `c2f5964`: docs: record Oct 16 conversion milestone and Oct 17 live negative keyword deployment.
- `7f9f0a7`: docs: record Oct 19 audit milestone, dimension keywords, and negative keyword updates in strategy.
- `15e7e5a`: feat(festive): update 3D Gold and Silver reward assets from client PSDs and enhance card layout.
- `HEAD`: refactor(home): remove redundant bottom EnquirySection form in favor of in-page HeroLeadCard.

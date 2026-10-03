# Project Memory & Development History — The Aurora Hills

**Repository**: [Sambhram-Khairawadagi/Aurora-hills](https://github.com/Sambhram-Khairawadagi/Aurora-hills)  
**Main Branch**: `main`  
**Hosting & Deployment**: Vercel (Auto-deploys on push to `origin/main`)  
**Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Prisma (SQLite), Nodemailer  
**Last Updated**: October 3, 2026

---

## 1. Project Overview
The Aurora Hills is a premium real estate landing page and management portal for luxury residential villa plots located near NH-4 Highway, Kelgerri, Dharwad, Karnataka. The layout is HDUDA and NA-KJP approved with 20+ world-class amenities.

---

## 2. Key Modules & Architecture

### A. Festive Campaign Module (`components/FestiveScheme.tsx` & `lib/projectData.ts`)
- **Theme**: "Dasara & Deepawali Festive Special" auspicious booking rewards.
- **Plot & Scheme Tiers**:
  1. **40 × 60 Plot (2,400 sq.ft)**:
     - **Reward**: **50 Grams GOLD**
     - **Graphic**: Stylized gold ingot card with bold **`GOLD`** label + gold coin.
     - **Specifications**: 40ft × 60ft dimension, 2,400 sq.ft total area, HDUDA & NA-KJP approved.
  2. **30 × 50 Plot (1,500 sq.ft)**:
     - **Reward**: **1.5 KG SILVER**
     - **Graphic**: Dual traditional silver Kalash ornaments.
     - **Specifications**: 30ft × 50ft dimension, 1,500 sq.ft total area, HDUDA & NA-KJP approved.
  3. **30 × 40 Plot (1,200 sq.ft)**:
     - **Reward**: **1 KG SILVER**
     - **Graphic**: Single traditional silver Kalash ornament.
     - **Specifications**: 30ft × 40ft dimension, 1,200 sq.ft total area, HDUDA & NA-KJP approved.
- **Card Design Directives**:
  - Pricing has been removed from all 3 festive cards to focus customer attention on dimensions, areas, government approvals, and claiming festival gifts.
  - CTAs open `EnquiryModal` with pre-filled scheme metadata (`Festive Offer 40x60`, `Festive Offer 30x50`, `Festive Offer 30x40`).

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

---

## 4. Key Git Commit History & Milestones
- `8d16411`: Add Dasara & Deepawali Festive Scheme section, cards, and modal integration.
- `3e23837`: Update festive gold label to **`GOLD`** and remove 999.9 reference across UI and data.
- `f6300e0`: Remove pricing rows from all festive scheme cards for clean presentation.
- `40dfa62`: Serverless SQLite `/tmp` fix and lead delivery safeguards for Vercel.

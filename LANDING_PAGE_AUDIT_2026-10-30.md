# Aurora Hills landing-page implementation — October 30, 2026

## Authorisation and baseline
The user authorised all recommendations from the live mobile/desktop audit, updates to the project second brain, and a GitHub push. The implementation starts from `c849c3c`; it does not restore the previously reverted October 29 redesign.

## Decisions to preserve
- The landing page sells villa plots, not completed houses. Name and a valid Indian mobile number remain mandatory.
- Keep original imagery, real site photographs, brand palette, existing plot dimensions and the requested-price strategy.
- Put decision-making information (layout, dimensions, location) ahead of long media and promotional sections.
- Use one concise primary action: request the layout and price sheet. Use a separate site-visit form for visit actions.
- Show six photos and six amenities initially; keep the remaining content accessible on demand.
- Do not fabricate remaining inventory, completion status, buyer testimonials, delivery guarantees or a conversion uplift.

## Engineering changes
- Shared native dialog in `components/Modal.tsx`: Escape, inert background, focus return, scrolling and associated labels.
- Main, modal, brochure and visit forms validate required details. Whitespace-name submissions do not leave loading stuck. Brochure success depends on actual API success. Site-visit default time now matches an available option.
- Delivery succeeds only after a usable destination acknowledges receipt. SMTP `false`, webhook non-2xx and timeout all count as failures. Serverless `/tmp` DB is not treated as durable storage. Persistent CRM/database provisioning is outside this deployment.
- Webhook dispatch is awaited and bounded. Submitted leads retain campaign, medium, keyword/content and click identifier in the existing schema. No database migration required.
- Form conversion and contact intent are separated. Optional secondary Ads label: `NEXT_PUBLIC_GOOGLE_CONTACT_SEND_TO`. Existing lead label is unchanged. Lower future primary-conversion totals may reflect removal of contact-click inflation, not lost enquiries.
- FAQ rendering and schema share a single data source. Fonts use the existing Next.js font loader instead of duplicate Google Fonts CSS imports.
- One selectable media player; initial video count is zero. Playback begins only after a Play click. Selecting another tour removes the prior player.
- Original media retained. New encodes: `aurora-hills-main-web.mp4` (~13.08 MiB), `drone-1-web.mp4` (~1.17 MiB), `drone-3-web.mp4` (~1.41 MiB). H.264, 1280px width, CRF 26, AAC where available, fast-start metadata.

## Validation evidence
- `npx.cmd tsc --noEmit`: passed.
- `node scripts/lead-flow.test.cjs`: 25 checks passed. Routes tested with mocked DB/SMTP/webhook for successful and failed capture, temporary-only persistence, invalid bodies/names/phones, attribution, and primary-vs-contact tracking. Brochure client handler tested for rejected and accepted responses. No messages sent.
- `npm.cmd run build`: passed for the final implementation (22 routes generated). Initial build reported existing jose Edge Runtime warnings; the final build completed successfully. Production-mode HTTP smoke checks returned 200 for `/` and `/icon.png`, with the new media heading and no initial video element. A transient development-mode icon/font issue did not reproduce in the production build.
- Browser: 360×800 Google Ads view, 390×844 mobile, 768×1024 tablet and 1440×1000 desktop. No page-width overflow at those sizes. First screen, approval badges and forms visually inspected.
- Native enquiry modal: opens as a dialog, has 16px inputs and associated labels, closes with Escape and returns focus to its trigger.
- Gallery visit action opens the date/time site-visit dialog.
- Compressed overview and hillside tour reach readyState 4 with no media error; switching tours yields zero video elements until Play is requested again.
- Section anchors resolve. Zero videos on initial page load.
- 390px measurements: first name input 626px; layout 1,465px; location 3,019px; page height 12,624px. Baseline audit: 1,385px; 14,852px; 16,502px; 22,260px respectively. Header state differs slightly between captures.
- Screenshots retained locally in `scratch/audit-2026-10-30/` (excluded from Git).

## Deployment and follow-up
Push to `origin/main` triggers the configured Vercel deployment. A Git push is not proof of a finished deployment: inspect the live page after the build becomes available. No production leads are submitted automatically during verification.

The existing Search Console HTML whitespace edit is left uncommitted. Preview-generated database changes are restored, not shipped. Production mailbox/CRM receipt and actual conversion quality must be evaluated from authorised real enquiries. Optional secondary Ads conversion setup requires a real label supplied/configured in Google Ads and Vercel; no guessed label is used.

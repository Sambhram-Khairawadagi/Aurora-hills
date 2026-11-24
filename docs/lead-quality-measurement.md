# Aurora Hills lead-quality measurement

Prepared 23 November 2026. Website form improvements are implemented; Google Ads offline actions/import connection are NOT configured yet.

## Sales record
Keep each submission and link repeat contacts by normalized phone. Record original email acquisition timestamp, submission Lead ID, source/campaign, GCLID when available, buyer budget, Dharwad suitability, first contact date, next callback, agreed visit date, actual attended date, booking evidence and outcome date. Preserve unknowns. Do not turn an appointment request into an attended visit or a reported booking into a verified payment.

## Outcome definitions
- Qualified lead: sales spoke with the buyer and confirmed genuine plot requirement, budget compatible with current inventory, and willingness to consider Dharwad. An unanswered phone is pending, not unqualified.
- Attended visit: actual visit confirmed by sales, with date.
- Verified booking: booking and advance confirmed against sales evidence, with date.

## Planned Google Ads setup (not yet configured)
Create separately named Aurora-qualified lead, attended visit, and verified booking import actions. Start as secondary measurement only; keep Completed Website Enquiries as the existing bidding goal. Use a validated supported Data Manager connection/import workflow and explicit consent/attribution records. Do not upload the entire mixed-source sheet or guess click IDs. Verify action names, timestamps/timezone, duplicate control and successful matching on a small reviewed batch before ongoing imports. No personal data is stored in this document and no upload has been performed.

Review the November 17-30 acquisition cohort after follow-up: distinct qualified buyers, actual attendees and cost per outcome. Do not use the workbook's edited dates for acquisition. Do not sum multiple funnel stages as distinct buyers. If zero attended visits, report zero and leave cost per visit undefined.

## Website measurement
Successful enquiry/site-visit responses provide a submission ID for Google Ads transaction deduplication. Separate submissions still have separate IDs. Brochure requests and contact clicks remain separate. Explicit user_data matching is sent only with opt-in and a valid optional email; phone is normalized to +91. No budget/location data is included in Google event matching. Existing account automatic detection is separate and has not been changed. No claim that Google's diagnostic warning has cleared until observed after real traffic.

## Current blockers
Native Chrome access recovered on November 23 evening. Daily campaign settings, all 13 named daily queries and Gmail were reviewed; four submissions from three new contacts were recorded. Website commit 316836c deployment was verified and live ad copy aligned to INR 42 lakh/premium positioning. Full post-switch query review, account matching configuration verification, diagnostic clearance, offline actions and sales-sheet feedback refresh remain pending. No bid/budget or negative keyword edits were made.

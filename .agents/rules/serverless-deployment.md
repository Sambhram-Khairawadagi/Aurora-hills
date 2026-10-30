# Current delivery rule — October 30, 2026

The historical notes below describe the original workaround, not a guarantee of delivery.
- Await and inspect the boolean result of `sendAdminNotification`.
- Await optional webhook dispatch, require a successful HTTP status and use a timeout.
- Return HTTP 503 with `success: false` when neither email, webhook nor a durable local DB has captured the enquiry.
- Serverless `/tmp` SQLite is ephemeral and must never be the only basis for reporting capture success.
- Fire primary Google Ads lead conversions only after an API success. Contact clicks use their own events/optional separate conversion destination.
- Preserve attribution in notifications and existing lead notes. Test with mocks, not real sales notifications.
- See `LANDING_PAGE_AUDIT_2026-10-30.md` and the newest entries in GEMINI.md and MEMORY.md.

---

## Historical implementation (superseded where conflicting)

# Vercel Serverless & Form Submission Architecture

## Context & Past Root Cause
Form submissions (`POST /api/leads` and `POST /api/site-visits`) previously failed on Vercel with HTTP 500 (Internal Server Error) due to:
1. **Read-only filesystem on AWS Lambda / Vercel**: SQLite (`prisma/dev.db`) could not write lock/journal files in `/var/task` (EROFS error).
2. **Aborted email dispatch**: DB crashes prevented email execution, un-awaited promises were cut off when the serverless function terminated, and environment credentials were missing in Vercel.

## Permanent Implementations & Safeguards
1. **Serverless SQLite Initialization (`lib/db.ts`)**:
   - Detects `process.env.VERCEL` or `process.env.AWS_LAMBDA_FUNCTION_VERSION`.
   - Copies `prisma/dev.db` to `/tmp/dev.db` (writable directory in Lambda/Vercel) and overrides Prisma connection URL dynamically to `file:/tmp/dev.db`.
   - Supports external database via `process.env.DATABASE_URL` if configured.
2. **Resilient Form Endpoints (`app/api/leads/route.ts` & `app/api/site-visits/route.ts`)**:
   - Zero-failure architecture: DB writes are isolated with try/catch fallbacks to never crash the HTTP response.
   - Admin email notification (`social.propertybasket@gmail.com`) is strictly awaited with timeout protection.
   - Optional webhook forwarding via `process.env.LEADS_WEBHOOK_URL`.
3. **Email Delivery Fallback (`lib/email.ts`)**:
   - Gmail SMTP configured with fallback credentials so lead notifications deliver reliably even if environment variables are not set in Vercel.
4. **Asset Tracing (`next.config.mjs`)**:
   - `outputFileTracingIncludes` includes `prisma/dev.db` in serverless bundles.
5. **Git & Deployment Reference**:
   - Changes committed in local `main` branch (`40dfa62 fix: resolve internal server error on form submission and configure serverless SQLite support`).

# The CMO Club — mycmoclub.com

Marketing site for The CMO Club. Vite + React + TypeScript + Tailwind, deployed on Vercel.

## Quick start (local dev)

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build    # outputs to ./dist
npm run preview  # serves the built site locally
```

## Project structure

```
api/                    # Vercel serverless functions
  send-email.ts         # sends admin + applicant emails via Resend
src/
  App.tsx               # routes
  index.tsx             # entry point
  pages/                # top-level pages (one per URL)
  sections/             # page sections (Hero, Footer, etc.)
  components/           # shared components (modals, toasts)
  data/
    experts.ts          # experts + vendors shown on /vendors — edit to add entries
static/                 # static assets (images, fonts)
vercel.json             # Vercel config (SPA routing + serverless functions)
```

## Routes (URL map — all preserved from original site)

| URL | Page |
|---|---|
| `/` | Home |
| `/membership` | Membership |
| `/ambassador` | Ambassador |
| `/vendors` | Experts & Vendors |
| `/privacy` | Privacy Policy |
| `/members` | Members Dashboard (placeholder) |
| `/members/experts` | Experts (placeholder) |
| `/members/roundtables` | Roundtables (placeholder) |
| `/members/directory` | Directory (placeholder) |
| `/members/intro` | Intro (placeholder) |
| `/members/calendar` | Calendar (placeholder) |
| `/members/library` | Library (placeholder) |

The 7 members pages currently render a "Coming Soon" placeholder. To make them functional, add auth (Clerk/Supabase) and a backend data layer.

## Environment variables

Set these in **Vercel → Project Settings → Environment Variables**:

| Name | Required | Notes |
|---|---|---|
| `RESEND_API_KEY` | Yes | Get from https://resend.com/api-keys. Without it, email notifications fail. |

For local dev, create `.env.local`:

```
RESEND_API_KEY=re_your_key_here
```

## Forms & integrations

**HubSpot forms** — all three application forms (Membership, Ambassador, Expert) POST directly to HubSpot's public Forms API. No backend required.

- Portal ID: `147616801`
- Membership form: `52d246ac-2b3f-4d00-8413-175caef1fd9b`
- Ambassador form: `ab1b9fd7-bfaa-4733-b05a-aeab4d1c9931` (EU endpoint)
- Expert form: `79741b5e-ddf2-4bd4-a534-55a8101d5621`

**Email notifications** — sent via Resend from `api/send-email.ts`. Admin email defaults to `danitbensimon@gmail.com`.

## Adding experts/vendors to /vendors page

Edit `src/data/experts.ts` and add entries to the `experts` or `vendors` arrays. Rebuild/redeploy to publish.

## Deploy to Vercel

See `DEPLOY.md` for the full step-by-step guide.

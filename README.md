# PawCare — Legal & Support Mini-Site

A clean, production-ready legal/policy website for the **PawCare** Android app, built with Next.js 15, React, TypeScript, and Tailwind CSS.

## Pages

| Route            | Description                          |
| ---------------- | ------------------------------------ |
| `/`              | Homepage with links to all legal pages |
| `/privacy`       | Privacy Policy                       |
| `/terms`         | Terms & Conditions                   |
| `/support`       | Support & Contact + FAQ              |
| `/data-deletion` | Data Deletion / Privacy Requests     |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000
```

## Build & Preview

```bash
npm run build
npm start
```

## Deploy to Vercel

The easiest way to deploy this site:

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Once deployed, set a custom domain (or use the free `.vercel.app` URL).
5. Use the Privacy Policy URL (e.g. `https://your-domain.com/privacy`) in Google Play Console.

Alternatively, deploy from the CLI:

```bash
npm i -g vercel
vercel
```

## Placeholder Values to Replace

All placeholders are centralized in **`lib/constants.ts`**. Open that file and replace:

| Constant         | Replace with                                       |
| ---------------- | -------------------------------------------------- |
| `SITE_URL`       | Your production domain, e.g. `https://pawcare.dev` |
| `EFFECTIVE_DATE` | The date you publish, e.g. `March 25, 2026`        |
| `JURISDICTION`   | Your applicable jurisdiction, e.g. `the State of California, USA` |

Search for `TODO:` comments in the codebase for additional inline reminders.

## No `.env` File Needed

This project has no environment variables. All configuration is in `lib/constants.ts`.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**

No database. No authentication. No API routes. Fully static-friendly.

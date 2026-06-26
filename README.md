# Promise Programs Volunteer Match Quiz

A Next.js app for Wytheville Community College's Promise Scholarship programs — helping students discover approved volunteer agencies that match their personality.

## Programs Supported

- **Wythe-Bland Foundation Scholarship**
- **Twin County Community Foundation Scholarship**
- **Smyth County Promise Scholarship**

## Features

- 3-program selector with smooth transitions
- 5-question personality quiz (Animal Advocate, Efficiency Expert, Hands-On Hero, Community Catalyst, Event Enthusiast)
- Primary + secondary personality match results
- Agency cards with direct email/phone links
- "Agencies for my Major" modal with degree-specific opportunities
- Link to official approved agency list per program
- Fully responsive, accessible, reduced-motion support

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Playfair Display + Inter** via Google Fonts

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option B — GitHub + Vercel Dashboard

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/promise-quiz.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the GitHub repo
4. Click **Deploy** — no environment variables needed

Vercel will automatically redeploy on every push to `main`.

## Updating Agency Data

All data lives in `lib/data.ts`. To update agencies, edit the `scholarshipData` object — no other files need changing.

## Brand Color

The maroon brand color is `#960048`. Update in `tailwind.config.ts` and `app/globals.css` if needed.

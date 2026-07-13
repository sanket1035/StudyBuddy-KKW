# 02 — Technical Requirements Document (TRD)

**Frontend:** Next.js 14 (App Router) with TypeScript + Tailwind CSS
- Static-first (SSG) since content changes infrequently — fast loads on student mobile data

**Backend:** None required for v1 (fully static + JSON/Markdown content files).
For v2 (contribution form, analytics), use Next.js API routes / serverless functions.

**Database:** None for v1. Subject/unit/resource data stored as structured JSON or MDX content files in the repo (acts as a lightweight CMS — also makes open-source contribution easy via pull requests).
If v2 needs dynamic data (e.g. view counts, contribution requests): PostgreSQL via Supabase (free tier).

**Auth:** None for v1 (no login needed — public resource site).
If an admin-lite panel is added later: simple password-gated route or GitHub OAuth (Supabase Auth) restricted to maintainers.

**Hosting:** Vercel (free tier) — auto-deploys from GitHub on every merge to `main`. Custom domain optional later.

**File Storage:** Google Drive (existing) — continue linking out for actual PDFs/notes. No file hosting on the site itself in v1.

**Third-party APIs / Services:**
- Google Drive (existing links) — resource storage, free
- Vercel Analytics or Plausible — usage tracking, free/low-cost tier
- GitHub — version control + open source contributions, free

**Key Libraries:**
- `lucide-react` — icons for subject cards
- `cmdk` or simple custom search — instant subject/unit search
- `next-mdx-remote` or `contentlayer` — if notes metadata is written in MDX
- `framer-motion` — subtle, professional micro-interactions (optional, keep minimal)
- `next-themes` — dark/light mode toggle (v2)

**Folder Structure (proposed)**
```
study-buddy-kkw/
├── app/
│   ├── page.tsx                 # Homepage (year selector)
│   ├── [year]/page.tsx          # Subject list per year
│   ├── [year]/[subject]/page.tsx # Units + resources for a subject
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── layout.tsx
├── content/
│   ├── first-year/
│   │   ├── maths-1.json
│   │   ├── maths-2.json
│   │   └── ... (one file per subject)
│   └── second-year/
│       └── ...
├── components/
│   ├── SubjectCard.tsx
│   ├── UnitList.tsx
│   ├── SearchBar.tsx
│   ├── YearSelector.tsx
│   └── Navbar.tsx / Footer.tsx
├── public/
│   └── icons/ (subject icons)
├── CONTRIBUTING.md
├── README.md
└── .env.local
```

**Naming Conventions:**
- Components: PascalCase (`SubjectCard.tsx`)
- Content files: kebab-case matching URL slugs (`maths-1.json`)
- Each subject JSON includes: `name`, `slug`, `icon`, `units[]` (each with `title`, `driveLink`, `type: file|folder`, `lastUpdated`)

**Environment Variables:**
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_ANALYTICS_ID` (if Plausible/Vercel Analytics used)

**Constraints:**
- Must be fully responsive (mobile-first — majority of traffic is phones)
- Must stay on free hosting tiers (Vercel + GitHub)
- Must be easy for non-technical students to contribute content (JSON/MDX, not raw code, where possible)
- No backend/database dependency for v1 — must work as a static site
- Fast load on average Indian mobile data speeds (optimize images, avoid heavy JS bundles)

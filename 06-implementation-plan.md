# 06 — Implementation Plan (Step-by-Step Build Sequence)

## Phase 1: Setup
- Initialize Next.js 14 (TypeScript + Tailwind + App Router) project
- Set up GitHub repo (public, MIT license — for open source contributions)
- Configure folder structure as defined in TRD (`app/`, `content/`, `components/`)
- Add `README.md` (project overview, screenshots, how to run locally)
- Add `CONTRIBUTING.md` (how to add a subject/unit, PR guidelines, code of conduct)
- Set up Vercel project linked to GitHub for auto-deploy
- **Done when:** repo exists publicly, runs locally with `npm run dev`, deploys a blank page to Vercel

## Phase 2: Content Migration
- Convert existing site content (all 10 First Year subjects + Second Year subjects + PYQs) into the JSON structure defined in Backend Schema doc
- Build `content/index.json` master index
- Fix known issues during migration: standardize file vs. folder typing, remove duplicate Software Engineering link, add `lastUpdated` dates
- **Done when:** every subject/unit from the old site has a corresponding, validated JSON entry

## Phase 3: Core Layout & Navigation
- Build `Navbar`, `Footer`, mobile bottom tab bar
- Build `YearSelector` component and homepage hero
- Implement routing: `/`, `/first-year`, `/second-year`, `/[year]/[subject]`, `/about`, `/contact`, `/contribute`
- **Done when:** all pages exist and are reachable via navigation, even with placeholder content

## Phase 4: Subject & Unit Pages
- Build `SubjectCard` grid component (year pages)
- Build `UnitList`/accordion component (subject detail page) rendering resources by type with icons
- Wire content JSON into pages via static generation (`generateStaticParams`)
- Add empty states for units with no resources yet
- **Done when:** every subject and unit from migrated content renders correctly and links work

## Phase 5: Search
- Build global `SearchBar` component (client-side filter over `content/index.json`, no backend needed)
- Implement instant results dropdown/modal with subject + unit matches
- Add "no results" empty state
- **Done when:** typing a subject, unit, or keyword returns accurate, fast results from any page

## Phase 6: UI Polish & Theming
- Apply full design system from UI/UX brief (colors, typography, spacing, border radius, shadows)
- Implement dark/light mode toggle (`next-themes`)
- Add subtle hover/transition animations (card lift, button states)
- Responsive QA pass: mobile (375px), tablet (768px), desktop (1280px+)
- **Done when:** site matches the UI/UX brief on all breakpoints in both themes

## Phase 7: About / Contact / Contribute Pages
- Write real About page content (project story, who built it, why, stats like "400+ students/year")
- Carry over existing Contact info
- Build Contribute page rendering CONTRIBUTING.md content with a clear "Fork on GitHub" CTA
- **Done when:** all three pages have final, non-placeholder content

## Phase 8: Testing & Error Handling
- Manually test all core user journeys (find notes, search, contribute) on mobile and desktop
- Add custom 404 page
- Add inline "broken link" reporting affordance on resource items
- Run Lighthouse audit (target 90+ performance, accessibility, best practices)
- Fix any broken Drive links found during QA
- **Done when:** Lighthouse scores meet target and all core journeys work end-to-end with no dead links

## Phase 9: Deploy & Launch
- Final deploy to Vercel production
- (Optional) connect custom domain
- Set up Vercel Analytics or Plausible
- Announce to existing student base as the "new Study Buddy" replacing the Jimdo site
- Pin a "Contribute" call-to-action for the open source event
- **Done when:** new site is live at the public URL, old Jimdo site redirects or links to it, and analytics are recording visits

## Overall Done Criteria
All core user journeys (browse by year, find a subject/unit, search, contribute) work end-to-end on mobile and desktop, in both light and dark mode, with zero broken resource links, Lighthouse scores 90+, and a working open-source contribution flow via GitHub.

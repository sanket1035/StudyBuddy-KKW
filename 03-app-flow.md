# 03 — App Flow (Navigation & User Journey Map)

## Pages List
- `/` — Homepage: hero, year selector (First Year / Second Year), search bar, featured/recent resources
- `/first-year` — Subject grid for First Year (Maths 1, Maths 2, Applied Chemistry, Applied Physics, FXE, FEE, Engineering Drawing, C Programming, CT-PS, PYQs)
- `/second-year` — Subject grid for Second Year (Discrete Structures, Data Structures, DELD, OS, Maths 3, DBMS, Advanced DS, Software Engineering)
- `/[year]/[subject]` — Unit-wise resource page for one subject (e.g. `/first-year/maths-2`): lists Units 1–5, each with notes/handwritten/PYQ links, last-updated date
- `/about` — Project story, who built it, why, open source invite
- `/contact` — Existing contact details (maintainer name, email, phone)
- `/contribute` — Open source contribution guide (how to submit notes/features via GitHub)
- `/search` (or inline modal) — Global search results across all subjects/units

## Navigation Type
Top navbar (desktop): Logo | First Year | Second Year | Search | Contribute | About
Bottom tab bar (mobile): Home | Years | Search | Contribute | About
Sticky search bar accessible from every page (icon in navbar opens search modal)

## First Screen (new visitor)
Hero section: short tagline ("Find your notes in seconds"), big Year selector cards (First Year / Second Year), search bar front and center, and a "400+ students use this every year" trust indicator below the fold.

## Auth Flow
None — fully public, no signup/login required for v1.

## Core User Journey 1 — Find notes before an exam
Student lands on homepage → taps "First Year" → sees subject grid → taps "Maths 2" → sees Units 1–5 with notes/handwritten/PYQ links and last-updated dates → taps the Drive link for the unit they need → opens in Google Drive.

## Core User Journey 2 — Search directly
Student lands on homepage → types "Unit 3 OS" in search bar → instant filtered results show matching subject/unit across years → taps result → lands directly on that subject's page, scrolled to that unit.

## Core User Journey 3 — Contribute (open source)
Visitor reads About page → clicks "Contribute" in navbar → sees CONTRIBUTING.md content rendered nicely (how to fork repo, add a JSON entry or open a PR, code of conduct) → clicks "View on GitHub" → goes to repo.

## Empty States
- Subject page with no resources yet for a unit: "Notes coming soon — want to add them? Contribute here →" (links to `/contribute`)
- Search with no results: "No matches. Try a different keyword, or browse by year below."

## Error States
- Broken/inaccessible Drive link: show a small inline notice "This link might be outdated — report it" (links to contact/GitHub issue), rather than a dead click
- Page not found (404): friendly custom 404 with quick links back to Year pages

## Redirects
- After picking a year on homepage → `/first-year` or `/second-year`
- After search result click → directly to the relevant subject page, anchored to the unit
- `/other` (legacy PYQ page) → redirect to new PYQ section within relevant year page

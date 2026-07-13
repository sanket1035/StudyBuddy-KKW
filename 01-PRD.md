# 01 — Product Requirements Document (PRD)

**App Name:** Study Buddy KKW

**Tagline:** One hub for every note, PYQ, and resource K.K. Wagh students actually need.

## Problem
First and second-year engineering students at K.K. Wagh Institute (AI&DS / CS) waste time hunting across WhatsApp groups, random Drive links, and outdated PDFs for unit-wise notes and past year question papers. There's no single, well-organized, fast place to find verified study material per subject and unit.

## Target User
A K.K. Wagh engineering student (mostly First Year and Second Year, AI&DS/CS branch) studying on a phone or laptop, usually close to exams, who wants to find the right unit's notes or PYQs in under 30 seconds without sifting through clutter.

## Core Value Proposition
Unlike scattered Drive links and WhatsApp forwards, Study Buddy KKW organizes every subject by year → subject → unit, in a clean, fast, mobile-first interface — and it's open source, so students can contribute notes and features back.

## Core Features (Must Have)
- Year selector (First Year / Second Year), expandable to future years
- Subject list per year with icon/visual identity per subject
- Unit-wise resource pages (notes, handwritten notes, question banks)
- PYQ (Past Year Questions) section, organized by subject
- Search/filter across subjects and units
- Consistent content structure (every unit follows the same file/folder pattern)
- Last-updated date on each resource
- Mobile-first responsive design
- About page explaining the project and the student who built it
- Contact page (already exists — carry over)
- Open source contribution guide (CONTRIBUTING.md) so other students can add notes/features via GitHub

## Nice to Have (v2)
- Dark/light mode toggle
- "Most viewed" / "Recently added" resources section
- Upload/request form for missing notes
- Light analytics to see what students actually use
- Bookmark/favorite subjects (local storage, no login needed)
- Admin-lite panel for adding new resources without touching code

## Out of Scope (v1)
- User accounts / login system
- In-browser file editing or quizzes
- Payment or premium content
- Hosting files directly (continue linking to Google Drive for storage)
- Native mobile app

## User Stories
- As a student, I want to pick my year and subject quickly so that I can find notes without scrolling through everything.
- As a student, I want to search for a unit or topic so that I don't have to browse manually.
- As a student, I want to see when a resource was last updated so that I trust I'm studying the right version.
- As a contributor, I want clear instructions on how to add my own notes via GitHub so that I can contribute without asking the maintainer directly.
- As a first-time visitor, I want the site to look professional and trustworthy so that I believe the content is reliable.

## Success Metrics
- 400+ returning students per academic year (current baseline) growing to 600+
- Average time-to-find-resource under 30 seconds
- At least 5 external open-source contributions (PRs) within the first semester after launch
- Mobile usability score 90+ (Lighthouse)

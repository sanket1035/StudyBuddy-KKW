# 00 — Master Prompt for Antigravity

> Paste this at the start of your Antigravity session, then attach the 6 documents (01–06) in this folder as additional context/source of truth.

---

Here are my project documents (PRD, TRD, App Flow, UI/UX Design Brief, Backend Schema, Implementation Plan). Use these as the source of truth for everything you build. This is **Study Buddy KKW** — a study resource site for K.K. Wagh Institute engineering students, already used by 400+ students per year in its current (basic Jimdo-built) form. I'm rebuilding it as a real, professional product.

## Critical requirements — read carefully

1. **This must NOT look like a typical "vibe coded" AI app.** No generic purple gradients, no centered hero with a stock emoji icon, no default Inter-everywhere look, no glassmorphism cliché. It needs to look like a real, funded edu-tech product — polished, intentional, and trustworthy. Follow the UI/UX Design Brief (04) exactly for colors, typography, spacing, and component style.

2. **Use Stitch (Google's UI design tool) to generate and refine the UI design/screens first**, based on the UI/UX Design Brief, before or alongside implementation — so the visual design is deliberate and high-quality rather than improvised in code. Translate the Stitch designs faithfully into the Next.js + Tailwind implementation.

3. **Fully responsive, mobile-first.** Most users open this on a phone between classes or before exams. Test every screen at 375px, 768px, and 1280px+.

4. **Build for open source from day one.** This project will be used in an open source event where other students will contribute notes and features. That means:
   - Clean, readable, well-commented code
   - A clear `README.md` and `CONTRIBUTING.md`
   - Content stored as simple, editable JSON files (per Backend Schema doc) so non-technical contributors can add a subject/unit via a simple PR without touching app logic
   - Sensible component structure so new contributors can find where to add features without confusion

5. **No unnecessary backend/database for v1.** Static site, JSON-based content, links out to existing Google Drive resources. Don't over-engineer.

6. **Follow the Implementation Plan (06) phase by phase.** Don't skip ahead to UI polish before core navigation and content rendering work. Confirm each phase's "done" criteria before moving to the next.

7. **Migrate all existing content faithfully** (First Year: Maths 1, Maths 2, Applied Chemistry, Applied Physics, Fundamental of Electronics, Fundamentals of Electrical Engineering, Engineering Drawing, C Programming, Computational Thinking & Problem Solving, PYQs; Second Year: Discrete Structures, Data Structures, DELD, Operating Systems, Maths 3, DBMS, Advanced Data Structures, Software Engineering) — and fix the known issues: inconsistent file-vs-folder structure across units, duplicate Software Engineering link, default unedited About page.

8. Ask me clarifying questions before making irreversible structural decisions (e.g. final folder structure, exact JSON shape) — don't just guess silently if something in the docs is ambiguous.

Start with Phase 1 (Setup) from the Implementation Plan, confirm it's done, then proceed phase by phase.

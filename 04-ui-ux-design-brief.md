# 04 — UI/UX Design Brief

## Aesthetic Direction
Clean, modern, trustworthy "edu-tech" product feel — NOT a generic AI-generated template look. Think along the lines of a polished student tool: confident typography, real whitespace, purposeful color, subtle motion. Should feel like a real funded startup product (e.g. Notion, Linear, Coursera's cleaner pages), not a college hobby project.

Avoid: default purple-gradient-on-dark "AI app" clichés, centered hero with generic stock icons, overused glassmorphism, emoji-as-icons.

## Primary Color
`#2563EB` (confident blue — trust + focus, fits an academic tool)

## Secondary / Accent Color
`#F59E0B` (warm amber — used sparingly for highlights, badges like "Updated", "New")

## Background Color
Light mode: `#FAFAFA` (off-white, not pure white — easier on eyes for long study sessions)
Dark mode: `#0F1115` (near-black, not pure black)

## Text Color
Light mode: `#111827` primary text, `#6B7280` secondary
Dark mode: `#F3F4F6` primary text, `#9CA3AF` secondary

## Font
Headings: `Sora` or `Plus Jakarta Sans` — modern, slightly distinctive geometric sans (avoids the generic Inter-everywhere look)
Body: `Inter` — highly readable for long content lists
Code/labels (e.g. "Unit 3"): `JetBrains Mono` for small tags, used sparingly

## Border Radius
12px on cards, 8px on buttons/inputs — soft but not overly rounded/bubbly

## Shadows
Subtle, layered shadows on cards (`shadow-sm` resting, `shadow-md` on hover) — no heavy drop shadows or neumorphism

## Dark/Light Mode
Both supported, toggle in navbar, default to system preference. Dark mode is not just inverted colors — tune contrast and amber accent specifically for dark backgrounds.

## Key UI Patterns
- **Subject Cards**: icon + subject name + unit count + "last updated" badge, grid layout, hover lift effect
- **Unit Accordion/List**: expandable per unit showing notes/handwritten/PYQ links with small file-type icons
- **Sticky Search Bar**: prominent on homepage, persistent compact version in navbar elsewhere
- **Year Toggle**: large, tactile pill/segmented control (First Year / Second Year) — primary navigation decision
- **Badges**: small pills for "New", "Updated", "PYQ" — color-coded but restrained
- **Empty/Error States**: illustrated but minimal (simple line icon, not heavy illustration), friendly copy

## Reference Apps / Inspiration
Linear (clarity, spacing), Notion (content density done well), Coursera/Khan Academy (academic trust signals), Vercel dashboard (dark mode execution)

## Mobile Responsiveness
Mobile-first build. Bottom tab navigation on mobile, top navbar on desktop. Subject grid collapses from 3–4 columns (desktop) to 1–2 columns (mobile). Touch targets minimum 44px. Search must be a single thumb-reachable tap from anywhere.

## Accessibility
- Minimum WCAG AA contrast ratios in both light and dark mode
- All interactive elements keyboard-navigable
- Alt text on all subject icons
- Font sizes never below 14px for body text; respects user browser zoom

## Tone of Copy
Direct, encouraging, peer-to-peer (written by a student, for students) — not corporate, not overly casual. Example: "Find your notes in seconds" not "Welcome to our comprehensive educational resource platform."

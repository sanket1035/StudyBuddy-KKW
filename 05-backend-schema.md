# 05 — Backend Schema (Data Model)

> v1 of Study Buddy KKW has no traditional database — content is stored as structured JSON/MDX files in the repo, which doubles as the "schema" and makes open-source contribution simple (edit a file, open a PR). This doc defines that structure, plus an optional v2 database if dynamic features are added later.

## v1 — Content Data Model (JSON files in `/content`)

### Subject object (one file per subject, e.g. `content/first-year/maths-2.json`)
```json
{
  "id": "maths-2",
  "name": "Maths 2",
  "year": "first-year",
  "icon": "calculator",
  "lastUpdated": "2026-03-10",
  "units": [
    {
      "unitNumber": 1,
      "title": "Unit 1",
      "resources": [
        { "label": "Notes", "type": "file", "url": "https://drive.google.com/...", "lastUpdated": "2026-02-01" },
        { "label": "Handwritten", "type": "file", "url": "https://drive.google.com/...", "lastUpdated": "2026-02-01" }
      ]
    }
  ],
  "bonus": [
    { "label": "YouTube Playlist — Unit 1", "type": "video", "url": "https://youtube.com/..." }
  ]
}
```

### Field reference
| Field | Type | Notes |
|---|---|---|
| `id` | string (slug) | matches URL route, kebab-case |
| `name` | string | display name |
| `year` | enum | `first-year` \| `second-year` |
| `icon` | string | lucide-react icon name |
| `lastUpdated` | date | for the subject as a whole |
| `units[].unitNumber` | number | 1–5 typically |
| `units[].resources[].type` | enum | `file` \| `folder` \| `video` \| `question-bank` |
| `units[].resources[].url` | string | Google Drive link |
| `bonus[]` | array | optional, for PYQ answer keys, extra videos, important-question banks |

This structure standardizes the inconsistency flagged in the original site (some units were files, some were folders) — every resource now explicitly declares its `type`, and the UI renders an appropriate icon either way.

## v1 — Static Index
`content/index.json` — top-level list of all subjects per year, used to render the year → subject grids without scanning the filesystem at runtime.

## v2 (optional) — Dynamic Database (Supabase/PostgreSQL)
Only needed if you add: view counts, a "request missing notes" form, or an admin panel.

**Table: `resource_requests`**
| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| subject_id | text | references content `id` |
| unit_number | int | nullable |
| message | text | what's missing |
| requester_email | text | optional |
| status | text | `open` \| `resolved` |
| created_at | timestamp | |

**Table: `resource_views`** (optional analytics, if not using Vercel/Plausible)
| Column | Type | Notes |
|---|---|---|
| id | uuid | PK |
| subject_id | text | |
| unit_number | int | |
| viewed_at | timestamp | |

**Auth (v2 only):** GitHub OAuth via Supabase Auth, restricted to a maintainer allowlist for any admin routes (e.g. resolving requests). No auth needed for public-facing pages.

**Row Level Security (v2 only):** Public can INSERT into `resource_requests` (submit a request); only authenticated maintainers can SELECT/UPDATE.

**Sensitive Fields:** None in v1. `requester_email` in v2 should be optional and never publicly displayed.

**File Storage:** Continue using existing Google Drive structure — no migration needed.

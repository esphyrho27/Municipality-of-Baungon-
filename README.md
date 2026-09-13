# Municipality of Baungon — Official Website

A static, front-end-only build of the official public website for the
Municipality of Baungon, Bukidnon. HTML, CSS, and JavaScript are fully
separated, and all content is data-driven so it can be swapped for a
real API and database later without touching the markup or styles.

## Folder structure

```
baungon-website/
├── index.html                  ← HTML skeleton only (no inline CSS/JS)
├── README.md                   ← this file
├── assets/
│   ├── css/
│   │   └── style.css           ← all styling, theme tokens as CSS variables
│   ├── js/
│   │   ├── main.js             ← entry point, wires everything together
│   │   ├── api/
│   │   │   ├── client.js       ← low-level fetch wrapper (local JSON vs. live API)
│   │   │   └── resources.js    ← one named function per data resource
│   │   ├── components/         ← one file per website section
│   │   │   ├── nav.js
│   │   │   ├── quickAccess.js
│   │   │   ├── announcements.js
│   │   │   ├── events.js
│   │   │   ├── officials.js
│   │   │   ├── departments.js
│   │   │   ├── services.js
│   │   │   ├── transparency.js
│   │   │   ├── discover.js
│   │   │   └── contactForm.js
│   │   └── utils/
│   │       ├── icons.js        ← shared inline SVG icon set
│   │       └── dom.js          ← small DOM helper functions
│   └── images/
│       └── baungon-seal.jpg    ← official municipal seal (unmodified)
├── data/                       ← demo content as JSON — stands in for a database today
│   ├── announcements.json
│   ├── events.json
│   ├── officials.json
│   ├── departments.json
│   ├── services.json
│   ├── transparency.json
│   ├── quick-access.json
│   └── discover.json
├── config/
│   └── config.js                ← ONE flag to flip when a real backend exists
└── server/
    └── README.md                ← scaffold notes for the future API + database
```

## How this is "future ready" for an API and database

1. **`config/config.js`** holds a single `USE_LOCAL_DATA` flag and an
   `API_BASE_URL`. Today it reads from `/data/*.json`. When a backend
   exists, set `USE_LOCAL_DATA: false` and fill in `API_BASE_URL` —
   nothing else in the codebase needs to change.
2. **`assets/js/api/client.js`** is the only file that calls `fetch()`.
   It already knows how to hit either a local JSON file or a live REST
   endpoint, and includes a request timeout and error handling.
3. **`assets/js/api/resources.js`** exposes one small function per
   resource (`getAnnouncements()`, `getEvents()`, etc.). Every
   component imports from here, never from `/data` directly.
4. **Each section component** (`assets/js/components/*.js`) only knows
   how to render its data — it has no idea whether that data came from
   a JSON file or a database, so no component needs to be rewritten
   later.
5. **The contact form** already calls `submitContactMessage()`, which
   is wired to simulate success in demo mode and to `POST` to a real
   `/api/contact` endpoint once one exists.
6. **`server/README.md`** documents the suggested endpoint list,
   matching JSON field names, and starter database table shapes so a
   backend can be built to match what the front end already expects.

## Running it locally

Because the site uses `fetch()` to load the JSON files and ES modules
(`<script type="module">`), it needs to be served over HTTP rather than
opened directly as a `file://` path (browsers block module/fetch
requests from the local filesystem). From the project folder, run one
of:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

Then open `http://localhost:8000` in a browser.

## Replacing demo content

Everything marked "Sample Data" or "Sample / Demo Names" in the UI
comes straight from the files in `/data`. To update real content today
(before a backend exists), edit the matching JSON file — no code
changes required. Field names must stay the same as they're referenced
directly by the component files.

## Notes

- The municipal seal image is used only as a color and visual
  reference and is displayed unmodified throughout the site.
- Future modules (Employee Portal, HR, Payroll, Login) can be added as
  new folders under `assets/js/components/` and new pages alongside
  `index.html`, following the same pattern already established here.

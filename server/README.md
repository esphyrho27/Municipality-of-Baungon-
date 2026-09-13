# Server (Not Yet Built)

This folder is a placeholder for the future backend that will replace the
local JSON files in `/data` with real, database-backed data — and later
support the Employee Portal, HR, Payroll, and Login modules mentioned in
the project brief.

## Suggested stack

Any of these pairings work well with the current front end, since the
front end only talks to plain REST/JSON endpoints:

- **Node.js + Express + PostgreSQL or MySQL** (recommended — same
  language as the front end, easy to deploy)
- **PHP + Laravel + MySQL** (common in Philippine LGU hosting environments)
- **Python + FastAPI/Django + PostgreSQL**

## Endpoints the front end already expects

The front end's `assets/js/api/resources.js` calls these resource names.
Build endpoints with matching shapes and the site will work without any
front-end changes (aside from flipping `USE_LOCAL_DATA` to `false` in
`config/config.js`):

| Method | Endpoint             | Replaces           |
|--------|-----------------------|---------------------|
| GET    | `/api/announcements`  | `data/announcements.json` |
| GET    | `/api/events`         | `data/events.json` |
| GET    | `/api/officials`      | `data/officials.json` |
| GET    | `/api/departments`    | `data/departments.json` |
| GET    | `/api/services`       | `data/services.json` |
| GET    | `/api/transparency`   | `data/transparency.json` |
| GET    | `/api/quick-access`   | `data/quick-access.json` |
| GET    | `/api/discover`       | `data/discover.json` |
| POST   | `/api/contact`        | Contact form submissions |

Keep the JSON field names identical to the ones in `/data/*.json` (e.g.
`category`, `title`, `date`, `description` for announcements) so no
component code needs to change — only `config/config.js`.

## Suggested database tables (starting point)

```
announcements   (id, category, title, description, published_at)
events          (id, title, description, location, event_date, type)
officials       (id, name, position, photo_url, sort_order, term_start, term_end)
departments     (id, name, description, icon, contact_email, contact_phone)
services        (id, category, name, description, requirements)
transparency_docs (id, name, category, file_url, published_at)
contact_messages (id, name, email, subject, message, submitted_at, status)
```

## Future modules (Phase 2+)

- `employees` / `auth` tables and `/api/auth/login` for staff login
- `payroll`, `leave_requests`, `attendance` for HR/payroll
- Role-based access control for the Employee Portal

None of this is implemented yet — this file exists so the next
developer (or a future Claude session) has a clear starting point.

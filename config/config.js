/**
 * ============================================================
 *  Municipality of Baungon — Front-end Configuration
 * ============================================================
 *  This is the single place that decides where the site's data
 *  comes from. Today every flag below is set to "local", so the
 *  site reads the JSON files in /data. When a real backend and
 *  database exist, flip USE_LOCAL_DATA to false and set
 *  API_BASE_URL — no other file needs to change, because every
 *  component talks to /assets/js/api/*, never to /data directly.
 *
 *  Suggested future backend shape (not built yet):
 *    Node/Express or PHP/Laravel API  ->  MySQL / PostgreSQL
 *    Endpoints mirroring the resource names below, e.g.
 *      GET  /api/announcements
 *      GET  /api/events
 *      GET  /api/officials
 *      GET  /api/departments
 *      GET  /api/services
 *      GET  /api/transparency
 *      POST /api/contact
 *    Auth for a future employee/HR portal would live under
 *      /api/auth/login, /api/employees, /api/payroll, etc.
 * ============================================================
 */

export const CONFIG = {
  // Toggle this to false once a real backend is deployed.
  USE_LOCAL_DATA: true,

  // Base URL of the future REST API. Leave blank while
  // USE_LOCAL_DATA is true. Example when ready:
  // API_BASE_URL: "https://api.baungon.gov.ph/v1"
  API_BASE_URL: "",

  // Path to the local JSON files used as stand-in data.
  LOCAL_DATA_PATH: "data",

  // Request timeout for future live API calls (ms).
  REQUEST_TIMEOUT: 8000,

  // Site metadata, reused across components.
  SITE: {
    name: "Municipality of Baungon",
    province: "Province of Bukidnon",
    country: "Philippines",
    foundedYear: 1956,
  },
};

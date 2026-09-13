/**
 * ============================================================
 *  API Client
 * ============================================================
 *  Every data-fetching function in /assets/js/api/*.js calls
 *  getResource() below instead of using fetch() directly. That
 *  means when a real API + database is ready, only this one
 *  function needs to change its behavior (by flipping
 *  CONFIG.USE_LOCAL_DATA) — no component code needs to be
 *  touched.
 * ============================================================
 */
import { CONFIG } from "../../../config/config.js";

/**
 * Fetch a named resource, from either the local /data JSON
 * files (demo mode) or a live REST API (production mode).
 *
 * @param {string} resource - e.g. "announcements", "events"
 * @param {object} [options] - optional fetch overrides
 * @returns {Promise<any>} parsed JSON payload
 */
export async function getResource(resource, options = {}) {
  const url = CONFIG.USE_LOCAL_DATA
    ? `${CONFIG.LOCAL_DATA_PATH}/${resource}.json`
    : `${CONFIG.API_BASE_URL}/${resource}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CONFIG.REQUEST_TIMEOUT);

  try {
    const response = await fetch(url, { signal: controller.signal, ...options });
    if (!response.ok) {
      throw new Error(`Request to "${resource}" failed with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`[api] Could not load "${resource}":`, error.message);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Send data to the backend (e.g. the contact form).
 * In demo mode (USE_LOCAL_DATA = true) this simulates a
 * successful submission instead of making a network call,
 * since there is no live endpoint yet.
 *
 * @param {string} resource - e.g. "contact"
 * @param {object} payload
 */
export async function postResource(resource, payload) {
  if (CONFIG.USE_LOCAL_DATA) {
    console.info(`[api] Demo mode — simulated POST to "${resource}":`, payload);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { ok: true, demo: true };
  }

  try {
    const response = await fetch(`${CONFIG.API_BASE_URL}/${resource}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Request to "${resource}" failed with status ${response.status}`);
    }
    return { ok: true, data: await response.json() };
  } catch (error) {
    console.error(`[api] Could not submit to "${resource}":`, error.message);
    return { ok: false, error: error.message };
  }
}

/**
 * Main entry point. Loaded as a module from index.html.
 * Each section's data-fetch + render lives in its own file
 * under /assets/js/components so the codebase stays easy to
 * extend when more pages/modules (HR, payroll, employee
 * portal, login) are added later.
 */
import { initMobileNav } from "./components/nav.js";
import { renderQuickAccess } from "./components/quickAccess.js";
import { renderAnnouncements } from "./components/announcements.js";
import { renderEvents } from "./components/events.js";
import { renderOfficials } from "./components/officials.js";
import { renderDepartments } from "./components/departments.js";
import { renderServices } from "./components/services.js";
import { renderTransparency } from "./components/transparency.js";
import { renderDiscover } from "./components/discover.js";
import { initContactForm } from "./components/contactForm.js";

function init() {
  initMobileNav();
  initContactForm();

  renderQuickAccess();
  renderAnnouncements();
  renderEvents();
  renderOfficials();
  renderDepartments();
  renderServices();
  renderTransparency();
  renderDiscover();
}

document.addEventListener("DOMContentLoaded", init);

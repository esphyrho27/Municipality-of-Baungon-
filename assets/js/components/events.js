import { getEvents } from "../api/resources.js";
import { setHTML, showLoading, showEmpty, qsa } from "../utils/dom.js";

let allEvents = [];

function renderGrid(filter = "All") {
  const list = filter === "All" ? allEvents : allEvents.filter((e) => e.type === filter);
  if (!list.length) return showEmpty("evGrid", "No events found in this category.");

  setHTML(
    "evGrid",
    list
      .map(
        (e) => `
    <div class="ev-card">
      <div class="ev-date"><div class="d">${e.day}</div><div class="m">${e.month}</div></div>
      <div class="ev-info">
        <h3>${e.title}</h3>
        <div class="loc">${e.location}</div>
        <p>${e.description}</p>
        <a href="#" style="font-size:13px;font-weight:700;color:var(--navy-deep);">View Details →</a>
      </div>
    </div>`
      )
      .join("")
  );
}

export async function renderEvents() {
  showLoading("evGrid", "Loading events…");
  const data = await getEvents();
  allEvents = data || [];

  if (!allEvents.length) {
    showEmpty("evGrid", "No events are scheduled right now.");
    setHTML("evFilters", "");
    return;
  }

  const types = ["All", ...new Set(allEvents.map((e) => e.type))];
  setHTML(
    "evFilters",
    types.map((c, i) => `<button class="pill ${i === 0 ? "active" : ""}" data-type="${c}">${c}</button>`).join("")
  );

  renderGrid();

  document.getElementById("evFilters").addEventListener("click", (e) => {
    if (!e.target.matches(".pill")) return;
    qsa("#evFilters .pill").forEach((p) => p.classList.remove("active"));
    e.target.classList.add("active");
    renderGrid(e.target.dataset.type);
  });
}

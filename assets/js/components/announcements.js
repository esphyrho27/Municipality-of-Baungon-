import { getAnnouncements } from "../api/resources.js";
import { setHTML, showLoading, showEmpty, qsa } from "../utils/dom.js";

let allAnnouncements = [];

function renderGrid(filter = "All") {
  const list = filter === "All" ? allAnnouncements : allAnnouncements.filter((a) => a.category === filter);
  if (!list.length) return showEmpty("annGrid", "No announcements found in this category.");

  setHTML(
    "annGrid",
    list
      .map(
        (a) => `
    <div class="ann-card">
      <div class="ann-top"></div>
      <div class="ann-body">
        <div class="ann-cat">${a.category}</div>
        <h3>${a.title}</h3>
        <p>${a.description}</p>
        <div class="ann-date"><span>${a.date}</span><a href="#" style="font-weight:700;color:var(--maroon);">Read More →</a></div>
      </div>
    </div>`
      )
      .join("")
  );
}

export async function renderAnnouncements() {
  showLoading("annGrid", "Loading announcements…");
  const data = await getAnnouncements();
  allAnnouncements = data || [];

  if (!allAnnouncements.length) {
    showEmpty("annGrid", "No announcements are available right now.");
    setHTML("annFilters", "");
    return;
  }

  const categories = ["All", ...new Set(allAnnouncements.map((a) => a.category))];
  setHTML(
    "annFilters",
    categories.map((c, i) => `<button class="pill ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`).join("")
  );

  renderGrid();

  document.getElementById("annFilters").addEventListener("click", (e) => {
    if (!e.target.matches(".pill")) return;
    qsa("#annFilters .pill").forEach((p) => p.classList.remove("active"));
    e.target.classList.add("active");
    renderGrid(e.target.dataset.cat);
  });
}

import { getServices } from "../api/resources.js";
import { setHTML, showLoading, showEmpty, qsa } from "../utils/dom.js";

let serviceData = {};

function renderList(filter = "All") {
  const cats = filter === "All" ? Object.keys(serviceData) : [filter];
  const html =
    cats
      .map(
        (cat) => `
    <div class="svc-cat">
      <h3>${cat}</h3>
      <div class="svc-list">
        ${serviceData[cat].map((s) => `<div class="svc-item">${s}</div>`).join("")}
      </div>
    </div>`
      )
      .join("") +
    '<p class="svc-note">Listed services are for website demonstration and can be replaced with verified municipal information.</p>';

  setHTML("svcContainer", html);
}

export async function renderServices() {
  showLoading("svcContainer", "Loading services…");
  const data = await getServices();
  serviceData = data || {};

  const categories = Object.keys(serviceData);
  if (!categories.length) {
    showEmpty("svcContainer", "Service listings are not available right now.");
    setHTML("svcFilters", "");
    return;
  }

  const filters = ["All", ...categories];
  setHTML(
    "svcFilters",
    filters.map((c, i) => `<button class="pill ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`).join("")
  );

  renderList();

  document.getElementById("svcFilters").addEventListener("click", (e) => {
    if (!e.target.matches(".pill")) return;
    qsa("#svcFilters .pill").forEach((p) => p.classList.remove("active"));
    e.target.classList.add("active");
    renderList(e.target.dataset.cat);
  });
}

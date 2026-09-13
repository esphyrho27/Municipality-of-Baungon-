import { getQuickAccess } from "../api/resources.js";
import { ICONS } from "../utils/icons.js";
import { setHTML, showLoading, showEmpty } from "../utils/dom.js";

export async function renderQuickAccess() {
  showLoading("quickGrid", "Loading services…");
  const items = await getQuickAccess();
  if (!items || !items.length) return showEmpty("quickGrid", "Quick access services are not available right now.");

  setHTML(
    "quickGrid",
    items
      .map(
        (q) => `
    <div class="qcard">
      <div class="icon">${ICONS[q.icon] || ICONS.building}</div>
      <h3>${q.name}</h3>
      <p>${q.description}</p>
      <a href="#services" class="link">View Service →</a>
    </div>`
      )
      .join("")
  );
}

import { getDiscoverItems } from "../api/resources.js";
import { setHTML, showLoading, showEmpty } from "../utils/dom.js";

export async function renderDiscover() {
  showLoading("discGrid", "Loading…");
  const items = await getDiscoverItems();
  if (!items || !items.length) return showEmpty("discGrid", "Content coming soon.");

  setHTML(
    "discGrid",
    items.map((d) => `<div class="disc-card"><div class="ph"></div><div class="disc-label"><h3>${d}</h3></div></div>`).join("")
  );
}

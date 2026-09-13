import { getTransparencyDocs } from "../api/resources.js";
import { ICONS } from "../utils/icons.js";
import { setHTML, showLoading, showEmpty } from "../utils/dom.js";

export async function renderTransparency() {
  showLoading("transGrid", "Loading documents…");
  const docs = await getTransparencyDocs();
  if (!docs || !docs.length) return showEmpty("transGrid", "Public documents are not available right now.");

  setHTML(
    "transGrid",
    docs
      .map(
        (t) => `
    <div class="trans-card">
      <div class="file-icon">${ICONS[t.icon] || ICONS.doc}</div>
      <h3>${t.name}</h3>
      <span>${t.tag} · Sample link</span>
    </div>`
      )
      .join("")
  );
}

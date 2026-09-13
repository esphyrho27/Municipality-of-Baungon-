import { getOfficials } from "../api/resources.js";
import { ICONS } from "../utils/icons.js";
import { setHTML, showLoading, showEmpty } from "../utils/dom.js";

export async function renderOfficials() {
  showLoading("officialsGrid", "Loading officials…");
  const officials = await getOfficials();
  if (!officials || !officials.length) return showEmpty("officialsGrid", "Official directory is not available right now.");

  setHTML(
    "officialsGrid",
    officials
      .map(
        (o) => `
    <div class="off-card">
      <div class="off-photo">${ICONS.users}</div>
      <div class="off-info">
        <h3>${o.name} <span class="demo-tag" style="margin-left:0;">Sample</span></h3>
        <div class="pos">${o.position}</div>
      </div>
    </div>`
      )
      .join("")
  );
}

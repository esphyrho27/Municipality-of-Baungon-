import { getDepartments } from "../api/resources.js";
import { ICONS } from "../utils/icons.js";
import { setHTML, showLoading, showEmpty } from "../utils/dom.js";

export async function renderDepartments() {
  showLoading("deptGrid", "Loading departments…");
  const departments = await getDepartments();
  if (!departments || !departments.length) return showEmpty("deptGrid", "Department directory is not available right now.");

  setHTML(
    "deptGrid",
    departments
      .map(
        (d) => `
    <div class="dept-card">
      <div class="dept-icon">${ICONS[d.icon] || ICONS.building}</div>
      <div>
        <h3>${d.name}</h3>
        <p>${d.description}</p>
        <a href="#contact">Contact / View Details →</a>
      </div>
    </div>`
      )
      .join("")
  );
}

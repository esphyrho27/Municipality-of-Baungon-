/** Tiny shared helpers so components don't repeat boilerplate. */

export const qs = (selector, scope = document) => scope.querySelector(selector);
export const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

export function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

export function showLoading(id, message = "Loading…") {
  setHTML(id, `<div class="loading-state">${message}</div>`);
}

export function showEmpty(id, message = "Nothing to show yet.") {
  setHTML(id, `<div class="empty-state">${message}</div>`);
}

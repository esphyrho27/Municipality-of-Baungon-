/**
 * Small inline-SVG icon set shared by every component, so
 * nothing here depends on an external icon font or CDN.
 */
const icon = (path, vb = "0 0 24 24") =>
  `<svg width="22" height="22" viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

export const ICONS = {
  building: icon('<path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 9h1M9 13h1M14 9h1M14 13h1M9 17h6"/>'),
  briefcase: icon('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'),
  file: icon('<path d="M4 22h16V8l-6-6H4z"/><path d="M14 2v6h6"/>'),
  heart: icon('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>'),
  users: icon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
  leaf: icon('<path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 15-11 0 11-4 15-9 15z"/><path d="M4 13c3 0 8 1 8 7"/>'),
  hammer: icon('<path d="M14.5 3.5 21 10l-2.5 2.5L12 6l2.5-2.5z"/><path d="M3 21l7-7"/><path d="M11 12l-6.5 6.5L3 21l2.5-1.5L12 13"/>'),
  scale: icon('<path d="M12 3v18"/><path d="M4 8h16"/><path d="M2 8l4-5 4 5"/><path d="M14 8l4-5 4 5"/><path d="M2 8a4 4 0 0 0 8 0"/><path d="M14 8a4 4 0 0 0 8 0"/>'),
  doc: icon('<path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/><path d="M9 13h6M9 17h6M9 9h2"/>'),
  chart: icon('<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>'),
  gavel: icon('<path d="m14 13-7.5 7.5a1 1 0 0 1-1.42 0l-1.58-1.58a1 1 0 0 1 0-1.42L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6 4 4-6 6z"/>'),
  book: icon('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
  seedling: icon('<path d="M12 22v-7"/><path d="M9 8a4 4 0 0 0 4 4h1V9a4 4 0 0 0-4-4H8v1a4 4 0 0 0 1 2z" />'),
  cash: icon('<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/>'),
  home: icon('<path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>'),
};

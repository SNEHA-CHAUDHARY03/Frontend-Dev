"use strict";
// Q4 Theme Switcher using setAttribute and data-theme attribute

const buttons = document.querySelectorAll('.theme-btn');
buttons.forEach(btn => btn.addEventListener('click', () => {
  const t = btn.getAttribute('data-theme');
  document.body.setAttribute('data-theme', t);
  // Save current theme in a custom attribute as requested
  document.body.setAttribute('data-current-theme', t);
}));

// On load, read saved theme attribute if present
const saved = document.body.getAttribute('data-current-theme');
if (saved) document.body.setAttribute('data-theme', saved);

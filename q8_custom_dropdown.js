"use strict";
// Q8 Custom Dropdown - no <select>, closing on outside click using capturing

const dropdown = document.getElementById('dropdown');
const btn = document.getElementById('ddBtn');
const options = document.getElementById('options');

btn.addEventListener('click', (e) => {
  e.stopPropagation();
  options.classList.toggle('show');
});

// Clicking an option updates button text
options.addEventListener('click', (e) => {
  const opt = e.target.closest('div[data-val]');
  if (!opt) return;
  btn.textContent = opt.textContent;
  options.classList.remove('show');
});

// Use capturing on document to close dropdown before other bubbling handlers
document.addEventListener('click', function onDocClick(e){
  // If click is outside the dropdown, close
  if (!dropdown.contains(e.target)) options.classList.remove('show');
}, true); // capturing = true

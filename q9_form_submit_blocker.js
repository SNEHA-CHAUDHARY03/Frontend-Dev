"use strict";
// Q9 Form Submit Blocker with preventDefault and live errors

const form = document.getElementById('theForm');
const nameEl = document.getElementById('fName');
const emailEl = document.getElementById('fEmail');
const passEl = document.getElementById('fPass');
const errName = document.getElementById('errName');
const errEmail = document.getElementById('errEmail');
const errPass = document.getElementById('errPass');
const message = document.getElementById('message');

function validate() {
  let ok = true;
  errName.textContent = '';
  errEmail.textContent = '';
  errPass.textContent = '';

  if (!nameEl.value.trim()) { errName.textContent = 'Name is required'; ok = false; }
  if (!emailEl.value.includes('@')) { errEmail.textContent = 'Valid email required'; ok = false; }
  if (passEl.value.length < 6) { errPass.textContent = 'Password min 6 chars'; ok = false; }
  return ok;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.textContent = '';
  if (!validate()) {
    message.textContent = 'Please fix errors';
    message.className = 'error';
    return;
  }
  message.textContent = 'Form Submitted Successfully';
  message.className = 'success';
});

// Live validation: clear errors as user corrects
[nameEl,emailEl,passEl].forEach(el => el.addEventListener('input', () => {
  validate();
  message.textContent = '';
}));

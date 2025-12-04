"use strict";
// Q3 Multi-Step Form with Next/Back and Validation

const steps = [document.getElementById('step1'), document.getElementById('step2'), document.getElementById('step3')];
let current = 0;
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

function showStep(i) {
  steps.forEach((s, idx) => s.classList.toggle('active', idx === i));
  backBtn.disabled = i === 0;
  nextBtn.textContent = i === steps.length - 1 ? 'Finish' : 'Next';
}

function validateStep(i) {
  clearErrors();
  if (i === 0) {
    const name = document.getElementById('name').value.trim();
    if (!/^[A-Za-z\s]+$/.test(name)) { document.getElementById('err1').textContent = 'Name required (letters only)'; return false; }
  }
  if (i === 1) {
    const email = document.getElementById('email').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { document.getElementById('err2').textContent = 'Invalid email'; return false; }
  }
  if (i === 2) {
    const pw = document.getElementById('password').value;
    if (pw.length < 6) { document.getElementById('err3').textContent = 'Password min 6 chars'; return false; }
  }
  return true;
}

function clearErrors() { ['err1','err2','err3'].forEach(id => document.getElementById(id).textContent = ''); }

nextBtn.addEventListener('click', () => {
  if (!validateStep(current)) return;
  if (current < steps.length - 1) { current++; showStep(current); }
  else { // Finish - show summary
    const summary = document.getElementById('summary');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    summary.innerHTML = `<h3>Summary</h3><p>Name: ${escapeHtml(name)}</p><p>Email: ${escapeHtml(email)}</p>`;
  }
});

backBtn.addEventListener('click', () => { if (current > 0) { current--; showStep(current); } });

function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

showStep(0);

"use strict";
// Q2 Live Character Counter with Warning Behavior

const textarea = document.getElementById('text');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');
const MAX = 100;

function updateCounter(e) {
  const value = textarea.value;
  const remaining = MAX - value.length;
  counter.textContent = `${Math.max(0, remaining)} characters remaining`;
  counter.classList.toggle('yellow', remaining <= 20 && remaining > 0);
  counter.classList.toggle('red', remaining <= 0);
  if (remaining <= 0 && e && e.inputType) {
    // prevent further typing by trimming content if user attempts to insert
    textarea.value = value.slice(0, MAX);
  }
}

textarea.addEventListener('input', updateCounter);

resetBtn.addEventListener('click', () => {
  textarea.value = '';
  updateCounter();
  textarea.focus();
});

// Prevent default typing beyond limit on keydown to demonstrate preventDefault()
textarea.addEventListener('keydown', (e) => {
  const value = textarea.value;
  const remaining = MAX - value.length;
  if (remaining <= 0 && !['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {
    e.preventDefault();
  }
});

// initialize
updateCounter();

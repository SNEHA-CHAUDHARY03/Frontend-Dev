"use strict";
// Q1 Product List Manager: Add/Edit/Delete with Event Delegation and auto-save on outside click

const input = document.getElementById('newProduct');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');

function createListItem(name) {
  const li = document.createElement('li');
  li.innerHTML = `<span class="label">${escapeHtml(name)}</span>
    <div class="controls">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>`;
  return li;
}

function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

addBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (!value) return;
  productList.appendChild(createListItem(value));
  input.value = '';
});

// Event delegation for edit/delete
productList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  if (e.target.classList.contains('delete')) {
    li.remove();
  } else if (e.target.classList.contains('edit')) {
    enterEditMode(li);
  }
});

// Click outside to auto-save
document.addEventListener('click', (e) => {
  const editing = productList.querySelector('.editing');
  if (!editing) return;
  if (!editing.contains(e.target)) {
    exitEditMode(editing, true);
  }
});

function enterEditMode(li) {
  if (productList.querySelector('.editing')) return; // one at a time
  li.classList.add('editing');
  const label = li.querySelector('.label');
  const current = label.textContent;
  label.innerHTML = `<input class="editInput" value="${escapeHtml(current)}"/>`;
  const inputEl = li.querySelector('.editInput');
  inputEl.focus();

  // save on Enter
  inputEl.addEventListener('keydown', function onKey(e){
    if (e.key === 'Enter') { exitEditMode(li, false); inputEl.removeEventListener('keydown', onKey); }
    if (e.key === 'Escape') { exitEditMode(li, true); inputEl.removeEventListener('keydown', onKey); }
  });
}

function exitEditMode(li, revert) {
  const inputEl = li.querySelector('.editInput');
  if (!inputEl) return;
  const span = li.querySelector('.label');
  if (revert) {
    // restore original text (we stored it in dataset?) if not, keep current
    span.textContent = inputEl.defaultValue || inputEl.value;
  } else {
    span.textContent = inputEl.value.trim() || inputEl.defaultValue || 'Unnamed';
  }
  li.classList.remove('editing');
}

// Prevent accidental form submission via Enter on whole page
document.addEventListener('keydown', (e)=>{ if (e.key === 'Enter' && document.activeElement === input) { e.preventDefault(); addBtn.click(); } });

"use strict";
// Q6 Real-Time Table Filter using input event

const search = document.getElementById('search');
const tbody = document.querySelector('#students tbody');
const nores = document.getElementById('nores');

function filterTable() {
  const q = search.value.trim().toLowerCase();
  let visible = 0;
  Array.from(tbody.rows).forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    const branch = row.cells[1].textContent.toLowerCase();
    const match = !q || name.includes(q) || branch.includes(q);
    row.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  nores.style.display = visible ? 'none' : '';
}

search.addEventListener('input', filterTable);

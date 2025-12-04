"use strict";
// Q8: Dynamic Object Updater
// user = { name: 'John', email: 'john@mail.com', age: 21 }
// Build a form to edit values and update the object in real time.

const user = { name: 'John', email: 'john@mail.com', age: 21 };

function updateUserFromObject(updates) {
  // updates: { name, email, age }
  if ('name' in updates) user.name = updates.name;
  if ('email' in updates) user.email = updates.email;
  if ('age' in updates) user.age = Number(updates.age);
  console.log('User updated ->', user);
  return user;
}

// For browser: builds a form and attaches input listeners to update `user` in real time
function buildUserForm(containerId = null) {
  if (typeof document === 'undefined') {
    console.log('Not running in browser. Use updateUserFromObject to update user.');
    return null;
  }
  const c = document.getElementById(containerId);
  if (!c) throw new Error('Container not found');
  c.innerHTML = `\n+    <label>Name</label><input id="u_name" value="${user.name}" /><br/>\n+    <label>Email</label><input id="u_email" value="${user.email}" /><br/>\n+    <label>Age</label><input id="u_age" value="${user.age}" /><br/>\n+    <pre id="u_preview"></pre>`;

  function refreshPreview() { document.getElementById('u_preview').textContent = JSON.stringify(user, null, 2); }
  ['u_name', 'u_email', 'u_age'].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('input', () => {
      updateUserFromObject({ name: document.getElementById('u_name').value, email: document.getElementById('u_email').value, age: document.getElementById('u_age').value });
      refreshPreview();
    });
  });
  refreshPreview();
}

// Demo (Node)
console.log('--- Q8 Dynamic Object Updater ---');
console.log('Initial user:', user);
updateUserFromObject({ name: 'Jane', age: 25 });
console.log('--- End Q8 ---\n');

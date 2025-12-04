"use strict";
// Q4: Custom Form Builder (Forms + Classes)
// FormBuilder generates HTML for fields and provides getFormData() to collect values.

class FormBuilder {
  constructor(fields = [], containerId = null) {
    this.fields = fields; // e.g., [{type:'text', label:'Username', name:'username'}]
    this.containerId = containerId; // optional DOM element id to mount into
    this.formId = `form_${Date.now()}`;
  }

  // returns HTML string for the form
  buildHTML() {
    const fieldsHTML = this.fields.map(f => {
      const name = f.name || f.label.toLowerCase().replace(/\s+/g, '_');
      if (f.type === 'textarea') {
        return `<label>${f.label}</label><textarea name="${name}"></textarea>`;
      }
      return `<label>${f.label}</label><input type="${f.type || 'text'}" name="${name}" />`;
    }).join('<br/>');

    return `<form id="${this.formId}">${fieldsHTML}<br/><button type="button" id="${this.formId}_submit">Submit</button></form>`;
  }

  // Mounts form into DOM if containerId is provided
  mount() {
    if (!this.containerId) return null;
    const container = document.getElementById(this.containerId);
    if (!container) throw new Error('Container not found in DOM');
    container.innerHTML = this.buildHTML();
    // attach submit handler
    document.getElementById(`${this.formId}_submit`).addEventListener('click', () => {
      const data = this.getFormData();
      console.log('Form submitted:', data);
    });
    return this.formId;
  }

  // Collects values from DOM; if DOM not present, returns null
  getFormData() {
    if (typeof document === 'undefined') {
      // Not running in browser; return simulated empty object for demonstration
      const simulated = this.fields.reduce((acc, f) => {
        const name = f.name || f.label.toLowerCase().replace(/\s+/g, '_');
        acc[name] = f.default || '';
        return acc;
      }, {});
      return simulated;
    }

    const form = document.getElementById(this.formId);
    if (!form) throw new Error('Form not found in DOM');
    const data = {};
    this.fields.forEach(f => {
      const name = f.name || f.label.toLowerCase().replace(/\s+/g, '_');
      const el = form.elements[name];
      data[name] = el ? el.value : null;
    });
    return data;
  }
}

// Demo usage (Node simulation)
const fb = new FormBuilder([
  { type: 'text', label: 'Username', name: 'username', default: 'user1' },
  { type: 'email', label: 'Email', name: 'email', default: 'a@b.com' },
  { type: 'password', label: 'Password', name: 'password' }
]);

console.log('--- Q4 Custom Form Builder ---');
console.log('Generated form HTML (for browser):\n', fb.buildHTML());
console.log('Simulated getFormData (Node):', fb.getFormData());
console.log('--- End Q4 ---\n');

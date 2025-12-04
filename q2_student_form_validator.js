"use strict";
// Q2: Student Form Validator (Forms + RegExp)
// Provides validation functions for Name, Email, Phone, Password.
// In a browser, you can call `validateFormFields(formElement)` to apply borders/messages.

// Regular expressions
const nameRegex = /^[A-Za-z\s]+$/; // letters and spaces
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic email
const phoneRegex = /^\d{10}$/; // exactly 10 digits
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/; // at least 1 uppercase, 1 number, 1 special char

function validateName(name) {
  return nameRegex.test(String(name).trim());
}

function validateEmail(email) {
  return emailRegex.test(String(email).trim());
}

function validatePhone(phone) {
  return phoneRegex.test(String(phone).trim());
}

function validatePassword(password) {
  return passwordRegex.test(String(password));
}

// Example usage (Node or browser console simulation)
function validateFormFields(data) {
  // data: { name, email, phone, password }
  const results = {};
  results.name = validateName(data.name);
  results.email = validateEmail(data.email);
  results.phone = validatePhone(data.phone);
  results.password = validatePassword(data.password);

  console.log('--- Q2 Student Form Validator ---');
  console.log('Input:', data);
  console.log('Validation results:', results);

  // In a browser, to show red/green borders you could do:
  // if (!results.name) element.style.border='2px solid red' else green

  return results;
}

// Demo
validateFormFields({ name: 'Mina', email: 'mina@example.com', phone: '9876543210', password: 'Passw0rd!' });
validateFormFields({ name: 'Mina123', email: 'invalid', phone: '123', password: 'weak' });

console.log('--- End Q2 ---\n');

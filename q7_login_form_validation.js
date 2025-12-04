"use strict";
// Q7: Login Form Validation using RegExp
// Username: at least 5 characters
// Password: at least 8 characters, include number, uppercase, lowercase, special char

const usernameRegex = /^.{5,}$/; // 5 or more chars
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

function validateLogin(username, password) {
  const errors = [];
  if (!usernameRegex.test(String(username))) errors.push('Username must be at least 5 characters');
  if (!passwordRegex.test(String(password))) errors.push('Password must be at least 8 chars and include uppercase, lowercase, number, special char');
  return { valid: errors.length === 0, errors };
}

// Demo
console.log('--- Q7 Login Form Validation ---');
console.log('Test 1 (valid):', validateLogin('user01', 'StrongP@ss1'));
console.log('Test 2 (invalid):', validateLogin('usr', 'weak'));
console.log('--- End Q7 ---\n');

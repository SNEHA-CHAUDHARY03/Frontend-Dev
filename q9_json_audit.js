"use strict";
// Q9 – JSON Audit
// Parse entries, detect invalid JSON and missing keys, convert age to Number, filter under-18

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const parsed = JSON.parse(line);
    // Validate required keys: user and age
    if (!('user' in parsed) || !('age' in parsed)) {
      throw new Error('MissingKeys');
    }

    // Convert age to Number when possible
    const ageNum = Number(parsed.age);
    if (Number.isNaN(ageNum)) throw new TypeError('InvalidAge');
    parsed.age = ageNum;

    clean.push(parsed);
    console.log(`Parsed valid entry at line ${i}:`, parsed);
  } catch (err) {
    errors.push({ line: i, raw: line, error: err.message });
    console.log(`Error parsing line ${i}:`, err.message);
  }
}

console.log('\nClean entries array:', clean);
console.log('Errors encountered:', errors);

// Bonus: filter under-18 users
const adults = clean.filter(u => u.age >= 18);
const under18 = clean.filter(u => u.age < 18);
console.log('\nAdults (>=18):', adults);
console.log('Under 18:', under18);

console.log('\nControl flow note: when JSON.parse throws, the catch block runs and the loop continues. Use debugger to step through on the thrown iteration.');

console.log('--- End Q9 ---\n');

"use strict";
// Q2: applyOperation(numbers, operation)
// Takes an array and a callback operation to transform each element

function applyOperation(numbers, operation) {
  if (!Array.isArray(numbers)) throw new TypeError('numbers must be an array');
  if (typeof operation !== 'function') throw new TypeError('operation must be a function');
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i], i, numbers));
  }
  return result;
}

console.log('--- Q2 applyOperation Demo ---');
const arr = [1, 2, 3, 4];

// Double each number
const doubled = applyOperation(arr, n => n * 2);
console.log('Original:', arr, 'Doubled:', doubled);

// Square each number
const squared = applyOperation(arr, n => n * n);
console.log('Original:', arr, 'Squared:', squared);

console.log('--- End Q2 ---\n');

// Notes: applyOperation behaves like Array.prototype.map but implemented to demonstrate callbacks.

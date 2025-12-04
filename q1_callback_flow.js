"use strict";
// Q1: greetUser with callback
// Prints greeting and then executes callback showEndMessage

function showEndMessage() {
  console.log('Welcome to the course!');
}

function greetUser(name, callback) {
  if (typeof name !== 'string') throw new TypeError('name must be a string');
  console.log(`Hello ${name}`);
  // Execute the provided callback after greeting
  if (typeof callback === 'function') {
    callback();
  } else {
    console.log('No callback provided');
  }
}

console.log('--- Q1 Callback Flow Demo ---');
// Demonstrate named callback
greetUser('Alice', showEndMessage);

// Demonstrate anonymous callback
greetUser('Bob', () => console.log('Welcome to the course! (anonymous callback)'));

// Demonstrate missing callback
greetUser('Charlie');

console.log('--- End Q1 ---\n');

// Notes:
// - The callback demonstrates asynchronous-style flow control (but here executed synchronously).
// - In real async operations you would call the callback after an async task (e.g., in a fetch or setTimeout).

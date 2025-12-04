// Q8 – Strict Mode Showdown
// Demonstrate behavior with and without "use strict"

console.log('--- Q8 Strict Mode Showdown ---');

// Non-strict execution via Function constructor (creates a function in sloppy mode)
const nonStrictCode = `function demo(a, a) { total = 10; delete total; return { a1: a, total: typeof total }; } return demo(5,10);`;
try {
  const demoNonStrict = new Function(nonStrictCode);
  const result = demoNonStrict();
  console.log('Non-strict result (duplicate params allowed, implicit global creation):', result);
} catch (err) {
  console.log('Non-strict execution error:', err && err.message);
}

// Strict execution using function with 'use strict' directive
const strictCode = `"use strict"; function demo(a, a) { total = 10; delete total; return 1; } return demo(5,10);`;
try {
  const demoStrict = new Function(strictCode);
  demoStrict();
  console.log('Strict execution completed (unexpected)');
} catch (err) {
  console.log('Strict execution error (expected):', err && err.message);
}

// Correct ES6 version
function demoCorrect(a, b) {
  'use strict';
  let total = 10; // declared variable
  // delete total; // illegal to delete declared variable - will be a syntax error in strict
  return { a, b, total };
}
console.log('Correct ES6 call:', demoCorrect(5, 10));

console.log('\nExplanation:');
console.log('- In non-strict (sloppy) mode duplicate parameter names are allowed and implicit globals may be created.');
console.log('- In strict mode duplicate parameter names and implicit globals cause syntax or runtime errors. `delete` on an unqualified identifier is also not allowed.');

console.log('--- End Q8 ---\n');

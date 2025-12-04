"use strict";
// Q4 – Debugging Mystery
// Original code (throws under strict mode):
// function showMessage() {
//   greeting = "Welcome"; // undeclared
//   console.log(greeting);
// }
// showMessage();

console.log('--- Q4 Debugging Mystery ---');

console.log('Demonstrate why the original throws under strict mode:');
try {
  // In strict mode assigning to an undeclared variable throws a ReferenceError.
  // We'll demonstrate by intentionally performing the same action in a try/catch.
  function broken() {
    // The following line would throw: ReferenceError: greeting is not defined
    // greeting = 'Welcome';
    // console.log(greeting);
  }
  // broken(); // commented to prevent throw here; explanation follows.
  console.log('If uncommented, `greeting = "Welcome"` would throw ReferenceError in strict mode because it creates an implicit global.');
} catch (err) {
  console.log('Caught error (expected in strict):', err.message);
}

// Fixed version: declare the variable properly inside the function scope
function showMessageFixed() {
  let greeting = "Welcome"; // properly declared in local scope
  console.log('Fixed output ->', greeting);
}
showMessageFixed();

console.log('\nExplanation:');
console.log('- In non-strict mode, assigning to an undeclared name creates an implicit global variable (bad practice).');
console.log('- In strict mode, assigning to an undeclared identifier throws a ReferenceError. Declaring with `let/const/var` prevents the error and scopes the variable locally.');

// Debugging note: set a breakpoint on the first line of `showMessageFixed` in VS Code
// and step through to observe the call stack and local variables.

console.log('--- End Q4 ---\n');

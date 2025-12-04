"use strict";
// Q9 – Debugging the Event Loop
// Predict output, run snippet, and explain microtask vs macrotask

/*
 Predicted output (comments before running):
 1. Script start
 2. Script end
 3. Promise callback
 4. Timeout callback

 Reason: Promise callbacks (microtasks) are processed after current stack but before macrotasks like setTimeout.
*/

console.log('--- Q9 Event Loop Debugging ---');
console.log('Script start');
setTimeout(() => console.log('Timeout callback'), 0);
Promise.resolve().then(() => console.log('Promise callback'));
console.log('Script end');

/*
 After running, observe actual output and compare to prediction.
 Explanation: The microtask queue (Promises) runs immediately after the current call stack, before handling macrotasks (setTimeout), hence the order above.
*/

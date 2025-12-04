"use strict";
// Q7: makeMultiplier closure

function makeMultiplier(multiplier) {
  // multiplier is captured in the returned function's closure
  return function (num) {
    return num * multiplier;
  };
}

console.log('--- Q7 makeMultiplier Closure Demo ---');
const triple = makeMultiplier(3);
console.log('triple(5) ->', triple(5)); // 15

// Explanation:
// - When makeMultiplier(3) runs, `multiplier` is 3. The returned function keeps a reference
//   to that variable even after makeMultiplier finishes. This preserved lexical environment
//   is called a closure. Each returned function retains its own `multiplier` value.

const double = makeMultiplier(2);
console.log('double(8) ->', double(8)); // 16

console.log('--- End Q7 ---\n');

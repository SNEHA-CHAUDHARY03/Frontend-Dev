"use strict";
// Q10 – Nested Hoisting and Closures
// Original:
// function outer() {
//   console.log(count);
//   var count = 5;
//   function inner() {
//     console.log(count);
//     var count = 10;
//   }
//   inner();
// }
// outer();

console.log('--- Q10 Nested Hoisting and Closures ---');

console.log('Prediction:');
console.log('- outer console.log(count) prints `undefined` because var count is hoisted in outer with initial value undefined.');
console.log('- inner console.log(count) prints `undefined` because inner has its own `var count` hoisted to undefined before assignment.');

console.log('\nRunning original pattern to observe behavior:');
function outerOriginal() {
  console.log('outer original count =>', count);
  var count = 5;
  function inner() {
    console.log('inner original count =>', count);
    var count = 10;
  }
  inner();
}
outerOriginal();

console.log('\nExplanation: each function creates its own variable environment. Hoisting moves `var` declarations to the top of their function scope with initial value `undefined`.');

// Convert inner to arrow and remove inner's own var to observe lexical capture
function outerArrowInner() {
  console.log('outer arrow-internal BEFORE assign =>', count);
  var count = 5;
  const inner = () => {
    // arrow uses lexical scope: it will read `count` from outer's environment
    console.log('inner arrow captured count =>', count);
  };
  inner();
}
outerArrowInner();

console.log('\nNotes for debugger:');
console.log('- Set breakpoints at the first console.log inside `outerOriginal` and inside `inner` to inspect local environments.');
console.log('- You will see separate `count` variables in outer and inner for the original function version. Arrow inner captures outer `count` lexically.');

console.log('--- End Q10 ---\n');

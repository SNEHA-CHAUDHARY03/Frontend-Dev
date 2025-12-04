"use strict";
// Q5 – Hoisting Lab: The Sequence Trap
// Original snippet to predict and reason about:
// console.log(score);
// announce();
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }

console.log('--- Q5 Hoisting Lab ---');

console.log('Prediction and explanation:');
console.log('- `var score` is hoisted with initial value `undefined` until the assignment `score = 50` runs. So first console.log(score) will print `undefined` if executed before assignment.');
console.log('- Function declarations (`announce` and `startGame`) are hoisted entirely, so calling `announce()` before its declaration works.');
console.log('- `let status` is block-scoped and not initialized until its declaration; calling `startGame()` before `let status` would cause a ReferenceError (TDZ).');

console.log('\nDemonstration of the broken sequence (commented out to avoid runtime errors):');
// The original sequence would cause `console.log(score)` -> undefined, announce() OK,
// then `startGame()` called before `let status` would throw a ReferenceError.

// Fixed version (correct ordering):
var score = 50;
function announce() { console.log('Game started'); }
let status = 'ready';
function startGame() { console.log(status); }

console.log('\nRunning fixed version:');
console.log(score); // 50
announce(); // Game started
startGame(); // ready

// Arrow function variant to compare hoisting differences
const announceArrow = () => console.log('Game started (arrow)');
const startGameArrow = () => console.log(status);

console.log('\nArrow variant run (note: arrow functions are not hoisted like function declarations):');
announceArrow();
startGameArrow();

console.log('\nHoisting memory states summary:');
console.log('- `var score`: hoisted as property on function/global with initial value `undefined` until assignment.');
console.log('- Function declarations: hoisted fully (callable before definition).');
console.log('- `let`/`const`: hoisted to TDZ and not usable before initialization.');

console.log('--- End Q5 ---\n');

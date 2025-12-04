"use strict";
// Q2 – Task Scheduler: Micro vs Macro Challenge
// Demonstrate event loop ordering: microtasks (Promise.then) run before macrotasks (setTimeout)

console.log('--- Q2 Task Scheduler Demo ---');
console.log('Start');

setTimeout(() => console.log('macrotask: setTimeout callback (macrotask)'), 0);

Promise.resolve().then(() => console.log('microtask: Promise.then callback (microtask)'));

console.log('synchronous log: immediate');

console.log('End');

/*
 Expected order explanation:
 - 'Start' and synchronous logs run first.
 - Microtasks queued by Promises run after the current stack finishes, before rendering and before macrotasks.
 - setTimeout callbacks (macrotasks) run later.

 So the printed order will be:
 Start
 synchronous log: immediate
 End
 microtask: Promise.then callback (microtask)
 macrotask: setTimeout callback (macrotask)
*/

console.log('--- End Q2 Demo (see explanation in comments) ---\n');

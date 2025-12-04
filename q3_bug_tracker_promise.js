"use strict";
// Q3 – Bug Tracker: Callback to Promise Migration
// Convert old callback-based fetchBugs to Promise-based getBugs()

function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// Promise-based version
function getBugs() {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Random failure simulation
      if (Math.random() < 0.2) return reject(new Error('Failed to fetch bugs (simulated)'));
      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

console.log('--- Q3 Bug Tracker (Promise-based) ---');
getBugs()
  .then(bugs => {
    console.log('Bugs received:');
    console.table(bugs.map((b, i) => ({ id: i + 1, bug: b })));
  })
  .catch(err => console.log('Error fetching bugs:', err.message));

// Example of calling the old callback-based function (for comparison)
fetchBugs(bugs => console.log('Old callback-style fetched:', bugs));

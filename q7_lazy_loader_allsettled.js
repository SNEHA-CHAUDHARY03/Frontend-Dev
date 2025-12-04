"use strict";
// Q7 – The Lazy Loader: Promise.allSettled()
// Load profile, posts, messages with different delays; randomly reject one

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject('Profile failed');
      resolve('Profile Loaded');
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject('Posts failed');
      resolve('Posts Loaded');
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) return reject('Messages failed');
      resolve('Messages Loaded');
    }, 1000);
  });
}

console.log('--- Q7 Lazy Loader (Promise.allSettled) ---');
const start = Date.now();
Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
  .then(results => {
    results.forEach((r, i) => {
      if (r.status === 'fulfilled') console.log(`Module ${i + 1} succeeded:`, r.value);
      else console.log(`Module ${i + 1} failed:`, r.reason);
    });
    console.log('Total time (ms):', Date.now() - start);
  });

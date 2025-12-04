"use strict";
// Q4 – DevOps Delay: Async Timeout Race
// Server A: responds in 2s; Server B: responds in 3s

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server A failure'));
      resolve('Server A response');
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Server B failure'));
      resolve('Server B response');
    }, 3000);
  });
}

console.log('--- Q4 DevOps Delay Demo ---');

// Promise.all
Promise.all([serverA(), serverB()])
  .then(results => console.log('Deployment completed for all servers:', results))
  .catch(err => console.log('Deployment failed (all):', err.message));

// Promise.race
Promise.race([serverA(), serverB()])
  .then(fast => console.log('Fastest response:', fast))
  .catch(err => console.log('Fastest call failed:', err.message));

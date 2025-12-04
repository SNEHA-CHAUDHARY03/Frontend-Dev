"use strict";
// Q10 – The Final Delivery: Async Pipeline Debugger
// Steps: takeOrder -> prepare -> pack -> dispatch -> deliver
// Each returns a Promise with random 1-2s delay and possible failure

function randDelay() {
  return Math.floor(Math.random() * 1000) + 1000; // 1000-2000ms
}

function stepFactory(stepName, failProbability = 0.15) {
  return function () {
    return new Promise((resolve, reject) => {
      const delay = randDelay();
      setTimeout(() => {
        if (Math.random() < failProbability) return reject(new Error(`${stepName} failed`));
        resolve(`${stepName} done`);
      }, delay);
    });
  };
}

const takeOrder = stepFactory('Order taken', 0.05);
const prepare = stepFactory('Food prepared', 0.12);
const pack = stepFactory('Package ready', 0.08);
const dispatch = stepFactory('Out for delivery', 0.1);
const deliver = stepFactory('Delivered', 0.07);

async function runPipeline() {
  console.log('--- Q10 Async Delivery Pipeline ---');
  console.log('Start Pipeline');
  try {
    console.log('Step 1: Order taken');
    await takeOrder();

    console.log('Step 2: Food prepared');
    await prepare();

    console.log('Step 3: Package ready');
    await pack();

    console.log('Step 4: Out for delivery');
    await dispatch();

    console.log('Delivery completed!');
    await deliver();
    console.log('All steps finished successfully');
  } catch (err) {
    console.log('Pipeline failed!', err.message);
  }
  console.log('--- End Q10 ---\n');
}

// Run pipeline demo
runPipeline();

// Comments on async behavior and event loop control flow:
// - Each `await` pauses the async function execution until the Promise resolves or rejects.
// - While awaiting, other tasks (microtasks/macrotasks) continue to run on the event loop.
// - Errors thrown by any awaited Promise are caught by the surrounding try/catch, enabling centralized error handling.

"use strict";
// Q8 – Order Processing Flow: Async Retry Mechanism
// submitOrder fails 50% time. processOrder retries up to 3 times.

function submitOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) return reject(new Error('Network/Server error (simulated)'));
      resolve({ status: 'ok', orderId: Math.floor(Math.random() * 10000) });
    }, 800);
  });
}

async function processOrder(order, maxAttempts = 3) {
  console.log('--- Q8 Order Processing with Retry ---');
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await submitOrder(order);
      console.log(`Attempt ${attempt}: Success`, res);
      return res;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed - ${err.message}`);
      if (attempt === maxAttempts) {
        throw new Error('Order could not be processed');
      }
      // optionally wait before next attempt
      await new Promise(r => setTimeout(r, 500));
    }
  }
}

// Demo
(async () => {
  try {
    const result = await processOrder({ items: [1, 2] }, 3);
    console.log('Final result:', result);
  } catch (err) {
    console.log('Final failure:', err.message);
  }
})();

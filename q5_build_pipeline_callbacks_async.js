"use strict";
// Q5 – Frontend Rush: Avoiding Callback Hell
// Implement the pipeline with nested callbacks (callback hell) then refactor with async/await.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Callback-hell version (each stage takes 1s)
function pipelineWithCallbacks(finalCallback) {
  setTimeout(() => {
    console.log('Stage: design');
    setTimeout(() => {
      console.log('Stage: build');
      setTimeout(() => {
        console.log('Stage: test');
        setTimeout(() => {
          console.log('Stage: deploy');
          setTimeout(() => {
            console.log('Stage: celebrate');
            if (typeof finalCallback === 'function') finalCallback();
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// Async/await version
async function pipelineAsync() {
  console.log('\nAsync/Await pipeline start');
  await delay(1000); console.log('Stage: design');
  await delay(1000); console.log('Stage: build');
  await delay(1000); console.log('Stage: test');
  await delay(1000); console.log('Stage: deploy');
  await delay(1000); console.log('Stage: celebrate');
  console.log('Async/Await pipeline end\n');
}

console.log('--- Q5 Callback Hell Demonstration ---');
console.log('Running callback-hell pipeline (nested callbacks)');
pipelineWithCallbacks(() => console.log('Callback pipeline complete'));

// Run async version after a short delay to avoid interleaving outputs with the callback demo
setTimeout(() => {
  pipelineAsync();
}, 7000);

/*
Why async/await is better:
- The nested callback version is hard to read and maintain due to indentation and deeply nested scopes.
- The async/await version reads top-to-bottom and uses normal control flow, making error handling and logic clearer.
*/

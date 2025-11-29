/*
 Q6 - Event-Based Counter Simulation
 Requirements:
 - Use count = 0
 - Create increment() and decrement() functions
 - Each modifies count and logs value
 - Simulate clicks manually in code
 - Use nested function to show local scope behavior
*/

console.log('\n=== Q6 - Event-Based Counter Simulation ===\n');

let count = 0; // global counter

function increment() {
  // Nested function to modify the outer `count` variable
  function doIncrement() {
    count += 1;
    console.log(`Incremented → count = ${count}`);
  }
  doIncrement();
}

function decrement() {
  // Nested function to modify the outer `count` variable
  function doDecrement() {
    count -= 1;
    console.log(`Decremented → count = ${count}`);
  }
  doDecrement();
}

// Simulate clicks
console.log('Initial count:', count);
increment(); // simulate click
increment();
decrement();
increment();

// Show nested scope: local variable shadowing
function demoLocalScope() {
  let count = 100; // local to this function; does not change global count
  console.log('Inside demoLocalScope, local `count` =', count);
  function inner() {
    count += 10;
    console.log('Inner modified local count to', count);
  }
  inner();
  console.log('Leaving demoLocalScope, local count =', count);
}

demoLocalScope();
console.log('Global count remains:', count);

console.log('\n=== End Q6 ===\n');
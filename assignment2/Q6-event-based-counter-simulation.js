/* ========================================
   Q6. EVENT-BASED COUNTER SIMULATION
   
   Demonstrates function scope and nested functions
   with simulated click events modifying a counter.
   ======================================== */

console.log("=== Q6: EVENT-BASED COUNTER SIMULATION ===\n");

// Global counter variable
let count = 0;

// ===== FUNCTION 1: INCREMENT =====
/**
 * Increment counter by 1
 * Demonstrates how a function can modify a global variable
 */
function increment() {
  count = count + 1;
  console.log(`🔼 Increment clicked → Count: ${count}`);
  return count;
}

// ===== FUNCTION 2: DECREMENT =====
/**
 * Decrement counter by 1
 * Demonstrates how a function can modify a global variable
 */
function decrement() {
  count = count - 1;
  console.log(`🔽 Decrement clicked → Count: ${count}`);
  return count;
}

// ===== FUNCTION 3: RESET =====
/**
 * Reset counter to 0
 * Additional utility function
 */
function reset() {
  count = 0;
  console.log(`🔄 Reset clicked → Count: ${count}`);
  return count;
}

// ===== FUNCTION 4: GET COUNT =====
/**
 * Get current count without modifying it
 */
function getCount() {
  console.log(`📊 Current Count: ${count}`);
  return count;
}

// ===== SIMULATED CLICK EVENTS =====
console.log("--- Simulating Click Events ---\n");

// Click sequence 1
increment();
increment();
increment();
console.log();

// Click sequence 2
decrement();
decrement();
console.log();

// Get current
getCount();
console.log();

// Reset and test
reset();
increment();
increment();
console.log();

// ===== NESTED FUNCTION DEMONSTRATION =====
console.log("=== NESTED FUNCTION DEMONSTRATION ===\n");

/**
 * Counter manager with nested functions
 * Shows scope shadowing and closure behavior
 */
function counterManager() {
  // This 'count' shadows the global 'count'
  let count = 100;  // Local count (shadows global)
  
  console.log("Inside counterManager:");
  console.log(`  Local count: ${count}`);
  console.log(`  Global count: ${globalThis.count || 0}\n`);  // Note: may not work in all environments
  
  // Nested increment function
  function incrementLocal() {
    count = count + 1;
    console.log(`  Local increment → Local count: ${count}`);
    return count;
  }
  
  // Nested decrement function
  function decrementLocal() {
    count = count - 1;
    console.log(`  Local decrement → Local count: ${count}`);
    return count;
  }
  
  // Nested function that accesses outer scope
  function showBoth() {
    console.log(`  Local count: ${count}`);
    console.log(`  Global count: ${globalThis.count || 0}\n`);
  }
  
  // Execute nested functions
  incrementLocal();
  incrementLocal();
  decrementLocal();
  showBoth();
  
  return count;
}

// Call the nested function
const localResult = counterManager();
console.log(`Returned from counterManager: ${localResult}`);
console.log(`Global count after function: ${count}\n`);

// ===== CLOSURE EXAMPLE =====
console.log("=== CLOSURE EXAMPLE ===\n");

/**
 * Factory function that creates counter functions
 * Demonstrates closure - inner function remembers the outer function's scope
 */
function createCounter() {
  let count = 0;  // This persists after function returns
  
  return {
    increment: function() {
      count++;
      console.log(`Counter 1 - Increment: ${count}`);
      return count;
    },
    decrement: function() {
      count--;
      console.log(`Counter 1 - Decrement: ${count}`);
      return count;
    },
    getCount: function() {
      console.log(`Counter 1 - Current: ${count}`);
      return count;
    }
  };
}

// Create two independent counters
const counter1 = createCounter();
const counter2 = createCounter();

console.log("Counter 1:");
counter1.increment();
counter1.increment();
counter1.decrement();
counter1.getCount();
console.log();

console.log("Counter 2:");
counter2.increment();
counter2.increment();
counter2.increment();
counter2.getCount();
console.log();

console.log("Counter 1 (independent of Counter 2):");
counter1.getCount();
console.log();

// ===== SCOPE EXPLANATION =====
console.log("=== SCOPE EXPLANATION ===\n");

console.log("1. GLOBAL SCOPE:");
console.log("   - 'count' at top level");
console.log("   - Accessible from anywhere");
console.log("   - Current value: " + count + "\n");

console.log("2. FUNCTION SCOPE:");
console.log("   - 'count' inside counterManager()");
console.log("   - Local variables shadow global");
console.log("   - Accessible only within function\n");

console.log("3. CLOSURE SCOPE:");
console.log("   - Nested functions remember parent scope");
console.log("   - Each closure is independent");
console.log("   - Example: counter1 and counter2 are separate\n");

// ===== FINAL COUNTER STATE =====
console.log("=== FINAL STATE ===\n");
console.log(`Global count: ${count}`);
console.log("All simulation complete!");

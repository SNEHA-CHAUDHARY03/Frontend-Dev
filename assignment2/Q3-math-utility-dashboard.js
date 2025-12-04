/* ========================================
   Q3. MATH UTILITY DASHBOARD
   
   Demonstrates Math object methods including
   round, sqrt, pow, and random with formatting.
   ======================================== */

console.log("=== Q3: MATH UTILITY DASHBOARD ===\n");

// Starting number for calculations
const x = 16.75;

console.log(`Input Number: ${x}\n`);

// ===== MATH OPERATION 1: ROUND =====
const rounded = Math.round(x);
console.log(`1. Rounded Value (Math.round):
   Formula: Math.round(${x})
   Result: ${rounded}\n`);

// ===== MATH OPERATION 2: SQUARE ROOT =====
const squareRoot = Math.sqrt(x);
console.log(`2. Square Root (Math.sqrt):
   Formula: Math.sqrt(${x})
   Result: ${squareRoot.toFixed(2)}\n`);

// ===== MATH OPERATION 3: POWER =====
const power = Math.pow(x, 3);
console.log(`3. Power Calculation (Math.pow):
   Formula: Math.pow(${x}, 3) = ${x}³
   Result: ${power.toFixed(2)}\n`);

// ===== MATH OPERATION 4: RANDOM =====
// Generate random number between 10-50
// Formula: Math.floor(Math.random() * 41) + 10
// Breakdown: random() returns 0-1, multiply by 41 (50-10+1), floor it, add 10
const randomNum = Math.floor(Math.random() * 41) + 10;
console.log(`4. Random Number (Math.random):
   Range: 10 - 50
   Formula: Math.floor(Math.random() * 41) + 10
   Result: ${randomNum}\n`);

// ===== FORMATTED RESULT SUMMARY (Template Literals) =====
console.log("=== FORMATTED RESULT SUMMARY ===\n");

const summary = `
╔════════════════════════════════════════╗
║     MATH UTILITY DASHBOARD REPORT      ║
╠════════════════════════════════════════╣
║                                        ║
║  Input Number: ${x}                      ║
║                                        ║
║  ✓ Rounded:        ${rounded}                        ║
║  ✓ Square Root:    ${squareRoot.toFixed(2)}               ║
║  ✓ Cube Power:     ${power.toFixed(2)}              ║
║  ✓ Random (10-50): ${randomNum}                        ║
║                                        ║
╚════════════════════════════════════════╝
`;

console.log(summary);

// ===== ADDITIONAL MATH OPERATIONS FOR REFERENCE =====
console.log("=== ADDITIONAL MATH OPERATIONS ===\n");

console.log(`Math.floor(${x}): ${Math.floor(x)} (rounds down)`);
console.log(`Math.ceil(${x}): ${Math.ceil(x)} (rounds up)`);
console.log(`Math.abs(-${x}): ${Math.abs(-x)} (absolute value)`);
console.log(`Math.max(10, 20, 5): ${Math.max(10, 20, 5)}`);
console.log(`Math.min(10, 20, 5): ${Math.min(10, 20, 5)}\n`);

// ===== MULTIPLE RANDOM NUMBERS SIMULATION =====
console.log("=== GENERATING 5 RANDOM NUMBERS (10-50) ===\n");

for (let i = 1; i <= 5; i++) {
  const random = Math.floor(Math.random() * 41) + 10;
  console.log(`Random #${i}: ${random}`);
}

console.log("\n=== EXPLANATION OF RANDOM FORMULA ===");
console.log("Math.random() → Returns 0 to 0.999...");
console.log("× 41 → Expands range to 0 to 40.999...");
console.log("Math.floor() → Removes decimals: 0 to 40");
console.log("+ 10 → Shifts range to 10 to 50");

/* ========================================
   Q1. SCOPE CONFLICT RESOLVER
   
   Demonstrates variable scoping (global vs local)
   and how bonus calculation works with scope rules.
   ======================================== */

// Global variable - accessible throughout the code
let bonus = 5000;

console.log("=== Q1: SCOPE CONFLICT RESOLVER ===\n");

/**
 * Calculate total salary based on employment status
 * @param {number} localSalary - Local variable for salary
 * @param {boolean} isPermanent - Local variable for employment status
 */
function calculateSalary(localSalary, isPermanent) {
  // Local variable - only accessible within this function
  let salary = localSalary;
  
  console.log(`Local Salary: ${salary}`);
  console.log(`Is Permanent Employee: ${isPermanent}`);
  
  // Check if employee is permanent
  if (isPermanent) {
    salary = salary + bonus; // Add global bonus to local salary
    console.log(`✓ Permanent employee - Bonus added!`);
  } else {
    console.log(`✗ Temporary employee - No bonus`);
  }
  
  // Display total salary
  console.log(`Total Salary: ₹${salary}\n`);
  
  return salary;
}

// ===== TEST CASE 1: Permanent Employee =====
console.log("--- Test Case 1: Permanent Employee ---");
calculateSalary(40000, true);

// ===== TEST CASE 2: Temporary Employee =====
console.log("--- Test Case 2: Temporary Employee ---");
calculateSalary(35000, false);

// ===== TEST CASE 3: Different Salaries =====
console.log("--- Test Case 3: Different Salary Levels ---");
const permanentExecutive = calculateSalary(60000, true);
const temporaryStaff = calculateSalary(25000, false);

console.log("=== SCOPE EXPLANATION ===");
console.log(`Global 'bonus': ${bonus} (accessible everywhere)`);
console.log("Local 'salary': Only exists inside calculateSalary()");
console.log("Local 'isPermanent': Only exists inside calculateSalary()");
console.log("\nNote: Changing isPermanent affects the calculation,");
console.log("but doesn't change the global scope - it only controls");
console.log("whether the global 'bonus' is added to local 'salary'.");

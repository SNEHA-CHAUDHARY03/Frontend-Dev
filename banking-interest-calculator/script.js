/* ========================================
   Banking Interest Calculator
   Purpose: Calculate final balance using compound interest formula
   ======================================== */

// Function to calculate final balance with compound interest
function calculateInterest(accountType, amount, years) {
  let baseRate = 0;
  
  // Determine base interest rate based on account type
  if (accountType.toLowerCase() === "savings") {
    baseRate = 4; // 4% for savings account
  } else if (accountType.toLowerCase() === "fixed deposit") {
    baseRate = 6.5; // 6.5% for fixed deposit
  }
  
  // Rule: If deposit > ₹1,00,000, add 1% bonus interest
  let finalRate = baseRate;
  if (amount > 100000) {
    finalRate += 1; // Add 1% bonus
    console.log(`✨ Bonus interest applied (+1%) for deposit > ₹1,00,000`);
  }
  
  // Compound interest formula: total = amount * (1 + rate/100)^years
  let finalBalance = amount * Math.pow((1 + finalRate / 100), years);
  
  return {
    baseRate: baseRate,
    finalRate: finalRate,
    finalBalance: Math.round(finalBalance * 100) / 100 // Round to 2 decimals
  };
}

// Test Case 1: Savings account with standard amount
console.log("\n========== BANKING INTEREST CALCULATOR ==========\n");
console.log("--- Test Case 1: Savings Account (₹50,000 for 3 years) ---");

let result1 = calculateInterest("Savings", 50000, 3);
console.log(`Account Type: Savings`);
console.log(`Principal Amount: ₹50,000`);
console.log(`Time Period: 3 years`);
console.log(`Base Interest Rate: ${result1.baseRate}%`);
console.log(`Final Interest Rate: ${result1.finalRate}%`);
console.log(`Final Balance: ₹${result1.finalBalance}`);

// Test Case 2: Fixed deposit with large amount (qualifies for bonus)
console.log("\n--- Test Case 2: Fixed Deposit (₹1,50,000 for 5 years) ---");

let result2 = calculateInterest("Fixed Deposit", 150000, 5);
console.log(`Account Type: Fixed Deposit`);
console.log(`Principal Amount: ₹1,50,000`);
console.log(`Time Period: 5 years`);
console.log(`Base Interest Rate: ${result2.baseRate}%`);
console.log(`Final Interest Rate: ${result2.finalRate}%`);
console.log(`Final Balance: ₹${result2.finalBalance}`);

// Test Case 3: Savings with bonus interest
console.log("\n--- Test Case 3: Savings Account (₹2,00,000 for 2 years) ---");

let result3 = calculateInterest("Savings", 200000, 2);
console.log(`Account Type: Savings`);
console.log(`Principal Amount: ₹2,00,000`);
console.log(`Time Period: 2 years`);
console.log(`Base Interest Rate: ${result3.baseRate}%`);
console.log(`Final Interest Rate: ${result3.finalRate}%`);
console.log(`Final Balance: ₹${result3.finalBalance}`);
console.log("\n==================================================\n");
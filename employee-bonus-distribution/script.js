/* ========================================
   Employee Bonus Distribution
   Purpose: Calculate annual bonus based on rating, experience, and salary
   ======================================== */

// Function to calculate employee bonus
function calculateBonus(baseSalary, performanceRating, experienceYears) {
  
  // Rule 1: Determine bonus percentage based on rating
  let bonusPercent = 0;
  
  if (performanceRating === 5) {
    bonusPercent = 20; // 20% for rating 5
  } else if (performanceRating === 4) {
    bonusPercent = 15; // 15% for rating 4
  } else if (performanceRating === 3) {
    bonusPercent = 10; // 10% for rating 3
  }
  // Below 3 → 0% bonus (no bonus)
  
  // Rule 2: Add 5% extra bonus if experience > 5 years
  if (experienceYears > 5) {
    bonusPercent += 5; // Add 5% extra for 5+ years experience
  }
  
  // Calculate initial bonus amount
  let calculatedBonus = (baseSalary * bonusPercent) / 100;
  
  // Rule 3: Cap bonus at ₹25,000 if salary > ₹1,00,000
  let finalBonus = calculatedBonus;
  let cappedMessage = "";
  
  if (baseSalary > 100000 && calculatedBonus > 25000) {
    finalBonus = 25000;
    cappedMessage = " (Capped at ₹25,000)";
  }
  
  // Calculate final salary after bonus
  let totalSalary = baseSalary + finalBonus;
  
  return {
    baseSalary: baseSalary,
    performanceRating: performanceRating,
    experienceYears: experienceYears,
    bonusPercent: bonusPercent,
    calculatedBonus: Math.round(calculatedBonus * 100) / 100,
    finalBonus: finalBonus,
    cappedMessage: cappedMessage,
    totalSalary: totalSalary
  };
}

// Test Case 1: Good performer with 3 years experience
console.log("\n========== EMPLOYEE BONUS DISTRIBUTION ==========\n");
console.log("--- Test Case 1: Rating 4, 3 Years Experience ---");

let emp1 = calculateBonus(75000, 4, 3);
console.log(`Base Salary: ₹${emp1.baseSalary}`);
console.log(`Performance Rating: ${emp1.performanceRating}/5`);
console.log(`Experience: ${emp1.experienceYears} years`);
console.log(`Bonus Percentage: ${emp1.bonusPercent}%`);
console.log(`Calculated Bonus: ₹${emp1.calculatedBonus}`);
console.log(`Final Bonus: ₹${emp1.finalBonus}${emp1.cappedMessage}`);
console.log(`Total Salary: ₹${emp1.totalSalary}`);

// Test Case 2: Excellent performer with high salary and experience
console.log("\n--- Test Case 2: Rating 5, 7 Years Experience (High Salary) ---");

let emp2 = calculateBonus(150000, 5, 7);
console.log(`Base Salary: ₹${emp2.baseSalary}`);
console.log(`Performance Rating: ${emp2.performanceRating}/5`);
console.log(`Experience: ${emp2.experienceYears} years`);
console.log(`Bonus Percentage: ${emp2.bonusPercent}% (20% + 5% experience)`);
console.log(`Calculated Bonus: ₹${emp2.calculatedBonus}`);
console.log(`Final Bonus: ₹${emp2.finalBonus}${emp2.cappedMessage}`);
console.log(`Total Salary: ₹${emp2.totalSalary}`);

// Test Case 3: Average performer with no bonus
console.log("\n--- Test Case 3: Rating 2, 2 Years Experience ---");

let emp3 = calculateBonus(60000, 2, 2);
console.log(`Base Salary: ₹${emp3.baseSalary}`);
console.log(`Performance Rating: ${emp3.performanceRating}/5`);
console.log(`Experience: ${emp3.experienceYears} years`);
console.log(`Bonus Percentage: ${emp3.bonusPercent}% (No bonus for rating < 3)`);
console.log(`Calculated Bonus: ₹${emp3.calculatedBonus}`);
console.log(`Final Bonus: ₹${emp3.finalBonus}`);
console.log(`Total Salary: ₹${emp3.totalSalary}`);

console.log("\n=================================================\n");
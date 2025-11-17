/* ========================================
   Random Coupon Generator
   Purpose: Generate random coupons with discount levels and prime bonus
   ======================================== */

// Function to check if a number is prime
function isPrimeNumber(num) {
  // Prime numbers > 1 with no divisors except 1 and itself
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  // Check for divisors up to square root of number
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to generate coupon and determine discount
function generateCoupon() {
  // Rule 1: Generate random number between 1-100
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  
  // Rule 2: Determine discount based on range
  let discountMessage = "";
  
  if (randomNumber <= 30) {
    discountMessage = "🎫 You won a 10% discount";
  } else if (randomNumber <= 60) {
    discountMessage = "🎫 You won a 20% discount";
  } else if (randomNumber <= 90) {
    discountMessage = "🎫 You won a 30% discount";
  } else {
    discountMessage = "🎫 You won a 50% Mega Offer!";
  }
  
  // Rule 3: Check if random number is prime for bonus
  let bonusMessage = "";
  if (isPrimeNumber(randomNumber)) {
    bonusMessage = "✨ Prime number bonus applied!";
  }
  
  return {
    randomNumber: randomNumber,
    discountMessage: discountMessage,
    isPrime: isPrimeNumber(randomNumber),
    bonusMessage: bonusMessage
  };
}

// Generate multiple coupons and display results
console.log("\n========== RANDOM COUPON GENERATOR ==========\n");

// Generate 5 random coupons
for (let i = 1; i <= 5; i++) {
  let coupon = generateCoupon();
  
  console.log(`--- Coupon #${i} ---`);
  console.log(`Coupon Number: ${coupon.randomNumber}`);
  console.log(coupon.discountMessage);
  
  if (coupon.isPrime) {
    console.log(coupon.bonusMessage);
  }
  console.log("");
}

// Detailed example showing all ranges
console.log("\n========== DISCOUNT RANGE BREAKDOWN ==========\n");

// Test all ranges with static numbers
let testCases = [
  { num: 15, label: "1-30" },
  { num: 45, label: "31-60" },
  { num: 75, label: "61-90" },
  { num: 95, label: "91-100" }
];

testCases.forEach(test => {
  console.log(`Test: Number ${test.num} (Range ${test.label})`);
  
  let discount = "";
  if (test.num <= 30) {
    discount = "10%";
  } else if (test.num <= 60) {
    discount = "20%";
  } else if (test.num <= 90) {
    discount = "30%";
  } else {
    discount = "50% Mega";
  }
  
  console.log(`Discount: ${discount}`);
  console.log(`Prime: ${isPrimeNumber(test.num) ? "✅ Yes" : "❌ No"}`);
  console.log("");
});

console.log("===========================================\n");
/* ========================================
   E-Commerce Delivery Estimator
   Purpose: Calculate total cost and delivery time based on order rules
   ======================================== */

// Test Case 1: Regular order, non-premium, local
let orderAmount = 450;
let isPremium = false;
let isRemote = false;

// Initialize delivery fee
let deliveryFee = 0;

// Rule 1: If order is below ₹500 and not premium, add ₹50 delivery fee
if (orderAmount < 500 && !isPremium) {
  deliveryFee = 50;
  console.log("📦 Delivery fee applied: ₹50");
}

// Rule 2: If premium member, waive delivery fee
if (isPremium) {
  deliveryFee = 0;
  console.log("✨ Premium member: Delivery fee waived!");
}

// Calculate total cost
let totalCost = orderAmount + deliveryFee;

// Initialize delivery time
let deliveryDays = 3; // Default 3 days

// Rule 3: If address is remote, add 2 extra days
if (isRemote) {
  deliveryDays += 2;
  console.log("🌄 Remote address: +2 days added");
}

// Display results
console.log("\n========== DELIVERY ESTIMATOR RESULTS ==========");
console.log(`Order Amount: ₹${orderAmount}`);
console.log(`Premium Member: ${isPremium ? "Yes" : "No"}`);
console.log(`Remote Address: ${isRemote ? "Yes" : "No"}`);
console.log(`Delivery Fee: ₹${deliveryFee}`);
console.log(`Total Cost: ₹${totalCost}`);
console.log(`Estimated Delivery Time: ${deliveryDays} days`);
console.log("===============================================\n");

// Test Case 2: Large premium order from remote location
console.log("\n--- Test Case 2: Premium member, remote location ---");
orderAmount = 750;
isPremium = true;
isRemote = true;

deliveryFee = 0; // Premium waives fee
if (isPremium) console.log("✨ Premium member: Delivery fee waived!");

deliveryDays = 3;
if (isRemote) {
  deliveryDays += 2;
  console.log("🌄 Remote address: +2 days added");
}

totalCost = orderAmount + deliveryFee;

console.log(`\nFinal Summary:
  Total Cost: ₹${totalCost}
  Delivery Time: ${deliveryDays} days\n`);
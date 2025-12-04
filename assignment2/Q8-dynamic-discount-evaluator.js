/* ========================================
   Q8. DYNAMIC DISCOUNT EVALUATOR
   
   Demonstrates array of objects, reduce() method
   for calculating totals with category-based
   discounts and conditional bonus discounts.
   ======================================== */

console.log("=== Q8: DYNAMIC DISCOUNT EVALUATOR ===\n");

// ===== SAMPLE SHOPPING CART =====
const shoppingCart = [
  { item: "Laptop", category: "electronics", price: 75000 },
  { item: "T-Shirt", category: "fashion", price: 1500 },
  { item: "Jeans", category: "fashion", price: 3000 },
  { item: "Smartphone", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 4500 },
  { item: "Headphones", category: "electronics", price: 5000 }
];

console.log("═══════════════════════════════════════════════════\n");
console.log("SHOPPING CART CONTENTS:");
console.log("───────────────────────────────────────────────────");

// Display cart items
shoppingCart.forEach((item, index) => {
  console.log(`${index + 1}. ${item.item.padEnd(20)} | ₹${item.price.toString().padEnd(6)} | ${item.category}`);
});

console.log("\n═══════════════════════════════════════════════════\n");

/**
 * Calculate cart total with category-based discounts
 * @param {Array} cart - Array of items with price and category
 * @returns {Object} - Total, discounts, and final price
 */
function calculateCartWithDiscount(cart) {
  // ===== STEP 1: CALCULATE SUBTOTAL =====
  const subtotal = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  
  console.log(`📦 SUBTOTAL CALCULATION`);
  console.log(`───────────────────────────────────────────────────`);
  console.log(`Items in cart: ${cart.length}`);
  
  // Show breakdown
  let electronicsTotal = 0;
  let fashionTotal = 0;
  
  cart.forEach((item) => {
    if (item.category === "electronics") {
      electronicsTotal += item.price;
    } else if (item.category === "fashion") {
      fashionTotal += item.price;
    }
  });
  
  console.log(`  Electronics: ₹${electronicsTotal}`);
  console.log(`  Fashion: ₹${fashionTotal}`);
  console.log(`Subtotal: ₹${subtotal}\n`);
  
  // ===== STEP 2: APPLY CATEGORY DISCOUNTS =====
  console.log(`💰 CATEGORY-BASED DISCOUNTS`);
  console.log(`───────────────────────────────────────────────────`);
  
  const discountRates = {
    electronics: 0.10,  // 10% discount
    fashion: 0.05       // 5% discount
  };
  
  let categoryDiscount = 0;
  
  // Calculate discounts by category
  Object.keys(discountRates).forEach((category) => {
    const categoryTotal = cart
      .filter(item => item.category === category)
      .reduce((sum, item) => sum + item.price, 0);
    
    const discount = categoryTotal * discountRates[category];
    categoryDiscount += discount;
    
    console.log(`  ${category.charAt(0).toUpperCase() + category.slice(1)}: ${(discountRates[category] * 100).toFixed(0)}% × ₹${categoryTotal} = -₹${discount.toFixed(2)}`);
  });
  
  console.log(`Total Category Discount: -₹${categoryDiscount.toFixed(2)}\n`);
  
  // ===== STEP 3: APPLY BONUS DISCOUNT IF THRESHOLD MET =====
  const threshold = 50000;
  let bonusDiscount = 0;
  
  console.log(`🎁 BONUS DISCOUNT (if subtotal > ₹${threshold})`);
  console.log(`───────────────────────────────────────────────────`);
  
  if (subtotal > threshold) {
    bonusDiscount = subtotal * 0.05;  // Additional 5% if over ₹50k
    console.log(`✅ Subtotal (₹${subtotal}) exceeds ₹${threshold}`);
    console.log(`   Bonus: 5% × ₹${subtotal} = -₹${bonusDiscount.toFixed(2)}\n`);
  } else {
    console.log(`❌ Subtotal (₹${subtotal}) is below ₹${threshold}`);
    console.log(`   No bonus discount applied\n`);
  }
  
  // ===== STEP 4: CALCULATE FINAL TOTAL =====
  const totalDiscount = categoryDiscount + bonusDiscount;
  const finalTotal = subtotal - totalDiscount;
  
  console.log(`═══════════════════════════════════════════════════`);
  console.log(`FINAL CALCULATION`);
  console.log(`═══════════════════════════════════════════════════\n`);
  
  console.log(`Subtotal:              ₹${subtotal.toFixed(2)}`);
  console.log(`Category Discount:     -₹${categoryDiscount.toFixed(2)}`);
  console.log(`Bonus Discount:        -₹${bonusDiscount.toFixed(2)}`);
  console.log(`───────────────────────────────────────────────────`);
  console.log(`TOTAL DISCOUNT:        -₹${totalDiscount.toFixed(2)}`);
  console.log(`═══════════════════════════════════════════════════`);
  console.log(`FINAL TOTAL:           ₹${finalTotal.toFixed(2)}`);
  console.log(`═══════════════════════════════════════════════════\n`);
  
  // Calculate savings percentage
  const savingsPercent = ((totalDiscount / subtotal) * 100).toFixed(1);
  console.log(`💵 You save: ₹${totalDiscount.toFixed(2)} (${savingsPercent}%)\n`);
  
  return {
    subtotal,
    categoryDiscount,
    bonusDiscount,
    totalDiscount,
    finalTotal,
    savingsPercent
  };
}

// ===== EXECUTE CALCULATION =====
const result = calculateCartWithDiscount(shoppingCart);

// ===== DETAILED BREAKDOWN =====
console.log("═══════════════════════════════════════════════════");
console.log("DETAILED ITEM BREAKDOWN WITH DISCOUNTS");
console.log("═══════════════════════════════════════════════════\n");

shoppingCart.forEach((item) => {
  const categoryDiscount = item.price * (item.category === "electronics" ? 0.10 : 0.05);
  const discountedPrice = item.price - categoryDiscount;
  
  console.log(`${item.item.padEnd(20)}`);
  console.log(`  Price: ₹${item.price.toString().padEnd(7)} | Category: ${item.category}`);
  console.log(`  Discount (${item.category === "electronics" ? "10%" : "5%"}): -₹${categoryDiscount.toFixed(2)}`);
  console.log(`  Final Price: ₹${discountedPrice.toFixed(2)}\n`);
});

// ===== ALTERNATIVE CALCULATION USING REDUCE =====
console.log("═══════════════════════════════════════════════════");
console.log("REDUCE METHOD - ALTERNATIVE APPROACH");
console.log("═══════════════════════════════════════════════════\n");

const discountSummary = shoppingCart.reduce((summary, item) => {
  const discount = item.category === "electronics" 
    ? item.price * 0.10 
    : item.price * 0.05;
  
  summary.subtotal += item.price;
  summary.discounts += discount;
  
  return summary;
}, { subtotal: 0, discounts: 0 });

console.log(`Using reduce() to calculate totals:\n`);
console.log(`const discountSummary = cart.reduce((summary, item) => {`);
console.log(`  const discount = item.category === "electronics" ? item.price * 0.10 : item.price * 0.05;`);
console.log(`  summary.subtotal += item.price;`);
console.log(`  summary.discounts += discount;`);
console.log(`  return summary;`);
console.log(`}, { subtotal: 0, discounts: 0 });\n`);

console.log(`Result:`);
console.log(`  Subtotal: ₹${discountSummary.subtotal}`);
console.log(`  Total Discounts: ₹${discountSummary.discounts.toFixed(2)}`);
console.log(`  Final Total: ₹${(discountSummary.subtotal - discountSummary.discounts).toFixed(2)}\n`);

// ===== CATEGORY SUMMARY =====
console.log("═══════════════════════════════════════════════════");
console.log("CATEGORY SUMMARY");
console.log("═══════════════════════════════════════════════════\n");

const categorySummary = shoppingCart.reduce((summary, item) => {
  if (!summary[item.category]) {
    summary[item.category] = { items: 0, total: 0 };
  }
  summary[item.category].items++;
  summary[item.category].total += item.price;
  return summary;
}, {});

Object.keys(categorySummary).forEach((category) => {
  const data = categorySummary[category];
  const discountRate = category === "electronics" ? 10 : 5;
  const discount = (data.total * discountRate) / 100;
  const final = data.total - discount;
  
  console.log(`${category.toUpperCase()}:`);
  console.log(`  Items: ${data.items}`);
  console.log(`  Subtotal: ₹${data.total}`);
  console.log(`  Discount (${discountRate}%): -₹${discount.toFixed(2)}`);
  console.log(`  Final: ₹${final.toFixed(2)}\n`);
});

// ===== KEY METHODS USED =====
console.log("═══════════════════════════════════════════════════");
console.log("KEY ARRAY METHODS USED");
console.log("═══════════════════════════════════════════════════\n");

console.log("1. reduce():");
console.log("   - Accumulates values from array to single result");
console.log("   - Syntax: arr.reduce((accumulator, current) => ..., initialValue)\n");

console.log("2. filter():");
console.log("   - Returns new array with items matching condition");
console.log("   - Example: cart.filter(item => item.category === 'electronics')\n");

console.log("3. forEach():");
console.log("   - Executes function for each array element");
console.log("   - Example: cart.forEach(item => console.log(item.price))\n");

console.log("4. Object iteration:");
console.log("   - Object.keys() for getting all keys");
console.log("   - Example: Object.keys(discountRates).forEach(category => ...)\n");

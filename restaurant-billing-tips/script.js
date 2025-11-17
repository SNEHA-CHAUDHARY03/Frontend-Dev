/* ========================================
   Restaurant Billing with Tips
   Purpose: Calculate full bill with taxes and tips
   ======================================== */

// Function to calculate restaurant bill
function calculateBill(baseCost, isDiningIn) {
  
  // Rule 1: GST = 5% of base cost (always applied)
  let gst = (baseCost * 5) / 100;
  
  // Rule 2: Service tax = 10% if dining in, else 0%
  let serviceTax = isDiningIn ? (baseCost * 10) / 100 : 0;
  
  // Calculate subtotal before tip
  let subtotal = baseCost + gst + serviceTax;
  
  // Rule 3: If total bill > ₹2000, add 8% recommended tip
  let tip = 0;
  if (subtotal > 2000) {
    tip = (subtotal * 8) / 100;
  }
  
  // Final total rounded to 2 decimals
  let finalTotal = subtotal + tip;
  finalTotal = Math.round(finalTotal * 100) / 100;
  
  return {
    baseCost: baseCost,
    isDiningIn: isDiningIn,
    gst: Math.round(gst * 100) / 100,
    serviceTax: Math.round(serviceTax * 100) / 100,
    subtotal: Math.round(subtotal * 100) / 100,
    tip: Math.round(tip * 100) / 100,
    finalTotal: finalTotal
  };
}

// Test Case 1: Dine-in, below ₹2000 threshold
console.log("\n========== RESTAURANT BILLING SYSTEM ==========\n");
console.log("--- Test Case 1: Dine-in (Below 2000) ---");

let bill1 = calculateBill(1200, true);
console.log(`Base Amount: ₹${bill1.baseCost}`);
console.log(`GST (5%): ₹${bill1.gst}`);
console.log(`Service Tax (10% dine-in): ₹${bill1.serviceTax}`);
console.log(`Subtotal: ₹${bill1.subtotal}`);
console.log(`Recommended Tip: ₹${bill1.tip} (no tip < ₹2000)`);
console.log(`Final Total: ₹${bill1.finalTotal}`);

// Test Case 2: Dine-in, above ₹2000 threshold (tip applies)
console.log("\n--- Test Case 2: Dine-in (Above 2000 - Tip Applied) ---");

let bill2 = calculateBill(2500, true);
console.log(`Base Amount: ₹${bill2.baseCost}`);
console.log(`GST (5%): ₹${bill2.gst}`);
console.log(`Service Tax (10% dine-in): ₹${bill2.serviceTax}`);
console.log(`Subtotal: ₹${bill2.subtotal}`);
console.log(`Recommended Tip (8%): ₹${bill2.tip} (subtotal > ₹2000)`);
console.log(`Final Total: ₹${bill2.finalTotal}`);

// Test Case 3: Takeaway (no service tax)
console.log("\n--- Test Case 3: Takeaway (No Service Tax) ---");

let bill3 = calculateBill(1500, false);
console.log(`Base Amount: ₹${bill3.baseCost}`);
console.log(`GST (5%): ₹${bill3.gst}`);
console.log(`Service Tax (takeaway): ₹${bill3.serviceTax}`);
console.log(`Subtotal: ₹${bill3.subtotal}`);
console.log(`Recommended Tip: ₹${bill3.tip}`);
console.log(`Final Total: ₹${bill3.finalTotal}`);

console.log("\n==============================================\n");
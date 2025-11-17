/* ========================================
   Cinema Ticketing System
   Purpose: Calculate ticket pricing with discounts and service fees
   ======================================== */

// Function to calculate ticket pricing
function calculateTicketPrice(showTime, numberOfTickets, category, age) {
  
  // Define base ticket prices
  const MORNING_PRICE = 120;
  const EVENING_PRICE = 180;
  
  // Rule 1: Determine base price per ticket based on show time
  let pricePerTicket = showTime.toLowerCase() === "morning" ? MORNING_PRICE : EVENING_PRICE;
  
  // Rule 2: Apply discounts based on category and age
  let discountPercent = 0;
  if (category.toLowerCase() === "student") {
    discountPercent = 10; // Students get 10% discount
  } else if (age > 60) {
    discountPercent = 20; // Seniors (age > 60) get 20% discount
  }
  
  // Calculate discounted price per ticket
  let discountAmount = (pricePerTicket * discountPercent) / 100;
  let discountedPrice = pricePerTicket - discountAmount;
  
  // Calculate base total for all tickets
  let baseTotal = pricePerTicket * numberOfTickets;
  let discountedTotal = discountedPrice * numberOfTickets;
  
  // Rule 3: If more than 3 tickets booked, add ₹50 service fee
  let serviceFee = 0;
  if (numberOfTickets > 3) {
    serviceFee = 50;
  }
  
  // Final amount
  let finalAmount = discountedTotal + serviceFee;
  
  return {
    pricePerTicket: pricePerTicket,
    discountPercent: discountPercent,
    discountedPrice: discountedPrice,
    numberOfTickets: numberOfTickets,
    baseTotal: baseTotal,
    discountedTotal: discountedTotal,
    serviceFee: serviceFee,
    finalAmount: finalAmount
  };
}

// Test Case 1: Student, morning show, 2 tickets
console.log("\n========== CINEMA TICKETING SYSTEM ==========\n");
console.log("--- Test Case 1: Student, Morning Show, 2 Tickets ---");

let ticket1 = calculateTicketPrice("Morning", 2, "Student", 20);
console.log(`Show Time: Morning`);
console.log(`Base Price per Ticket: ₹${ticket1.pricePerTicket}`);
console.log(`Category: Student | Discount: ${ticket1.discountPercent}%`);
console.log(`Discounted Price per Ticket: ₹${ticket1.discountedPrice}`);
console.log(`Base Total: ₹${ticket1.baseTotal}`);
console.log(`Discounted Total: ₹${ticket1.discountedTotal}`);
console.log(`Service Fee: ₹${ticket1.serviceFee}`);
console.log(`Final Amount: ₹${ticket1.finalAmount}`);

// Test Case 2: Senior, evening show, 4 tickets (qualifies for service fee)
console.log("\n--- Test Case 2: Senior, Evening Show, 4 Tickets ---");

let ticket2 = calculateTicketPrice("Evening", 4, "Regular", 68);
console.log(`Show Time: Evening`);
console.log(`Base Price per Ticket: ₹${ticket2.pricePerTicket}`);
console.log(`Category: Senior (Age 68) | Discount: ${ticket2.discountPercent}%`);
console.log(`Discounted Price per Ticket: ₹${ticket2.discountedPrice}`);
console.log(`Base Total: ₹${ticket2.baseTotal}`);
console.log(`Discounted Total: ₹${ticket2.discountedTotal}`);
console.log(`Service Fee: ₹${ticket2.serviceFee} (4 tickets > 3, fee applied)`);
console.log(`Final Amount: ₹${ticket2.finalAmount}`);

// Test Case 3: Regular customer, evening show, 3 tickets (no service fee)
console.log("\n--- Test Case 3: Regular Customer, Evening Show, 3 Tickets ---");

let ticket3 = calculateTicketPrice("Evening", 3, "Regular", 35);
console.log(`Show Time: Evening`);
console.log(`Base Price per Ticket: ₹${ticket3.pricePerTicket}`);
console.log(`Category: Regular | Discount: ${ticket3.discountPercent}%`);
console.log(`Base Total: ₹${ticket3.baseTotal}`);
console.log(`Discounted Total: ₹${ticket3.discountedTotal}`);
console.log(`Service Fee: ₹${ticket3.serviceFee} (3 tickets = no fee)`);
console.log(`Final Amount: ₹${ticket3.finalAmount}`);

console.log("\n=============================================\n");
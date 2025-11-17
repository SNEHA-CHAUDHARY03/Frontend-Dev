/* ========================================
   Library Fine Calculator
   Purpose: Calculate fine for overdue books with sliding rates and penalty
   ======================================== */

// Function to calculate fine for a single overdue book
function calculateFineForBook(daysDelayed) {
  let fine = 0;
  
  // Rule: Fine depends on delay duration
  if (daysDelayed >= 1 && daysDelayed <= 5) {
    fine = daysDelayed * 10; // ₹10 per day for 1-5 days
  } else if (daysDelayed >= 6 && daysDelayed <= 10) {
    fine = daysDelayed * 20; // ₹20 per day for 6-10 days
  } else if (daysDelayed > 10) {
    fine = daysDelayed * 50; // ₹50 per day for 11+ days
  }
  
  return fine;
}

// Function to calculate total fine for multiple delayed books
function calculateTotalFine(delayedBooks) {
  let totalFine = 0;
  
  // Calculate fine for each book using loop
  for (let i = 0; i < delayedBooks.length; i++) {
    let bookFine = calculateFineForBook(delayedBooks[i]);
    totalFine += bookFine;
  }
  
  // Rule: If more than 3 delayed returns, add ₹200 penalty
  let penalty = 0;
  if (delayedBooks.length > 3) {
    penalty = 200;
    totalFine += penalty;
  }
  
  return {
    books: delayedBooks,
    individualFines: delayedBooks.map(days => calculateFineForBook(days)),
    totalFineBeforePenalty: totalFine - penalty,
    penalty: penalty,
    totalFine: totalFine
  };
}

// Test Case 1: User with 2 late books (no penalty)
console.log("\n========== LIBRARY FINE CALCULATOR ==========\n");
console.log("--- Test Case 1: 2 Delayed Books (No Penalty) ---");

let fines1 = calculateTotalFine([3, 7]);
console.log(`Delayed Books: ${fines1.books.length}`);
console.log(`Days Delayed: ${fines1.books.join(", ")}`);
fines1.books.forEach((days, index) => {
  console.log(`  Book ${index + 1}: ${days} days → ₹${fines1.individualFines[index]}`);
});
console.log(`Total Fine (before penalty): ₹${fines1.totalFineBeforePenalty}`);
console.log(`Penalty: ₹${fines1.penalty} (≤3 books)`);
console.log(`Total Fine: ₹${fines1.totalFine}`);

// Test Case 2: User with 4 late books (penalty applies)
console.log("\n--- Test Case 2: 4 Delayed Books (With Penalty) ---");

let fines2 = calculateTotalFine([2, 8, 12, 5]);
console.log(`Delayed Books: ${fines2.books.length}`);
console.log(`Days Delayed: ${fines2.books.join(", ")}`);
fines2.books.forEach((days, index) => {
  console.log(`  Book ${index + 1}: ${days} days → ₹${fines2.individualFines[index]}`);
});
console.log(`Total Fine (before penalty): ₹${fines2.totalFineBeforePenalty}`);
console.log(`⚠️ Penalty: ₹${fines2.penalty} (>3 books = penalty applied)`);
console.log(`Total Fine: ₹${fines2.totalFine}`);

// Test Case 3: User with very late books
console.log("\n--- Test Case 3: 3 Very Late Books ---");

let fines3 = calculateTotalFine([15, 20, 11]);
console.log(`Delayed Books: ${fines3.books.length}`);
console.log(`Days Delayed: ${fines3.books.join(", ")}`);
fines3.books.forEach((days, index) => {
  console.log(`  Book ${index + 1}: ${days} days → ₹${fines3.individualFines[index]} (₹50/day)`);
});
console.log(`Total Fine (before penalty): ₹${fines3.totalFineBeforePenalty}`);
console.log(`Penalty: ₹${fines3.penalty} (exactly 3 books = no penalty)`);
console.log(`Total Fine: ₹${fines3.totalFine}`);

console.log("\n==========================================\n");
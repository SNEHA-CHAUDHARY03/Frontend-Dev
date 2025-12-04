/* ========================================
   Q9. ODD-EVEN NUMBER ANALYZER
   
   FizzBuzz variant: Classify numbers 1-30
   as Odd, Even, FizzBuzz (divisible by 3 & 5),
   Fizz (divisible by 3), or Buzz (divisible by 5).
   ======================================== */

console.log("=== Q9: ODD-EVEN NUMBER ANALYZER ===\n");

console.log("═══════════════════════════════════════════════════\n");
console.log("FIZZBUZZ CLASSIFICATION (1-30):");
console.log("─────────────────────────────────────────────────\n");

// ===== MAIN LOOP: CLASSIFY EACH NUMBER =====
const classifications = [];

for (let num = 1; num <= 30; num++) {
  let classification = "";
  
  // Check divisibility (order matters!)
  if (num % 3 === 0 && num % 5 === 0) {
    classification = "FizzBuzz";
  } else if (num % 3 === 0) {
    classification = "Fizz";
  } else if (num % 5 === 0) {
    classification = "Buzz";
  } else if (num % 2 === 0) {
    classification = "Even";
  } else {
    classification = "Odd";
  }
  
  classifications.push({
    number: num,
    classification: classification
  });
  
  // Display with visual formatting
  const symbol = getSymbol(classification);
  console.log(`${num.toString().padStart(2)} → ${symbol} ${classification.padEnd(10)}`);
}

console.log("\n═══════════════════════════════════════════════════\n");

/**
 * Get emoji symbol for classification
 * @param {string} classification - The classification type
 * @returns {string} - Emoji symbol
 */
function getSymbol(classification) {
  const symbols = {
    "FizzBuzz": "🔗",
    "Fizz": "🥤",
    "Buzz": "🐝",
    "Even": "➡️ ",
    "Odd": "◀️ "
  };
  return symbols[classification] || "❓";
}

// ===== COUNT STATISTICS =====
console.log("STATISTICAL BREAKDOWN:");
console.log("───────────────────────────────────────────────────\n");

const stats = {
  fizzbuzz: 0,
  fizz: 0,
  buzz: 0,
  even: 0,
  odd: 0
};

classifications.forEach((item) => {
  if (item.classification === "FizzBuzz") stats.fizzbuzz++;
  else if (item.classification === "Fizz") stats.fizz++;
  else if (item.classification === "Buzz") stats.buzz++;
  else if (item.classification === "Even") stats.even++;
  else if (item.classification === "Odd") stats.odd++;
});

console.log(`🔗 FizzBuzz (÷3 AND ÷5): ${stats.fizzbuzz}`);
console.log(`🥤 Fizz (÷3 only):       ${stats.fizz}`);
console.log(`🐝 Buzz (÷5 only):       ${stats.buzz}`);
console.log(`➡️  Even numbers:         ${stats.even}`);
console.log(`◀️  Odd numbers:          ${stats.odd}`);
console.log(`───────────────────────────────────────────────────`);
console.log(`Total: ${stats.fizzbuzz + stats.fizz + stats.buzz + stats.even + stats.odd}\n`);

// ===== DETAILED STEP-BY-STEP LOGIC =====
console.log("═══════════════════════════════════════════════════");
console.log("STEP-BY-STEP LOGIC EXAMPLE");
console.log("═══════════════════════════════════════════════════\n");

const exampleNumbers = [6, 10, 15, 21, 30];

exampleNumbers.forEach((num) => {
  console.log(`Number: ${num}`);
  console.log(`─────────────────────────────────────────────────`);
  
  console.log(`  Step 1: Check if divisible by both 3 AND 5`);
  const divBy3and5 = num % 3 === 0 && num % 5 === 0;
  console.log(`    ${num} ÷ 3 = ${num / 3} (remainder: ${num % 3}) → Divisible by 3? ${num % 3 === 0}`);
  console.log(`    ${num} ÷ 5 = ${num / 5} (remainder: ${num % 5}) → Divisible by 5? ${num % 5 === 0}`);
  console.log(`    Both conditions? ${divBy3and5}`);
  
  if (divBy3and5) {
    console.log(`  ✅ Result: FizzBuzz\n`);
  } else {
    console.log(`  Step 2: Check if divisible by 3 only`);
    const divBy3 = num % 3 === 0;
    console.log(`    ${num} % 3 = ${num % 3} → Divisible by 3? ${divBy3}`);
    
    if (divBy3) {
      console.log(`  ✅ Result: Fizz\n`);
    } else {
      console.log(`  Step 3: Check if divisible by 5 only`);
      const divBy5 = num % 5 === 0;
      console.log(`    ${num} % 5 = ${num % 5} → Divisible by 5? ${divBy5}`);
      
      if (divBy5) {
        console.log(`  ✅ Result: Buzz\n`);
      } else {
        console.log(`  Step 4: Check if even or odd`);
        const isEven = num % 2 === 0;
        console.log(`    ${num} % 2 = ${num % 2} → Even? ${isEven}`);
        console.log(`  ✅ Result: ${isEven ? "Even" : "Odd"}\n`);
      }
    }
  }
});

// ===== SEPARATION BY CLASSIFICATION =====
console.log("═══════════════════════════════════════════════════");
console.log("NUMBERS GROUPED BY CLASSIFICATION");
console.log("═══════════════════════════════════════════════════\n");

const fizzbuzzNumbers = classifications.filter(c => c.classification === "FizzBuzz").map(c => c.number);
const fizzNumbers = classifications.filter(c => c.classification === "Fizz").map(c => c.number);
const buzzNumbers = classifications.filter(c => c.classification === "Buzz").map(c => c.number);
const evenNumbers = classifications.filter(c => c.classification === "Even").map(c => c.number);
const oddNumbers = classifications.filter(c => c.classification === "Odd").map(c => c.number);

console.log(`🔗 FizzBuzz Numbers (÷3 AND ÷5):`);
console.log(`   ${fizzbuzzNumbers.join(", ")}\n`);

console.log(`🥤 Fizz Numbers (÷3 only):`);
console.log(`   ${fizzNumbers.join(", ")}\n`);

console.log(`🐝 Buzz Numbers (÷5 only):`);
console.log(`   ${buzzNumbers.join(", ")}\n`);

console.log(`➡️  Even Numbers:`);
console.log(`   ${evenNumbers.join(", ")}\n`);

console.log(`◀️  Odd Numbers:`);
console.log(`   ${oddNumbers.join(", ")}\n`);

// ===== DIVISIBILITY RULES EXPLANATION =====
console.log("═══════════════════════════════════════════════════");
console.log("DIVISIBILITY RULES");
console.log("═══════════════════════════════════════════════════\n");

console.log("Modulo Operator (%):");
console.log("─────────────────────────────────────────────────");
console.log("- Returns the REMAINDER of division");
console.log("- If remainder is 0, number is divisible\n");

console.log("Examples:");
console.log(`  12 % 3 = ${12 % 3} (divisible by 3) ✓`);
console.log(`  13 % 3 = ${13 % 3} (NOT divisible by 3) ✗`);
console.log(`  15 % 5 = ${15 % 5} (divisible by 5) ✓`);
console.log(`  17 % 5 = ${17 % 5} (NOT divisible by 5) ✗\n`);

console.log("Checking Even/Odd:");
console.log(`  num % 2 === 0 → Even`);
console.log(`  num % 2 === 1 → Odd\n`);

// ===== MATHEMATICAL PATTERNS =====
console.log("═══════════════════════════════════════════════════");
console.log("MATHEMATICAL PATTERNS IN RANGE 1-30");
console.log("═══════════════════════════════════════════════════\n");

console.log("Divisible by 3: Every 3rd number");
const div3 = [];
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) div3.push(i);
}
console.log(`  Count: ${div3.length}`);
console.log(`  Numbers: ${div3.join(", ")}\n`);

console.log("Divisible by 5: Every 5th number");
const div5 = [];
for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0) div5.push(i);
}
console.log(`  Count: ${div5.length}`);
console.log(`  Numbers: ${div5.join(", ")}\n`);

console.log("Divisible by both 3 AND 5: Every 15th number (LCM of 3 & 5)");
const div15 = [];
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) div15.push(i);
}
console.log(`  Count: ${div15.length}`);
console.log(`  Numbers: ${div15.join(", ")}\n`);

// ===== KEY OPERATORS AND LOGIC =====
console.log("═══════════════════════════════════════════════════");
console.log("KEY OPERATORS USED");
console.log("═══════════════════════════════════════════════════\n");

console.log("1. Modulo Operator (%):");
console.log("   - Returns remainder after division");
console.log("   - Syntax: a % b\n");

console.log("2. Logical AND (&&):");
console.log("   - Both conditions must be true");
console.log("   - Example: (num % 3 === 0) && (num % 5 === 0)\n");

console.log("3. Logical OR (||):");
console.log("   - At least one condition must be true");
console.log("   - Example: (condition1) || (condition2)\n");

console.log("4. For Loop:");
console.log("   - Repeats code for each number");
console.log("   - Syntax: for (let i = 1; i <= 30; i++)\n");

console.log("5. If-Else Statements:");
console.log("   - Executes different code based on conditions");
console.log("   - Order matters! Check most specific conditions first\n");

// ===== FUNCTION APPROACH =====
console.log("═══════════════════════════════════════════════════");
console.log("REUSABLE FUNCTION APPROACH");
console.log("═══════════════════════════════════════════════════\n");

function classifyNumber(num) {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  if (num % 2 === 0) return "Even";
  return "Odd";
}

console.log("Function Definition:");
console.log("function classifyNumber(num) {");
console.log('  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";');
console.log('  if (num % 3 === 0) return "Fizz";');
console.log('  if (num % 5 === 0) return "Buzz";');
console.log('  if (num % 2 === 0) return "Even";');
console.log('  return "Odd";');
console.log("}\n");

console.log("Usage Examples:");
console.log(`  classifyNumber(6) → "${classifyNumber(6)}"`);
console.log(`  classifyNumber(10) → "${classifyNumber(10)}"`);
console.log(`  classifyNumber(15) → "${classifyNumber(15)}"`);
console.log(`  classifyNumber(7) → "${classifyNumber(7)}"\n`);

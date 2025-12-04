/* ========================================
   Q2. STRING MANIPULATION REPORT
   
   Demonstrates string methods and formatting
   including trim, lowercase, capitalize, replace.
   ======================================== */

console.log("=== Q2: STRING MANIPULATION REPORT ===\n");

// Original product name with extra spaces and mixed case
const rawProductName = "  wireless headphones PRO  ";

console.log(`Original Title: "${rawProductName}"`);
console.log(`Original Length: ${rawProductName.length} characters\n`);

// ===== STEP 1: TRIM EXTRA SPACES =====
const trimmed = rawProductName.trim();
console.log(`After trim(): "${trimmed}"`);
console.log(`Length: ${trimmed.length} characters\n`);

// ===== STEP 2: CONVERT TO LOWERCASE =====
const lowercase = trimmed.toLowerCase();
console.log(`After toLowerCase(): "${lowercase}"\n`);

// ===== STEP 3: CAPITALIZE FIRST LETTER OF EACH WORD =====
// Split by spaces, map to capitalize first letter, join back
const capitalized = lowercase
  .split(" ")  // Split into array: ["wireless", "headphones", "pro"]
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize each word
  .join(" ");  // Join back with spaces

console.log(`After capitalizing each word: "${capitalized}"\n`);

// ===== STEP 4: REPLACE "PRO" WITH "PRO EDITION" =====
const finalTitle = capitalized.replace("Pro", "Pro Edition");
console.log(`After replace("pro" → "Pro Edition"): "${finalTitle}"`);
console.log(`Final Length: ${finalTitle.length} characters\n`);

// ===== ALTERNATIVE APPROACH (CHAINED) =====
console.log("=== ALTERNATIVE: CHAINED METHOD APPROACH ===\n");

const cleanTitle = rawProductName
  .trim()
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ")
  .replace("Pro", "Pro Edition");

console.log(`Final Result: "${cleanTitle}"`);
console.log(`Character Count: ${cleanTitle.length}`);
console.log(`Word Count: ${cleanTitle.split(" ").length} words\n`);

// ===== DETAILED BREAKDOWN =====
console.log("=== DETAILED BREAKDOWN ===");
console.log(`1. Trimmed: "${trimmed}" (removed leading/trailing spaces)`);
console.log(`2. Lowercase: "${lowercase}" (all lowercase)`);
console.log(`3. Capitalized: "${capitalized}" (each word starts with capital)`);
console.log(`4. Final: "${finalTitle}" (pro → Pro Edition)`);
console.log(`\nFinal Output: "${finalTitle}" - ${finalTitle.length} chars`);

// ===== TEST WITH DIFFERENT PRODUCTS =====
console.log("\n=== TESTING WITH OTHER PRODUCTS ===\n");

const products = [
  "  LAPTOP GAMING PRO  ",
  "  smart watch elite  ",
  "  TABLET BASIC  "
];

products.forEach((product, index) => {
  const processed = product
    .trim()
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("Pro", "Pro Edition")
    .replace("Basic", "Basic Series");
  
  console.log(`Product ${index + 1}: "${product}" → "${processed}"`);
});

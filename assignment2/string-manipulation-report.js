/*
 Q2 - String Manipulation Report
 Requirements:
 - Start with " wireless headphones PRO "
 - Trim, lowercase, capitalize first letter of each word
 - Replace "pro" with "Pro Edition"
 - Output cleaned title and its length
 Uses: trim(), split(), map(), join(), replace(), length
*/

const rawProduct = " wireless headphones PRO ";
console.log('\n=== Q2 - String Manipulation Report ===\n');
console.log('Raw product title:', JSON.stringify(rawProduct));

// Step 1: Trim whitespace
const trimmed = rawProduct.trim();
// Step 2: Convert to lowercase
const lower = trimmed.toLowerCase();

// Step 3: Split words, capitalize first letter of each
const words = lower.split(/\s+/).map(word => {
  // Capitalize first char, add rest of word
  return word.charAt(0).toUpperCase() + word.slice(1);
});

// Step 4: Join words back to title
let cleanTitle = words.join(' ');

// Step 5: Replace 'Pro' (case-insensitive previously normalized) with 'Pro Edition'
// We replaced earlier 'pro' to 'Pro', now target 'Pro' specifically
cleanTitle = cleanTitle.replace(/\bPro\b/, 'Pro Edition');

// Display results
console.log('Cleaned Title:', cleanTitle);
console.log('Length of cleaned title:', cleanTitle.length);
console.log('\n--- Breakdown ---');
console.log('Trimmed:', JSON.stringify(trimmed));
console.log('Lowercase:', lower);
console.log('Words:', words);
console.log('\n=== End Q2 ===\n');
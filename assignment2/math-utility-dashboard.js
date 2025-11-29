/*
 Q3 - Math Utility Dashboard
 Requirements:
 - x = 16.75
 - Show Math.round(x), Math.sqrt(x), Math.pow(x,3)
 - Random integer between 10–50
 - Use template literals for summary
*/

const x = 16.75;
console.log('\n=== Q3 - Math Utility Dashboard ===\n');

// Rounded
const rounded = Math.round(x);
// Square root
const sqrt = Math.sqrt(x);
// Power (cube)
const cube = Math.pow(x, 3);
// Random integer between 10 and 50 inclusive
const randomBetween = Math.floor(Math.random() * 41) + 10; // (0..40)+10 => 10..50

// Display using template literal
console.log(`Number: ${x}`);
console.log(`Rounded: ${rounded}`);
console.log(`Square root: ${sqrt.toFixed(4)}`);
console.log(`Power (x^3): ${cube.toFixed(4)}`);
console.log(`Random integer between 10 and 50: ${randomBetween}`);

console.log(`\nSummary:\n  - Number ${x} rounded → ${rounded}\n  - sqrt(${x}) ≈ ${sqrt.toFixed(4)}\n  - ${x}³ ≈ ${cube.toFixed(4)}\n  - Example random: ${randomBetween}\n`);
console.log('=== End Q3 ===\n');
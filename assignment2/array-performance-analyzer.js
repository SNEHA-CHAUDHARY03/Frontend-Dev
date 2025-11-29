/*
 Q4 - Array Performance Analyzer
 Requirements:
 - Create array of 8 random scores between 30 and 100
 - Calculate: highest, lowest, average, number passed (>=50)
 - Use array methods map(), filter(), reduce()
 - Display formatted summary
*/

function getRandomScore(min = 30, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate 8 random scores
const scores = Array.from({ length: 8 }, () => getRandomScore());

console.log('\n=== Q4 - Array Performance Analyzer ===\n');
console.log('Scores:', scores.join(', '));

// Highest and lowest
const highest = Math.max(...scores);
const lowest = Math.min(...scores);

// Average using reduce
const total = scores.reduce((acc, cur) => acc + cur, 0);
const average = total / scores.length;

// Number of students who passed (>= 50)
const passed = scores.filter(score => score >= 50).length;

// Detailed breakdown using map (display transformed results if needed)
const scaledPercentages = scores.map(s => ({ original: s, scaled: (s / 100).toFixed(2) }));

console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score : ${lowest}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Passed (>=50) : ${passed} / ${scores.length}`);
console.log('\nDetailed (score → scaled fraction):', scaledPercentages);
console.log('\nFormatted Summary:\n-------------------');
console.log(`Total students: ${scores.length}`);
console.log(`Scores list: ${scores.join(', ')}`);
console.log(`Average score: ${average.toFixed(2)}`);
console.log('-------------------\n');
console.log('=== End Q4 ===\n');
/* ========================================
   Q4. ARRAY PERFORMANCE ANALYZER
   
   Demonstrates array methods: map, filter, reduce
   and Math functions: max, min for data analysis.
   ======================================== */

console.log("=== Q4: ARRAY PERFORMANCE ANALYZER ===\n");

// ===== GENERATE 8 RANDOM SCORES (30-100) =====
const scores = [];
for (let i = 0; i < 8; i++) {
  const score = Math.floor(Math.random() * 71) + 30; // Random 30-100
  scores.push(score);
}

console.log(`Generated Scores (8 students): ${scores.join(", ")}\n`);

// ===== CALCULATION 1: FIND HIGHEST SCORE =====
const highestScore = Math.max(...scores);
console.log(`1. Highest Score: ${highestScore}`);
console.log(`   Method: Math.max(...scores)\n`);

// ===== CALCULATION 2: FIND LOWEST SCORE =====
const lowestScore = Math.min(...scores);
console.log(`2. Lowest Score: ${lowestScore}`);
console.log(`   Method: Math.min(...scores)\n`);

// ===== CALCULATION 3: AVERAGE SCORE =====
// Using reduce() to sum all scores, then divide by count
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(`3. Average Score: ${average.toFixed(2)}`);
console.log(`   Method: reduce() to sum, then divide by count\n`);

// ===== CALCULATION 4: PASSED COUNT (≥ 50) =====
// Using filter() to get only scores >= 50
const passedScores = scores.filter(score => score >= 50);
const passedCount = passedScores.length;
const passPercentage = ((passedCount / scores.length) * 100).toFixed(2);

console.log(`4. Passed Students (Score ≥ 50): ${passedCount}/${scores.length}`);
console.log(`   Passed Scores: ${passedScores.join(", ")}`);
console.log(`   Pass Rate: ${passPercentage}%\n`);

// ===== FULL PERFORMANCE SUMMARY =====
console.log("╔════════════════════════════════════════════════╗");
console.log("║     STUDENT PERFORMANCE SUMMARY REPORT         ║");
console.log("╠════════════════════════════════════════════════╣");
console.log(`║ Total Students: ${scores.length}                              ║`);
console.log(`║ Highest Score: ${highestScore}                            ║`);
console.log(`║ Lowest Score: ${lowestScore}                             ║`);
console.log(`║ Average Score: ${average.toFixed(2)}                          ║`);
console.log(`║ Passed (≥50): ${passedCount}/${scores.length} (${passPercentage}%)                   ║`);
console.log(`║ Failed (<50): ${scores.length - passedCount}/${scores.length}                       ║`);
console.log("╚════════════════════════════════════════════════╝\n");

// ===== DETAILED BREAKDOWN TABLE =====
console.log("=== DETAILED BREAKDOWN ===\n");
console.log("Student | Score | Status   | Grade");
console.log("--------|-------|----------|-------");

scores.forEach((score, index) => {
  let status = score >= 50 ? "✓ Pass" : "✗ Fail";
  let grade;
  
  if (score >= 90) grade = "A";
  else if (score >= 80) grade = "B";
  else if (score >= 70) grade = "C";
  else if (score >= 60) grade = "D";
  else if (score >= 50) grade = "E";
  else grade = "F";
  
  console.log(`${index + 1}      | ${score}   | ${status.padEnd(8)} | ${grade}`);
});

// ===== ARRAY METHODS DEMONSTRATION =====
console.log("\n=== ARRAY METHODS USED ===\n");

// map() - Transform array
const scaledScores = scores.map(score => score * 1.1); // Increase by 10%
console.log(`Using map() to scale by 10%: [${scaledScores.map(s => s.toFixed(0)).join(", ")}]`);

// filter() - Get subset
const excellentScores = scores.filter(score => score >= 80);
console.log(`Using filter() for scores ≥ 80: [${excellentScores.join(", ")}]`);

// reduce() - Aggregate
const total = scores.reduce((sum, score) => sum + score, 0);
console.log(`Using reduce() for total: ${total}`);

// sort() - Order array
const sorted = [...scores].sort((a, b) => b - a);
console.log(`Using sort() (descending): [${sorted.join(", ")}]`);

/* ========================================
   Marks Analyzer
   Purpose: Calculate grades, identify failures, and check repeat year criteria
   ======================================== */

// Function to determine grade based on percentage
function getGrade(percentage) {
  if (percentage >= 90) return "A+";
  else if (percentage >= 75) return "A";
  else if (percentage >= 60) return "B";
  else if (percentage >= 40) return "C";
  else return "Fail";
}

// Function to analyze student marks
function analyzeMarks(marks) {
  // Validate input: must be array of 5 numbers
  if (!Array.isArray(marks) || marks.length !== 5) {
    console.error("❌ Invalid input: Pass exactly 5 subject marks");
    return null;
  }
  
  // Calculate total and average
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  let average = total / 5;
  let percentage = average;
  
  // Determine grade based on average
  let grade = getGrade(percentage);
  
  // Count failed subjects (marks < 40)
  let failCount = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 40) {
      failCount++;
    }
  }
  
  // Determine if student should repeat year
  let repeatYear = false;
  if (failCount >= 2) {
    repeatYear = true; // 2 or more failures → Repeat Year
  }
  
  return {
    marks: marks,
    total: total,
    average: average,
    percentage: Math.round(percentage * 100) / 100,
    grade: grade,
    failCount: failCount,
    repeatYear: repeatYear
  };
}

// Test Case 1: Student with good marks
console.log("\n========== MARKS ANALYZER ==========\n");
console.log("--- Test Case 1: Good Student ---");

let student1Marks = [85, 92, 88, 79, 90];
let student1 = analyzeMarks(student1Marks);

console.log(`Marks: ${student1.marks.join(", ")}`);
console.log(`Total: ${student1.total}/500`);
console.log(`Average: ${student1.average.toFixed(2)}`);
console.log(`Percentage: ${student1.percentage}%`);
console.log(`Grade: ${student1.grade}`);
console.log(`Failed Subjects: ${student1.failCount}`);
console.log(`Repeat Year: ${student1.repeatYear ? "❌ YES" : "✅ NO"}`);

// Test Case 2: Student with failures
console.log("\n--- Test Case 2: Student with Multiple Failures ---");

let student2Marks = [45, 35, 52, 38, 50];
let student2 = analyzeMarks(student2Marks);

console.log(`Marks: ${student2.marks.join(", ")}`);
console.log(`Total: ${student2.total}/500`);
console.log(`Average: ${student2.average.toFixed(2)}`);
console.log(`Percentage: ${student2.percentage}%`);
console.log(`Grade: ${student2.grade}`);
console.log(`Failed Subjects: ${student2.failCount} (3 subjects failed)`);
console.log(`Repeat Year: ${student2.repeatYear ? "❌ YES - 2+ failures" : "✅ NO"}`);

// Test Case 3: Borderline student (no failures but average low)
console.log("\n--- Test Case 3: Borderline Student ---");

let student3Marks = [42, 45, 48, 50, 43];
let student3 = analyzeMarks(student3Marks);

console.log(`Marks: ${student3.marks.join(", ")}`);
console.log(`Total: ${student3.total}/500`);
console.log(`Average: ${student3.average.toFixed(2)}`);
console.log(`Percentage: ${student3.percentage}%`);
console.log(`Grade: ${student3.grade}`);
console.log(`Failed Subjects: ${student3.failCount}`);
console.log(`Repeat Year: ${student3.repeatYear ? "❌ YES" : "✅ NO"}`);

console.log("\n==================================\n");
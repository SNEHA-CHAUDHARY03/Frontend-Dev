/* ========================================
   Q10. DEPARTMENTAL EMPLOYEE EVALUATOR
   
   Demonstrates nested arrays, nested conditionals,
   and performance grading by department.
   ======================================== */

console.log("=== Q10: DEPARTMENTAL EMPLOYEE EVALUATOR ===\n");

console.log("═══════════════════════════════════════════════════\n");

// ===== NESTED ARRAY: EMPLOYEES BY DEPARTMENT =====
const employeesByDepartment = [
  // Sales Department
  [
    { name: "Rajesh Kumar", score: 92 },
    { name: "Priya Sharma", score: 78 },
    { name: "Amit Patel", score: 85 },
    { name: "Neha Singh", score: 71 }
  ],
  // Engineering Department
  [
    { name: "Arun Verma", score: 95 },
    { name: "Kavya Desai", score: 88 },
    { name: "Rohan Gupta", score: 72 },
    { name: "Sneha Bhat", score: 64 }
  ],
  // HR Department
  [
    { name: "Vikram Iyer", score: 81 },
    { name: "Divya Nair", score: 77 },
    { name: "Arjun Roy", score: 69 }
  ]
];

const departments = ["Sales", "Engineering", "HR"];

// ===== ITERATE THROUGH EACH DEPARTMENT =====
employeesByDepartment.forEach((dept, deptIndex) => {
  const deptName = departments[deptIndex];
  
  console.log(`\n📊 ${deptName.toUpperCase()} DEPARTMENT`);
  console.log("═══════════════════════════════════════════════════");
  console.log(`Number of Employees: ${dept.length}\n`);
  
  // ===== ITERATE THROUGH EACH EMPLOYEE =====
  dept.forEach((employee, empIndex) => {
    const grade = evaluatePerformance(employee.score);
    const emoji = getGradeEmoji(grade);
    
    console.log(`${empIndex + 1}. ${employee.name.padEnd(18)}`);
    console.log(`   Score: ${employee.score}/100 → ${emoji} ${grade}`);
    console.log();
  });
});

/**
 * Evaluate employee performance and assign grade
 * @param {number} score - Performance score (0-100)
 * @returns {string} - Grade: Excellent, Good, Average, Needs Improvement
 */
function evaluatePerformance(score) {
  // ===== NESTED IF-ELSE LOGIC =====
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75 && score < 90) {
    return "Good";
  } else if (score >= 60 && score < 75) {
    return "Average";
  } else {
    return "Needs Improvement";
  }
}

/**
 * Get emoji for grade
 * @param {string} grade - The grade
 * @returns {string} - Emoji representation
 */
function getGradeEmoji(grade) {
  const emojis = {
    "Excellent": "⭐⭐⭐⭐⭐",
    "Good": "⭐⭐⭐⭐",
    "Average": "⭐⭐⭐",
    "Needs Improvement": "⭐⭐"
  };
  return emojis[grade] || "❓";
}

// ===== SUMMARY STATISTICS =====
console.log("\n═══════════════════════════════════════════════════");
console.log("COMPANY-WIDE SUMMARY");
console.log("═══════════════════════════════════════════════════\n");

let totalEmployees = 0;
let totalScore = 0;
const gradeCount = {
  "Excellent": 0,
  "Good": 0,
  "Average": 0,
  "Needs Improvement": 0
};

// Count totals
employeesByDepartment.forEach((dept) => {
  dept.forEach((employee) => {
    totalEmployees++;
    totalScore += employee.score;
    
    const grade = evaluatePerformance(employee.score);
    gradeCount[grade]++;
  });
});

const averageScore = (totalScore / totalEmployees).toFixed(1);

console.log(`Total Employees: ${totalEmployees}`);
console.log(`Average Score: ${averageScore}/100\n`);

console.log("Grade Distribution:");
console.log(`  ⭐⭐⭐⭐⭐ Excellent: ${gradeCount["Excellent"]} employees`);
console.log(`  ⭐⭐⭐⭐ Good: ${gradeCount["Good"]} employees`);
console.log(`  ⭐⭐⭐ Average: ${gradeCount["Average"]} employees`);
console.log(`  ⭐⭐ Needs Improvement: ${gradeCount["Needs Improvement"]} employees\n`);

// ===== DETAILED STEP-BY-STEP LOGIC EXAMPLE =====
console.log("═══════════════════════════════════════════════════");
console.log("STEP-BY-STEP GRADING LOGIC");
console.log("═══════════════════════════════════════════════════\n");

const exampleScores = [92, 85, 70, 58];

exampleScores.forEach((score) => {
  console.log(`Employee Score: ${score}`);
  console.log(`─────────────────────────────────────────────────`);
  
  // Nested conditional logic with detailed tracing
  if (score >= 90) {
    console.log(`  ✅ score (${score}) >= 90?`);
    console.log(`     YES → Grade: Excellent ⭐⭐⭐⭐⭐\n`);
  } else if (score >= 75) {
    console.log(`  ❌ score (${score}) >= 90? NO`);
    console.log(`  ✅ score (${score}) >= 75? YES`);
    console.log(`     → Grade: Good ⭐⭐⭐⭐\n`);
  } else if (score >= 60) {
    console.log(`  ❌ score (${score}) >= 90? NO`);
    console.log(`  ❌ score (${score}) >= 75? NO`);
    console.log(`  ✅ score (${score}) >= 60? YES`);
    console.log(`     → Grade: Average ⭐⭐⭐\n`);
  } else {
    console.log(`  ❌ score (${score}) >= 90? NO`);
    console.log(`  ❌ score (${score}) >= 75? NO`);
    console.log(`  ❌ score (${score}) >= 60? NO`);
    console.log(`     → Grade: Needs Improvement ⭐⭐\n`);
  }
});

// ===== DEPARTMENT PERFORMANCE =====
console.log("═══════════════════════════════════════════════════");
console.log("DEPARTMENT PERFORMANCE ANALYSIS");
console.log("═══════════════════════════════════════════════════\n");

employeesByDepartment.forEach((dept, deptIndex) => {
  const deptName = departments[deptIndex];
  const scores = dept.map(emp => emp.score);
  
  const deptTotal = scores.reduce((a, b) => a + b, 0);
  const deptAverage = (deptTotal / scores.length).toFixed(1);
  const maxScore = Math.max(...scores);
  const minScore = Math.min(...scores);
  
  console.log(`${deptName} Department:`);
  console.log(`  Total Employees: ${dept.length}`);
  console.log(`  Average Score: ${deptAverage}/100`);
  console.log(`  Highest Score: ${maxScore}`);
  console.log(`  Lowest Score: ${minScore}`);
  console.log(`  Score Range: ${maxScore - minScore} points\n`);
});

// ===== FIND TOP PERFORMERS =====
console.log("═══════════════════════════════════════════════════");
console.log("TOP PERFORMERS (Score ≥ 90)");
console.log("═══════════════════════════════════════════════════\n");

const topPerformers = [];

employeesByDepartment.forEach((dept, deptIndex) => {
  const deptName = departments[deptIndex];
  
  dept.forEach((employee) => {
    if (employee.score >= 90) {
      topPerformers.push({
        name: employee.name,
        department: deptName,
        score: employee.score
      });
    }
  });
});

console.log(`Found ${topPerformers.length} employees with score ≥ 90:\n`);

topPerformers.forEach((performer, index) => {
  console.log(`${index + 1}. ${performer.name.padEnd(18)} | ${performer.department.padEnd(12)} | Score: ${performer.score}`);
});

console.log();

// ===== FIND EMPLOYEES NEEDING IMPROVEMENT =====
console.log("═══════════════════════════════════════════════════");
console.log("EMPLOYEES NEEDING IMPROVEMENT (Score < 60)");
console.log("═══════════════════════════════════════════════════\n");

const needsImprovement = [];

employeesByDepartment.forEach((dept, deptIndex) => {
  const deptName = departments[deptIndex];
  
  dept.forEach((employee) => {
    if (employee.score < 60) {
      needsImprovement.push({
        name: employee.name,
        department: deptName,
        score: employee.score
      });
    }
  });
});

if (needsImprovement.length === 0) {
  console.log("✅ No employees scoring below 60!\n");
} else {
  console.log(`Found ${needsImprovement.length} employees with score < 60:\n`);
  
  needsImprovement.forEach((employee, index) => {
    console.log(`${index + 1}. ${employee.name.padEnd(18)} | ${employee.department.padEnd(12)} | Score: ${employee.score}`);
  });
  
  console.log();
}

// ===== GRADE THRESHOLDS =====
console.log("═══════════════════════════════════════════════════");
console.log("GRADING SCALE");
console.log("═══════════════════════════════════════════════════\n");

console.log("Score Range      | Grade                | Emoji");
console.log("─────────────────┼──────────────────────┼────────────────");
console.log("90-100           | Excellent            | ⭐⭐⭐⭐⭐");
console.log("75-89            | Good                 | ⭐⭐⭐⭐");
console.log("60-74            | Average              | ⭐⭐⭐");
console.log("Below 60         | Needs Improvement    | ⭐⭐\n");

// ===== COMPARISON OPERATORS EXPLANATION =====
console.log("═══════════════════════════════════════════════════");
console.log("COMPARISON OPERATORS USED");
console.log("═══════════════════════════════════════════════════\n");

console.log("1. Greater Than or Equal To (>=):");
console.log("   - Checks if left value is ≥ right value");
console.log("   - Example: score >= 90\n");

console.log("2. Less Than (<):");
console.log("   - Checks if left value is < right value");
console.log("   - Example: score < 60\n");

console.log("3. AND (&&):");
console.log("   - Both conditions must be true");
console.log("   - Example: score >= 75 && score < 90\n");

console.log("4. Nested If-Else:");
console.log("   - Each condition checked in order");
console.log("   - First true condition executes");
console.log("   - Remaining conditions skipped\n");

// ===== ARRAY OPERATIONS =====
console.log("═══════════════════════════════════════════════════");
console.log("ARRAY OPERATIONS IN THIS PROBLEM");
console.log("═══════════════════════════════════════════════════\n");

console.log("1. Nested Arrays (Array of Arrays):");
console.log("   - Outer array: [dept1, dept2, dept3]");
console.log("   - Each dept contains employees\n");

console.log("2. forEach() - Iterating with Index:");
console.log("   - forEach((element, index) => ...)");
console.log("   - Processes each element with position\n");

console.log("3. map() - Transform Array:");
console.log("   - arr.map(emp => emp.score)");
console.log("   - Creates new array of transformed values\n");

console.log("4. reduce() - Aggregate Values:");
console.log("   - scores.reduce((sum, score) => sum + score, 0)");
console.log("   - Combines all values into single result\n");

console.log("5. Math.max() / Math.min() with Spread:");
console.log("   - Math.max(...scores) finds highest");
console.log("   - Math.min(...scores) finds lowest\n");

// ===== COMPLETE CONDITIONAL FLOW DIAGRAM =====
console.log("═══════════════════════════════════════════════════");
console.log("COMPLETE CONDITIONAL FLOW");
console.log("═══════════════════════════════════════════════════\n");

console.log("For each employee score:\n");
console.log("                 ┌─────────┐");
console.log("                 │  Score  │");
console.log("                 └────┬────┘");
console.log("                      │");
console.log("              ┌───────▼────────┐");
console.log("              │ score >= 90?   │");
console.log("              └───┬────────┬───┘");
console.log("                YES│       │NO");
console.log("                   │       └───┬────────────┐");
console.log("           ┌───────▼─┐        │            │");
console.log("           │Excellent│   ┌────▼──────┐     │");
console.log("           └─────────┘   │score>=75? │     │");
console.log("                         └────┬──┬───┘     │");
console.log("                           YES │  │NO      │");
console.log("                              │  └────┬────┤");
console.log("                        ┌─────▼─┐    │    │");
console.log("                        │ Good  │┌───▼──┐ │");
console.log("                        └───────┘│s>=60?│ │");
console.log("                                 └──┬──┬─┘ │");
console.log("                                 YES│  │NO  │");
console.log("                               ┌────▼┐│   │");
console.log("                               │Avg. │└─┬─┘");
console.log("                               └─────┘  │");
console.log("                          ┌────────────▼────┐");
console.log("                          │ Needs Improvement│");
console.log("                          └──────────────────┘\n");

// ===== PERFORMANCE EVALUATION FUNCTION =====
console.log("═══════════════════════════════════════════════════");
console.log("COMPLETE EVALUATION FUNCTION");
console.log("═══════════════════════════════════════════════════\n");

console.log("function evaluatePerformance(score) {");
console.log("  if (score >= 90) {");
console.log('    return "Excellent";');
console.log("  } else if (score >= 75 && score < 90) {");
console.log('    return "Good";');
console.log("  } else if (score >= 60 && score < 75) {");
console.log('    return "Average";');
console.log("  } else {");
console.log('    return "Needs Improvement";');
console.log("  }");
console.log("}\n");

console.log("Key Points:");
console.log("✓ Order matters: Check highest thresholds first");
console.log("✓ Use else if to skip remaining conditions");
console.log("✓ Final else catches all remaining cases");
console.log("✓ Condition ranges prevent overlap\n");

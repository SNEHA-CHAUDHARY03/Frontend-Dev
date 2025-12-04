"use strict";
// Q2 – Employee Bonus Calculator
// Converts salary and years to numbers and computes bonus with validation.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

console.log('--- Q2 Employee Bonus Calculator ---');

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];
    if (!emp) throw new Error('Missing employee object');

    // Strict validation for required props
    if (!('salary' in emp) || !('years' in emp) || !('name' in emp)) {
      throw new Error('MissingProperty');
    }

    // Convert to numbers
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (Number.isNaN(salary) || Number.isNaN(years)) {
      throw new TypeError('InvalidNumberConversion');
    }

    // Compute bonus
    const bonusRate = years > 3 ? 0.1 : 0.05;
    const bonus = +(salary * bonusRate).toFixed(2);

    console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus}`);
  } catch (err) {
    console.log(`Error processing employee index ${i}:`, err && err.message ? err.message : err);
  }
}

console.log('--- End Q2 ---\n');

// Notes:
// - `use strict` prevents accidental globals. All conversions and operations are wrapped in try/catch.
// - Template strings are used for clean formatted output.

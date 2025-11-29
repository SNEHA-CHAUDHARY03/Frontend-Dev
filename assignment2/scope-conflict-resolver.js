/*
 Q1 - Scope Conflict Resolver
 Requirements implemented:
 - global variable bonus = 5000
 - inside calculateSalary() local salary = 40000
 - add bonus only if local isPermanent === true
 - print total salary inside the function
 - demonstrate how changing isPermanent affects variable scopes

 Console-based script. Run in Node or browser console.
*/

// Global variable
let bonus = 5000; // global bonus (default)

function calculateSalary(isPermanent) {
  // Local variables inside the function
  let salary = 40000; // local base salary
  // local override of isPermanent (function argument) determines bonus application
  let localIsPermanent = isPermanent; // boolean

  // Local copy of bonus — to show scope separation
  let localBonus = 0;

  // Add bonus only if localIsPermanent is true
  if (localIsPermanent) {
    localBonus = bonus; // use global bonus if permanent
  }

  const totalSalary = salary + localBonus;

  // Print inside function (requirement)
  console.log('--- calculateSalary() result ---');
  console.log(`Salary (local): ₹${salary}`);
  console.log(`Is Permanent (local): ${localIsPermanent}`);
  console.log(`Bonus (local): ₹${localBonus}`);
  console.log(`Total Salary (inside function): ₹${totalSalary}\n`);

  // Show that global `bonus` remains unchanged unless explicitly modified
  console.log(`Global bonus after function: ₹${bonus}`);
}

// Demonstrate behaviour
console.log('\n=== Q1 Scope Conflict Resolver Tests ===\n');

console.log('Test 1: isPermanent = false (no bonus)');
calculateSalary(false);

console.log('\nTest 2: isPermanent = true (bonus applied)');
calculateSalary(true);

// Show changing local variable does NOT change global bonus
console.log('\nTest 3: Modify local but not global');
calculateSalary(true);
console.log('Global bonus still:', bonus);

// If we change global bonus, it affects subsequent uses
console.log('\nTest 4: Change global bonus to 8000 and call again');
bonus = 8000; // changing the global variable
calculateSalary(true);
console.log('Global bonus now:', bonus);

console.log('\n=== End of Q1 tests ===\n');
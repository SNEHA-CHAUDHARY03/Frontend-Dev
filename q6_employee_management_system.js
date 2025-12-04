"use strict";
// Q6: Employee Management System (Classes + Object Methods)
// Employee class: id, name, department, salary
// Methods: getAnnualSalary(), applyBonus(percent)
// Create 5 employees and compute annual salaries and total payout via reduce()

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = Number(salary); // monthly salary
  }

  getAnnualSalary() {
    return +(this.salary * 12).toFixed(2);
  }

  applyBonus(percent) {
    if (typeof percent !== 'number' || Number.isNaN(percent)) throw new TypeError('Percent must be number');
    const bonusAmount = +(this.getAnnualSalary() * (percent / 100)).toFixed(2);
    return bonusAmount;
  }
}

const employees = [
  new Employee(1, 'Amit', 'Engineering', 4500),
  new Employee(2, 'Sara', 'HR', 3800),
  new Employee(3, 'Kiran', 'Engineering', 5200),
  new Employee(4, 'Lina', 'Sales', 4100),
  new Employee(5, 'Omar', 'Support', 3200)
];

console.log('--- Q6 Employee Management System ---');
employees.forEach(e => {
  console.log(`${e.name} (${e.department}) - Monthly: ${e.salary} | Annual: ${e.getAnnualSalary()} | Bonus(10%): ${e.applyBonus(10)}`);
});

const totalAnnualPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log('\nTotal annual payout for company:', totalAnnualPayout);

console.log('--- End Q6 ---\n');

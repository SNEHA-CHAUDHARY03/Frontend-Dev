"use strict";
// Q4: Employee Inheritance (Runtime Polymorphism)
// Employee base class and Manager subclass with overridden work() method

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} is working in ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  // Override work() method to demonstrate polymorphism
  work() {
    return `${this.name} (Manager) is managing a team of ${this.teamSize} in ${this.department}`;
  }

  conductMeeting() {
    return `${this.name} is conducting a meeting with the team`;
  }
}

console.log('--- Q4 Employee Inheritance ---');

const emp1 = new Employee('Alice', 'Backend');
const emp2 = new Employee('Bob', 'Frontend');
const mgr1 = new Manager('Charlie', 'Engineering', 5);

console.log('Polymorphic behavior:');
console.log(emp1.work());
console.log(emp2.work());
console.log(mgr1.work()); // Overridden method

console.log('\nManager-specific method:');
console.log(mgr1.conductMeeting());

console.log('\nRuntime polymorphism:');
const employees = [emp1, emp2, mgr1];
employees.forEach(e => console.log(e.work()));

console.log('--- End Q4 ---\n');

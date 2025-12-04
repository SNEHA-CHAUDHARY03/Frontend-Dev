"use strict";
// Q6: Prototype chain Person -> Faculty -> Professor

function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.getDepartment = function () {
  return this.department;
};

function Professor(name, department, title) {
  Faculty.call(this, name, department);
  this.title = title;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.getTitle = function () {
  return this.title;
};

console.log('--- Q6 Prototype Chain Demo ---');
const prof = new Professor('Dr. Kumar', 'Mathematics', 'Associate Professor');
console.log('Name:', prof.getName());
console.log('Department:', prof.getDepartment());
console.log('Title:', prof.getTitle());

console.log('Accessing methods up the chain works because prototypes are linked:');
console.log('prof instanceof Professor ->', prof instanceof Professor);
console.log('prof instanceof Faculty ->', prof instanceof Faculty);
console.log('prof instanceof Person ->', prof instanceof Person);

console.log('--- End Q6 ---\n');

"use strict";
// Q9: Rewrite Person->Student inheritance using ES6 classes and compare with prototype version

// ES6 classes version
class PersonClass {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log('Class Name:', this.name);
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  printBranch() {
    console.log('Class Branch:', this.branch);
  }
}

// Prototype version from earlier (recreate small example)
function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.printName = function () {
  console.log('Proto Name:', this.name);
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function () {
  console.log('Proto Branch:', this.branch);
};

console.log('--- Q9 Classes vs Prototype Demo ---');
const sc = new StudentClass('Kiran', 'Electronics');
sc.printName();
sc.printBranch();

const sp = new StudentProto('Kiran', 'Electronics');
sp.printName();
sp.printBranch();

console.log('\nBehavioral parity: methods are available and `instanceof` behaves as expected:');
console.log('sc instanceof StudentClass ->', sc instanceof StudentClass);
console.log('sc instanceof PersonClass ->', sc instanceof PersonClass);
console.log('sp instanceof StudentProto ->', sp instanceof StudentProto);
console.log('sp instanceof PersonProto ->', sp instanceof PersonProto);

console.log('--- End Q9 ---\n');

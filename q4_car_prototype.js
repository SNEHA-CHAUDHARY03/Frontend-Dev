"use strict";
// Q4: Car constructor and prototype method

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`Car: ${this.brand} ${this.model}`);
};

console.log('--- Q4 Car Prototype Demo ---');
const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Honda', 'Civic');

car1.getDetails();
car2.getDetails();

// Demonstrate method sharing via prototype
console.log('car1.getDetails === car2.getDetails ->', car1.getDetails === car2.getDetails);

console.log('--- End Q4 ---\n');

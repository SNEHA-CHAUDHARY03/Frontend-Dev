"use strict";
// Q3: Product Discount System (Constructor + Prototype)
// Demonstrates abstraction via prototype methods for discount application

function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Prototype method for applying discount
Product.prototype.applyDiscount = function (percent) {
  if (typeof percent !== 'number' || percent < 0 || percent > 100) {
    throw new Error('Discount percent must be between 0 and 100');
  }
  const discountAmount = this.price * (percent / 100);
  const newPrice = +(this.price - discountAmount).toFixed(2);
  console.log(`${this.name}: Original price $${this.price} -> After ${percent}% discount: $${newPrice}`);
  return newPrice;
};

console.log('--- Q3 Product Discount System ---');

const p1 = new Product('Laptop', 1000);
const p2 = new Product('Phone', 600);
const p3 = new Product('Headphones', 150);

// Apply different discounts
p1.applyDiscount(10);
p2.applyDiscount(20);
p3.applyDiscount(15);

console.log('\nAbstraction benefit:');
console.log('- Discount logic encapsulated in prototype method');
console.log('- All product instances share the same applyDiscount function (memory efficient)');
console.log('- Easy to extend with more methods as needed');

console.log('--- End Q3 ---\n');

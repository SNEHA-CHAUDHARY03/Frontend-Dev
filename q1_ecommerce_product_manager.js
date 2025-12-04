"use strict";
// Q1: E-Commerce Product Manager (Classes + Objects)
// - Product class with id, name, price, category
// - Methods: applyDiscount(percent), displayDetails()
// - Create products array and display products with price > 1000

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = Number(price);
    this.category = category;
  }

  // Apply discount percent (e.g., 10 for 10%)
  applyDiscount(percent) {
    if (typeof percent !== 'number' || Number.isNaN(percent)) {
      throw new TypeError('Discount percent must be a number');
    }
    const factor = (100 - percent) / 100;
    this.price = +(this.price * factor).toFixed(2);
    return this.price;
  }

  // Return a formatted string with product details
  displayDetails() {
    return `Product [${this.id}] ${this.name} - ${this.category} - $${this.price}`;
  }
}

// Create multiple products and store in array
const products = [
  new Product(1, 'Laptop Pro', 1500, 'Electronics'),
  new Product(2, 'Headphones', 150, 'Audio'),
  new Product(3, 'Office Chair', 900, 'Furniture'),
  new Product(4, 'Smartphone X', 1200, 'Electronics'),
  new Product(5, 'Pen Set', 15, 'Stationery')
];

console.log('--- Q1 E-Commerce Product Manager ---');
console.log('All products:');
products.forEach(p => console.log(p.displayDetails()));

// Apply a global 10% discount to the Laptop for demonstration
console.log('\nApplying 10% discount to product id=1');
products[0].applyDiscount(10);
console.log('After discount ->', products[0].displayDetails());

// Display products with price > 1000
const premium = products.filter(p => p.price > 1000);
console.log('\nProducts with price > 1000:');
premium.forEach(p => console.log(p.displayDetails()));

console.log('--- End Q1 ---\n');

// Notes:
// - Use Node.js: `node q1_ecommerce_product_manager.js` to run.

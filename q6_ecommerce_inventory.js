"use strict";
// Q6: E-Commerce Inventory System
// Array methods: filter, sort, reduce for inventory analysis

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000, stock: 3 },
  { id: 2, name: 'Mouse', category: 'Electronics', price: 25, stock: 150 },
  { id: 3, name: 'Desk', category: 'Furniture', price: 300, stock: 5 },
  { id: 4, name: 'Chair', category: 'Furniture', price: 150, stock: 2 },
  { id: 5, name: 'Monitor', category: 'Electronics', price: 400, stock: 8 },
  { id: 6, name: 'Pen Set', category: 'Stationery', price: 15, stock: 0 }
];

// 1. Get low stock products (stock < 5)
function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

// 2. Sort products by price (ascending)
function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

// 3. Calculate total inventory value
function calculateTotalInventoryValue() {
  return products.reduce((total, p) => total + p.price * p.stock, 0);
}

// 4. Group products by category
function groupByCategory() {
  return products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

console.log('--- Q6 E-Commerce Inventory System ---');

console.log('\n1. Low Stock Products (stock < 5):');
console.table(getLowStockProducts());

console.log('\n2. Products Sorted by Price (ascending):');
console.table(sortProductsByPrice());

console.log('\n3. Total Inventory Value: $' + calculateTotalInventoryValue());

console.log('\n4. Products Grouped by Category:');
const grouped = groupByCategory();
Object.entries(grouped).forEach(([cat, items]) => {
  console.log(`\n${cat}:`);
  console.table(items);
});

console.log('--- End Q6 ---\n');

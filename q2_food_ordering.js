"use strict";
// Q2: Online Food Ordering (map + reduce + Error Handling)
// calculateBill with validation, map for prices, reduce for total

const menu = [
  { id: 1, name: 'Burger', price: 150 },
  { id: 2, name: 'Pizza', price: 250 },
  { id: 3, name: 'Fries', price: 80 },
  { id: 4, name: 'Cola', price: 50 }
];

function calculateBill(orderIds) {
  try {
    // Validate input
    if (!Array.isArray(orderIds)) throw new Error('Order must be an array of item IDs');

    // Map IDs to menu items
    const items = orderIds.map(id => {
      const item = menu.find(m => m.id === id);
      if (!item) throw new Error(`Invalid item ID: ${id}. Item not in menu.`);
      return item;
    });

    // Reduce to calculate total
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return { items, total };
  } catch (err) {
    throw new Error(`Bill calculation failed: ${err.message}`);
  }
}

console.log('--- Q2 Online Food Ordering ---');

try {
  const order1 = calculateBill([1, 2, 3]);
  console.log('Order 1 - Items:', order1.items.map(i => i.name).join(', '));
  console.log('Total:', order1.total);
} catch (err) {
  console.log('Error:', err.message);
}

console.log('\nTrying invalid order:');
try {
  const order2 = calculateBill([1, 99]);
} catch (err) {
  console.log('Error:', err.message);
}

console.log('--- End Q2 ---\n');

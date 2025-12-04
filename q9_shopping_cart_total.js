"use strict";
// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
// Cart class with addItem(name, price, quantity), getTotal(), applyCoupon(code)

class Cart {
  constructor() {
    this.items = []; // {name, price, qty}
    this.coupon = null;
  }

  addItem(name, price, quantity = 1) {
    this.items.push({ name, price: Number(price), quantity: Number(quantity) });
  }

  getSubtotal() {
    return this.items.reduce((s, it) => s + it.price * it.quantity, 0);
  }

  getTotal() {
    const sub = this.getSubtotal();
    if (!this.coupon) return sub;
    const discount = this.coupon.percent || 0;
    return +(sub * (1 - discount / 100)).toFixed(2);
  }

  applyCoupon(code) {
    // Valid formats: SAVE20 or DISC10
    const regex = /^(SAVE|DISC)(\d{1,2})$/i;
    const m = regex.exec(String(code).trim());
    if (!m) throw new Error('Invalid coupon code format');
    const percent = Number(m[2]);
    this.coupon = { code: code.toUpperCase(), percent };
    return this.coupon;
  }
}

// Demo usage
const cart = new Cart();
cart.addItem('Shoes', 80, 2);
cart.addItem('Jacket', 120, 1);
cart.addItem('Hat', 20, 3);

console.log('--- Q9 Shopping Cart Total ---');
console.log('Items:', cart.items);
console.log('Subtotal:', cart.getSubtotal());

try {
  cart.applyCoupon('SAVE10');
  console.log('Coupon applied:', cart.coupon);
  console.log('Total after discount:', cart.getTotal());
} catch (err) {
  console.log('Coupon error:', err.message);
}

try {
  cart.applyCoupon('INVALID');
} catch (err) {
  console.log('Expected invalid coupon error:', err.message);
}

console.log('--- End Q9 ---\n');

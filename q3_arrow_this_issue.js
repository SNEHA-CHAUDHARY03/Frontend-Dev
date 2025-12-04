"use strict";
// Q3: Arrow function `this` issue and fix

const user = {
  name: 'John',
  // Arrow function as a method - `this` is lexically bound, not the calling object
  showNameArrow: () => {
    console.log('Arrow method -> this.name =', this && this.name);
  },
  // Normal function as a method - `this` refers to the object when called as a method
  showNameNormal: function () {
    console.log('Normal method -> this.name =', this.name);
  }
};

console.log('--- Q3 Arrow this Demo ---');
user.showNameArrow(); // likely undefined because `this` is not the user object
// Explanation printed to console:
console.log('- Explanation: Arrow functions do not have their own `this`. They use `this` from the surrounding lexical scope (module/global). When used as object methods, `this` will not refer to the object.');

// Fixed usage
user.showNameNormal(); // prints 'John'

console.log('\n--- End Q3 ---\n');

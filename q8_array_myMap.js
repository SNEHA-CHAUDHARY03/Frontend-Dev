"use strict";
// Q8: Add custom Array.prototype.myMap

if (!Array.prototype.myMap) {
  Object.defineProperty(Array.prototype, 'myMap', {
    value: function (callback, thisArg) {
      if (this == null) throw new TypeError('Array.prototype.myMap called on null or undefined');
      if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function');
      const O = Object(this);
      const len = O.length >>> 0; // ToUint32
      const result = new Array(len);
      for (let i = 0; i < len; i++) {
        if (i in O) result[i] = callback.call(thisArg, O[i], i, O);
      }
      return result;
    },
    configurable: true,
    writable: true
  });
}

console.log('--- Q8 Array.prototype.myMap Demo ---');
const nums = [1, 2, 3];
const doubled = nums.myMap(n => n * 2);
console.log('nums:', nums, 'doubled via myMap:', doubled);

console.log('--- End Q8 ---\n');

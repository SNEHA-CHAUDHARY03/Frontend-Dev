"use strict";
// Q6 – Pyramid Pattern Generator
// Generates a pyramid and shows effects of using `let` vs `var` in loops.

function generatePyramid(limit = 5) {
  console.log(`--- Q6 Pyramid (limit=${limit}) using let ---`);
  for (let i = 1; i <= limit; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += '* ';
    }
    console.log(row.trim());
  }
}

function generatePyramidWithVar(limit = 5) {
  console.log(`--- Q6 Pyramid (limit=${limit}) using var ---`);
  // Using `var` for loop variables - they are function-scoped and reused across iterations
  for (var i = 1; i <= limit; i++) {
    var row = '';
    for (var j = 0; j < i; j++) {
      row += '* ';
    }
    console.log(row.trim());
  }
}

// Default run
generatePyramid(4);
console.log('\nNow generate with var (observations may be similar for this simple case):');
generatePyramidWithVar(4);

console.log('\nNotes:');
console.log('- Using `var` can lead to bugs when closures capture loop variables because `var` is function-scoped.');
console.log('- Using `let` avoids those closure-related surprises since `let` is block-scoped and creates a fresh binding per iteration.');
console.log('- `use strict` will catch accidentally undeclared loop variables (e.g., if you write `for(i=0;...)` it will throw).');

console.log('--- End Q6 ---\n');

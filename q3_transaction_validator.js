"use strict";
// Q3 – Transaction Validator
// Validates transactions and categorizes errors: NegativeAmount, MissingProperty, NullEntry

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class NegativeAmountError extends Error { constructor(msg) { super(msg); this.name = 'NegativeAmountError'; } }
class MissingPropertyError extends Error { constructor(msg) { super(msg); this.name = 'MissingPropertyError'; } }
class NullEntryError extends Error { constructor(msg) { super(msg); this.name = 'NullEntryError'; } }

const valid = [];
const invalid = [];

console.log('--- Q3 Transaction Validator ---');

for (let i = 0; i < transactions.length; i++) {
  const tx = transactions[i];
  try {
    // Add a breakpoint here while debugging to inspect `tx` and `i`
    // debugger; // uncomment the line above to pause the debugger in VS Code

    if (tx === null) throw new NullEntryError(`Transaction at index ${i} is null`);
    if (!('id' in tx) || !('amount' in tx)) throw new MissingPropertyError(`Transaction at index ${i} missing id or amount`);
    if (typeof tx.amount !== 'number') throw new TypeError(`Amount is not a number for transaction id ${tx.id}`);
    if (tx.amount < 0) throw new NegativeAmountError(`Negative amount for transaction id ${tx.id}`);

    valid.push(tx);
    console.log(`Processed transaction id=${tx.id} amount=${tx.amount} (valid)`);
  } catch (err) {
    invalid.push({ index: i, error: err.name || 'Error', message: err.message });
    console.log(`Transaction at index ${i} failed:`, err.name, '-', err.message);
  }
}

console.log('\nFinal Report:');
console.log('- Successful transactions:', valid.length);
console.log('- Failed transactions:', invalid.length);
console.log('- Invalid details:', invalid);
console.log('--- End Q3 ---\n');

// Notes:
// - Use `debugger;` inside the try block to pause execution and watch variables in VS Code.
// - Errors are categorized into arrays for later analysis.

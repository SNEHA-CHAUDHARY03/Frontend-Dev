"use strict";
// Q7 – Smart Calculator
// Supports operations: add, divide, power, root, subtract

class CalculatorError extends Error { constructor(msg) { super(msg); this.name = 'CalculatorError'; } }
class DivideByZeroError extends CalculatorError { constructor() { super('Divide by zero'); this.name = 'DivideByZeroError'; } }
class NegativeRootError extends CalculatorError { constructor() { super('Root of negative number'); this.name = 'NegativeRootError'; } }
class InvalidOperationError extends CalculatorError { constructor(op) { super(`Invalid operation: ${op}`); this.name = 'InvalidOperationError'; } }

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function compute(op, a, b) {
  switch (op) {
    case 'add': return a + b;
    case 'subtract': return a - b;
    case 'divide':
      if (b === 0) throw new DivideByZeroError();
      return a / b;
    case 'power': return Math.pow(a, b);
    case 'root':
      if (a < 0) throw new NegativeRootError();
      return Math.pow(a, 1 / b);
    default: throw new InvalidOperationError(op);
  }
}

console.log('--- Q7 Smart Calculator ---');

for (const op of operations) {
  try {
    const result = compute(op, num1, num2);
    console.log(`Operation: ${op} | operands: ${num1}, ${num2} | result: ${result}`);
  } catch (err) {
    console.log(`Operation: ${op} | error: ${err.name} - ${err.message}`);
  }
}

console.log('\nAttempting an unsupported operation:');
try {
  compute('unknown', num1, num2);
} catch (err) {
  console.log('Unsupported operation caught:', err.name, err.message);
}

console.log('\n--- End Q7 ---\n');

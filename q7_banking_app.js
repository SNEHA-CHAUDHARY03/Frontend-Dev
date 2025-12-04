"use strict";
// Q7: Banking Application
// BankAccount with private #balance field and encapsulation

class BankAccount {
  constructor(accountHolder, initialBalance = 0) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  // Private field
  #balance;

  deposit(amount) {
    if (amount <= 0) throw new Error('Deposit amount must be positive');
    this.#balance += amount;
    console.log(`Deposit: +$${amount} | New balance: $${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error('Withdrawal amount must be positive');
    if (amount > this.#balance) throw new Error(`Insufficient balance. Available: $${this.#balance}`);
    this.#balance -= amount;
    console.log(`Withdrawal: -$${amount} | New balance: $${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }

  printStatement() {
    console.log(`Account: ${this.accountHolder} | Balance: $${this.#balance}`);
  }
}

console.log('--- Q7 Banking Application ---');

const acc1 = new BankAccount('Amit', 1000);
acc1.printStatement();

console.log('\nValid operations:');
try {
  acc1.deposit(500);
  acc1.withdraw(300);
  acc1.printStatement();
} catch (err) {
  console.log('Error:', err.message);
}

console.log('\nInvalid operations:');
try {
  acc1.withdraw(5000); // Insufficient balance
} catch (err) {
  console.log('Error caught:', err.message);
}

try {
  acc1.deposit(-100); // Negative deposit
} catch (err) {
  console.log('Error caught:', err.message);
}

console.log('\nEncapsulation note: #balance is private and cannot be accessed or modified directly from outside the class.');

console.log('--- End Q7 ---\n');

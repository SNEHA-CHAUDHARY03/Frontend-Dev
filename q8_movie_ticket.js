"use strict";
// Q8: Movie Ticket Booking System
// MovieTicket base class, OnlineTicket inheritance, and prototype chain

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }

  getTotalAmount() {
    return this.price;
  }
}

// Add method to prototype for all instances
MovieTicket.prototype.printTicket = function () {
  console.log(`Movie: ${this.movieName} | Seat: ${this.seatNo} | Amount: $${this.getTotalAmount()}`);
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

console.log('--- Q8 Movie Ticket Booking System ---');

const t1 = new MovieTicket('Avatar 2', 'A5', 200);
t1.printTicket(); // prototype method works

console.log('\nOnline ticket with inheritance:');
const t2 = new OnlineTicket('Avatar 2', 'B10', 200, 30);
t2.printTicket(); // prototype chain: OnlineTicket -> MovieTicket.prototype

console.log('\nPrototype chain demonstration:');
console.log('t2 instanceof OnlineTicket:', t2 instanceof OnlineTicket);
console.log('t2 instanceof MovieTicket:', t2 instanceof MovieTicket);
console.log('printTicket is in MovieTicket.prototype:', 'printTicket' in MovieTicket.prototype);

console.log('\nMultiple online tickets:');
const t3 = new OnlineTicket('Oppenheimer', 'C3', 250, 35);
const t4 = new OnlineTicket('Inception', 'D8', 200, 30);
t3.printTicket();
t4.printTicket();

console.log('--- End Q8 ---\n');

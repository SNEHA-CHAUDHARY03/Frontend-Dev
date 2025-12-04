"use strict";
// Q5: Ride-Sharing Application
// User -> Driver inheritance, Trip class with fare calculation and error handling

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }

  getInfo() {
    return `${this.name} (Rating: ${this.rating}/5)`;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleType, licensePlate) {
    super(name, rating);
    this.vehicleType = vehicleType;
    this.licensePlate = licensePlate;
  }

  getInfo() {
    return `Driver: ${super.getInfo()} | Vehicle: ${this.vehicleType} (${this.licensePlate})`;
  }
}

class Trip {
  constructor(driver, passenger, fromLocation, toLocation, distance) {
    this.driver = driver;
    this.passenger = passenger;
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    try {
      if (this.distance === undefined || this.distance === null) {
        throw new Error('Distance not provided');
      }
      if (typeof this.distance !== 'number' || this.distance < 0) {
        throw new Error('Distance must be a non-negative number');
      }
      // Base fare + per km rate
      const baseFare = 50;
      const perKmRate = 10;
      return baseFare + this.distance * perKmRate;
    } catch (err) {
      throw new Error(`Fare calculation error: ${err.message}`);
    }
  }

  printTrip() {
    try {
      const fare = this.calculateFare();
      console.log(`Trip: ${this.fromLocation} -> ${this.toLocation}`);
      console.log(`Distance: ${this.distance} km | Fare: $${fare}`);
      console.log(`Driver: ${this.driver.getInfo()}`);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
}

console.log('--- Q5 Ride-Sharing Application ---');

const driver1 = new Driver('Raj', 4.8, 'Toyota Fortuner', 'MH-02-AB-1234');
const passenger1 = new User('Priya', 4.5);

const trip1 = new Trip(driver1, passenger1, 'Delhi', 'Gurgaon', 30);
trip1.printTrip();

console.log('\nAttempting invalid trip (negative distance):');
const trip2 = new Trip(driver1, passenger1, 'Mumbai', 'Pune', -10);
trip2.printTrip();

console.log('\nAttempting trip without distance:');
const trip3 = new Trip(driver1, passenger1, 'Bangalore', 'Hyderabad', undefined);
trip3.printTrip();

console.log('--- End Q5 ---\n');

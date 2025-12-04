"use strict";
// Q5: Movie Ticket Booking (Objects + RegExp)
// Validate Name (alphabets), Email, Seats (1-10). After validation store booking object.

const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateBookingInput({ name, email, seats }) {
  const errors = [];
  if (!nameRegex.test(String(name).trim())) errors.push('Invalid name: only alphabets and spaces allowed');
  if (!emailRegex.test(String(email).trim())) errors.push('Invalid email format');
  const seatsNum = Number(seats);
  if (!Number.isInteger(seatsNum) || seatsNum < 1 || seatsNum > 10) errors.push('Seats must be integer between 1 and 10');
  return { valid: errors.length === 0, errors, seats: seatsNum };
}

function bookTicket(form) {
  const { valid, errors, seats } = validateBookingInput(form);
  console.log('--- Q5 Movie Ticket Booking ---');
  if (!valid) {
    console.log('Validation failed:', errors);
    return null;
  }
  const booking = { name: form.name.trim(), email: form.email.trim(), seats };
  console.log('Booking successful:', booking);
  return booking;
}

// Demo
bookTicket({ name: 'Riya', email: 'riya@mail.com', seats: 3 });
bookTicket({ name: 'Riya123', email: 'bad', seats: 20 });

console.log('--- End Q5 ---\n');

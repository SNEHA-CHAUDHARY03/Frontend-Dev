"use strict";
// Q1 – The Startup Morning: Async Coffee Maker
// Three asynchronous steps (boil, brew, pour) implemented as Promises

function randomDelayMs(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    const delay = randomDelayMs();
    setTimeout(() => {
      // Simulate random failure
      if (Math.random() < 0.15) return reject(new Error('Boiler malfunction'));
      console.log('Step: Water boiled');
      resolve('boiled water');
    }, delay);
  });
}

function brewCoffee(boiled) {
  return new Promise((resolve, reject) => {
    const delay = randomDelayMs();
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error('Coffee grounds exhausted'));
      console.log('Step: Coffee brewed using', boiled);
      resolve('brewed coffee');
    }, delay);
  });
}

function pourIntoCup(brewed) {
  return new Promise((resolve, reject) => {
    const delay = randomDelayMs();
    setTimeout(() => {
      if (Math.random() < 0.1) return reject(new Error('Cup dropped'));
      console.log('Step: Coffee poured into cup:', brewed);
      resolve('coffee ready');
    }, delay);
  });
}

console.log('--- Q1 Async Coffee Maker (Promise chain) ---');
boilWater()
  .then(boiled => brewCoffee(boiled))
  .then(brewed => pourIntoCup(brewed))
  .then(() => console.log('Coffee ready for the team!'))
  .catch(err => console.log('Coffee preparation failed:', err.message));

// Note: Use .catch() to handle any failure along the chain.

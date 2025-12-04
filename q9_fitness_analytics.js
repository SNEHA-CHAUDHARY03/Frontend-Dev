"use strict";
// Q9: Fitness App Analytics
// Filtering, mapping, and reducing workout data

class FitnessAnalytics {
  constructor(workoutData = []) {
    this.data = workoutData;
  }

  validate() {
    if (!this.data || this.data.length === 0) {
      throw new Error('Workout dataset is empty');
    }
  }

  // Get users with steps > 7000
  getActiveUsers() {
    this.validate();
    return this.data.filter(u => u.steps > 7000);
  }

  // Calculate average calories using reduce
  getAverageCalories() {
    this.validate();
    const total = this.data.reduce((sum, u) => sum + u.calories, 0);
    return +(total / this.data.length).toFixed(2);
  }

  // Format user summaries using map
  getUserSummary() {
    this.validate();
    return this.data.map(u => `${u.user}: ${u.steps} steps, ${u.calories} cal`);
  }

  printAnalytics() {
    try {
      this.validate();
      console.log('Active Users (steps > 7000):');
      this.getActiveUsers().forEach(u => console.log(`- ${u.user}: ${u.steps} steps`));

      console.log('\nAverage Calories:', this.getAverageCalories());

      console.log('\nUser Summary:');
      this.getUserSummary().forEach(s => console.log(`- ${s}`));
    } catch (err) {
      console.log('Error:', err.message);
    }
  }
}

console.log('--- Q9 Fitness App Analytics ---');

const workoutData = [
  { user: 'A', steps: 8000, calories: 300 },
  { user: 'B', steps: 12000, calories: 500 },
  { user: 'C', steps: 4000, calories: 200 }
];

const analytics = new FitnessAnalytics(workoutData);
analytics.printAnalytics();

console.log('\nTesting with empty dataset:');
const emptyAnalytics = new FitnessAnalytics([]);
try {
  emptyAnalytics.getActiveUsers();
} catch (err) {
  console.log('Error caught:', err.message);
}

console.log('--- End Q9 ---\n');

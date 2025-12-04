"use strict";
// Q1: Student Result Processing (reduce + Classes)
// Student class with calculateAverage() and grade calculation

class Student {
  constructor(name, marks = []) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (this.marks.length === 0) return 0;
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return +(sum / this.marks.length).toFixed(2);
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return 'A';
    if (avg >= 80) return 'B';
    if (avg >= 70) return 'C';
    return 'F';
  }

  printResult() {
    const avg = this.calculateAverage();
    const grade = this.getGrade();
    console.log(`Student: ${this.name} | Average: ${avg} | Grade: ${grade}`);
  }
}

console.log('--- Q1 Student Result Processing ---');

const s1 = new Student('Amit', [85, 90, 88, 92]);
const s2 = new Student('Sara', [70, 72, 68, 75]);
const s3 = new Student('Kiran', [95, 98, 96, 99]);

s1.printResult();
s2.printResult();
s3.printResult();

console.log('--- End Q1 ---\n');

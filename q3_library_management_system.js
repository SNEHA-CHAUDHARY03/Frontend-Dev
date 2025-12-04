"use strict";
// Q3: Library Management System (Classes + Objects)
// Book class with issueBook and returnBook methods. Manage array of books and search by ISBN.

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = String(ISBN);
    this.isIssued = false;
    this.issuedTo = null;
  }

  issueBook(user) {
    if (this.isIssued) throw new Error(`Book ${this.ISBN} is already issued`);
    this.isIssued = true;
    this.issuedTo = user || 'unknown';
    return true;
  }

  returnBook() {
    if (!this.isIssued) throw new Error(`Book ${this.ISBN} is not issued`);
    this.isIssued = false;
    this.issuedTo = null;
    return true;
  }

  details() {
    return `${this.title} by ${this.author} (ISBN: ${this.ISBN}) - ${this.isIssued ? 'Issued' : 'Available'}`;
  }
}

// Create sample book array
const library = [
  new Book('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748'),
  new Book('Eloquent JavaScript', 'Marijn Haverbeke', '9781593279509'),
  new Book('Clean Code', 'Robert C. Martin', '9780132350884')
];

console.log('--- Q3 Library Management System ---');
console.log('Available books:');
library.filter(b => !b.isIssued).forEach(b => console.log(b.details()));

// Issue a book by searching ISBN
function issueBookByISBN(ISBN, user) {
  const book = library.find(b => b.ISBN === String(ISBN));
  if (!book) {
    console.log(`No book found with ISBN ${ISBN}`);
    return false;
  }
  try {
    book.issueBook(user);
    console.log(`Book issued: ${book.details()} to ${user}`);
    return true;
  } catch (err) {
    console.log('Issue failed:', err.message);
    return false;
  }
}

// Demo issue and return
issueBookByISBN('9781593279509', 'Alice');
console.log('\nAvailable after issuing:');
library.filter(b => !b.isIssued).forEach(b => console.log(b.details()));

// Return book
try {
  const b = library.find(bk => bk.ISBN === '9781593279509');
  b.returnBook();
  console.log('\nAfter return:');
  library.forEach(bk => console.log(bk.details()));
} catch (err) {
  console.log('Return failed:', err.message);
}

console.log('--- End Q3 ---\n');

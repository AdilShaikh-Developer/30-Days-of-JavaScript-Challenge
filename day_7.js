// Day 7: Objects

// Tasks/Activities:

// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
  tittle: "How to Win Friends and Influence People",
  author: "Dale Carnegie",
  year: 1936,
};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
const { tittle, author } = book;
// const tittle = book.tittle;
// const author = book.author;
// const tittle = book["tittle"];
// const author = book["author"];
console.log(tittle, "by", author);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getTittleAndAuthor = () => `${book.tittle} by ${book.author}`;
console.log(book.getTittleAndAuthor());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function (year) {
  this.year = year;
};
book.updateYear(2005);
console.log(book);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "personal library",
  books: [
    {
      tittle: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      year: 1936,
    },
    {
      tittle: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki & Sharon Lechter",
      year: 1997,
    },
    {
      tittle: "The Psychology of Money",
      author: "Morgan Housel",
      year: 2020,
    },
  ],
};
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
const { name, books } = library;
console.log(name);
books.forEach((e, index) => console.log(`${++index}. ${e.tittle}`));

// Activity 4: The `this` Keyword
// Task 7: Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.
book.getTittleAndAuthorUsingThisKeyword = function () {
  return `${this.tittle} by ${this.author}`;
};
console.log(book.getTittleAndAuthorUsingThisKeyword());

// Activity 5: Object Iteration
// Task 8: Use a `for...in` loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
  console.log(book[key]);
}

// Task 9: Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object.
for (let index = 0; index < Object.keys(book).length; index++) {
  console.log(`${Object.keys(book)[index]}: ${Object.values(book)[index]}`);
}

// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
(() => {
  const book = {
    tittle: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    year: 1936,
  };
  book.getTittleAndAuthor = function () {
    return `${this.tittle} by ${this.author} in ${this.year}`;
  };

  console.log(book.tittle);
  console.log(book.author);
  console.log(book.year);
  console.log(book.getTittleAndAuthor());
})();

// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
(() => {
  const library = {
    name: "professional library",
    books: [book],
  };
  console.log(library);
})();

// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using `for...in` loop and `Object.keys` / `Object.values`.
(() => {
  for (i = 0; i < Object.keys(book).length; i++) {
    console.log(`${Object.keys(book)[i]}: ${Object.values(book)[i]}`);
  }
})();

// Achievement:
// By the end of these activities, students will:
// - Create and manipulate objects with properties and methods.
// - Understand and use the `this` keyword in object methods.
// - Work with nested objects and arrays of objects.
// - Iterate over an object's properties using loops and built-in methods.

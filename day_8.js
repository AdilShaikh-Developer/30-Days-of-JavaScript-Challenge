// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person’s name and age, and log the string to the console.
((name, age) => {
  const person = `age of ${name} is ${age}`;
  console.log(person);
})("John Doe", 101);

// Task 2: Create a multi-line string using template literals and log it to the console.
(() => {
  const multilineString = `Hello
World
!`;

  console.log(multilineString);
})();

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
(() => {
  const arrayOfNumbers = [11, 57, 62, 48, 2, 46, 3, 6];
  const [firstElement, secondElement] = arrayOfNumbers;

  console.log(firstElement, secondElement);
})();

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
(() => {
  const book = {
    tittle: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    year: 1936,
  };
  const { tittle, author } = book;

  console.log(tittle, "by", author);
})();

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
(() => {
  const arrayOfNumbersTill10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arrayOfNumbersTill15 = [...arrayOfNumbersTill10, 11, 12, 13, 14, 15];

  console.log(arrayOfNumbersTill15);
})();

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
((...numbers) => {
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(sum);
})(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
{
  const sum = (one, two = 1) => {
    console.log(one + two);
  };

  sum(2);
  sum(2, 2);
}

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
{
  const tittle = "How to Win Friends and Influence People";
  const author = "Dale Carnegie";
  const year = 1936;
  const book = { tittle, author, year };
  console.log(book);
}

// Task 9: Create an object with computed property names based on variables and log the object to the console.
{
  const processorKey = "processor";
  const memoryKey = "memory";
  const storageKey = "storage";
  const graphicCardKey = "graphicCard";

  const processorValue = "Intel Core i5-11400F, 2.6 GHz, 6 cores";
  const memoryValue = "16 GB DDR4, 3200 MHz";
  const storageValue = "512 GB NVMe SSD";
  const graphicCardValue = "NVIDIA GeForce GTX 1660, 6 GB";

  const computer = {
    [processorKey]: processorValue,
    [memoryKey]: memoryValue,
    [storageKey]: storageValue,
    [graphicCardKey]: graphicCardValue,
  };

  console.log(computer);
}

// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
(() => {
  const tittle = "How to Win Friends and Influence People";
  const author = "Dale Carnegie";
  const year = 1936;

  const string = `The Book ${tittle},
was written in ${year},
by ${author}`;

  console.log(string);
})();

// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
(() => {
  const books = [
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
  ];
  const [first, second, third] = books;

  let { tittle, author, year } = first;
  //   let { tittle, author, year } = second;
  //   let { tittle, author, year } = third;

  console.log(first, second, third);
  console.log(tittle, author, year);
})();

// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
(() => {
  const firstArray = [46, 948, 31, 78, 3];
  const secondArray = [289, 97, 13, 94, 2];

  const combineArray = [...firstArray, ...secondArray];
  console.log(combineArray);

  function productOfXNumbers(...x) {
    const totalProduct = x.reduce(
      (accumulator, currentValue) => accumulator * currentValue
    );
    console.log(totalProduct);
  }

  productOfXNumbers(1, 5, 7, 9, 11);
})();

// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
((a = 0, b = 0) => console.log(a - b))(2, 5);
((a = 0, b = 0) => console.log(a - b))();

// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
(() => {
  const processorKey = "processor";
  const memoryKey = "memory";
  const storageKey = "storage";
  const graphicCardKey = "graphicCard";

  const processorValue = "Intel Core i5-11400F, 2.6 GHz, 6 cores";
  const memoryValue = "16 GB DDR4, 3200 MHz";
  const storageValue = "512 GB NVMe SSD";
  const graphicCardValue = "NVIDIA GeForce GTX 1660, 6 GB";

  const computed = {
    [processorKey]: processorValue,
    [memoryKey]: memoryValue,
    [storageKey]: storageValue,
    [graphicCardKey]: graphicCardValue,
  };

  console.log(computed);
})();

// Achievement:
// By the end of these activities, students will:
// 1. Understand and use template literals for string interpolation and multi-line strings.
// 2. Apply destructuring to extract values from arrays and objects.
// 3. Utilize spread and rest operators for array manipulation and function arguments.
// 4. Define functions with default parameters.
// 5. Create objects using enhanced object literals, including methods and computed property names.

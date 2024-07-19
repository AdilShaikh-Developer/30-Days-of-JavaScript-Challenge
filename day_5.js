// Day 5: Functions

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEvenOrOdd(number) {
  number % 2 === 0 ? console.log("even") : console.log("odd");
}
isEvenOrOdd(7);

// Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(number) {
  return number ** 2;
}
console.log(calculateSquare(43));

// Activity 2: Function Expression
// Task 3: Write a function to expression to find the maximum of two numbers and log the result to the console.
const maximumNumber = function (a, b) {
  a === b
    ? console.log("both numbers are equal")
    : a > b
    ? console.log(a)
    : console.log(b);
};
maximumNumber(4, 3);

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenationOfTwoStrings = function (string1, string2) {
  return string1.concat(string2);
};
console.log(concatenationOfTwoStrings("Java", "Script"));

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
{
  const sum = (a, b) => {
    return a + b;
  };

  console.log(sum(2, 3));
}

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
{
  const isStringContainsCharacter = (string, character) => {
    return string.includes(character);
  };

  console.log(
    isStringContainsCharacter(
      `Shaikh Adil is doing "30 days Challenges of JavaScript"`,
      "a"
    )
  );
}

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
((a, b = 0) => {
  return console.log(a * b);
})(2);

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
((name, age = 18) => {
  return console.log(`Welcome ${name}! you're age is ${age}`);
})("Shaikh Adil");

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
{
  let higherOrderFunction = (func, calls) => {
    for (let index = 0; index < calls; index++) {
      func();
    }
  };

  higherOrderFunction(() => console.log("Hello World!"), 4);
}

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
{
  let higherOrderFunction = (func1, func2, value) => {
    const firstFunction = func1(value);
    return func2(firstFunction);
  };

  const greeting = (name) => `Welcome! Mr ${name}`;
  const loggingFunction = (greeting) => console.log(greeting);

  higherOrderFunction(greeting, loggingFunction, "Adil");
}

// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and log the result.
((number) => (number % 2 === 0 ? console.log("Even") : console.log("Odd")))(3);

// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
((number) => console.log(Math.pow(number, 2)))(5);

// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
((string1, string2) => console.log(string1.concat(string2)))("Shaikh", "Adil");

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
((a, b) => console.log(a + b))(2, 5);

// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function mulitple times.
((func, calls) => {
  for (let index = 0; index < calls; index++) {
    func();
  }
})(() => console.log("Hello World"), 15);

// Achievement:
// By the end of these activities, students will:
// - Understand and define functions using function declarations, expressions, and arrow functions.
// - Use function parameters and default values effectively.
// - Create and utilize higher-order functions.
// - Apply functions to solve common problems and perform calculations.
// - Enhance code reusablity and organization using funcitons.

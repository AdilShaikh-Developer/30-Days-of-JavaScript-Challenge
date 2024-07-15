// Day 2: Operators

// Activity 1: Arithmetic Operators
// Task 1: Write a program to add two numbers and log the result to the console.
((a, b) => console.log("Task 1:", a + b))(11, 5);

// Task 2: Write a program to subtract two numbers and log the result to the console.
((a, b) => console.log("Task 2:", a - b))(11, 5);

// Task 3: Write a program to multiply two numbers and log the result to the console.
((a, b) => console.log("Task 3:", a * b))(11, 5);

// Task 4: Write a program to divide two numbers and log the result to the console.
((a, b) => console.log("Task 4:", a / b))(11, 5);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
((a, b) => console.log("Task 5:", a % b))(11, 5);

// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
((a, b) => console.log("Task 6:", (a += b)))(5, 5);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
((a, b) => console.log("Task 7:", (a -= b)))(5, 5);

// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
((a, b) => {
  console.log(`Task 8: a > b is ${a > b} & a < b is ${a < b}`);
})(5, 6);

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
((a, b) => {
  console.log(`Task 9: a >= b is ${a >= b} & a <= b is ${a <= b}`);
})(6, 5);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
((a, b) =>
  console.log(
    `Task 10: ${a} == ${b} is ${a == b} & ${a} === '${b}' is ${a === b}`
  ))(5, "5");

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
((a, b) => console.log(`Task 11: ${a && b}`))(true, false);

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
((a, b) => console.log(`Task 12: ${a || b}`))(true, false);

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
((a, b) => console.log(`Task 13: ${!a}, ${!b}`))(true, false);

// Activity 5: Ternary Operators
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
((a) =>
  a === 0
    ? console.log("Task 14: zero is nither positive nor negative")
    : a > 0
    ? console.log("Task 14:", a, "is positive")
    : console.log("Task 14:", a, "is negative"))(-1);

// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, substraction, multiplication, division, remainder) on two numbers and log the results.
((a, b) => {
  console.log({
    addition: a + b,
    substraction: a - b,
    multiplication: a * b,
    division: a / b,
    remainder: a % b,
  });
})(10, 10);

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
((a, b) => {
  console.log({
    greaterThan: a > b,
    lessThan: a < b,
    greaterThanOrEqual: a >= b,
    lessThanOrEqual: a <= b,
    equalTo: a == b,
    equalValueAndEqualType: a === b,
    and: a && b,
    or: a || b,
    not: !a,
  });
})(10, 10);

// 3. Ternary Operators Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
((a) => {
  a === 0
    ? console.log("zero is nither positive nor negative")
    : a > 0
    ? console.log(a, "is positive")
    : console.log(a, "is negative");
})(0);

// Achievement:
// By the end of these activites, students will:
// - Understand and use arithmetic operators to perform basic calculations.
// - Use assignment operators to modify variable values.
// - Compare values using comparison operators.
// - Combine conditions using logical operators.
// - Use the ternary operator for concise conditional expressions.

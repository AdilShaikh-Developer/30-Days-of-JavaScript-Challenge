// Day 1: Variables and Data Types

//Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var thala = 7; // Thala for a reason
console.log("Task 1: " + thala);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let string = "thala for a reason";
console.log("Task 2: " + string);

//Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const dhoniIsThala = true;
console.log("Task 3: " + dhoniIsThala);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
const one = 7;
const two = null;
const three = undefined;
const four = Symbol("Finisher");
const five = false; // becasue only 7 can be true
const six = BigInt("7142128354249566370"); // all are multiple's of 7 (thala for a reason)
const seven = "thala for a reason";

console.log(
  "Task 4: " + typeof one,
  typeof two,
  typeof three,
  typeof four,
  typeof five,
  typeof six,
  typeof seven
); // number, object, undefined, symbol, boolean, bigint, string

// Activity 4: Reassiging Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let initialValue = "initial value";
console.log("Task 5: (a) " + initialValue);

initialValue = "final value";
console.log("Task 5: (b) " + initialValue);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const variable = "thala for a reason";
// variable = "thala not for a reason";

console.log("Task 6:" + variable); // TypeError: Assignment to constant variable.

// Feature Request:
// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
const numVar = 7;
const nullVar = null;
const strVar = "string";
const symVar = Symbol("key");
const booleanVar = false;
const bigIntVar = BigInt("984645416987164");
const undefinedVar = undefined;
const objectVar = {
  key: "value",
};
const arrayVar = ["value", "value"];
const funcVar = function () {
  return "I'm a function";
};

console.log([
  { numVar, type: typeof nullVar },
  { nullVar, type: typeof nullVar },
  { strVar, type: typeof strVar },
  { symVar, type: typeof symVar },
  { booleanVar, type: typeof booleanVar },
  { bigIntVar, type: typeof bigIntVar },
  { undefinedVar, type: typeof undefinedVar },
  { objectVar, type: typeof objectVar },
  { arrayVar, type: typeof arrayVar },
  { funcVar, type: typeof funcVar },
]);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
const constantVariable = "constantVariable";
let normalVariable;

normalVariable = "Hello World!";
// constantVariable = "Hello World" This will throw error

console.log({ constantVariable, normalVariable }); // {constantVariable: "constantVariable", normalVariable: "Hello World!"}

const func = (() => {
  let normalVariable = "Hello World! Inside Func";
  console.log(normalVariable); // Hello World! Inside Func
})();

console.log(normalVariable); // Hello World!

// Achievement:
// By the end of these activities, you will:
// - Know how to declare variables using var, let, and const.
// - Understand the different data types in JavaScript
// - Be able to use the typeof operator to identify the data type of a variable.
// - Understand the concept of variable reassignment and the immutability of const variables.

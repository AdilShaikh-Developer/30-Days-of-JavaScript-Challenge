// Day 6: Arrays

let array = [1, 2, 3, 4, 5];

// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
console.log(array);

// Task 2: Access the first and last elements of the array and log them to the console.
console.log(
  `first element: ${array[0]} & last element: ${array[array.length - 1]}`
);

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
array.push(6);
console.log(array);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
array.pop();
console.log(array);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
array.shift();
console.log(array);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
array.unshift(1);
console.log(array);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
{
  let newArray = array.map((e) => e * 2);
  console.log(newArray);
}

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
{
  let newArray = array.filter((e) => e % 2 === 0);
  console.log(newArray);
}

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
{
  // CONCEPT
  // array = [1,2,3,4,5]
  // reduce method will run 4 (array.length - 1) number of times
  // 1st run: accumulator = 1 (array[0]) & currentValue = 2 (array[1]) and we are returning accumulator + currentValue = 1 + 2 = 3
  // 2nd run: accumulator = 3 (last run return value) & currentValue = 3 (array[2]) and we are returning accumulator + currentValue = 3 + 3 = 6
  // 3nd run: accumulator = 6 (last run return value) & currentValue = 4 (array[3]) and we are returning accumulator + currentValue = 6 + 4 = 10
  // 4nd run: accumulator = 10 (last run return value) & currentValue = 5 (array[4]) and we are returning accumulator + currentValue = 10 + 5 = 15
  // now because array[5] does not exist the final return value will be 15

  let newArray = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(newArray);
}

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
array.forEach((e) => console.log(e));

{
  // Activity 5: Multi-dimensional Arrays
  // Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
  const row1 = [1, 2];
  const row2 = [3, 4];

  const matrix = [row1, row2];
  console.log(matrix);

  // Task 13: Access and log a specific element from the two-dimensional array.
  const row = 1;
  const column = 2;

  console.log(matrix[row - 1][column - 1]);
}

// Feature Request:
// 1.	Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.
(() => {
  array = new Array(1).fill("initial element");

  // adding another element at the end
  array.push("another element");
  // removing another element from the end
  array.pop();
  // adding another element at the start
  array.unshift("another element");
  // removing another element from the start
  array.shift();

  console.log(array);
})();

// 2.	Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
(() => {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(array);

  // mapping each element^4 of the array
  let mappedArray = array.map((e) => Math.pow(e, 4));
  console.log(mappedArray);

  // filtering all even values from this array
  let filteredArray = array.filter((a) => a % 2 !== 0);
  console.log(filteredArray);

  // aggregating product from the given array data using reduce method
  let reduceArray = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  console.log(reduceArray);
})();

// 3.	Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element
// Reversing an array using for loop
for (let index = array.length; index > 0; index--) {
  reversedArray = array[array.indexOf(array[array.length - index])] = index;

  console.log(reversedArray);
}

array.forEach((e) => console.log(e * e));

// 4.	Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
// converting [ 1, 2, 3 ]
//            [ 4, 5, 6 ]
//            [ 7, 8, 9 ]

//         to [ 31, 46, 91 ]
//            [ 59, 97, 19 ]
//            [ 13, 86, 75 ]

let { firstRow, secondRow, thirdRow } = {
  firstRow: [1, 2, 3],
  secondRow: [4, 5, 6],
  thirdRow: [7, 8, 9],
};

const matrix = [firstRow, secondRow, thirdRow];

const operations = [
  [1, 1, 31],
  [1, 2, 46],
  [1, 3, 91],
  [2, 1, 59],
  [2, 2, 97],
  [2, 3, 19],
  [3, 1, 13],
  [3, 2, 86],
  [3, 3, 75],
];

((matrix, operations) => {
  operations.forEach((e) => {
    const row = e[0] - 1;
    const column = e[1] - 1;
    const newValue = e[2];

    matrix[row][column] = newValue;
  });
})(matrix, operations);

// matrix.forEach((e) => console.log(e));
console.log(matrix);

// Achievement:
// By the end of these activities, students will:
// •	Create and manipulate arrays using various methods.
// •	Transform and aggregate array data using map, filter, and reduce.
// •	Iterate over arrays using loops and iteration methods.
// •	Understand and work with multi-dimensional arrays.

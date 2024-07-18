// Day 4: Loops

// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
console.log("Task 1: ");
for (let index = 1; index <= 10; index++) {
  console.log(index);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log("Task 2: ");
for (let index = 1; index <= 12; index++) {
  console.log(`5 x ${index} = ${5 * index}`);
}

// Activity 2: White Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
console.log("Task 3: ");
{
  let i = 1;
  let number = 0;
  while (i <= 10) {
    console.log((number += i));
    i++;
  }
}

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
console.log("Task 4: ");
{
  let index = 10;
  while (index >= 1) {
    console.log(index);
    index--;
  }
}

// Activity 3: Do...While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
console.log("Task 5: ");
{
  let index = 1;
  do {
    console.log(index);
    index++;
  } while (index <= 5);
}

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
console.log("Task 6: ");
{
  let number = 5;
  let factorial = 1;
  do {
    factorial *= number;
    number--;
  } while (number >= 1);
  console.log(factorial);
}

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:
// [
//     *
//     * *
//     * * *
//     * * * *
//     * * * * *
// ]
console.log("Task 7: ");
{
  for (let index = 1; index <= 5; index++) {
    let row = "";
    for (let i = 0; i < index; i++) {
      row += "*";
    }
    console.log(row);
  }
}

// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
console.log("Task 8: ");
for (let index = 1; index <= 10; index++) {
  if (index === 5) continue;
  console.log(index);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
console.log("Task 9: ");
for (let index = 1; index <= 10; index++) {
  if (index === 7) break;
  console.log(index);
}

// Feature Request:
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
console.log("Feature Request 1: ");
{
  for (let index = 1; index <= 10; index++) {
    console.log(index);
  }
  let index = 1;
  while (index <= 10) {
    console.log(index);
    index++;
  }
}

// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
console.log("Feature Request 2: ");
for (let index = 1; index <= 12; index++) {
  console.log(5 * index);
}

// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
console.log("Feature Request 3: ");
{
  let index = 1;
  while (index <= 5) {
    let rows = "";
    let secondOrderIndex = 1;
    while (secondOrderIndex <= index) {
      rows += "* ";
      secondOrderIndex++;
    }
    index++;
    console.log(rows);
  }
}

// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
console.log("Feature Request 4: ");
{
  let sum = 0;
  let index = 1;
  while (index <= 10) {
    sum += index;
    index++;
  }
  console.log(sum);
}

// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
console.log("Feature Request 5: ");
{
  let factorial = 1;
  let index = 1;
  do {
    factorial *= index;
    index++;
  } while (index <= 10);
  console.log(factorial);
}

// Achievement:
// By the end of these activities, students will:
// - Understand and use for loops to iterate over a sequence of numbers.
// - Utilize while loops for iteration based on a condition.
// - Apply do...while loops to ensure the loop body is executed at least once.
// - Implement nested loops to solve more complex problems.
// - Use loop control statements (break and continue) to control the flow of loops.

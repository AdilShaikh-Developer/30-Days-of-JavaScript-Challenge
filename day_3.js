// Day 3: Control Structures

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
((a) => {
  if (a === 0) console.log("the given number is zero");
  else {
    if (a > 0) console.log("the given number is positive");
    if (a < 0) console.log("the given number is negative");
  }
})(0);

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
((personsAge) => {
  if (personsAge >= 18) console.log("person is eligible for voting");
  else console.log("person is not eligible for voting");
})(19);

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
((a, b, c) => {
  if (a > b) {
    if (a > c) console.log("A is the largest number");
    else console.log("C is the largest number");
  } else {
    if (b > c) console.log("B is the largest number");
    else console.log("C is the largest number");
  }
})(950, 50, 70);

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
((dayNumber) => {
  switch (dayNumber) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thurday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;

    default:
      console.log("Invalid Parameter");
      break;
  }
})(1);

// Task 5: Write a program that uses a switch case to assign a grade ("A", "B", "C", "D", "F") based on a score and log the grade to the console.
((score) => {
  switch (true) {
    case score >= 80 && score <= 100:
      console.log("A");
      break;
    case score >= 70 && score < 80:
      console.log("B");
      break;
    case score >= 60 && score < 70:
      console.log("C");
      break;
    case score >= 50 && score < 60:
      console.log("D");
      break;
    case score >= 0 && score < 50:
      console.log("F");
      break;

    default:
      console.log("Invalid Score");
      break;
  }
})(85);

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
((a) => {
  a % 2 === 0 ? console.log("Even Number") : console.log("Odd Number");
})(88);

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
((year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    console.log("Leap Year");
  else console.log("Normal Year");
})(2028);

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
((number) => {
  if (number === 0) console.log("Zero is nither positive nor negative");
  else {
    if (number > 0) console.log("Positive");
    if (number < 0) console.log("Negative");
  }
})(0);

// 2. Voting Eligibility Script: Write a script to check if a person is eligible to vote based on their age and log the result.
((age) =>
  age >= 18
    ? console.log("Person is eligible for voting")
    : console.log("Person is not eligible for voting"))(17);

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
((dayNumber) => {
  switch (dayNumber) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
  }
})(1);

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the result.
((score) => {
  switch (true) {
    case score >= 80 && score <= 100:
      console.log("A");
      break;
    case score >= 70 && score < 80:
      console.log("B");
      break;
    case score >= 60 && score < 70:
      console.log("C");
      break;
    case score >= 50 && score < 60:
      console.log("D");
      break;
    case score >= 0 && score < 50:
      console.log("F");
      break;
  }
})(70);

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
((year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    console.log("Leap Year");
  else console.log("Normal Year");
})(2024);

// Achievement:
// By the end of these activities, students will:
// - Implement and understand basic if-else control flow.
// - Use nested if-else statements to handle multiple conditions.
// - Utilize switch cases for control flow based on specific values.
// - Apply the ternary operator for concise condition checking.
// - Combine multiple conditions to solve more complex problems.

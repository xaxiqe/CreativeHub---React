// 1. Create a simple profile using variables to store a person’s name, age, job, and a fun
// fact. Print the profile information to the console. Consider which variables will
// change over time and which will stay the same fun
// clear
// 2. Write a program that converts temperatures from Celsius to Fahrenheit. Choose a
// suitable type of variable for the conversion factor and the Celsius temperature.
// Display the result of the conversion and then modify the Celsius value to perform
// another conversion.

// let tempCelsius = 1;
// const celToF = function (temp) {
//   return temp * 1.8 + 32;
// };
// console.log(celToF(36));

// 3. Create a simple inventory system for a store that tracks product quantities. Choose the
// appropriate variable types for the product quantities and a fixed tax rate. Update the
// product quantities as if customers are buying products and print the results.
// let apples = 20;
// let bananas = 15;
// const taxRate = 0.08;

// let appleSold = 3;
// let bananaSold = 7;

// apples -= appleSold;
// bananas -= bananaSold;

// console.log(`Apples: ${apples}`);
// console.log(`Bananas: ${bananas}`);

// 4. Write a program that stores a list of your favorite things. Decide which favorites are
// likely to change and which are not. Update one of the values during the program and
// print the list before and after the change
// let favoriteFood = "Pasta";
// const favoriteSport = "Soccer";
// let favoriteMovie = "Shawshank redemption";
// const favoriteSeason = "Summer";

// function printFavorites() {
//   console.log(`Food: ${favoriteFood}`);
//   console.log(`Sportclear: ${favoriteSport}`);
//   console.log(`Movie: ${favoriteMovie}`);
//   console.log(`Season: ${favoriteSeason}`);
// }
// printFavorites();

// favoriteMovie = "Deep into blue";

// printFavorites();

////////////////////////////////////////////////////////////////////
//Types in JS
//////////////////////////////////////////////////////////////////

// 1. Write a program that demonstrates string concatenation and type coercion in
// JavaScript. Start by creating variables with different data types, including strings and
// numbers. Then, try to combine them in different ways using both the + operator and
// template literals.

// let name = "Vloni";
// let age = 26;
// let score = 100;

// let message1 = "My name is " + name + " and I am " + age + " years old.";
// console.log(message1);

// let message2 = "My score is " + score + 10;
// console.log(message2);

// let message3 = `My name is ${name} and I am ${age} years old.`;
// console.log(message3);

////////////////////////////////////////////////////////////////////
//Conditionals
//////////////////////////////////////////////////////////////////

// 1. Write a program that checks whether a person is old enough to vote. Use an if-else
// statement to compare the person's age with the voting age (18). Depending on the
// result, print whether the person is eligible to vote or not.
// const voteAge = 18;
// const perosonAge = 23;
// if (perosonAge > voteAge) {
//   console.log("Is allowed to vote");
// } else {
//   console.log("is not allowed to vote");
// }
// 2. Write a program that checks a student’s grade and assigns a letter grade based on their
// score using if, else if, and else. Students should input their score, and the
// program will output the corresponding grade.

// let score = 9;
// let grade;

// if (score < 7) {
//   grade = "You passed";
// } else if (score > 8) {
//   grade = "Impresive";
// } else if (score === 10) {
//   grade = "Exellent";
// } else {
//   grade = "Failed";
// }
// console.log(`Score: ${score}`);
// console.log(`Grade: ${grade}`);

////////////////////////////////////////////////////////////////
//Loops
///////////////////////////////////////////////////////////////
// 1. Write a program that prints the numbers from 1 to 10 using a for loop.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// // 2. Create a program that iterates over an array of colors and prints each color to the
// // console using a for loop.
// const colors = ["blue", "red", "purple"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
// 3. Write a program that prints a multiplication table for numbers 1 through 5 using
// nested loops.

// for (let i = 1; i <= 5; i++) {
//   for (let k = 1; k <= 5; k++) {
//     console.log(`${i} x ${k} = ${i * k}`);
//   }
// }

//////////////////////////////////////////////////////////////////////
//Functions
////////////////////////////////////////////////////////////////////

// 1. Create a simple function called greet that prints a welcome message to the console.
// Then, call the function multiple times to demonstrate how functions can be reused.

// function greet() {
//   console.log("Welcome");
// }
// greet();
// greet();
// greet();

// 2. Write a function called multiply that takes two parameters (numbers) and prints their
// product. Call the function with different arguments to show how parameters work.
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// console.log(multiply(2, 4));

// // 3. Write a function called add that accepts two parameters, calculates their sum, and
// // returns the result. Call the function and store the return value in a variable to
// // demonstrate the difference between returning and non-returning functions.
// const add = function (num1, num2) {
//   return num1 + num2;
// };
// const shuma = add(4, 5);
// console.log(shuma);

// 4. Write two functions: one that simply prints the result of multiplying two numbers, and
// another that returns the result of multiplying two numbers. Call both functions and
// explain the difference between returning a value and just printing it.
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// multiply(2, 4);

// function multiply2(num1, num2) {
//   console.log(num1 * num2);
// }
// multiply2(2, 5);

// 5. Convert a regular function into an arrow function. Write a function called square that
// accepts a number and returns its square. First, write it as a regular function, then
// convert it to an arrow function.

// function square(num) {
//   return num * num;
// }
// console.log(square(7));

// const square2 = (num) => {
//   return num * num;
// };
// console.log(square2(8));
// 6. Write a function called greetUser that accepts two parameters: name and greeting. Set
// the greeting parameter to a default value of "Hello" if it is not provided. Demonstrate
// how default parameters work by calling the function with and without passing the
// greeting argument.
// function greetUser(name, greeting = "Hello") {
//   console.log(name, greeting);
// }
// greetUser("Vlon");
// greetUser("Vlon", "Hey Hey");

// 7. Write a function called calculateTotalPrice that takes two parameters: price and
// quantity. The function should return the total price by multiplying these values. Then,
// call the function with different numbers to see how multiple arguments work.
// function calcTotalPrice(price, quantity) {
//   console.log(price * quantity);
// }
// calcTotalPrice(3, 5);
// calcTotalPrice(4, 9);

// 8. Create an anonymous function that adds two numbers, and assign it to a variable
// called sum. Then, convert it into an arrow function. This will help students understand
// the difference between anonymous functions and arrow functions.

// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(3, 5));

/////////////////////////////////////////////////////////////
//Callbacks
////////////////////////////////////////////////////////////

// 1. Write a simple function called processData that accepts another function (a callback)
// as an argument. The processData function should call the callback function after it
// prints "Processing data...".

// function processData(callback) {
//   console.log("Proccesing data..");
//   callback();
// }
// processData(function () {
//   console.log("Data processed!");
// });

// 2. Create a function called calculate that accepts two numbers and a callback function.
// The callback function should handle different operations (such as adding, subtracting,
// or multiplying the numbers). Use this pattern to demonstrate how callbacks can
// handle dynamic functionality.

function calculate(num1, num2, task) {
  return task(num1, num2);
}

function addNumbers(a, b) {
  return a + b;
}
function substractNumbers(a, b) {
  return a - b;
}
function multiplyNumbers(a, b) {
  return a * b;
}

console.log(calculate(2, 3, addNumbers));
console.log(calculate(7, 3, substractNumbers));
console.log(calculate(5, 3, multiplyNumbers));

// 3. Write a function called delayedMessage that uses the setTimeout function to simulate
// a delay. The function should accept a message and a callback function. After a delay
// of 2 seconds, it should call the callback and print the message.

const delayedMessage = (message, callback) => {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 2000);
};

delayedMessage("Hiii", () => {
  console.log("Message displayed after delay.");
});

// 4. Create a function fetchData that simulates fetching data from a server using a callback
// for success and another callback for failure. The function should randomly decide
// whether the request is successful or not, calling the appropriate callback.

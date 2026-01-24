// 1. Create a simple profile using variables to store a person’s name, age, job, and a fun
// fact. Print the profile information to the console. Consider which variables will
// change over time and which will stay the same fun
// clear
// 2. Write a program that converts temperatures from Celsius to Fahrenheit. Choose a
// suitable type of variable for the conversion factor and the Celsius temperature.
// Display the result of the conversion and then modify the Celsius value to perform
// another conversion.

let tempCelsius = 1;
const celToF = function (temp) {
  return temp * 1.8 + 32;
};
console.log(celToF(36));

// 3. Create a simple inventory system for a store that tracks product quantities. Choose the
// appropriate variable types for the product quantities and a fixed tax rate. Update the
// product quantities as if customers are buying products and print the results.
let apples = 20;
let bananas = 15;
const taxRate = 0.08;

let appleSold = 3;
let bananaSold = 7;

apples -= appleSold;
bananas -= bananaSold;

console.log(`Apples: ${apples}`);
console.log(`Bananas: ${bananas}`);

// 4. Write a program that stores a list of your favorite things. Decide which favorites are
// likely to change and which are not. Update one of the values during the program and
// print the list before and after the change
let favoriteFood = "Pasta";
const favoriteSport = "Soccer";
let favoriteMovie = "Shawshank redemption";
const favoriteSeason = "Summer";

function printFavorites() {
  console.log(`Food: ${favoriteFood}`);
  console.log(`Sportclear: ${favoriteSport}`);
  console.log(`Movie: ${favoriteMovie}`);
  console.log(`Season: ${favoriteSeason}`);
}
printFavorites();

favoriteMovie = "Deep into blue";

printFavorites();

////////////////////////////////////////////////////////////////////
//Types in JS
//////////////////////////////////////////////////////////////////

// 1. Write a program that demonstrates string concatenation and type coercion in
// JavaScript. Start by creating variables with different data types, including strings and
// numbers. Then, try to combine them in different ways using both the + operator and
// template literals.

let name = "Vloni";
let age = 26;
let score = 100;

let message1 = "My name is " + name + " and I am " + age + " years old.";
console.log(message1);

let message2 = "My score is " + score + 10;
console.log(message2);

let message3 = `My name is ${name} and I am ${age} years old.`;
console.log(message3);

////////////////////////////////////////////////////////////////////
//Conditionals
//////////////////////////////////////////////////////////////////

// 1. Write a program that checks whether a person is old enough to vote. Use an if-else
// statement to compare the person's age with the voting age (18). Depending on the
// result, print whether the person is eligible to vote or not.
const voteAge = 18;
const perosonAge = 23;
if (perosonAge > voteAge) {
  console.log("Is allowed to vote");
} else {
  console.log("is not allowed to vote");
}
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
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 2. Create a program that iterates over an array of colors and prints each color to the
// console using a for loop.
const colors = ["blue", "red", "purple"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// 3. Write a program that prints a multiplication table for numbers 1 through 5 using
// nested loops.

for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= 5; k++) {
    console.log(`${i} x ${k} = ${i * k}`);
  }
}

//////////////////////////////////////////////////////////////////////
//Functions
////////////////////////////////////////////////////////////////////

// 1. Create a simple function called greet that prints a welcome message to the console.
// Then, call the function multiple times to demonstrate how functions can be reused.

function greet() {
  console.log("Welcome");
}
greet();
greet();
greet();

// 2. Write a function called multiply that takes two parameters (numbers) and prints their
// product. Call the function with different arguments to show how parameters work.
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(2, 4));

// // 3. Write a function called add that accepts two parameters, calculates their sum, and
// // returns the result. Call the function and store the return value in a variable to
// // demonstrate the difference between returning and non-returning functions.
const add = function (num1, num2) {
  return num1 + num2;
};
const shuma = add(4, 5);
console.log(shuma);

// 4. Write two functions: one that simply prints the result of multiplying two numbers, and
// another that returns the result of multiplying two numbers. Call both functions and
// explain the difference between returning a value and just printing it.
function multiply(num1, num2) {
  return num1 * num2;
}
multiply(2, 4);

function multiply2(num1, num2) {
  console.log(num1 * num2);
}
multiply2(2, 5);

// 5. Convert a regular function into an arrow function. Write a function called square that
// accepts a number and returns its square. First, write it as a regular function, then
// convert it to an arrow function.

function square(num) {
  return num * num;
}
console.log(square(7));

const square2 = (num) => {
  return num * num;
};
// console.log(square2(8));
// 6. Write a function called greetUser that accepts two parameters: name and greeting. Set
// the greeting parameter to a default value of "Hello" if it is not provided. Demonstrate
// how default parameters work by calling the function with and without passing the
// greeting argument.
function greetUser(name, greeting = "Hello") {
  console.log(name, greeting);
}
greetUser("Vlon");
greetUser("Vlon", "Hey Hey");

// 7. Write a function called calculateTotalPrice that takes two parameters: price and
// quantity. The function should return the total price by multiplying these values. Then,
// call the function with different numbers to see how multiple arguments work.
function calcTotalPrice(price, quantity) {
  console.log(price * quantity);
}
calcTotalPrice(3, 5);
calcTotalPrice(4, 9);

// 8. Create an anonymous function that adds two numbers, and assign it to a variable
// called sum. Then, convert it into an arrow function. This will help students understand
// the difference between anonymous functions and arrow functions.

const sum = function (a, b) {
  return a + b;
};

console.log(sum(3, 5));

/////////////////////////////////////////////////////////////
//Callbacks
////////////////////////////////////////////////////////////

// 1. Write a simple function called processData that accepts another function (a callback)
// as an argument. The processData function should call the callback function after it
// prints "Processing data...".

function processData(callback) {
  console.log("Proccesing data..");
  callback();
}
processData(function () {
  console.log("Data processed!");
});

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

//Failed to solve

////////////////////////////////////////////////
//Arrays
////////////////////////////////////////////////

// 1. Write a program that creates an array of your favorite fruits. Then, print the first and
// last fruit in the array.
const favFruits = ["apple", "banana", "blueberry", "strawberry", "orange"];
const firstFruit = favFruits[0];
const lastFruit = favFruits[favFruits.length - 1];

console.log("First fruit:", firstFruit);
console.log("Last fruit:", lastFruit);

// // 2. Write a program that adds a new fruit to the beginning and the end of an array of
// // fruits. Then, remove a fruit from the beginning and end.
const favFruit = ["apple", "banana", "blueberry", "strawberry", "orange"];

// //add
favFruit.unshift("lemon");
favFruit.push("kiwi");
console.log("After adding fruits:", favFruit);

// //remove
favFruit.shift();
favFruit.pop();
console.log("After removing fruits:", favFruit);

// 3. Create a program that loops through an array of numbers using a for loop and prints
// only the even numbers.
const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= evenNumbers.length; i++) {
  if (i % 2 === 0) [console.log(i)];
}

// 4. Write a program that creates a new array where each number in the original array is
// multiplied by 2.
const num = [7, 4, 8, 2, 12];
const doubleNum = num.map((n) => n * 2);
console.log(doubleNum);

// 5. Write a program that filters an array of numbers to create a new array that contains
// only numbers greater than 5.
const numbers = [3, 4, 5, 6, 7, 8];
const greaterThanFive = numbers.filter((n) => n > 5);

// console.log(greaterThanFive);

// 6. Create a program that finds the first number in an array that is divisible by 3.
const numbers2 = [2, 4, 5, 12, 7, 9];
const isDividedBy3 = numbers2.find((num) => num % 3 === 0);
console.log(isDividedBy3);

// 7. Write a program that sorts an array of numbers in ascending order using the sort
// method. Then, reverse the order using the reverse method.
const numbers3 = [2, 4, 5, 12, 7, 9];
const ascOrder = numbers3.sort((a, b) => a - b);
const reverseOrder = ascOrder.slice().reverse();
console.log(ascOrder);
console.log(reverseOrder);

// 8. Write a program that loops through an array of cities and prints each city name.
const cities = ["Peja", "New York City", "Tirana", "Tokyo", "Mallorca"];

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

/////////////////////////////////////////////////////////////
//Objects
///////////////////////////////////////////////////////////////

// 1. Write a program that creates an object to represent a car. The object should have
// properties for make, model, and year. Print the object to the console.
const cars = {
  make: "BMW",
  model: "X3",
  year: 2025,
};
console.log(cars);

// 2. Using the car object you created, write a program that prints the value of the model
// and year properties using both dot notation and bracket notation.
const cars2 = {
  make: "BMW",
  model: "X3",
  year: 2025,
};
console.log(cars2.model);
console.log(cars2.year);
console.log(cars2["model"]);
console.log(cars2["year"]);

// 3. Write a program that adds a new property color to the car object and then removes the
// year property. Print the object after each operation.
const cars3 = {
  make: "BMW",
  model: "X3",
  year: 2025,
};

cars3.color = "blue";
console.log(cars3);

delete cars3.year;
console.log(cars3);

// 4. Extend the car object by adding a method called getCarInfo that returns a string
// containing the car’s make and model. Call this method and print the result.

//FAIL

// 5. Write a program that creates an object to represent a person. The person object should
// have properties for name, age, and an address object. The address object should have
// properties for street, city, and country. Access and print the street and country of the
// person's address.

const person = {
  name: "Vlon",
  age: "21",
  address: {
    street: "123idontcare",
    city: "NYC",
    country: "US,",
  },
};
console.log("Street:", person.address["street"]);
console.log("Country:", person.address["country"]);

// 6. Write a program that creates a student object with properties for name, age, and an
// array of grades. Print the student's average grade
const student = {
  name: "Vlon",
  age: 33,
  grades: [7, 9, 10, 8],
};
const totalGrades = student.grades.reduce((acc, cur) => acc + cur);
const avgGrade = totalGrades / student.grades.length;
console.log(avgGrade);

//////////////////////////////////////////////////////////////////////
//Destructuring, Rest and Spread Operators
////////////////////////////////////////////////////////////////////

// 1. Write a program that uses array destructuring to extract the first two elements from an
// array of numbers. Print the extracted values.
const destructureArr = [8, 2, 6, 7, 4, 1, 6];
const [first, second] = destructureArr;
console.log(first, second);

// 2. Create an object representing a book with properties: title, author, and year. Use
// object destructuring to extract the title and author, and print them.

const book = {
  title: "Chronicle in Stone",
  author: "Ismail Kadare",
  year: 1980,
};
const { title, author } = book;
console.log(title, author);

// 3. Modify the previous assignment to include default values for title and publisher when
// destructuring. If the publisher property is not available in the object, it should default
// to "Unknown".

//Failed

// 4. Create a function named sum that uses the rest operator to accept any number of
// arguments and returns their sum. Call this function with different sets of numbers.
function sum1(...num) {
  const total = num.reduce((acc, cur) => acc + cur, 0);
  return total;
}
console.log(sum1(5, 5, 9, 7));
console.log(sum1(2, 6, 4, 7));

// 5. Write a program that creates two arrays and uses the spread operator to merge them
// into a new array. Print the new array.
const arr1 = [5, 8, 9, 6, 3, 2];
const arr2 = [3, 5, 9];
const mergeArrays = [...arr1, ...arr2];
console.log(mergeArrays);

// 6. Create two objects representing a person and a contact. Use the spread operator to
// create a new object that combines both. Print the new object.

const person1 = {
  name: "Hasan",
  age: 75,
  country: "Albania",
};

const contact = {
  cel: 394589,
  add: "Rruga B",
  facebook: "Fan Noli",
};
const mergeObj = { ...person1, ...contact };
console.log(mergeObj);

// 7. Write a program that demonstrates nested destructuring with an object that contains
// an array. Create an object with a property grades that is an array, and destructure it to
// extract the first grade.

const student2 = {
  name: "Vlon",
  age: 33,
  city: "Peja",
  grades: [7, 9, 10, 8],
};
const {
  grades: [firs],
} = student2;
console.log(firs);

// 8. Create a program that demonstrates renaming during destructuring. Create an object
// representing a user with properties username and email. When destructuring, rename
// username to user and print both values

//Fail

/////////////////////////////////////////////////////////////////////////////
//Promises, Async/Await
///////////////////////////////////////////////////////////////////////////

// 1. Write a function named createPromise that returns a promise that resolves with the
// value "Promise resolved!" after 2 seconds.

function createPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 2000);
  });
}
createPromise().then((message) => {
  console.log(message);
});

// 2. Modify the previous assignment to create a function named createRejectionPromise
// that returns a promise that rejects with the value "Promise rejected!" after 2 seconds.
function createRejectionPromise() {
  return new Promise((reject) => {
    setTimeout(() => {
      reject("Promise rejected");
    }, 2000);
  });
}
createRejectionPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

// 3. Create a function named processData that takes a number, returns a promise that
// resolves with that number squared after 1 second, and then chain it to multiply the
// result by 2.

function processData(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}
processData(8)
  .then((result) => {
    return result * 2;
  })
  .then((finalRes) => {
    console.log(finalRes);
  });

// 4. Modify the createRejectionPromise to demonstrate error handling using try...catch
// within an async function.

//fail

// 5. Create an async function that sequentially calls three promises, each resolving after a
// different delay. Log the output of each promise in the order they are resolved.

function firstPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("First promise..");
    }, 1000);
  });
}
function secondPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Second promise..");
    }, 2000);
  });
}
function thirdPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Third promise..");
    }, 3000);
  });
}
async function runPromises() {
  const result1 = await firstPromise();
  console.log(result1);
  const result2 = await secondPromise();
  console.log(result2);

  const result3 = await thirdPromise();
  console.log(result3);
}
runPromises();

// 6. Create a function that returns a promise that resolves if a condition is met and rejects
// with a timeout error if it takes too long. Use this in an async function.

//Fail

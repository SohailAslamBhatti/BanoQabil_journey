/*
Submitted By:   Sohail Aslam Bhatt
                WD-2 (Summer Session) HMC 8-10 (Boys)

Submitted To:   Sir Waqar Ahmed Rana

Assignment # 01: JavaScript Q1 to Q35
*/

// Assignment #1 : Write a program that checks whether a number is even or odd.
// ===========================================================================
let num = +prompt("Enter any number = ")
num = Number(num);

if (isNaN(num)){
  console.log("Please enter a valid number! ");  
} else if(num < 0){
  console.log("Number cannot be negative.");  
} else if(num % 2 == 0){
  console.log(`${num} is EVEN`);  
} else {
  console.log(`${num} is ODD`);
}


// Assignment #2 : If someone's age is more than or equal to 18, print "Eligible to vote", 
//                 otherwise print "Not eligible".
// ======================================================================================
let age = +prompt("How old are you? ");

if (isNaN(age)){
  console.log("Please enter a valid age. ");  
} else if(age < 0){
  console.log("Age cannot be negative.");  
} else if (age>=18){
  console.log("You are Eligible to vote");  
} else {
  console.log("You are NOT Eligible to vote");
}


// Assignment #3 : Print numbers from 1 to 10 using a for loop.
// ===========================================================
for(let i = 1; i<=10; i++)
console.log(i);


// Assignment #4 : Print even numbers between 1 to 20 using a while loop.
// =====================================================================
let i = 1;
while(i<=20){
  if(i%2 == 0){
    console.log(i);    
  }
  i ++;
}


// Assignment #5 : Print the reverse of a given string using a for loop.
// ====================================================================

let orgString = window.prompt("Enter any string ");
let revString = "";
for(let i = orgString.length-1; i>=0; i--){
  revString += orgString[i];
}
console.log("Reversed String = ", revString);


// Assignment #6 : Write a function that adds two numbers and returns the result.
// ==============================================================================

function add(x,y){
  return x+y;
}
console.log(add(12,8));


// Assignment #7 : Write a function that returns the factorial of a number.
// ========================================================================

let number = +prompt("Enter a non-negative number:");

  if (!isNaN(number) && number >= 0 && Number.isInteger(number)) {
    let result = 1;

    for (let i = 2; i <= number; i++) {
      result *= i;
    }

    console.log("Factorial of " + number + " is: " + result);    
  } else {
    console.log("Please enter a valid non-negative integer.");
  }


// Assignment #8 : Write a function that checks if a given string is a palindrome (e.g., "madam").
// ===============================================================================================

let orgStrings = window.prompt("Enter any string ");
let revStrings = "";
for(let i = orgStrings.length-1; i>=0; i--){
  revString += orgStrings[i];
}
    if(revStrings === orgStrings){
      console.log("String is a palindrome! ");
    } else {
    console.log("String is NOT a palindrome! ");    
    }    


// Assignment #9 : Create an object student with the following properties:
//                 name, rollNo, marks, isPassed
// =======================================================================
const student = {
  name : 'sohail',
  rollNo : 777,
  class : 'webdev2',
  marks : 999,
  isPassed : true
};
console.log(student);


// Assignment #10 : Access the properties of the student object using dot and bracket notation.
// ============================================================================================

// Using Dot Notation:
console.log(student.name);
console.log(student.rollNo);
console.log(student.class);
console.log(student.marks);
console.log(student.isPassed);

// Using Bracket Notation:
console.log(student['name']);
console.log(student['rollNo']);
console.log(student['class']);
console.log(student['marks']);
console.log(student['isPassed']);


// Assignment #11 : Add a method inside the student object that prints:
//                  "Hello, I am [name]"
// ====================================================================
const Student = {
  name: "Bhatti",
  rollNo: 101,
  marks: 1111,
  isPassed: true,
  greet: function() {    
    console.log(`Hello, I am ${Student.name}`);    
  }
};
Student.greet();


// Assignment #12 : Create a function that takes an object and prints all keys and values using a loop.
// ====================================================================================================
const car = {
  name : 'mazda3 sedan',
  model : 'SKYACTIV®-G',
  performance : '250HP',
  color : 'black'
};
function toprint(car) {
  for (let key in car) {
    console.log(key + ": " + car[key]);
  }
}
toprint(car);


// Assignment #13 : Create an array of your favorite fruits.
// =========================================================
let favFruits = ["guava", "java plum", "pear", "apple", "orange"];
console.log(favFruits);


// Assignment #14 : Add a new fruit to the array.
// ==============================================
favFruits.push("banana");
console.log(favFruits);


// Assignment #15 : Remove the last fruit from the array.
// ======================================================
favFruits.pop(-1);
console.log(favFruits);


// Assignment #16 : Check if "banana" is present in the array using .includes().
// =============================================================================
const hasBanana = favFruits.includes("banana");
console.log(hasBanana);
console.log(favFruits.includes("apple"));


// Assignment #17 : Create an array of numbers. Return a new array where each number is multiplied by 2.
// =====================================================================================================
const arr = [1, 3, 5, 7, 9];
const double_arr = [];

for(let i = 0; i<arr.length; i++){
  double_arr.push(arr[i]*2)
}
console.log(double_arr);


// Assignment #18 : Create an array of ages. Return only those who are 18 or older.
// ================================================================================

const ages = [15, 24, 34, 16, 18, 49, 55, 9, 73];
const overAges = ages.filter(checkAdult);

function checkAdult(ages) {
  return ages>=18
}
console.log(overAges);



// Assignment #19 : Use .find() to get the first number greater than 10 from an array.
// ===================================================================================

const num1 = [3, 7, 19, 8, 21];
const overTen = num1.find(checkNum);

function checkNum(num1){
  return num1>10;  
}
console.log(overTen);


// Assignment #20 : Use .forEach() to print every name from an array of names.
//                  const students = [
//                    { name: "Ali", marks: 80 },
//                    { name: "Zara", marks: 95 },
//                    { name: "Umar", marks: 45 }
//                  ];
// ==========================================================================
const students = [
  { name: "Ali", marks: 80 },
  { name: "Zara", marks: 95 },
  { name: "Umar", marks: 45 }
];

students.forEach(student => {
  console.log(student.name);
});


// Assignment #21 : Use .map() to return an array of only student names.
// =====================================================================
const studentNames = students.map(student => student.name);
console.log(studentNames);


// Assignment #22 : Use .filter() to return students who scored more than 50.
// ==========================================================================
const stdPassed = students.filter(student => student.marks > 50);
console.log(stdPassed);


// Assignment #23 : Use .find() to get the student whose name is "Zara".
// =====================================================================

const studentfind = students.find(student => student.name === "Zara");
console.log(studentfind);


// Assignment #24 : Use .forEach() to print each student’s name and marks.
// =======================================================================
const studentForEach = students.forEach(student => {
  console.log(`${student.name} -> ${student.marks}`);  
})


// Assignment #25 : You have an array [2, 4, 6, 8]. Return a new array with each number squared.
//                   → Output: [4, 16, 36, 64]
// =============================================================================================
const arr2 = [2, 4, 6, 8];
const arrSquared = [];

for(let i = 0; i<arr2.length; i++){
  arrSquared.push(arr2[i]**2)
}
console.log(arrSquared);


// Assignment #26 : Given: ["Ali", "Zara", "Umar", "Ahmed"]. Display each name one by one.
// =======================================================================================
const names = ['Ali', 'Zara', 'Umer', 'Ahmed'];
names.forEach(name => {
  console.log(name);  
})

// ALTERNATIVE:
for(let i = 0; i<names.length; i++){
  console.log(names[i]);  
}


// Assignment #27 : From [12, 25, 17, 20, 16, 30], return only the ages above 18.
// ==============================================================================
let Ages = [12, 25, 17, 20, 16, 30];
let overAge1 = Ages.filter(checkAdult);

function checkAdult(ages){
  return ages>18;  
}
console.log(overAge);

// ALTERNATIVE:
let overAges1 = ages.filter(age => age>18);
console.log(overAge1);


// Assignment #28 : Check if "apple" exists in the array ["banana", "mango", "grapes", "apple"].
// ==============================================================================

const fruity = ['banana', 'mango', 'grapes', 'apple'];
const hasApple = fruity.includes('apple')
console.log(hasApple);

// ALTERNATIVE:
const fruits = ["banana", "mango", "grapes", "apple"];
const haiApple = fruits.find(fruit => fruit === "apple") !== undefined;
console.log(haiApple)


// Assignment #29 : From the following list, find the first student who scored more than 90:
//                  [
//                      { name: "Ali", marks: 75 },
//                      { name: "Zara", marks: 92 },
//                      { name: "Umar", marks: 85 }
//                  ]
// =========================================================================================
const Students = [  { name: "Ali", marks: 75 },
                    { name: "Zara", marks: 92 },
                    { name: "Umar", marks: 85 } ]
const topStudent = Students.find(student => student.marks> 90);
console.log(topStudent);


// Assignment #30 : You have an array [200, 150, 300, 100]. Return the total sum.
//                  → Output: 750
// ==============================================================================
const arr3 = [200, 150, 300, 100];

arrTotal = arr3.reduce((accumulator, current) => accumulator + current, 0)    // .reduce() method reduces the array to a single value  
console.log(arrTotal);

//  ALTERNATIVE:
let total = 0;
for(let i=0; i<arr3.length; i++){
  total += arr3[i];  
}
console.log(total);


// Assignment #31 : From this array:
// [
//   { id: 1, username: "ali123" },
//   { id: 2, username: "zara88" },
//   { id: 3, username: "umar_01" }
// ]
// Return a new array of only usernames.
// =====================================
const users = [
  { id: 1, username: "ali123" },
  { id: 2, username: "zara88" },
  { id: 3, username: "umar_01" }
];
const usernames = users.map(user => user.username);
console.log(usernames);


// Assignment #32 : From [1, 2, 3, 4, 5, 6], return only odd numbers.
//                  → Output: [1, 3, 5]
// ==================================================================
const arr4 = [1, 2, 3, 4, 5, 6];
const arrOdd = arr4.filter(item => item % 2 !== 0);
console.log(arrOdd);


// Assignment #33 : Count how many vowels are present in the string "javascript".
// ==============================================================================
const str = "javascript";
const vowels = "aeiou";
let count = 0;

for (let char of str) {
  if (vowels.includes(char)) {
    count++;
  }
}
console.log(count); 


// Assignment #34 : Loop through this array and log:
// Task: [taskName] - Status: [Completed/Incomplete]
// [
//   { task: "Assignment", completed: true },
//   { task: "Homework", completed: false }
// ]
// =================================================
const tasks = [ { task: "Assignment", completed: true },
                { task: "Homework", completed: false }  ];

tasks.forEach(item => {
  const status = item.completed ? "Completed" : "Incomplete";
  console.log(`Task: ${item.task} - Status: ${status}`);
});



// Assignment #35 : From a list of employees, return a new array that
//                  adds a new field: "status": "active" to each object.
// =====================================================================
const employees = [
  { name: "Ali", id: 1 },
  { name: "Zara", id: 2 },
  { name: "Umar", id: 3 }
];
const updatedEmployees = employees.map(emp => {
  return {
    ...emp,              // spread the original object
    status: "active"     // add new field
  };
});

console.log(updatedEmployees);



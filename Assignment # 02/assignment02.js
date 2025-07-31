/*
|---------------------------------------------------------|
|  Submitted By:   Sohail Aslam Bhatt                     |
|                  WD-2 (Summer Session) HMC 8-10 (Boys)  |
|                                                         |
|  Submitted To:   Sir Waqar Ahmed Rana                   |
|                                                         |
|  Assignment # 02: JavaScript Q1 to Q6 & Q10 to Q14      |
|---------------------------------------------------------|


1. Unique Words Counter
------------------------
Input: A string
const text = "JavaScript is great and JavaScript is powerful";
Task: Return an object with each unique word and its count. */
// =============================================================================

const string = "JavaScript is great and JavaScript is powerful";

function uniqueWordsCounter(str) {
  const words = str.toLowerCase().split(/\s+/); 
  const wordCount = {};

  for (let word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  return wordCount;
}
console.log(uniqueWordsCounter(string));

/*
2. Group Students by Class
---------------------------
Input: Array of objects
const students = [
  { name: "Ali", class: "10th" },
  { name: "Sara", class: "9th" },
  { name: "Ahmed", class: "10th" },
  { name: "Zara", class: "9th" }
];
Task: Return an object like { "10th": [...], "9th": [...] } */
// =============================================================================

const students = [
  { name: "Ali", class: "10th" },
  { name: "Sara", class: "9th" },
  { name: "Ahmed", class: "10th" },
  { name: "Zara", class: "9th" }
];

function groupByClass(arr) {
  return arr.reduce((acc, student) => {
    const cls = student.class;
    if (!acc[cls]) {
      acc[cls] = [];
    }
    acc[cls].push(student);
    return acc;
  }, {});
}
console.log(groupByClass(students));

/*
3. Filter Products by Price Range
----------------------------------
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Phone", price: 500 },
];
Task: Create a function that takes min and max price and returns filtered products */
// =============================================================================

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Phone", price: 500 },
];

function filterProductsByPrice(min, max) {
  return products.filter(product => product.price >= min && product.price <= max);
}
const filtered = filterProductsByPrice(500, 1000);
console.log(filtered);

/*
4. Check Palindrome Using Function
-----------------------------------
Input: A string like "madam"
Task: Check if it is palindrome using a function */
// =============================================================================

function isPalindrome(str) {
  const cleanStr = str.toLowerCase();

  const reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("hello"));     // false

/*
5. Flatten Array
-----------------
const nestedArray = [1, [2, [3, 4]], 5];
Task: Flatten the array to [1, 2, 3, 4, 5] using recursion or array methods */
// =============================================================================

const nestedArray = [1, [2, [3, 4]], 5];

const flattened = nestedArray.flat(Infinity);

console.log(flattened); 


// 6. Total Salary Calculation (Using Reduce)
// -------------------------------------------
// const employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Zara", salary: 1500 },
//   { name: "Ahmed", salary: 1200 },
// ];
// Task: Get total salary of all employees
// =============================================================================

const employees = [
  { name: "Ali", salary: 1000 },
  { name: "Zara", salary: 1500 },
  { name: "Ahmed", salary: 1200 },
];

const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);

console.log("Total Salary:", totalSalary);


// 10. Sum of All Even Numbers in Nested Array
// --------------------------------------------
// const data = [1, 2, [4, 5, [6, 8]], 10];
// Task: Return sum of all even numbers, regardless of depth
// =============================================================================

const data = [1, 2, [4, 5, [6, 8]], 10];

function sumEvenNumbers(arr) {
  let sum = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      sum += sumEvenNumbers(item); 
    } else if (item % 2 === 0) {
      sum += item; 
    }
  }
  return sum;
}
console.log("Sum of Even Numbers:", sumEvenNumbers(data)); 


// 11. Rest Operator in Function
// ------------------------------
// Task: Write a function that takes any number of numbers and returns their average
// =============================================================================

function average(...numbers) {
  if (numbers.length === 0) return 0;

  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}
console.log(average(20, 40, 60));    // Output: 40
console.log(average(15, 25));        // Output: 20


/*
12. Frequency Count with Spread
-------------------------------
const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
Task: Count how many times each fruit occurred using spread & reduce */
// =============================================================================

const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const frequency = arr.reduce((acc, fruit) => {
  return {
    ...acc,
    [fruit]: (acc[fruit] || 0) + 1
  };
}, {});

console.log(frequency);

/*
13. Toggle Status
------------------
const tasks = [
  { id: 1, name: "Code", done: false },
  { id: 2, name: "Eat", done: true },
];
Task: Write a function that toggles done status of a task by id*/
// =============================================================================

const tasks = [
  { id: 1, name: "Code", done: false },
  { id: 2, name: "Eat", done: true },
];
function toggleTaskStatus(tasks, id) {
  return tasks.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );
}
const updatedTasks = toggleTaskStatus(tasks, 1);
console.log(updatedTasks);

/*
14. Sort by Name Length
------------------------
const names = ["Ali", "Zara", "Ahmed", "Usman"];
Task: Sort names by length in ascending order */
// =============================================================================

const names = ["Sohail", "Zara", "Ali", "Abu Bakr"];

const sortedByLength = names.sort((a, b) => a.length - b.length);

console.log(sortedByLength);











// FUNCTION STATEMENT

function add(a, b) {          
  return a + b;              
}
console.log("Function Statement:", add(5, 3)); 

// FUNCTION EXPRESSION

const multiply = function (a, b) {
  return a * b;
};
console.log("Function Expression:", multiply(4, 5));

// ANONYMOUS FUNCTION

setTimeout(function () {
  console.log("Anonymous Function executed after 1 second");
}, 1000);

// ARROW FUNCTION

const square = (n) => {
  return n * n;
};
console.log("Arrow Function:", square(6));

//   CALLBACK FUNCTION

function greet(name, callback) {
  console.log("Hello", name);
  callback(); 
}

greet("Kavyan", function () {
  console.log("Callback Function Executed");
});


// FUNCTION RETURNING MULTIPLE VALUES

function calculate(a, b) {
  return {
    sum: a + b,
    diff: a - b
  };
}

const result = calculate(10, 5);
console.log("Return Object:", result);

// FOR LOOP

console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//WHILE LOOP

console.log("While Loop:");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// DO-WHILE LOOP

console.log("Do-While Loop:");
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// FOR...OF LOOP (Arrays)

console.log("For...of Loop:");
let languages = ["JavaScript", "HTML", "CSS"];
for (let lang of languages) {
  console.log(lang);
}

// FOR...IN LOOP 

console.log("For...in Loop:");
let student = {
  name: "Kavyan",
  age: 22,
  course: "CS"
};

for (let key in student) {
  console.log(key, ":", student[key]);
}


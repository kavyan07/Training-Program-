//introduction to javascript
console.log("Script loaded successfully.");

//variable declaration
var name="xyz";
let age=22;
const isStudent=true;
console.log("Name:",name);
console.log("Age:",age);
console.log("Is Student:",isStudent);

//basic arithmetic operations       
let a=5;
let b=10;
console.log("Addition:",a+b);
console.log("Subtraction:",b-a);
console.log("Multiplication:",a*b);
console.log("Division:",b/a);


//comparison operators
console.log(5 == "5");   
console.log(5 === "5");  
console.log(a > b);      

//Logical Operators
console.log(true && false); 
console.log(true || false); 
console.log(!true); 


//if-else
let marks = 80;

if (marks >= 60) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}

//switch-case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;          
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

console.log("All JavaScript basics executed successfully!");
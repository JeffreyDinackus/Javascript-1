//This first set of problems is for Learn to code with javascript.

//This is problem 1.
let userName = prompt("What is your name?");
/*I'm not totally sure what a template literal is because it wasn't covered in chapters 1 and 2 of the textbook, I am using a W3Schools article to figure it out. 
https://www.w3schools.com/JS//js_string_templates.asp
*/

alert(`You name is ${userName}`);

//this is problem 2.
let userName2 = prompt("What is your name?");
alert(`You name has ${userName2.length} characters in it`);

//this is problem 3

let userName3 = prompt("What is your name for the third time?");
//this line turns the string into a array, reverses it with .reverse(), then joins it back together.
alert(`Your string in reverse is: ${userName3.split("").reverse().join("")}`);

//These next problems are from JavaScript from Beginner to Professional.

//this is problem 2.3
//this calculates the pythagorian theorem. a^2+b^2=c^2

let b = prompt("enter a side for a");
let a = prompt("enter a side for b");
let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//it says to make it a log in the console for this problem.
console.log(c);

//this is problem 2.4

// Add b to a
// Divide a by c
// Replace the value of c with the modulus of c and b
// Print all three numbers to the console
a = +a + +b; //the way they wrote this is sorta unclear. I interpreted what they wrote as adding b to a.
//It will concatenate without the + in front of the number.
a = +a / +c;
c = +c % +b;
alert(`a == ${a}, b == ${b}, c == ${c}`);

//This is the first chapter 2 project, miles to kilometers.

let miles = +10;
let kilometers = +miles * +1.60934;

console.log(`The distance of ${kilometers} kms is equal to ${miles} miles`);
//the original text from the textbook is, "The distance of 130 kms is equal to 209.2142 miles" This doesn't make sense because a kilometer is shorter than a mile. I think it is a error in the textbook. 

//This is the second chapter 2 project, BMI.

let inches = 72; //6 feet
let pounds = 150;

let centimeters = +inches * +2.54;
let kilos = +pounds / +2.2046;
let meters = centimeters / 100;

//outputs variables to console. Mostly for my own checking
console.log(
  `Inches: ${inches}, Pounds: ${pounds},  Centimeters: ${centimeters}, Kilos: ${kilos}`
);

let BMI = +kilos / (+meters * +meters);

console.log(`BMI is ${BMI}`);


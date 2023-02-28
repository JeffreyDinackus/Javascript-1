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
let x = 1;

//this is problem 2.4
let y = 2;

//this is the chapter 2 project, Mils to Kilometers.

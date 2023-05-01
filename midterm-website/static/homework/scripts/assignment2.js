//Exercise 1: Select the title of three (3) courses in your program of study and return the number of vowels  and consonants in the titles  [3 points each => 9 points]

let classone = "ITP 270: Programming for Cybersecurity";
let classtwo = "ITP 120: Java 1";
let classthree = "ITN 200: Networking Administration";

vowelsFinal = vowels(classone);
vowelsFinal += vowels(classtwo);
vowelsFinal += vowels(classthree);

consenantsFinal = consenants(classone);
consenantsFinal += consenants(classtwo);
consenantsFinal += consenants(classthree);

function vowels(str) {
  //g flag means global, i flag ignores case.
  //this function takes 1 class a time, making it much more flexible than if I hardcoded the text strings in.
  let i = str.match(/[aeiou]/gi);
  //? is the ternary operator, it replaces with one of the second values depending on if it equals null, null is 0, otherwise, it is i.length.
  return i === null ? 0 : i.length;
  //the output is always a number
}

function consenants(str) {
  //g flag means global, i flag ignores case.
  //this function takes 1 string a time, making it much more flexible than if I hardcoded the text strings in.
  //I included every letter that is not a vowel.
  let i = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  //? is the ternary operator, it replaces with one of the second values depending on if it equals null, null is 0, otherwise, it is i.length.
  return i === null ? 0 : i.length;
  //the output is always a number
}

console.log(
  `There are ${vowelsFinal} vowels and ${consenantsFinal} consenants in these courses.`
);
document.getElementById(
  "vow-cons"
).innerHTML = `There are ${vowelsFinal} vowels and ${consenantsFinal} consenants in these courses.`;

//Exercise 2: Print multiplication and Division table  0 - 12 [ 10 points each => 20 points]
//this one is kinda self explanatory if you know how a for loop works. I don't know how to print in the html so well, I know it sorta showed it in one of the readings but it never was explained or talked about in class. Therefore, I used logs.

let array0 = table(0);
let array1 = table(1);
let array2 = table(2);
let array3 = table(3);
let array4 = table(4);
let array5 = table(5);
let array6 = table(6);

let array7 = table(7);
let array8 = table(8);
let array9 = table(9);
let array10 = table(10);
let array11 = table(11);
let array12 = table(12);

document.getElementById("zero").innerHTML = JSON.stringify(array0, null, 2);

document.getElementById("one").innerHTML = JSON.stringify(array1, null, 2);
document.getElementById("two").innerHTML = JSON.stringify(array2, null, 2);
document.getElementById("three").innerHTML = JSON.stringify(array3, null, 2);

document.getElementById("four").innerHTML = JSON.stringify(array4, null, 2);

document.getElementById("five").innerHTML = JSON.stringify(array5, null, 2);
document.getElementById("six").innerHTML = JSON.stringify(array6, null, 2);
document.getElementById("seven").innerHTML = JSON.stringify(array7, null, 2);

document.getElementById("eight").innerHTML = JSON.stringify(array8, null, 2);
document.getElementById("nine").innerHTML = JSON.stringify(array9, null, 2);
document.getElementById("ten").innerHTML = JSON.stringify(array10, null, 2);

document.getElementById("eleven").innerHTML = JSON.stringify(array11, null, 2);

document.getElementById("twelve").innerHTML = JSON.stringify(array12, null, 2);

function table(num) {
  let array = [];
  array[0] = `This begins the multiplication table for ${num}`;
  let h = 1;
  for (let i = 0; i <= 12; i++) {
    array[h] = `${num} * ${i} = ${+num * +i}`;
    h += 1;
  }
  return array;
}

// Exercise 3**: Converter Fahrenheit to Celsius -> vice versa [1.5  points each => 3 points]

mode = prompt(
  "for fahrenheit to celcius type 'ftc' or for celcius to fahrenheit type 'ctf', any other response will be discarded."
);

if (mode.toLowerCase() == "ftc") {
  temp = prompt("enter a fahrenheit temp to convert to celcius.");
  //checks if it is NaN
  if (isNaN(temp) || temp == "") {
    alert("You did not enter a number. Refresh and try again");
    throw new Error("Temp is NaN");
  } else {
    //rounding to the nearest degree is accurate enough for our purposes.
    alert(
      `${temp} fahrenheit is equal to ${Math.round(
        temp - 32 * (5 / 9)
      )} celcius`
    );
  }
} else if (mode.toLowerCase() == "ctf") {
  temp = prompt("enter a celcius temp to convert to fahrenheit.");
  //checking for null and ""
  if (isNaN(temp || temp == "")) {
    alert("You did not enter a number. Refresh and try again");
    throw new Error("Temp is NaN");
  } else {
    //rounding to the nearest degree is accurate enough
    alert(
      `${temp} celcius is equal to ${Math.round(
        temp * (9 / 5) + 32
      )} fahrenheit`
    );
  }
} else {
  //covering my bases
  alert("You did not print the right mode, refresh the page to try again.");
  throw new Error("Wrong input for type");
}

function currency(){
    type = prompt(
    'Choose the option you want:\nUSD to 3 currencies type \"USDto3\"\n3 currencies to USD type \"3toUSD\"\nEUR to 3 currencies type \"EURto3\"\n3 currencies to EUR type \"3toEUR\"\n'
  );
  switch(type.toLowerCase()) {
  case "usdto3":
    amnt = prompt("Enter a amount of USD");
    cur1 = prompt("Enter a first currency name");
    exchange1 = prompt("Enter a first currency exchange rate");
    cur1final = +amnt * +exchange1;

    cur2 = prompt("Enter a second currency name");
    exchange2 = prompt("Enter a second currency exchange rate");
    cur2final = +amnt * +exchange2;

    cur3 = prompt("Enter a third currency name");
    exchange3 = prompt("Enter a third currency exchange rate");
    cur3final = +amnt * +exchange3;


    alert(`USD: ${amnt}\n${cur1}: ${cur1final}\n${cur2}: ${cur2final}\n${cur3}: ${cur3final}`);
    break;
  case "3tousd":
    cur1 = prompt("Enter a first currency to be exchanged into USD");
    exchange1 = prompt(`Enter a exchange rate for ${cur1}`);
    amount1 = prompt(`Enter a amount of currency for ${cur1}`);
    cur1final = +amount1 * +exchange1;

    cur2 = prompt("Enter a second currency to be exchanged into USD");
    exchange2 = prompt(`Enter a exchange rate for ${cur2}`);
    amount2 = prompt(`Enter a amount of currency for ${cur2}`);
    cur2final = +amount2 * +exchange2;

    cur3 = prompt("Enter a third currency to be exchanged into USD");
    exchange3 = prompt(`Enter a exchange rate for ${cur3}`);
    amount3 = prompt(`Enter a amount of currency for ${cur3}`);
    cur3final = +amount3 * +exchange3;

    alert(`${cur1}: ${amount1} = USD: ${cur1final}\n${cur2}: ${amount2} = USD: ${cur2final}\n${cur3}: ${amount3} = USD: ${cur3final}$`);


    break;
  case "eurto3":
    amnt = prompt("Enter a amount of EUR");
    cur1 = prompt("Enter a first currency name");
    exchange1 = prompt("Enter a first currency exchange rate");
    cur1final = +amnt * +exchange1;


    cur2 = prompt("Enter a second currency name");
    exchange2 = prompt("Enter a second currency exchange rate");
    cur2final = +amnt * +exchange2;

    cur3 = prompt("Enter a third currency name");
    exchange3 = prompt("Enter a third currency exchange rate");
    cur3final = +amnt * +exchange3;


    alert(`EUR: ${amnt}\n${cur1}: ${cur1final}\n${cur2}: ${cur2final}\n${cur3}: ${cur3final}`);
    break;



  case "3toeur":
    cur1 = prompt("Enter a first currency to be exchanged into EUR");
    exchange1 = prompt(`Enter a exchange rate for ${cur1}`);
    amount1 = prompt(`Enter a amount of currency for ${cur1}`);
    cur1final = +amount1 * +exchange1;

    cur2 = prompt("Enter a second currency to be exchanged into EUR");
    exchange2 = prompt(`Enter a exchange rate for ${cur2}`);
    amount2 = prompt(`Enter a amount of currency for ${cur2}`);
    cur2final = +amount2 * +exchange2;

    cur3 = prompt("Enter a third currency to be exchanged into EUR");
    exchange3 = prompt(`Enter a exchange rate for ${cur3}`);
    amount3 = prompt(`Enter a amount of currency for ${cur3}`);
    cur3final = +amount3 * +exchange3;

    alert(`${cur1}: ${amount1} = EUR: ${cur1final}\n${cur2}: ${amount2} = EUR: ${cur2final}\n${cur3}: ${amount3} = EUR: ${cur3final}$`);

    break;
  default:
    alert("Enter a value exactly next time");
}
}


// Exercise 4**: Currency Converter
// 4a. Three (3) currencies to USD & vice versa [1.5 points each conversion => 9 points]

//these problem 4a and 4b above our level right now
//im just gonna try alert prompts instead
//my current code is in a script tag on my html because it wouldn't work in my js file.

//here is my original code:

// //these are for the USD to 3 currencies
// const currencyEl_one = document.getElementById("currency-one");
// const currencyEl_two = document.getElementById("currency-two");
// const currencyEl_three = document.getElementById("currency-three");

// const amountEl_one = document.getElementById("amount-one");
// const amountEl_two = document.getElementById("amount-two");
// const amountEl_three = document.getElementById("amount-three");

// const exchangeEl_one = document.getElementById("exchange-one");
// const exchangeEl_two = document.getElementById("exchange-two");
// const exchangeEl_three = document.getElementById("exchange-three");

// function calculateToUSD() {
//   document.getElementById(
//     "from-USD-1"
//   ).innerHTML = `USD -> ${currencyEl_one} = ${swapToUSD1}`;

//   document.getElementById(
//     "from-USD-2"
//   ).innerHTML = `USD -> ${currencyEl_two} = ${swapToUSD2}`;

//   document.getElementById(
//     "from-USD-2"
//   ).innerHTML = `USD -> ${currencyEl_three} = ${swapToUSD3}`;
// }

// // Event Listeners
// currencyEl_one.addEventListener("change", calculate);
// amountEl_one.addEventListener("input", calculate);
// currencyEl_two.addEventListener("change", calculate);
// amountEl_two.addEventListener("input", calculate);
// swap.addEventListener("click", () => {
//   const temp = currencyEl_one.value;
//   currencyEl_one.value = currencyEl_two.value;
//   currencyEl_two.value = temp;
//   calculate();
// });

// //these next ones are for USD to 3 currencies.

// const USDamount = document.getElementById("USD-amount");

// const USDCurrencyOne = document.getElementById("USD-currency-one");
// const USDCurrencyTwo = document.getElementById("USD-currency-two");
// const USDCurrencyThree = document.getElementById("USD-currency-three");

// const USDExchangeOne = document.getElementById("USD-exchange-one");
// const USDExchangetwo = document.getElementById("USD-exchange-two");
// const USDExchangeThree = document.getElementById("USD-exchange-three");

// // 4b. Three (3) currencies to EUR & vice versa [1.5 points each conversion => 9 points]

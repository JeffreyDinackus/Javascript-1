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
  var i = str.match(/[aeiou]/gi);
  //? is the ternary operator, it replaces with one of the second values depending on if it equals null, null is 0, otherwise, it is i.length.
  return i === null ? 0 : i.length;
  //the output is always a number
}

function consenants(str) {
  //g flag means global, i flag ignores case.
  //this function takes 1 string a time, making it much more flexible than if I hardcoded the text strings in.
  //I included every letter that is not a vowel.
  var i = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
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
console.log("This begins the multiplication tables, 0 - 12.");
for (let i = 0; i <= 12; i++) {
  console.log(`Multiplication table for ${i}`);
  for (let j = 0; j <= 12; j++) {
    console.log(`${i} * ${j} = ${j * i}`);
  }
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

// Exercise 4**: Currency Converter
// 4a. Three (3) currencies to USD & vice versa [1.5 points each conversion => 9 points]

//these problem 4a and 4b are way above our level right now

//these are for the USD to 3 currencies
const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const currencyEl_three = document.getElementById("currency-three");

const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");
const amountEl_three = document.getElementById("amount-three");

const exchangeEl_one = document.getElementById("exchange-one");
const exchangeEl_two = document.getElementById("exchange-two");
const exchangeEl_three = document.getElementById("exchange-three");

function calculateToUSD() {
  document.getElementById(
    "from-USD-1"
  ).innerHTML = `USD -> ${currencyEl_one} = ${swapToUSD1}`;

  document.getElementById(
    "from-USD-2"
  ).innerHTML = `USD -> ${currencyEl_two} = ${swapToUSD2}`;

  document.getElementById(
    "from-USD-2"
  ).innerHTML = `USD -> ${currencyEl_three} = ${swapToUSD3}`;
}

// Event Listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

//these next ones are for USD to 3 currencies.

const USDamount = document.getElementById("USD-amount");

const USDCurrencyOne = document.getElementById("USD-currency-one");
const USDCurrencyTwo = document.getElementById("USD-currency-two");
const USDCurrencyThree = document.getElementById("USD-currency-three");

const USDExchangeOne = document.getElementById("USD-exchange-one");
const USDExchangetwo = document.getElementById("USD-exchange-two");
const USDExchangeThree = document.getElementById("USD-exchange-three");

// 4b. Three (3) currencies to EUR & vice versa [1.5 points each conversion => 9 points]

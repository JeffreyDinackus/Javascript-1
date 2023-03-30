// Use the function to create three [3] arrays [2 points each => 6 points]

// An array with twenty-five (25) elements.

function exercise0() {
  array1 = random(24);
  document.getElementById("first").innerHTML = JSON.stringify(array1, null, 2);
  document.getElementById("text1").innerHTML =
    "This is a array with 25 random numbers";

  // An array with seventy-seven [77} elements
  array2 = random(76);
  document.getElementById("second").innerHTML = JSON.stringify(array2, null, 2);
  document.getElementById("text2").innerHTML =
    "This is a array with 77 random numbers";
  // An array with a total of one hundred [100] elements.
  array3 = random(99);
  document.getElementById("third").innerHTML = JSON.stringify(array3, null, 2);
  document.getElementById("text3").innerHTML =
    "This is a array with 100 random numbers";
  exercise1(array1);
  exercise2(array2);
  exercise3(array3);
  exercise4(array3);
}

function random(size) {
  let array = [];
  for (let i = 0; i <= size; i++) {
    array[i] = Math.floor(Math.random() * 101);
  }
  return array;
}

// Exercise 1  [3 points each => 9 points]

// Write a script that uses the array with twenty-five [25] elements which adds the elements in the array.

function exercise1(array) {
  var total = 0;
  for (var i = 0; i < array.length - 1; i++) {
    total += +array[i];
  }
  console.log(total);
  document.getElementById("fourth").innerHTML = JSON.stringify(
    `The total of the first array is ${total}`,
    null,
    2
  );
}

// Write a script that uses the array with seventy-seven [77] elements to create a new array with only odd elements.

function exercise2(array) {
  let oddArray = [];
  x = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {
      oddArray[x] = array[i];
      x += 1;
    }
  }
  document.getElementById("fifth").innerHTML = JSON.stringify(
    oddArray,
    null,
    2
  );
  document.getElementById("text5").innerHTML =
    "This is a array with all of the odd numbers appearing in the array with 77 random numbers";
}

// Write a script that uses the array with one hundred [100] elements to create a new array with only prime elements.

function exercise3(array) {
  let primeArray = [];
  x = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {
      primeArray[x] = array[i];
      x += 1;
    }
  }
  document.getElementById("sixth").innerHTML = JSON.stringify(
    primeArray,
    null,
    2
  );
  document.getElementById("text6").innerHTML =
    "This is a array with all of the prime numbers appearing in the array with 100 random numbers";
}

// Exercise 2  [10 points]

// Write a script that uses any of the generated arrays or generates a new array. Sort the elements in the array from lowest to highest.
function exercise4(array) {
  array.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("seventh").innerHTML = JSON.stringify(
    array3,
    null,
    2
  );
  document.getElementById("text7").innerHTML =
    "This is a sorted array which has the same numbers as the 100 random numbers array";
}

// Use the function to create three [3] arrays [2 points each => 6 points]

// An array with twenty-five (25) elements.

function exercise0() {
  array1 = random(25);
  document.getElementById("first").innerHTML = JSON.stringify(array1, null, 2);
  array2 = random(77);
  document.getElementById("second").innerHTML = JSON.stringify(array2, null, 2);
  array3 = random(100);
  document.getElementById("third").innerHTML = JSON.stringify(array3, null, 2);
}

function random(size) {
  let array = [];
  for (let i = 0; i <= size; i++) {
    array[i] = Math.floor(Math.random() * 101) + 1;
  }
  return array;
}

// An array with seventy-seven [77} elements
// An array with a total of one hundred [100] elements.

// Exercise 1  [3 points each => 9 points]

// Write a script that uses the array with twenty-five [25] elements which adds the elements in the array.
// Write a script that uses the array with seventy-seven [77] elements to create a new array with only odd elements.
// Write a script that uses the array with one hundred [100] elements to create a new array with only prime elements.

// Exercise 2  [10 points]

// Write a script that uses any of the generated arrays or generates a new array. Sort the elements in the array from lowest to highest.

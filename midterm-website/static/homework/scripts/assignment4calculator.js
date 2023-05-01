    let base10orbase8 = 10;
    //I don't know exactly what this button should do as by default the number is base 10. I suppose nothing.
    function runbase10() {
      i = frm.result.value;
      console.log(base10orbase8);
      if (base10orbase8 == 8) {
        //set to base 10 only if it's base 8
        x = parseInt(i, 8).toString(10);
        frm.result.value = x;
        base10orbase8 = 10;
      }
    }
    //this function uses parseint to convert the string to an integer and then uses the toString function to convert the integer to a string in base 8.
    function runbase8() {
      i = frm.result.value;
      console.log(base10orbase8);
      if (base10orbase8 == 10) {
        //set to base 8
        x = parseInt(i).toString(8);
        frm.result.value = x;
        base10orbase8 = 8;
      }
    }

    //these functions are pretty self explanatory, they mostly just add to the string in the input field according to their function. The pi function adds 3.14 to the string.
    function run(x) {
      frm.result.value += x;
    }
    function runSquare() {
      frm.result.value += '**2';
    }
    function runSquareRoot() {
      frm.result.value += '**0.5';
    }
    function runplus() {
      frm.result.value += '+';
    }
    function pi() {
      frm.result.value += '3.14';
    }
    function runTimes() {
      frm.result.value += '*';
    }
    function runExponent() {
      frm.result.value += '**';
    }
    function runMinus() {
      frm.result.value += '-';
    }
    function runDivide() {
      frm.result.value += '/';
    }

    //this function evaluates the string and displays the result
    function evalu() {
      //it's not perfect but in a basic way it works
      var evalo = eval(frm.result.value);

      frm.result.value = evalo;
    }
    //this function clears the input field
    function clearit() {
      frm.result.value = '';
    }
    function run(x) {
      frm.result.value += x;
    }

    function runplus() {
      frm.result.value += '+';
    }

    function evalu() {
      let evalo = eval(frm.result.value);

      frm.result.value = evalo;
    }

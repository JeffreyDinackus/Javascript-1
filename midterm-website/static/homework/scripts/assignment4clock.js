function digitalClock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock').innerText = time;
  setTimeout(digitalClock, 1000);
  document.getElementById('clock').style.font = 'italic bold 20px arial,serif';
}

function twelveHourClock() {
  //get the date object
  var date = new Date();
  //get the properties of the date object used for the clock
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  //checks if the time is AM or PM and sets accordingly
  var ampm = hours >= 12 ? 'pm' : 'am';
  //turns a 24 hour clock into a 12 hour clock
  hours = hours % 12;
  // the hour '0' should be '12'
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  //formats the string properly
  var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  //sets the text of the clock to the formatted string
  document.getElementById('clock2').innerText = strTime;
  //sets the clock to update every second
  setTimeout(twelveHourClock, 1000);
  //sets the font of the clock
  document.getElementById('clock2').style.font = 'italic bold 20px arial,serif';
}

  
    // function digitalClock() {
    //   var date = new Date();
    //   var hours = date.getHours();
    //   var minutes = date.getMinutes();
    //   var seconds = date.getSeconds();
    //   var time = hours + ':' + minutes + ':' + seconds;
    //   document.getElementById('clock').innerText = time;
    //   setTimeout(digitalClock, 1000);
    //   document.getElementById('clock').style.font =
    //     'italic bold 20px arial,serif';
    // }

    // function twelveHourClock() {
    //   //get the date object
    //   var date = new Date();
    //   //get the properties of the date object used for the clock
    //   var hours = date.getHours();
    //   var minutes = date.getMinutes();
    //   var seconds = date.getSeconds();
    //   //checks if the time is AM or PM and sets accordingly
    //   var ampm = hours >= 12 ? 'pm' : 'am';
    //   //turns a 24 hour clock into a 12 hour clock
    //   hours = hours % 12;
    //   // the hour '0' should be '12'
    //   hours = hours ? hours : 12;
    //   minutes = minutes < 10 ? '0' + minutes : minutes;
    //   //formats the string properly
    //   var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    //   //sets the text of the clock to the formatted string
    //   document.getElementById('clock2').innerText = strTime;
    //   //sets the clock to update every second
    //   setTimeout(twelveHourClock, 1000);
    //   //sets the font of the clock
    //   document.getElementById('clock2').style.font =
    //     'italic bold 20px arial,serif';
    // }
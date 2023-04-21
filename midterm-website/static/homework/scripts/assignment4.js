function digitalClock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock').innerText = time;
  setTimeout(digitalClock, 1000);
  document.getElementById('clock').style.font =
    'italic bold 20px arial,serif, red';
}

function twelveHourClock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes + ':' + seconds;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  document.getElementById('clock2').innerText = strTime;
  setTimeout(twelveHourClock, 1000);
  document.getElementById('clock2').style.font =
    'italic bold 20px arial,serif, red';
}

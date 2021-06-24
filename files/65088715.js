function countdown(time_p) {
  var time = sessionStorage.getItem('saved_countdown');

  if (time) {
    time = +time; // cast the string to number
  }
  else {
    // Set the time we're counting down to using the time allowed
    var new_countdown = new Date().getTime() + (time_p + 2) * 1000;
    time = new_countdown;
    sessionStorage.setItem('saved_countdown', new_countdown);
  } 

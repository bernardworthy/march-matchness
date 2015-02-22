app.displayClock = function() {

  var secs = '00';
  var mins = '00';
  var hours = '00';

  function updateSecs() {
    ++secs;
    if (secs > 59) {
      secs = 0;
    }
    if (secs < 10) {
      secs = '0' + secs;
    }
  }

  function updateMins() {
    ++mins;
    if (mins > 59) {
      mins = 0;
    }
    if (mins < 10) {
      mins = '0' + mins;
    }
  }

  function updateHours() {
    ++hours;
    if (hours > 59) {
      hours = 0;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
  }

  setInterval(updateSecs, 1000);
  setInterval(updateMins, 60000);
  setInterval(updateHours, 3600000);
  setInterval(updateClock, 1000);

  function updateClock() {
    var clockStr = hours + ':' + mins + ':' + secs;
    if ($('.clock').length > 0) {
      $('.clock')[0].innerText = clockStr;
    }
    app.clockStr = clockStr;
    app.secs = secs;
    app.mins = mins;
  }
};

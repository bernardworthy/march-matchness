app.router.add('win', showWinScreen);

function showWinScreen() {
  var score;

  if (app.secs < 15) {
    score = app.lives * 10;
  } else if (app.secs < 20) {
    score = app.lives * 5;
  } else if (app.secs > 30) {
    score = app.lives * 3;
  }

  if (app.mins > 1) {
    score = app.lives * 2;
  }

  $('body').css({"background": "#000"});
  $('body').addClass('win');
  $('.game-board').html('<h1 class="win-message">You won the NCAA Tournament! In ' + app.clockStr + ' of playing time you scored ' + score + ' point(s)!</h1><a href="index.html"><button class="beat-score-btn">Beat Your Score</button></a>');
}

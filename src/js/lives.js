app.numLives = function(num) {
  app.lives = num;
}

app.updateLives = function() {
  var origLivesStr = 'dddddddddddddddddddd';
  var currentLivesStr = origLivesStr.slice(0, app.lives);

  if ($('.lives').length > 0) {
    $('.lives')[0].innerText = currentLivesStr;
  }

  app.lives = currentLivesStr.length;

  if (currentLivesStr.length < 1) {
    window.location.hash = '#lose';
  }
};

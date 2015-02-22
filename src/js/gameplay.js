app.gamePlay = function() {
  var tile = $(this);
  $(tile).addClass('clicked');
  $(tile).toggleClass('grid-cell-not-clicked');

  if ($('.clicked').length > 1) {

    if ($('.clicked')[0].innerText === $('.clicked')[1].innerText) {
      console.log('got a match');
      $('.clicked').removeClass('clicked');
    } else {
      console.log(app.lives);
      --app.lives;
      app.updateLives();
      app.removeClickHandler();
      setTimeout(app.flipBackOver, 750);
      setTimeout(app.addClickHandler, 750);
    }
  }

  if ($('.grid-cell-not-clicked').length < 1) {
    window.location.hash = '#win';
  }
};

app.flipBackOver = function() {
  $('.clicked').toggleClass('grid-cell-not-clicked');
  $('.clicked').removeClass('clicked');
};

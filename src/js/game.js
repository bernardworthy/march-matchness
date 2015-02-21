app.router.add('easy', function(){
  buildBoard();

  function buildBoard() {

    app.getCards = function(numPairs) {
      var cards = 'CDSVGYNMW'.split('').slice(0, numPairs);

      var cardsArr = cards.concat(cards);

      return app.shuffle(cardsArr);
    };

    app.shuffle = function(arr) {

      for (i = 0; i < arr.length; ++i) {
        var x = Math.floor(Math.random() * arr.length);
        var y = Math.floor(Math.random() * arr.length);
        var tmp = arr[x];

        arr[x] = arr[y];
        arr[y] = tmp;
      }
      return arr;
    };

    var numPairs = 9;
    var cardsArr = app.getCards(numPairs);
    var template = _.template($('#tile').html(), { variable: 'm'});

    $('.grid').html(template({ deck: cardsArr}));
  }

  var lives = 7;
  var origLivesStr = 'hhhhhhh';
  var gameOver = false;

  function updateLives() {
    var currentLivesStr = origLivesStr.slice(0, lives);
    $('.lives')[0].innerText = currentLivesStr;
    if (currentLivesStr.length < 1) {
      gameOver = true;
    }
  }

  updateLives();

  function displayClock() {

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
      $('.clock')[0].innerText = clockStr;
    }
  }

  displayClock(); 


  function addClickHandler() {
    $('.grid').on('click', '.grid-cell-not-clicked', gamePlay);
  }

  function removeClickHandler() {
    $('.grid').off('click', '.grid-cell-not-clicked', gamePlay);
  }

  addClickHandler();

  function gamePlay() {
    var tile = $(this);
    $(tile).addClass('clicked');
    $(tile).toggleClass('grid-cell-not-clicked');

    if ($('.clicked').length > 1) {

      if ($('.clicked')[0].innerText === $('.clicked')[1].innerText) {
        console.log('got a match');
        $('.clicked').removeClass('clicked');
      } else {
        --lives;
        updateLives();
        removeClickHandler();
        setTimeout(flipBackOver, 750);
        setTimeout(addClickHandler, 750);
      }
    }
  }

  function flipBackOver() {
    $('.clicked').toggleClass('grid-cell-not-clicked');
    $('.clicked').removeClass('clicked');
  }

  // function turnOffClick(tile) {
  //   $('.grid').off('click', '.grid-cell', gamePlay);
  // }

  if (gameOver) {
    console.log('Game Over');
  }
});

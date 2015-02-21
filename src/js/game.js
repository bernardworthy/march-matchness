app.router.add('easy', function(){
  buildBoard();

  function buildBoard() {

    var app = {};

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

  // $('.grid-cell').click(function(e) {
  //   var tile = e.target;
  //   console.log(tile);
  //   // e.preventDefault();
  //   // e && (e.preventDefault() || e.stopPropagation());
  // });
  $('.grid').on('click', '.grid-cell', function(evt) {
    var tile = $(this);
    $(tile).addClass('clicked');
    console.log(tile);
    $(tile).toggleClass('grid-cell-not-clicked');

    if ($('.clicked').length > 1) {
      function flipBackOver() {
        $('.clicked').toggleClass('grid-cell-not-clicked');
        $('.clicked').removeClass('clicked');
      }

      setTimeout(flipBackOver, 1000);
    }

    // if ($('.clicked-first').length > 0) {
    //   console.log('we need to compare');
    //   var firstTxt = $('.clicked-first')[0].innerText;
    //   var secondTxt = $('.grid-icon', tile)[0].innerText;
    //   $('.clicked-first').off('click');
    //   tile.toggleClass('grid-cell-not-clicked');
    //   $('.grid-icon', tile).toggleClass('grid-icon-not-clicked');
    //
    //   // if (firstTxt === secondTxt) {
    //   //   console.log('got a match');
    //   // } else {
    //   //   console.log('not a match');
    //   //   var clickedTile = $('.clicked');
    //   //   clickedTile.toggleClass('grid-cell-not-clicked');
    //   //   $('.grid-icon', clickedTile).toggleClass('grid-icon-not-clicked');
    //   //   tile.toggleClass('grid-cell-not-clicked');
    //   //   $('.grid-icon', tile).toggleClass('grid-icon-not-clicked');
    //   //   $('.clicked').removeClass('clicked');
    //   // }
    //
    // } else {
    //   $(tile).toggleClass('grid-cell-not-clicked');
    //   $('.grid-icon', tile).toggleClass('grid-icon-not-clicked');
    // }
  });
});

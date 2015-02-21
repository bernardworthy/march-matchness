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

    console.log(tile);

    if ($('.clicked').length > 0) {
      console.log('we need to compare');
      var firstTxt = $('.clicked')[0].innerText;
      var secondTxt = $('.grid-icon', tile)[0].innerText;

      if (firstTxt === secondTxt) {
        console.log('got a match');
      } else {
        console.log('not a match');
        var clickedTile = $('.clicked');
        clickedTile.toggleClass('grid-cell-not-clicked');
        $('.grid-icon', clickedTile).toggleClass('grid-icon-not-clicked');
        tile.toggleClass('grid-cell-not-clicked');
        $('.grid-icon', tile).toggleClass('grid-icon-not-clicked');
        $(tile).removeClass('clicked');
      }
      // } else {
      //   console.log('take away a life');
      //   var clickedTile = $('.clicked')[0];
      //
      //   $(clickedTile).toggleClass('grid-cell-not-clicked');
      //   $('.grid-icon', clickedTile).toggleClass('grid-icon-not-clicked');
      //
      //   $(tile).toggleClass('grid-cell-not-clicked');
      //   $('.grid-icon', tile).toggleClass('grid-icon-not-clicked');
      // }
    } else {
      $(tile).toggleClass('grid-cell-not-clicked');
      $('.grid-icon', tile).toggleClass('grid-icon-not-clicked');
      $(tile).addClass('clicked');
      console.log('just added the class');
    }
    // evt.stopPropagation();
    // evt.preventDefault();
  });
});

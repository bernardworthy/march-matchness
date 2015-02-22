app.buildBoard = function(numPairs, type) {

  app.getCards = function(numPairs) {
    var cards = 'CDSVGYNMWaBEAFPLUT'.split('').slice(0, numPairs);

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

  var cardsArr = app.getCards(numPairs);
  var template = _.template($(type).html(), { variable: 'm'});

  $('.grid').html(template({ deck: cardsArr}));
};

app.addClickHandler = function() {
  $('.grid').on('click', '.grid-cell-not-clicked', app.gamePlay);
};

app.removeClickHandler = function() {
  $('.grid').off('click', '.grid-cell-not-clicked', app.gamePlay);
};

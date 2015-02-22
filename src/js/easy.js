app.router.add('easy', function(){
  app.buildBoard(9, '#easy');
  app.addClickHandler();
  app.gamePlay();
  app.numLives(10);
  app.updateLives();
  app.displayClock();
});

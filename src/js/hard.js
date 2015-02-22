app.router.add('hard', function(){
  app.buildBoard(16, '#hard');
  app.addClickHandler();
  app.gamePlay();
  app.numLives(20);
  app.updateLives();
  app.displayClock();
});

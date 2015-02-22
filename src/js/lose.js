app.router.add('lose', function() {
  $('body').css({"background": "#000"});
  $('body').addClass('lose');
  $('.game-board').html('<h1 class="lose-message">Your school just got knocked out of the tourney. Try again.</h1><a href="index.html"><button class="try-again-btn">Try Again</button></a>');

});

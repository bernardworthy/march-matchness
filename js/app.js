function showWinScreen(){var a;app.secs<15?a=10*app.lives:app.secs<20?a=5*app.lives:app.secs>30&&(a=3*app.lives),app.mins>1&&(a=2*app.lives),$("body").css({background:"#000"}),$("body").addClass("win"),$(".game-board").html('<h1 class="win-message">You won the NCAA Tournament! In '+app.clockStr+" of playing time you scored "+a+' point(s)!</h1><a href="index.html"><button class="beat-score-btn">Beat Your Score</button></a>')}function processHash(){var a=location.hash||"#";app.router.run(a.slice(1))}var app={router:Rlite()};app.buildBoard=function(a,e){app.getCards=function(a){var e="CDSVGYNMWaBEAFPLUT".split("").slice(0,a),l=e.concat(e);return app.shuffle(l)},app.shuffle=function(a){for(i=0;i<a.length;++i){var e=Math.floor(Math.random()*a.length),l=Math.floor(Math.random()*a.length),n=a[e];a[e]=a[l],a[l]=n}return a};var l=app.getCards(a),n=_.template($(e).html(),{variable:"m"});$(".grid").html(n({deck:l}))},app.addClickHandler=function(){$(".grid").on("click",".grid-cell-not-clicked",app.gamePlay)},app.removeClickHandler=function(){$(".grid").off("click",".grid-cell-not-clicked",app.gamePlay)},app.displayClock=function(){function a(){++p,p>59&&(p=0),10>p&&(p="0"+p)}function e(){++i,i>59&&(i=0),10>i&&(i="0"+i)}function l(){++o,o>59&&(o=0),10>o&&(o="0"+o)}function n(){var a=o+":"+i+":"+p;$(".clock").length>0&&($(".clock")[0].innerText=a),app.clockStr=a,app.secs=p,app.mins=i}var p="00",i="00",o="00";setInterval(a,1e3),setInterval(e,6e4),setInterval(l,36e5),setInterval(n,1e3)},app.router.add("easy",function(){app.buildBoard(9,"#easy"),app.addClickHandler(),app.gamePlay(),app.numLives(10),app.updateLives(),app.displayClock()}),app.gamePlay=function(){var a=$(this);$(a).addClass("clicked"),$(a).toggleClass("grid-cell-not-clicked"),$(".clicked").length>1&&($(".clicked")[0].innerText===$(".clicked")[1].innerText?(console.log("got a match"),$(".clicked").removeClass("clicked")):(console.log(app.lives),--app.lives,app.updateLives(),app.removeClickHandler(),setTimeout(app.flipBackOver,750),setTimeout(app.addClickHandler,750))),$(".grid-cell-not-clicked").length<1&&(window.location.hash="#win")},app.flipBackOver=function(){$(".clicked").toggleClass("grid-cell-not-clicked"),$(".clicked").removeClass("clicked")},app.router.add("hard",function(){app.buildBoard(16,"#hard"),app.addClickHandler(),app.gamePlay(),app.numLives(20),app.updateLives(),app.displayClock()}),app.numLives=function(a){app.lives=a},app.updateLives=function(){var a="dddddddddddddddddddd",e=a.slice(0,app.lives);$(".lives").length>0&&($(".lives")[0].innerText=e),app.lives=e.length,e.length<1&&(window.location.hash="#lose")},app.router.add("lose",function(){$("body").css({background:"#000"}),$("body").addClass("lose"),$(".game-board").html('<h1 class="lose-message">Your school just got knocked out of the tourney. Try again.</h1><a href="index.html"><button class="try-again-btn">Try Again</button></a>')}),app.router.add("win",showWinScreen),window.addEventListener("hashchange",processHash),processHash();
//# sourceMappingURL=app.js.map
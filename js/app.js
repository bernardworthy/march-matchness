function processHash(){var a=location.hash||"#";app.router.run(a.slice(1))}var app={router:Rlite()};app.router.add("easy",function(){function a(){var a={};a.getCards=function(r){var e="abcdefghijklmnop".split("").slice(0,r),t=e.concat(e);return a.shuffle(t)},a.shuffle=function(a){for(i=0;i<a.length;++i){var r=Math.floor(Math.random()*a.length),e=Math.floor(Math.random()*a.length),t=a[r];a[r]=a[e],a[e]=t}return a};var r=9,e=a.getCards(r);console.log(e);var t=_.template($("#tile").html(),{variable:"m"});$(".grid").html(t({deck:e}))}a()}),window.addEventListener("hashchange",processHash),processHash();
//# sourceMappingURL=app.js.map
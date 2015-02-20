function processHash() {
  var hash = location.hash || '#';
  app.router.run(hash.slice(1));
}

window.addEventListener('hashchange', processHash);
processHash();

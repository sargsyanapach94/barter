module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/barter', function(req, res) {
    res.send('pong');
  });
}
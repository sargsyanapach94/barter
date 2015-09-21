module.exports = function(app) {
  // Install a "/ping" route that returns "pong"

  // console.log(app.dataSources.mysqlDs)
  app.get('/online', function(req, res) {
    res.send('pong');
  });
}
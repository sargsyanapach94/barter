module.exports = function mountRestApi(server) {
  var restApiRoot = server.get('restApiRoot');

  // console.log(restApiRoot)
  server.use(restApiRoot, server.loopback.rest());
};

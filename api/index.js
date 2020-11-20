const server = require('./src/App.js');

var port = 3000

  server.listen(port, () => {
    console.log('%s listening at ' + port); // eslint-disable-line no-console
  });
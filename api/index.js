const server = require('./src/App.js');

var port = process.env.PORT || 8000

  server.listen(port, () => {
    console.log('%s listening at ' + port); // eslint-disable-line no-console
  });
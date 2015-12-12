
var server, 
  express = require('express'),
  port = process.env.PORT || 8000,
  app = express();

app.get('/', function(req, res) {
  res.send("<a href='https://github.com/PhonesWithoutHomes'>Github</a>");
});

server = app.listen(port, function() {
  console.log('http://%s:%s/', 'localhost', server.address().port);
});

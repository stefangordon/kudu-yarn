var http = require('http')
var moment = require('moment');

var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Write something that leverages a yarn installed package.
  res.end('Hello Nuance\n' + moment().format());
}).listen(port);

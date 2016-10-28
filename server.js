var http = require('http')
var moment = require('moment');

var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Write something that leverages a yarn installed package.
  res.end('<html><body><p>Hello World</p><p>' + moment('gibberish').format('YYYY MM DD') + '</body></html>\n');
}).listen(port);
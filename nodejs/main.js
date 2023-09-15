/* var fs = require('fs');

fs.appendFile('my-file.txt', 'Hello Fabio!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});*/ 
/*  const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello from server!');
  res.end();
}).listen(3000, function() {
    console.log("Serving at http://localhost:3000");
});*/

const http = require('http');

http.createServer(function (req, res) {
    var url = req.url;
    if(url ==='/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('About page');
        res.end();
    }
    else if(url ==='/contact') {
        res.writeHead(401, {'Content-Type': 'text/html'});
        res.write('Access not authorized');
        res.end();
    }
    else {
        res.write('Hello World!');
        res.end();
    }
}).listen(3000, function() {
    console.log("Serving at http://localhost:3000");
});


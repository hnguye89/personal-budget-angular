/* var fs = require('fs');

fs.appendFile('my-file.txt', 'Hello Fabio!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});*/ 
const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello from server!');
  res.end();
}).listen(3000, function() {
    console.log("Serving at http://localhost:3000");
});


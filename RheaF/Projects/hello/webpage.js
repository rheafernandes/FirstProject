var http = require('http');
var dt = require('./dateModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Today\'s date is: " + dt.myDateTime());
    res.write("\n This is my life");
    res.end();
}).listen(8080);
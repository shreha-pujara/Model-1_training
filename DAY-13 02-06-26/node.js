var http = require('http');

http.createServer((req, res) => {

    res.end("Welcome in ASOIT");

}).listen(8081);
var http = require('http');
var express = require('express');
var app = express();

var port = 3000;
app.use(express.static('./public'));

http.createServer(app).listen(port);
console.log(`Listening on ${port}...`)
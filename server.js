var http = require('http');
var express = require('express');
var app = express();

// TESTING for merge conflicts!!!!! 

var port = 3000;
app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.redirect('/#/');
})

app.get('/login', function(req, res) {
	console.log('testing');
	res.redirect('/#/login');
})

http.createServer(app).listen(port);
console.log(`Listening on ${port}...`)

// this is for the test
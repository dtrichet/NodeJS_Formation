console.log('----  SERVER WEB ----');
var http = require('http');
var server = http.createServer(function(request, response) {
	setTimeout(function() {
		response.writeHead(200, {"Content-type": "text/plain"});
		response.end("Hello world");
	}, 1000); // reponse dans 1 seconde
});

server.listen(8888);
console.log('Server is running ...');


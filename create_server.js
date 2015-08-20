// Creation du serveur web appeler par lance_server.js
console.log('----  CREATE SERVER WEB ----');
var http = require('http');
var serverinit = http.createServer(function(request, response) {
		response.writeHead(200, {"Content-type": "text/plain"});
		response.end("Hello world !!!");
});
// Retourne la valeur server au programme appelant
exports.server = serverinit;

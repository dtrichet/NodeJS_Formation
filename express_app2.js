// Gestion des fichiers publics
var express = require('express');
var morgan = require('morgan');
var app = express();
var count = 0;

// Gestion des log
//app.use(morgan('combined'))

// Definition du répertoire public
// __dirname = repertoire courant.
// ATTENTION : Express donne la priorité au dossier public déclaré. 
app.use(express.static(__dirname + '/public'));

// Si image index.html non trouvé dans repertoire public
app.get('/', function (req, res) {
	res.send('Page index introuvable')
});

// Gestion des autres URLs.
app.get('/counter', function (req, res) {
	count += 1;
	res.send('Vous etes le visiteur ' + count + ' sur cette page')
});

app.get('/', function (req, res) {
	res.send('Hello World!')
});
app.get('/test', function (req, res) {
	res.send('Page test !')
});
app.get('/users', function (req, res) {
	res.send('Page users')
});
app.get('/private', function (req, res) {
	res.send('Unauthorized', 401)
});
// ----------------------------------------
var server = app.listen(8888, function () {
	var host = server.address().address
	var port = server.address().port
	console.log('Example app listening at http://%s:%s', host, port)
});

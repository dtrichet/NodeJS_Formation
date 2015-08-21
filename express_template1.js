// GESTION DES TEMPLATES ET DES VUES
// ----------------------------------------------
var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var count = 0;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

var monsters = [
	{name: 'Riri', level:3, desc: 'le petit cochon qui rit'},
	{name: 'Fifi', level:2, desc: 'le vampire qui rend pire'},
	{name: 'Loulou', level:6, desc: 'le loup garou qui fait des trous'},
];

// Gestion des monstres URL /monsters/id
app.get('/monsters/:id', function (req, res) {
	var monsterId = monsters[req.params.id - 1];
	count += 1;	
	res.render('monster.ejs', {monster: monsterId});
});

// ----------------------------------------
var server = app.listen(8888, function () {
	var host = server.address().address
	var port = server.address().port
	console.log('Example app listening at http://%s:%s', host, port)
});

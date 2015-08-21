// CREATION DE MONSTRES EN METHODE GET
// ----------------------------------------------
// Gestion des fichiers publics
var express = require('express');
var app = express();
var monsters = [
	{name: 'Riri', level:3, desc: 'le petit cochon qui rit'},
	{name: 'Fifi', level:2, desc: 'le vampire qui rend pire'},
	{name: 'Loulou', level:6, desc: 'le loup garou qui fait des trous'},
];

// Definition du repertoire public
app.use(express.static(__dirname + '/public'));

// Gestion des monstres URL /monsters/id
app.get('/monsters/:id', function (req, res) {
	var monsterId = monsters[req.params.id - 1];
	res.send(monsterId.name + ' ' + monsterId.desc);
});

// Creation des monstres Methode GET dans le formulaire req.query
app.get('/create_monster', function (req, res){
	monsters.push({
		name: req.query.name,
		desc: req.query.desc,
		level: parseInt(req.query.level, 10)
	});
	res.send("OK, monstre validé");
});

// ----------------------------------------
var server = app.listen(8888, function () {
	var host = server.address().address
	var port = server.address().port
	console.log('Example app listening at http://%s:%s', host, port)
});

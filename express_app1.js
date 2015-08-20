
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.get('/test', function (req, res) {
  // le code retour est gérer par Express mais peut être forcé : ici le code 200
  res.send('Page test', 200)
})
app.get('/users', function (req, res) {
  res.send('Page users')
})
app.get('/private', function (req, res) {
  res.send('Unauthorized', 401)
})
// ----------------------------------------
var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

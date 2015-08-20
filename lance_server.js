console.log('----  LANCE SERVER WEB ----');
var c = require('./create_server.js');
// Recupere la valeur server de create_server.js
c.server.listen(8888);
console.log('Server is running ...');

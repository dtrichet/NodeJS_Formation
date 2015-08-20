console.log('File Systeme');
var fs = require('fs');

// --- Synchrone
/*var files = fs.readdirSync('.');
for (var i = 0; i < files.length; i++) {
	console.log(files[i]);
}
*/
// --- Asynchrone
var files = fs.readdir('.', function(err, files) {
	if (err) {
		console.log('Une erreure est arrivee');
	} else {
		for (var i = 0; i < files.length; i++) {
		console.log(files[i]);
		}
	}
});

fs.stat('.', function (err, stats) {
  if (err) throw err;
  console.log('stats: ' + JSON.stringify(stats));
});

console.log('/-/-/-/-/-/-/-/');
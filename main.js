var express = require('express'),
	app 	= express();

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js')); //everytime someone requests /js file, routed to /client/js folder

app.listen(3000, function() {
	console.log('I\'m Listening ...');
})

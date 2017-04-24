var express = require('express'),
	app 	= express(),
	bodyParser = require('body-parser');
	meetupsController = require('./server/controllers/meetups-controller.js');

app.use(bodyParser());

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js')); //everytime someone requests /js file, routed to /client/js folder

app.post('/api/meetups', meetupsController.create);

app.listen(3000, function() {
	console.log('I\'m Listening ...');
})

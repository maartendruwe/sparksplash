var express = require('express'),
	app 	= express(),
	bodyParser = require('body-parser'),
	mongoose	= require('mongoose'),
	MongoClient = require('mongodb').MongoClient,
	format  	= require('util').format,
	meetupsController = require('./server/controllers/meetups-controller.js');

/*MongoClient.connect('mongodb://admin:xKlMFKbba94OSz9H@merakisplash-shard-00-00-1fh1l.mongodb.net:27017,merakisplash-shard-00-01-1fh1l.mongodb.net:27017,merakisplash-shard-00-02-1fh1l.mongodb.net:27017/admin?ssl=true&replicaSet=MerakiSplash-shard-0&authSource=admin', function(err, db) {
	if (err) {
		throw err;
	} else {
		console.log("successfully connected to the database");
	}
	db.close();
})*/

// connection string using mongoose:
var uri = 'mongodb://admin:xKlMFKbba94OSz9H@merakisplash-shard-00-00-1fh1l.mongodb.net:27017,merakisplash-shard-00-01-1fh1l.mongodb.net:27017,merakisplash-shard-00-02-1fh1l.mongodb.net:27017/admin?ssl=true&replicaSet=MerakiSplash-shard-0&authSource=admin';
mongoose.connect(uri);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js')); //everytime someone requests /js file, routed to /client/js folder

app.post('/api/meetups', meetupsController.create);

app.listen(3000, function() {
	console.log('I\'m Listening ...');
})

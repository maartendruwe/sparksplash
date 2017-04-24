var Meetup = require('../models/meetup'); //Meetup model --> in this case a mongoose object

module.exports.create = function (req, res) {
	var meetup = new Meetup(req.body);
	meetup.save(function (err, result) {
		res.json(result);
		console.log(err);
	}); 
	console.log('meetup saved');
} 

module.exports.list = function (req, res) {
	console.log("Looking for data in db");
	Meetup.find({}, function(err, results) {
		res.json(results);
		console.log(err);
	});
}

module.exports.clear = function (req, res) {
	console.log("Removing data in db");
	Meetup.remove({}, function(err) {
		if (err) {
			console.log(err);
		} else {
			res.end('success');
		}
	});
}
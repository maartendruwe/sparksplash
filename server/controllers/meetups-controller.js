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
	Meetup.find({}, function(err, results) {
		res.json(results);
	})
}
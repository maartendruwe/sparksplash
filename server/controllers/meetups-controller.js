var Meetup = require('../models/meetup'); //Meetup model --> in this case a mongoose object

module.exports.create = function (req, res) {
	var meetup = new Meetup(req.body);
	meetup.save(function (err) {
		console.log(err);
	}); 
	console.log('meetup saved');
} 
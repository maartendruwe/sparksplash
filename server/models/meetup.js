var mongoose = require('mongoose');

module.exports = mongoose.model('Meetup', { //.exports --> give access
	name: String
});
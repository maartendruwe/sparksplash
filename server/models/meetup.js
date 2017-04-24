var mongoose = require('mongoose');

module.exports = mongoose.model('meetups', { //.exports --> give access
	name: String  //Define mongoose/mongodb schema!
});
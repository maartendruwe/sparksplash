var mongoose = require('mongoose');

//exports --> give access
//Define mongoose/mongodb schema!
module.exports = mongoose.model('Meetup', { name: String },
										  { collection: 'meetups'}); //specify collection
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//exports --> give access
//Define mongoose/mongodb schema!
var meetupSchema = new Schema({name: String},
							  {collection: 'meetups'});
module.exports = mongoose.model('Meetup', meetupSchema); //specify collection
var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
  tag: String,
  user: String,
  locationName: String,
  arrivalDate: String,
  departureDate: String
});

module.exports = mongoose.model('City', citySchema);

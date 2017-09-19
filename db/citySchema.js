var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
  tag: String,
  user: String,
  locationName: String,
  arrivalDate: Number,
  departureDate: Number
});

var City = mongoose.model('City', citySchema);

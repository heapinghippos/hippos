var mongoose = require('mongoose');

var citySchema = mongoose.Schema({
  tag: String,
  user: String,
  city name: String,
  date of arrival: Number,
  date of departure: Number
});

var City = mongoose.model('City', citySchema);

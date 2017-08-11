var mongoose = require('mongoose');

var namesGreetedSchema = new mongoose.Schema({
  name: String,
  counter: Number
});

var names = mongoose.model('names' , namesGreetedSchema)

module.exports = names;

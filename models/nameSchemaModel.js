var mongoose = require('mongoose');

var namesGreetedSchema = new mongoose.Schema({
  name: String,
  counter: Number
});

const names = mongoose.model('names' , namesGreetedSchema)

module.exports = names;

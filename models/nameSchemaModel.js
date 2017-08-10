var mongoose = require('mongoose');

var namesGreetedSchema = new mongoose.Schema({
  name: String,
  counter: Number
});

var name = mongoose.model('namesGreeted' , namesGreetedSchema)

module.exports = name;

var x = new Name({
  name: 'String',
  counter: 'Number'
})

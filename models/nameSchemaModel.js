var mongoose = require('mongoose');

const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/namesGreeted";

mongoose.connect(mongoURL, {
    useMongoClient: true
}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("we are connected");
    }
});

var namesGreetedSchema = new  mongoose.Schema({
  name: String,
  counter: Number
});

const names = mongoose.model('names' , namesGreetedSchema)

module.exports = names;

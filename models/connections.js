module.exports = function() {
    var mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/names', {
        useMongoClient: true
    }, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("we are connected");
        }
    });
}

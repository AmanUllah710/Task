var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017//shop';

//Create Schema
var userSchema = new Schema({
    name: String,
    email: String,
    pass: String
});

var user = mongoose.model('user', userSchema);
db.on('error', function() {
    console.log('There is an error in communicating with mongoDB');
});

mongoose.connect(dbUrl, function(err) {
    if(err) {
        return console.log('Error in connecting with mongoDB')
    }
});

module.exports = class User {
    
    static save(name, email, pass) {
       user.insertOne({name:name, email:email, pass:pass}, function(error, results) {
        if(error) {
            return next(error);
        }
        console.log('inserted');
        res.json(results);
        });
    }
    
    static delete(email) {
        user.deleteOne({email:email}, function(error, results) {
        if(error) {
            return next(error);
        }
        console.log('deleted');
        res.json(results);
        });
    }

}
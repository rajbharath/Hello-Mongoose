var mongoose = require('mongoose');
var Kitten = require('./models/kitty');
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.on('open',function(callback) {
  console.log('DB Opened');
});


var lallu = new Kitten({ name: 'Lallu' });

lallu.save(function(err, kittens) {
  if( err ) return;
  console.log( kittens );
});


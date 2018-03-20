var express = require('express')
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var app = express()




var User=require('./models/user');
// mongoose.connect('localhost:27017/shopApp')
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

mongoose.connect('mongodb://localhost/shopApp')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(8000, function() {
	console.log('Example app listening on port 8080!')
})




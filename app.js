var express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
mongoose.Promise = global.Promise;
var app = express()

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/shopApp')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.get('/', function (req, res) {
  res.send('Shop App')
})

var userSignup = require('./routes/auth/signup');
var userLogin = require('./routes/auth/login');
var getUsers = require('./routes/user/getUsers');
var findUser = require('./routes/user/findUser');
app.use('/api', userSignup);
app.use('/api', userLogin);
app.use('/api', getUsers);
app.use('/api', findUser);


app.listen(8000, function() {
	console.log('Example app listening on port 8000!')
})




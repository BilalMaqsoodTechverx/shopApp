var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../../models/user.js');
var bodyParser = require('body-parser');
var User = mongoose.model('User');





router.post('/signup', function(req, res, next) {
	var newUser = new User(req.body);
    newUser.save( function (err, userObj) {
    if (err){
    	console.log(err)
    }
    else{
    	res.send(userObj);
    }
   
  });
});

module.exports = router;




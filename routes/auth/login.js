var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../../models/user.js');
var bodyParser = require('body-parser');






router.post('/login', function(req, res, next) {
    user.findOne({ email : req.body.email, password: req.body.password},( function (err, userObj) {
    if (err){
    	console.log(err);
    }
    else{
    	res.send(userObj.name);
    }
   
  }));
});

module.exports = router;




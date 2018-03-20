var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../../models/user.js');
var bodyParser = require('body-parser');






router.post('/user/:id', function(req, res, next) {
    user.findOne({ _id : req.params._id},( function (err, userObj) {
    if (err){
    	console.log('Invali Id');
    }
    else{
    	res.send(userObj);
    }
   
  }));
});

module.exports = router;
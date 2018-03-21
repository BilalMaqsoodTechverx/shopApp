var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../../models/user.js');
var bodyParser = require('body-parser');






router.post('/user', function(req, res, next) {
    user.findOne({ _id : req.body._id},( function (err, userObj) {
    if (err){
    	res.send('Invali Id');
    }
    else{
    	res.send(userObj);
    }
   
  }));
});

module.exports = router;
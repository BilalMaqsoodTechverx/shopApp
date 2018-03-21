var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../../models/user.js');



router.get('/users', function(req, res, next) {
       user.find(function (err, userObj) {
    if (err){
    	console.log(err)
    }
    else{
    	res.send(userObj);
    }
   
  });
});

module.exports = router;




var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../../models/user.js');
var bodyParser = require('body-parser');






router.post('/user/delete', function(req, res) {
    user.findByIdAndRemove({ _id : req.body._id},( function (err, userObj) {
   
    if (err){
    	console.log('Invali Id', err);
    }
    else if(userObj){
    	res.send('Successfully deleted');
      }
    else{
    	res.send('Id not found');
    }
   
  }));
});

module.exports = router;
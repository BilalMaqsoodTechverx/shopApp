var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../../models/user.js');
var bodyParser = require('body-parser');






router.post('/user/update', function(req, res) {
   
   if(req.body._id && req.body.name && req.body.password && req.body.contact && req.body.address &&
   req.body.creditCard	){
    user.findByIdAndUpdate({ _id : req.body._id},
    	
       { 
       	$set:{
       		name: req.body.name,
			password: req.body.password,  
			contact: req.body.contact, 
			address: req.body.address, 
			creditCard : req.body.creditCard 
      }
  },

   (function (err, userObj) {
    if (err){
    	 res.send('Invali Id');
    }
    else{
    	res.send('Updated Successfully');
    }
   
  }));
}
 
 else {
 	res.send("Can't update")
 }
}
);

module.exports = router;
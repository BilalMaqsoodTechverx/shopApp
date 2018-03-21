var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password: {
    type: String,
    required: true,
    },
  name:{
    type: String,
    required:true,
  },
  contact:{
    type: String
  },
  address:{
    type: String
  },
  role:{
    type: String,
    enum : ['Admin','Client'],
    default: 'Client',
    required: true,
  },
  status:{
    type: String,
    enum: ['Active','InActive','Suspended'],
    default: 'Active'
  },
  creditCard:{
    type: String
   },
  
},{timestamps: true});

var User = mongoose.model('User', UserSchema);
module.exports = User;
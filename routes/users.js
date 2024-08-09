const mongoose = require('mongoose');
//const { Schema } = mongoose;
const plm= require("passport-local-mongoose"); 
mongoose.connect("mongodb://127.0.0.1:27017/nayaappdb");
// Define the schema for the user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String, // This can be a URL or path to the profile picture
     // Optional: default value if no dp is provided
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  fullname: {
    type: String,
    required: true,
  }
}, );

userSchema.plugin(plm);

// Create the model
module.exports = mongoose.model('User', userSchema);

 


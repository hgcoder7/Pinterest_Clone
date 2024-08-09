const mongoose = require('mongoose');
//const { Schema } = mongoose;

// Define the schema for the post
const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
    trim: true
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically set to the current date and time
  },
  likes: {
    type: Array,
    default: 0 // Default to 0 if no likes are provided
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create the model
module.exports = mongoose.model('Post', postSchema);



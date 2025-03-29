const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [3, "username must be have atleast 3 charcter long"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [13, "email must be have atleast 13 charcter long"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [5, "password must be have atleast 5 charcter long"],
  },
});

const user = mongoose.model('user',userSchema);
module.exports =user;

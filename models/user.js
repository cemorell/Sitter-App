var mongoose = require('mongoose');
// var Auth0Strategy = require('passport-auth0');
// var passport = require('passport');


var userSchema = new mongoose.Schema({
  auth_id: String,
  nickname: String,
  sitter: { type: Boolean, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  image_url: {type: String, required:true },
  city: {type: String, required:true },
  state: {type: String, required:true },
  email: {type: String, required: true},
  aboutme: String,
  fb_profile: String,
  zip: String,
  kids: Number,
  kids_info: String,
  gender: String,
  experience: String,
  age: Number
});

var User = mongoose.model('User', userSchema);

module.exports = User;

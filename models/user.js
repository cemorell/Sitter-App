var mongoose = require('mongoose');
// var Auth0Strategy = require('passport-auth0');
// var passport = require('passport');


var userSchema = new mongoose.Schema({
  auth_id: String,
  nickname: String,
  sitter: String,
  firstname: String,
  lastname:  String,
  image_url: String,
  city: String,
  state: String,
  email: String,
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

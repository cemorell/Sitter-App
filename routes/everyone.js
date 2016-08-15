var express = require('express');
var passport = require('passport');
var router = express.Router();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var User = require('../models/user');


//edit my user
router.patch('/:id', ensureLoggedIn, function(req, res, next){
  // redirect to show changes
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
    if (err) console.log(err);
    res.redirect('/');
  });
});

router.get('/everyone', ensureLoggedIn, function(req, res, next) {
  console.log(req.user);
  res.render('index', { title: 'Express', env: env, user: req.user });
});

var express = require('express');
var passport = require('passport');
var router = express.Router();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var User = require('../models/user');
var Request =require('../models/request');

var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
};

//login
router.get('/login', function(req, res){
  console.log("LOGIN IN")
  res.render('login', { title: 'Express', env: env });
});

//GET Home page
router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('index', { title: 'Express', env: env, user: req.user });
});

//GET user's page
router.get('/profile', ensureLoggedIn, function(req, res, next) {
  var user = req.user;
  res.json(user);
  res.render('index', { title: 'Express', env: env, user: req.user });
});



// UPDATE main profile page
router.patch('/edit', ensureLoggedIn, function(req, res, next){
     var id = req.user._id;
     // var user = req.user
  User.findByIdAndUpdate(id, req.body, function(err, user){
    if (err) console.log(err);
    User.findById(id, function(err, user){
          res.json(user);
    });
  });
});


//Request sent
router.post('/users/:recipient_id/request',ensureLoggedIn, function( req, res, next ) {
  var sender_id= req.user._id;
  var recipient_id= req.params.recipient_id;
  var request = new Request({
    sender_id: sender_id,
    recipient_id: recipient_id,
    status: "sent"
  });
  request.save(function(err, obj){
    if (err) console.log(err);
    res.json(obj);
  });
});

// UPDATE request to accept
router.patch('/requests/:_id/accept', ensureLoggedIn, function(req, res, next){
     var id = req.params._id;
     // var user = req.user
  Request.findById(id, function(err, request){
    request.status = "accept";
    request.save(function(err, obj){
          if (err) console.log(err);
          res.json(obj);
    });
  });
});

// UPDATE request to deny
router.patch('/requests/:_id/deny', ensureLoggedIn, function(req, res, next){
     var id = req.params._id;
     // var user = req.user
  Request.findById(id, function(err, request){
    request.status = "deny";
    request.save(function(err, obj){
          if (err) console.log(err);
          res.json(obj);
    });
  });
});


//GET requests of which I am the reciepient
router.get('/requests', function(req, res, next) {
  var id = req.user._id;
  Request.find({recipient_id: id, status:"sent"}, function(err, requests){
      res.json(requests);
    });
});


//GET all sitters but still need to filter for SITTERS ONLY in right city in Find params
router.get('/users', function(req, res, next) {
  User.find({}, function(err, users){
    res.json(users);
  });
});


//GET user with ID
router.get('/users/:user_id', function(req, res, next) {
  User.find({_id: req.params.user_id}, function(err, users){
    res.json(users);
  });
});





//the signingin and saving of it all
router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    User.findOne({ auth_id: req.user.id }, function(err, user) {
      if (err) console.log(err);
      if (!user){
        var newUser = User({
          auth_id: req.user.id,
          nickname: req.user.nickname
        });
        newUser.save(function(err, user){
          if (err) console.log(err);
        });
      }
      res.redirect(req.session.returnTo || '/');
    });
  });

//logout
router.get('/logout', function(req, res){
  console.log("BYE now")
  req.logout();
  res.redirect('/');
});


//GET users who sent requests to me which are not yet accepted or denied
// router.get('/requestsusers', function(req, res, next) {
//   var id = req.user._id;
//   Request.find({recipient_id: id}, function(err, requests){
//     var ids = requests.map(function(sender) { return sender.sender_id; });
//     console.log(ids)
//     User.find({_id: {$in: ids}}, function(err, users){
//       res.json(users);
//     });
//   });
// });

module.exports = router;

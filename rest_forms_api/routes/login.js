const express = require('express');
const router = express.Router();
const db = require('../data/array') /*db means database

/* GET users listing. */
router.get('/', function(req, res, next) {
    let userName = req.param("username")  //object created by expess containing all parameters that are passed in
  res.render('main', {username: userName});
});

router.post('/signup', function(req, res, next) {

    let user = db.addUser(req.body.username, req.body.password)
    res.render('main', {action: "Added", user});
  });

router.post('/signin', function(req, res, next) {
    let user = db.getUser(req.body.username, req.body.password)
    res.render('main', {action: "GOT", user});
  });

  router.post('/changepass', function(req, res, next) {
    let user = db.updatePassword(req.body.username, req.body.oldpassword, req.body.password)
    res.render('main', {action: "Password Changed", user});
  });

module.exports = router;
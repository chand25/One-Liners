var express = require('express');
var router = express.Router();
var models = require('../server/models/index');

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'fazbook' });
});
*/
router.get('/', function(req, res, next) {
  models.User.findAll({}).then(function(users) {
    res.render('users/index', {
      title: 'Fazbook EveryBody',
      users: users
    });
  });
});

router.get('/new', function(req, res, next) {
   res.render('users/new', { title: 'New Users' });
});

router.post('/', function(req, res, next){
    models.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      dob: req.body.dob
  }).then(function(){
    res.redirect('/users');
  });
 });

router.delete('/:id', function(req, res, next) {
  models.User.destroy({
    where: { id: req.params.id }
  }).then(function(user) {
    res.redirect('/users');
  });
});



module.exports = router;

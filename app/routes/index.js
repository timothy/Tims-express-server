var express = require('express');
var router = express.Router();
var nav = require('../models/navBar');

console.log(nav);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', nav);
});

module.exports = router;

var express = require('express');
var router = express.Router();

var d4 = require('d4.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var webAddress = d4.modules.sayHello();
  res.render('index', { title: webAddress });
});

module.exports = router;

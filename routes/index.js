var express = require('express');
var router = express.Router();

const d4 = require('d4.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var sayHelloText = d4.modules.sayHello();
  res.render('index', { title: sayHelloText });
});

module.exports = router;

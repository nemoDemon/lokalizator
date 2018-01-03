var express = require('express');
var router = express.Router();

var d4 = require('./d4.js');
const addressUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+"Torun";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: d4.modules.getLocation(addressUrl).then(v => {v}) });
});

module.exports = router;

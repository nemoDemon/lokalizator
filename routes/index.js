var express = require('express');
var router = express.Router();

var d4 = require('./d4.js');
const addressUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+"Torun";

/* GET home page. */
router.get('/', async function(req, res, next) {
	var zmienna = await d4.modules.getLocation(addressUrl);
	res.render('index', { title: zmienna });
});

router.post('/', async function (req, res, next) {
	var add = "https://maps.googleapis.com/maps/api/geocode/json?address="+req;
  	var zmienna = await d4.modules.getLocation(add);
	res.render('index', { title: zmienna });
});

module.exports = router;

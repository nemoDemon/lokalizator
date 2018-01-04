var express = require('express');
var router = express.Router();

var d4 = require('./d4.js');
const addressUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+"Torun";

/* GET home page. */
router.get('/', async function(req, res) {
	var zmienna = await d4.modules.getLocation(addressUrl);
	res.render('index', { title: zmienna });
});

router.post('/', async function(req, res) {
	var town = req.body.town;
	res.render('index', { title: town });
});


module.exports = router;

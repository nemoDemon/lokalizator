var express = require('express');
var router = express.Router();

var d4 = require('./d4.js');

/* GET home page. */
router.get('/', async function(req, res) {
	var answer = "Hello";
	res.render('index', { title: answer });
});

router.post('/', async function(req, res) {
	var addressPosted=  req.body.town;
	var adressUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+addressPosted;
	var adressReturned = await d4.modules.getLocation(adressUrl);
	var adressArray = adressReturned.split(";");

	var address = adressArray[0];
	var latitude = adressArray[1];
	var longtitude = adressArray[2];

	var elevationsUrl = "https://maps.googleapis.com/maps/api/elevation/json?locations="+latitude+","+longtitude;//+"&key=YOUR_API_KEY";
	var elevation = await getElevation(elevationsUrl);

	var timezoneOffset = new Date().getTimezoneOffset();
	var dateAndTimeUrl = "https://maps.googleapis.com/maps/api/timezone/json?location="+latitude+","+longtitude+"&timestamp="+timezoneOffset;//&key=YOUR_API_KEY
	var dateAndTime = await getDateAndTime(dateAndTimeUrl);

	var answer = "Address: " + address + " Date and time: " + dateAndTime;

	res.render('index', { title: answer });
});


module.exports = router;

var express = require('express');
var router = express.Router();

var d4 = require('./d4.js');

/* GET home page. */
router.get('/', async function(req, res) {
	var title = "Lokalizator";
	var text = "Please put address you are searching for in request text box"
	res.render('index', { title: title, text: text });
});

router.post('/', async function(req, res) {
	var addressPosted =  req.body.town;
	var adressUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+addressPosted;
	var adressReturned = await d4.modules.getLocation(adressUrl);
	var adressArray = adressReturned.split(";");

	var address = adressArray[0];
	var latitude = adressArray[1];
	var longtitude = adressArray[2];

	/*var elevationUrl = "https://maps.googleapis.com/maps/api/elevation/json?locations="+latitude+","+longtitude;
	var elevation = await d4.modules.getElevation(elevationUrl);

	var timezoneOffset = new Date().getTimezoneOffset();
	var dateAndTimeUrl = "https://maps.googleapis.com/maps/api/timezone/json?location="+latitude+","+longtitude+"&timestamp="+timezoneOffset;
	var dateAndTime = await d4.modules.getDateAndTime(dateAndTimeUrl);

	var title = "Lokalizator";
	var text = "Found details are presented below..."
*/
	//res.render('index', { title: title, text: text, address: address, latitude: latitude, longtitude: longtitude, elevation: elevation, dateAndTime: dateAndTime });
	res.render('index', { address: address, latitude: latitude, longtitude: longtitude });
});


module.exports = router;

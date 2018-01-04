var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();

var d4 = require('./d4.js');
const addressUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+"Torun";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* GET home page. */
router.get('/', async function(req, res) {
	var zmienna = await d4.modules.getLocation(addressUrl);
	res.render('index', { title: zmienna });
});

router.post('/', async function (req, res) {
	var postVar = req.body.town;
	var add = "https://maps.googleapis.com/maps/api/geocode/json?address="+town;
console.log(add);
  	var zmienna = await d4.modules.getLocation(add);
	res.render('index', { title: zmienna });
});

module.exports = router;

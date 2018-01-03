const yargs = require('yargs');
const fetch = require("node-fetch");

var argv = require('yargs')
	.version('EC-01')
	.usage('Usage: node d4.js <command>\n\nCommands:\n -a "address"\n -address "address"')
	.help('h')
	.alias('h', 'help')
	.alias('a', 'address')
	.argv;

const addressUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+argv.address;

async function getLocation(addressUrl)
{
	try
	{
	  const response = await fetch(addressUrl);
	  const json = await response.json();

	  var address = json.results[0].formatted_address;
	  var latitude = json.results[0].geometry.location.lat;
	  var longtitude = json.results[0].geometry.location.lng;
  
	  console.log("Address: " + address);
	  console.log("Latitude: " + latitude);
	  console.log("Longtitude: " + longtitude);

	  const elevationsUrl = "https://maps.googleapis.com/maps/api/elevation/json?locations="+latitude+","+longtitude;//+"&key=YOUR_API_KEY";
	  getElevation(elevationsUrl);

	  var timezoneOffset = new Date().getTimezoneOffset();
	  const dateAndTimeUrl = "https://maps.googleapis.com/maps/api/timezone/json?location="+latitude+","+longtitude+"&timestamp="+timezoneOffset;//&key=YOUR_API_KEY
	  getDateAndTime(dateAndTimeUrl);
	}
	catch(error)
	{
		console.log(error);
	}

}

async function getElevation(elevationUrl)
{
	try
	{
		const response = await fetch(elevationUrl);
		const json = await response.json();

		var elevation = json.results[0].elevation;
	
		console.log("Elevation: " + elevation);
	}
	catch(error)
	{
		console.log(error);
	}
}

async function getDateAndTime(dateAndTimeUrl)
{
	try
	{
		const response = await fetch(dateAndTimeUrl);
		const json = await response.json();

		var timestamp = new Date().getTime();
		var dstOffset = json.dstOffset;
		var rawOffset = json.rawOffset;
	
		var dateAndTime = new Date(timestamp + dstOffset + rawOffset);
		
		console.log("Date and time: " + dateAndTime);
	}
	catch(error)
	{
		console.log(error);
	}
}

getLocation(addressUrl);
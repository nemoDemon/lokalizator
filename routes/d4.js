const yargs = require('yargs');
const fetch = require("node-fetch");

const addressUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+argv.address;

var methods =
{
	getLocation: async function(addressUrl)
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
			
			var returnedString = "Address: " + address + " Latitude: " + latitude + " Longtitude: " + longtitude;
			return returnedString;
		}
		catch(error)
		{
			console.log(error);
		}

	}
};

exports.modules = methods;
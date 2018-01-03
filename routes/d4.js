const fetch = require("node-fetch");

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

			var returnedString = "Address: " + address;
			return returnedString.toString();
		}
		catch(error)
		{
			console.log(error);
			return "Error: " + error;
		}
	}

};

exports.modules = methods;
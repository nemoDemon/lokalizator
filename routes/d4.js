const fetch = require("node-fetch");

var methods =
{
	getLocation: function(addressUrl)
	{
		try
		{
			const response = fetch(addressUrl);
			const json = response.json();

			var address = json.results[0].formatted_address;
			var latitude = json.results[0].geometry.location.lat;
			var longtitude = json.results[0].geometry.location.lng;

			console.log("Address: " + address);
			console.log("Latitude: " + latitude);
			console.log("Longtitude: " + longtitude);

			var returnStr = "Address: " + address + " Latitude: " + latitude + " Longtitude: " + longtitude;
			return returnStr;
		}
		catch(error)
		{
			console.log(error);
			return "Error: " + error;
		}
	}

};

exports.modules = methods;
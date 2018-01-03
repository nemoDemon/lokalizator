var methods =
{
    sayHello: function()
    {
	try
	{
		return "Hello";
	}
	catch (err)
	{
    		console.log('Failed to get data: ' + err.toString());
  	}    
    }
};

exports.modules = methods;
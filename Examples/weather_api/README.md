Weather API

This uses OpenWeatherMap's 5 day forecast (http://openweathermap.org/). I have the free subscription, so I get up to 60 calls per minute. You can either enter a zipcode or a city to search for weather. I add ",us" to the end of the query to make it relevant, but you can override it by typing more detail before it (e.g. "London,uk").

I use JQuery to get the JSON from the API. If there's an error, I inform the user with a message. Otherwise, I section off the returned data by day and display it in blocks.
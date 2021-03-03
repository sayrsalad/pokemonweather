$(document).ready(function () {

	$("#submitCity").click(function(){
		return getWeather();
	});

});

function getWeather(){
	var city = $("#city").val();

	if (city != '') {
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric'+'&appid=5d33ff84ea5610b1bfa28790de231985',
			type: 'GET',
			datatype: 'jsonp',
			success: function(data){
				console.log(data);
				var widget = showResults(data);
				$("#showWeather").html(widget);
				$("#city").val('');
			}
		});
	} else {
		$("#error").html("<div>Please input a valid city.</div>");
	}
}

function showResults(data){
	return "<h3>Current Weather for "+data.name+", "+data.sys.country+"</h3>" +
		   "<p>Weather: " + data.weather[0].main + "</p>" +
		   "<p>Weather Description: " + data.weather[0].description + "</p>" +
		   "<p>Temperature: " + data.main.temp + "&deg;C</p>" +
		   "<p>Pressure: " + data.main.pressure + "hPa</p>" +
		   "<p>Humidity: " + data.main.humidity + "%</p>" +
		   "<p>Minimum Temperature: " + data.main.temp_min + "&deg;C</p>" +
		   "<p>Maximum Temperature: " + data.main.temp_max + "&deg;C</p>" +
		   "<p>Wind Speed: " + data.wind.speed + "</p>"
}
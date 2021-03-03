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
	return "<p>Temperature: " + data.main.temp + "&deg;C</p>"
}
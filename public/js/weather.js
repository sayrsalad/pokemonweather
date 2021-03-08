$(document).ready(function () {
	if(window.location.pathname == "/openweather/cities"){
		$.getJSON( "../../node_modules/philippines/cities.json", function( cities ) {
			$.each(cities, function(i, value){
				setTimeout(function(){
					$.ajax({
						url: api.baseurl + 'weather?q='+value.name+',PH&units=metric'+'&appid=' + api.key,
						type: 'GET',
						datatype: 'jsonp',
						success: function(data){
							createWeatherCard(data);
						},
						error: function (error) {
							console.log('error');
						}
					});
				},5000 + ( i * 5000 ));

			});
		});
		console.log('hi');
	} else if (window.location.pathname == "/openweather/current") {
		$.get('https://ipinfo.io',function(response){ 
			getWeather(response.city);
		},'json');
	}

	$('#submitCity').on({ 'click': getWeather });

});

const api = {
	key: "5d33ff84ea5610b1bfa28790de231985",
	baseurl: "http://api.openweathermap.org/data/2.5/"
}


function getWeather(maincity){
	if ($("#city").val()) {
		var city = $("#city").val();
	} else {
		var city = maincity;
	}

	if (city != '') {
		$.ajax({
			url: api.baseurl + 'weather?q='+city+'&units=metric'+'&appid=' + api.key,
			type: 'GET',
			datatype: 'jsonp',
			success: function(data){
				showResults(data);
			},
			error: function (error) {
				console.log('error');
			}
		});
	} else {
		console.log('error');
	}
}

function showResults (data) {

	let city = document.querySelector('.location .city');
	city_name = data.name.replace(' City','');
	city.innerText = `${city_name}, ${data.sys.country}`;

	let now = new Date();
	let date = document.querySelector('.location .date');
	date.innerText = dateBuilder(now);

	let temp = document.querySelector('.current .temp');
	temp.innerHTML = `${Math.round(data.main.temp* 10)/ 10}<span>°C</span>`;

	let weather_el = document.querySelector('.current .weather');
	weather_el.innerText = `${data.weather[0].main}`;

	let hilow = document.querySelector('.hi-low');
	hilow.innerText = `${Math.round(data.main.temp_min* 10)/ 10}°C / ${Math.round(data.main.temp_max* 10)/ 10}°C`;

	var weatherbody = document.getElementById("weather-body");
	if (data.main.temp > 16) {
		weatherbody.style.backgroundImage = "url(../images/weather/warm.jpg)"
	} else {
		weatherbody.style.backgroundImage = "url(../images/weather/cold.jpg)"
	}

}

function dateBuilder (d) {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d. getFullYear();

	return `${day} ${date} ${month} ${year}`;
}

function createWeatherCard(city) {
	const cityEl = document.createElement('div');
	const cities_container = document.getElementById('cities-container');
	cityEl.classList.add('city-card');

	// const poke_types = pokemon.types.map(type => type.type.name);
	// const type = main_types.find(type => poke_types.indexOf(type) > -1);
	// const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

	const cityInnerHTML = `
			<section class="location">
				<div class="city">${city.name}, ${city.sys.country}</div>
				<div class="date"></div>
			</section>
			<div class="current">
				<div class="temp">${Math.round(city.main.temp* 10)/ 10}<span>°C</span></div>
				<div class="weather">${city.weather[0].main}</div>
				<div class="hi-low">${Math.round(city.main.temp_min* 10)/ 10}°C / ${Math.round(city.main.temp_max* 10)/ 10}°C</div>
			</div>
    `;

	cityEl.innerHTML = cityInnerHTML;

	cities_container.appendChild(cityEl);
}

// const getPokemon = async id => {
// 	const url = api.baseurl + 'weather?q='+city+'&units=metric'+'&appid=' + api.key;
// 	const res = await fetch(url);
// 	const pokemon = await res.json();
// 	createPokemonCard(pokemon);
// };

// fetchPokemons();
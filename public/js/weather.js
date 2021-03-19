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
							var card = document.getElementById("city-card");
							$('.city-card').css({'opacity':0});
							$('.city-card').animate({
								'opacity':1.0
							}, 450);
						},
						error: function (error) {
							console.log('error');
						}
					});
				},2000 + ( i * 2000 ));

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

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const weathers = {
	Thunderstorm: ["electric","psycic","dragon","water"],
	Drizzle: ["water","psychic","normal","electric","grass"],
	Rain:["water","electic","grass"],
	Snow:["water","dragon","normal"],
	Mist:["water","Dragon","poison","bug","grass"],
	Smoke:["fire","normal","dragon","bug"],
	Haze:["fire","ground","rock","bug"],
	Dust:[],
	Fog:[],
	Sand:[],
	Ash:[],
	Squall:[],
	Tornado:[],
	Clear:["normal","ground","grass","fighting","psychic"],
	Clouds:["flying","dragon"]
};



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
				alert('You entered a wrong country.');
			}
		});
	} else {
		console.log('error');
		alert('You entered a wrong country.');
	}
}

const getWeatherPokemon = async (weather) => {
	var pokemons = new Array();

	for (let i = 1; i <= 150; i++) {
		var pokemon = await getPokemonData(i);
		for (type in pokemon.types) {
			// console.log(weathers[weather].includes(pokemon.types[type].type.name));
			if (weathers[weather].includes(pokemon.types[type].type.name)) {
				console.log(pokemon.name);
				createWeatherPokemonCard(pokemon);
			}
		}
		
	}
};

const getPokemonData = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

	const res = await fetch(url);
	const pokemon = await res.json();

	return pokemon;
};


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

	document.getElementById("weather-pokemon-container").innerHTML = "";

	getWeatherPokemon(data.weather[0].main);

	// if (data.weather[0].main == 'Thunderstorm') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Drizzle') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Rain') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Snow') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Mist') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Smoke') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Haze') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Dust') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Fog') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Sand') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Ash') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Squall') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Tornado') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Clear') {
	// 	getWeatherPokemon(data.weather[0].main);
	// } else if (data.weather[0].main == 'Clouds') {
	// 	getWeatherPokemon(data.weather[0].main);
	// }

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
	cityEl.setAttribute("id", "city-card");

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

	var data = `${city.name}`;

}


function createWeatherPokemonCard(pokemon) {
	const weatherpokemonEl = document.createElement('div');
	const weather_pokemon_container = document.getElementById('weather-pokemon-container');
	weatherpokemonEl.classList.add('weather-pokemon-card');
	weatherpokemonEl.setAttribute("id", "weather-pokemon-card");
	var types ='';
	for (type in pokemon.types) {
		// console.log(weathers[weather].includes(pokemon.types[type].type.name));
		
		types += `<small class="${pokemon.types[type].type.name}"><span>${pokemon.types[type].type.name[0].toUpperCase() + pokemon.types[type].type.name.slice(1)}</span></small>`;
	}

	const weatherpokemonInnerHTML = `
	<section class="location">
	<img class="pokemon-pic" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${pokemon.name}" />
	<div class="pokemon-name">${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</div>
	<div>${types}</div>
	</section>
	`;

	weatherpokemonEl.innerHTML = weatherpokemonInnerHTML;

	weather_pokemon_container.appendChild(weatherpokemonEl);

}

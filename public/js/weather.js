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
	} else if (window.location.pathname == "/pokemonweather/current") {
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
}

const weathers = {
	Thunderstorm: ["electric","psycic","dragon","water"],
	Drizzle: ["water","psychic","normal","electric","grass"],
	Rain:["water","electic","grass"],
	Snow:["water","ice","normal"],
	Mist:["water","shadow","poison","dark","ghost"],
	Smoke:["fire","normal","dragon","bug"],
	Haze:["fire","shadow","ghost","dark"],
	Dust:["ground","ghost", "fire"],
	Fog:["water", "fairy"],
	Sand:["fighting"],
	Ash:["ghost", "rock"],
	Squall:["flying"],
	Tornado:["dragon", "steel"],
	Clear:["normal","ground","grass","fighting", "fire"],
	Clouds:["flying"]
}

const dataSamples = {Moscow
	cities: ['Manila', 'Tokyo', 'Washington', 'Kolkata', 'Beijing', 'Brasilia', 'Bogota', 'Moscow', 'Ankara', '', '', '', '', '', '']
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var mybutton = document.getElementById("toTopButton");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
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
				alert('You entered a wrong country.');
			}
		});
	} else {
		console.log('error');
		alert('You entered a wrong country.');
	}
}


const getWeatherPokemon = async (weather) => {

	fetch(pokedexUrl)
	.then(x => x.json())
	.then(x => {
	// Get name of Pokedex to display in header
	// POKEDEX_REGION.textContent = capitalizeFirstLetter(x.name);

	// Fetch all Pokemon from Pokedex and display on page
	x.pokemon_entries.forEach(function(obj) {
		let pokemonURL = "";
		pokemonURL = 'https://pokeapi.co/api/v2/pokemon/' + obj.entry_number;

		fetch(pokemonURL)
		.then(x => x.json())
		.then(x => {

		  // Display Pokemon on the page
		  for (type in x.types) {
			if (weathers[weather].includes(x.types[type].type.name)) {
				pokemonArray.push(x);
				insertPokemonCard(x.name, x.id, x.sprites.front_default);
			}
		  }



		})
		.catch(err => {
			console.log(err);
		})
	})
})
	.catch(err => {
		console.log(err || "this is an error");
	});
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

	document.getElementById("pokemon-grid").innerHTML = "";

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

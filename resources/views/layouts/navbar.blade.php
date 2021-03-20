<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
	<a class="navbar-brand" href="{{url('/')}}"><span class="box-text top-logo">POKEMON</span><span class="box-text bot-logo">WEATHER</span></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarNavDropdown">
		<ul class="navbar-nav">

			<li class="nav-item">
				<a class="nav-link" href="{{route('openweather.cities')}}">Weather</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" href="{{route('pokemon.index')}}">Pokemon</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" href="#">Pokemon Weather Data</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" href="{{route('openweather.current')}}">Pokemon Weather App</a>
			</li>

			<li class="nav-item">
				<a class="nav-link" href="{{route('quizpop.index')}}">Test Your Knowledge!</a>
			</li>

		</ul>
	</div>
</nav>
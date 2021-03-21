@section('title', 'Pokemon Weather')
@extends('layouts.base')
@section('body')
<div class="weather-body" id="weather-body">
	<div class="app-wrap">
		<header class="weather-header">
			<input type="text" id="city" autocomplete="off" class="search-box" placeholder="Search for a city....">
			<button id="submitCity" type="submitCity"><i class="fa fa-search"></i></button>
		</header>
		<main class="weather-main" id="weather-main">
			<section class="location">
				<div class="city"></div>
				<div class="date"></div>
			</section>
			<div class="current">
				<div class="temp"></span></div>
				<div class="weather"></div>
				<div class="hi-low"></div>
			</div>
		</main>

        <div class="pokemon-body app-pokemonweather" id="pokemon-body">

          <div class="grid-wrapper" id="grid-wrapper">
            <h1 class="pokedex-title" id="pokedex-title"><span id="current-pokedex" ></span><a href="#pokedex" id="pokedex">Pokedex</a> </h1>
            <div class="pokemon-grid" id="pokemon-grid"></div>
        </div>
        <div class="details" id="details">
            <div class="back-button" id="back-button"></div>
            <h1 class="pk-name" id="pk-name"></h1>
            <div class="type-wrapper" id="type-wrapper">
              <h2>Type</h2>
              <ul class="type-list" id="type-list"></ul>
          </div>
          <div class="sprite" id="sprite"></div>
          <div class="base-stats" id="base-stats">
              <h2>Base Stats</h2>
              <ul class="stat-list" id="stat-list"></ul>
          </div>
          <div class="profile" id="profile">
              <h2>Profile</h2>
              <ul class="profile-list" id="profile-list">
                <li class="height" id="height">
                  <div class="attr-label">Height</div>
                  <div class="attr-value"></div>
              </li>
              <li class="weight" id="weight">
                  <div class="attr-label">Weight</div>
                  <div class="attr-value"></div>
              </li>
              <li class="abilities" id="abilities">
                  <div class="attr-label">Abilities</div>
                  <div class="attr-value"></div>
              </li>
              <li class="category" id="category">
                  <div class="attr-label">Category</div>
                  <div class="attr-value"></div>
              </li>
          </ul>
      </div>
      <div class="evolution" id="evolution">
          <h2>Evolution Chain</h2>
          <div class="evolution-list" id="evolution-list"></div>
      </div>
  </div>

</div>

</div>
</div>


@endsection
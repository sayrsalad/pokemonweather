@section('title', 'Pokedex Using the Pokemon API')
@extends('layouts.base')
@section('body')

<div class="pokemon-body">
	
	<div class="grid-wrapper" id="grid-wrapper">
		<h1 class="pokedex-title" id="pokedex-title"><span id="current-pokedex"></span> Pokédex</h1>
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


@endsection
@section('title', 'Open Weather')
@extends('layouts.base')
@section('body')
<div class="weather-body" id="weather-body">
	<div class="app-wrap">
		<header class="weather-header">
			<input type="text" id="city" autocomplete="off" class="search-box" placeholder="Search for a city....">
			<button id="submitCity" type="submitCity"><i class="fa fa-search"></i></button>
		</header>
		<main class="weather-main">
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
	</div>
</div>


@endsection
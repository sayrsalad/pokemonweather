@section('title', 'Open Weather')
@extends('layouts.base')
@section('body')


<div class="jumbotron">
	<h2 class="text-center">Get Current Weather Information</h2>
</div>

<div class="container">
	<div class="row">
		<div class="col-md-12">
			<h3 class="text-center">Enter City Name</h3>
		</div>

		<div class="form-group form-inline" id="cityDiv">
			<input type="text" name="city" id="city" class="form-control" placeholder="Enter city name">
			<button id="submitCity" type="submitCity" class="btn btn-primary">Search City</button>
		</div>
	</div>
</div>


@endsection
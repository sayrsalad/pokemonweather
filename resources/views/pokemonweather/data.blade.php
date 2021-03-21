@section('title', 'Pokemon Weather')
@extends('layouts.base')
@section('body')

<table class="table table-dark" id="pokemonweather-table">
	<thead>
		<tr>
			<th scope="col">City</th>
			<th scope="col">Weather</th>
			<th scope="col">Pokemon</th>
		</tr>
	</thead>
	<tbody id="pokemonweather-tablebody">

	</tbody>
</table>

@endsection
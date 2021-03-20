<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		@include('layouts.header')
	</head>
	
	<body>
		@include('layouts.navbar ')
		@yield('body')
		@include('layouts.footer')
		<button onclick="topFunction()" id="toTopButton" title="Go to top">Go back to Top</button>
	</body>
</html>
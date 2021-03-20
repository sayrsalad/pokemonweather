@section('title', 'Open Weather')
@extends('layouts.base')
@section('body')
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home page</title>
    <link rel="stylesheet" href="css/quiz.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossorigin="anonymous">
</head>
<body>
    <div class="Quiziecon">
        <div id="home" class="quizflex-column quizflex-center">
            <h1 class ="Quiziecons">Are you Ready?</h1>
            <a href="{{ route('quizpop.game') }}" class="quizbtn">Play</a>
            <a href="{{ route('quizpop.highscores') }}" id="highscore-btn" class="quizbtn">High Scores<i class="fas quizfa-crown"></i></a>
        </div>
    </div>
</body>
</html>
@endsection
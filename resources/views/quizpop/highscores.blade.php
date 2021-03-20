@section('title', 'Open Weather')
@extends('layouts.base')
@section('body')
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>High Scores</title>
    <link rel="stylesheet" href="/css/quiz.css">
    <link rel="stylesheet" href="/css/highscore.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossorigin="anonymous">
</head>
<body>
    <div class="quizcon">
        <div class="highscore #body">
        <div id="highScores" class="quizflex-center quizflex-column">
            <h1 class="Quiziecons" id="finalScore">Leaderboard</h1>
            <ul id="highScoresList"></ul>
            <a href="{{ route('quizpop.index') }}" class="quizbtn">Go Home<i class="fas fa-home"></i></a>
        </div>
    </div>
    </div>
    <script src="/js/highscore.js"></script>
</body>
</html>
@endsection
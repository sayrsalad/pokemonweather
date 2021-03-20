@section('title', 'Thank You For Taking The Challenge!')
@extends('layouts.base')
@section('body')

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/quiz.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossorigin="anonymous">
</head>
<body>
    <div class="quizcon">
        <div id="quizend" class="quizflex-center quizflex-column">
            <h2 class="quizcons" id="finalScore">0</h2>
            <form class="quizend-form-container">
                <h1 class="quizcons" id="quizend-text">Enter your name below to save your score!</h1>
                <input type="text" name="name" id="username" placeholder="Enter your name">
                <button class="quizbtn" id="saveScoreBtn" type="submit" onclick="saveHighScore(event)" disabled>Save</button>
            </form>
            <a href="{{ route('quizpop.game') }}" class="quizbtn">Play Again</a>
            <a href="{{ route('quizpop.index') }}" class="quizbtn">Go Home<i class="fas quizfa-home"></i></a>
        </div>
    </div>
    <script src="/js/end.js"></script>
</body>

@endsection
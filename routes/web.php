<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});


Route::get('/openweather/current', 'OpenWeatherController@index')->name('openweather.current');
Route::get('/openweather/cities', 'OpenWeatherController@cities')->name('openweather.cities');

Route::get('/quizpop/index', 'QuizController@index')->name('quizpop.index');
Route::get('/quizpop/game', 'QuizController@game')->name('quizpop.game');
Route::get('/quizpop/ends', 'QuizController@ends')->name('quizpop.ends');
Route::get('/quizpop/highscores', 'QuizController@highscores')->name('quizpop.highscores');



Route::resource('openweather', 'OpenWeatherController');
Route::resource('pokemon', 'PokemonController');
Route::resource('quizpop', 'QuizController');


<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

//Load Ember
Route::get('/', 'BaseController@index');

//Data requests

Route::resource('tasks', 'TasksController');
//Route::get('/tasks', 'TasksController@index');
Route::get('/tasks/store/{newName}' ,'TasksController@store');
Route::get('/tasks/destroy/{id}' ,'TasksController@destroy');


?>

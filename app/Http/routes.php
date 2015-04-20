<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'IndexController@index');
Route::get('/api/list', 'MlistController@index');
Route::get('/api/list/{id}', 'MlistController@show');
Route::post('/api/list/create', 'MlistController@create');
Route::put('/api/list/{id}/update', 'MlistController@update');
Route::delete('/api/list/{id}/delete', 'MlistController@delete');
//
// Route::get('home', 'HomeController@index');
//
// Route::controllers([
// 	'auth' => 'Auth\AuthController',
// 	'password' => 'Auth\PasswordController',
// ]);

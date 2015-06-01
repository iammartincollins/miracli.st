<?php

/*
|--------------------------------------------------------------------------
| API
|--------------------------------------------------------------------------
*/

Route::group(['prefix' => 'api'], function() {
    Route::resource('lists', 'MlistController');
});

/*
|--------------------------------------------------------------------------
| Point to angular for everything else
|--------------------------------------------------------------------------
*/
Route::get('/', 'IndexController@index');
Route::any('/{catchall?}', 'IndexController@index');
Route::any('/{catchall?}/{catchalll?}', 'IndexController@index');
Route::any('/{catchall?}/{catchalll?}/{catchallll?}', 'IndexController@index');

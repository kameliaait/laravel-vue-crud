<?php

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
    return view('welcome');
});
Route::get('/taskslist/{q?}','TaskController@index');
Route::post('/taskslist','TaskController@store');
Route::get('/taskslist/edit/{id}','TaskController@edit');
Route::patch('/taskslist/edit/{id}','TaskController@update');
Route::delete('/taskslist/{id}','TaskController@destroy');





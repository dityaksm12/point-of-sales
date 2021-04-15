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

App::setLocale('id');

Route::get('/', function () {
    return redirect('/login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


// Company
Route::get('/company/index', 'CompanyController@index');
Route::get('/company/create', 'CompanyController@create');
Route::post('/company/store', 'CompanyController@store');
Route::post('/company/update', 'CompanyController@update');


// User
Route::get('/user/index', 'UserController@index');
Route::get('/user/create', 'UserController@create');
Route::post('/user/store', 'UserController@store');
Route::post('/user/update', 'UserController@update');


// Role
Route::get('/role/add', 'RoleController@add');





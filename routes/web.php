<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
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
Route::get('/index',function(){
    return view('admin.home');
});
Route::get('/dashboard','UserController@home');

Route::get('/index','UserController@index');
Route::get('/daftar', 'RegisterController@register');
Route::get('/masuk','LoginController@login');
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

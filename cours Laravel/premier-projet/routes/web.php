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
    return view('welcome');
});
Route::get('/ping', function () {
    //return view('welcome');
    return 'ok';
});
Route::get('/etudiant/{matricule}', function ($matricule) {
    return 'étudiant : ' . $matricule;
});
Route::get('/semestre/{semestre?}', function ($semestre=1) {
    return 'semestre : ' . $semestre;
});


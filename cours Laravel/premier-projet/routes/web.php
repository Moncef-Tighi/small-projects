<?php

use App\Http\Controllers\Controller;
use GuzzleHttp\Middleware;
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
})->name('ping');
Route::get('/etudiant/{matricule}', function ($matricule) {
    return 'étudiant : ' . $matricule;
})->middleware('heure');
Route::get('/semestre/{semestre?}', function ($semestre=1) {
    return 'semestre : ' . $semestre;
});

Route::get('/admin', ['middleware'=>'heure:21', 'uses' =>'admincontroller@index']);

Route::get('/patients', 'PatientController@liste')->name('patients');

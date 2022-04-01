<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function __construct() {
        $this->middleware('TestMiddleware');
    }

    public function liste() {
        return 'ok';
    }
}

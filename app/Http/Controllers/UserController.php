<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        return view('admin.home');
    }
    public function home(){
        return view('admin.index');
    }
}

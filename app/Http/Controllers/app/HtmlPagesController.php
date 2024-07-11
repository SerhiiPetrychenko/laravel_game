<?php

namespace App\Http\Controllers\app;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HtmlPagesController extends Controller
{
    public function webapp()
    {
        return view('webapp');
    }
}

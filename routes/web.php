<?php

use App\Http\Controllers\app\HtmlPagesController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('app');
});

Route::get('app/{any?}', [HtmlPagesController::class, 'webapp'])
    ->where(['any' => '.*'])->name('app');

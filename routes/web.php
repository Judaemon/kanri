<?php

use Illuminate\Support\Facades\Route;

// sample route
Route::get('/test', function () {
    return response()->json([
        'message' => 'Hello World!',
    ]);
});

Route::get('/{any?}', function () {
    return view('app');
})->name('app');
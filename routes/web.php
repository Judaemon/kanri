<?php

use Illuminate\Support\Facades\Route;

require __DIR__.'/auth.php';

// sample route
Route::get('/test', function () {
    return response()->json([
        'message' => 'Hello World!',
    ]);
});

Route::get('/{any?}', function () {
    return view('app');
})->name('app');
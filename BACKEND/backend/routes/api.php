<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\WorkerController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Models\Admin;

Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::get('/getUser', [LoginController::class, 'getUser'])->name('getUser');

Route::post('/worker/create', [AdminController::class, 'CreateWorker']);
Route::get('/categories/all', [AdminController::class, 'getCategories']);
Route::get('/workers/all', [WorkerController::class, 'getWorkers']);
Route::delete('/worker/delete/{id}', [AdminController::class, 'deleteWorker']);
Route::post('/admin/logout', [AdminController::class, 'logout']);

// Worker routes
Route::post('/worker/request', [WorkerController::class, 'getWorkerRequest']);
Route::get('/worker/request/all', [WorkerController::class, 'diplayRequestWorker']);
Route::put('/worker/edit/{id}', [AdminController::class, 'editWorker']);


// Worker Dashboard routes
Route::get('/worker/dashboard', [WorkerController::class, 'getDashboard']);

<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\CampaignController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// temporary route for home (navbar and header)
Route::get('/home', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/about', function () {
    return Inertia::render('AboutUs');
})->name('about');

Route::resource('articles', ArticleController::class)->names([
    'index' => 'articles.index',
    'show' => 'articles.show',
    'create' => 'articles.create',
    'store' => 'articles.store',
    'edit' => 'articles.edit',
    'update' => 'articles.update',
    'destroy' => 'articles.destroy',
]);
Route::resource('reports', ReportController::class)->names([
    'index' => 'reports.index',
    'show' => 'reports.show',
    'create' => 'reports.create',
    'store' => 'reports.store',
    'edit' => 'reports.edit',
    'update' => 'reports.update',
    'destroy' => 'reports.destroy',
]);
Route::resource('campaigns', CampaignController::class)->only(['index', 'show'])->names([
    'index' => 'campaigns.index',
    'show' => 'campaigns.show',
]);

// user need to be authenticated to access this
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('campaigns', CampaignController::class)->only(['create', 'store', 'edit', 'update', 'destroy'])->names([
        'create' => 'campaigns.create',
        'store' => 'campaigns.store',
        'edit' => 'campaigns.edit',
        'update' => 'campaigns.update',
        'destroy' => 'campaigns.destroy',
    ]);
});

require __DIR__ . '/auth.php';

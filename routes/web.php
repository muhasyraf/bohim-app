<?php

use Inertia\Inertia;
use App\Models\Article;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BiotaController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CampaignController;
use App\Models\MarineBiota;

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
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'biotas' => MarineBiota::latest()->limit(10)->get(),
        'articles' => Article::with('categories', 'user')->latest()->limit(4)->get(),
    ]);
})->name('home');


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/about', function () {
    return Inertia::render('AboutUs');
})->name('about');

Route::get('/biota', function () {
    return Inertia::render('Biota/Index', [
        // get all Biota
        'biotas' => MarineBiota::get(),
    ]);
})->name('biota');

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

// user need to be authenticated to access this
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

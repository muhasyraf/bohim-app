<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\MarineBiota;
use Illuminate\Http\Request;

class BiotaController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only(['create', 'store', 'edit', 'update', 'destroy']);
    }
    
    public function index()
    {
        $biotas = MarineBiota::get();
        return Inertia::render('Biota/Index', [
            'biotas' => $biotas
        ]);
    }
}

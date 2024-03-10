<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MarineBiota;
use Inertia\Inertia;

class MarineBiotaController extends Controller
{
    /**
     * Display a listing of the marine biota.
     */
    public function index()
    {
        $marineBiotas = MarineBiota::all();
        return Inertia::render('MarineBiota/Index', [
            'marineBiotas' => $marineBiotas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified marine biota.
     */
    public function show(string $id)
    {
        $marineBiota = MarineBiota::find($id);
        return Inertia::render('MarineBiota/Show', [
            'marineBiota' => $marineBiota
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

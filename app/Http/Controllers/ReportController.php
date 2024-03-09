<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Report;
use App\Models\Violation;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\MarineBiota;

class ReportController extends Controller
{
    /**
     * Display a listing of the existing report
     */
    public function index()
    {
        $reports = Report::all();
        return Inertia::render('Report/Index', [
            'reports' => $reports
        ]);
    }

    /**
     * Show the form for creating a new report.
     */
    public function create()
    {
        $userId = auth()->user()->id;
        $violationId = Violation::all('id', 'name');
        $marineBiotaId = MarineBiota::all('id', 'name');

        return Inertia::render('Report/Create', [
            'userId' => $userId,
            'violationId' => $violationId,
            'marineBiotaId' => $marineBiotaId
        ]);
    }

    /**
     * Store a newly created report data in database.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'user_id' => 'required|exists:users,id',
                'violation_id' => 'required|exists:violations,id',
                'marine_biota_id' => 'required|exists:marine_biotas,id',
                'location' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'photo' => 'required|string',
                'action_taken' => 'required|string|max:255',
                'notes' => 'required|string|max:255',
                'status' => 'required|string|max:255',
            ]
        );

        $file = $request->file('photo');
        $fileName = time() . '_' . $request->violation_id . $request->marine_biota_id . $file->getClientOriginalExtension();

        Storage::putFileAs('reports', $file, $fileName);
        Report::create(
            [
                'user_id' => $request->user_id,
                'violation_id' => $request->violation_id,
                'marine_biota_id' => $request->marine_biota_id,
                'location' => $request->location,
                'description' => $request->description,
                'photo' => $fileName,
                'action_taken' => $request->action_taken,
                'notes' => $request->notes,
                'status' => $request->status,
            ]
        );

        return redirect()->back()->with('success', 'Report created successfully');
    }

    /**
     * Display the specified report.
     */
    public function show(string $id)
    {
        $report = Report::find($id);
        return Inertia::render('Report/Show', [
            'report' => $report
        ]);
    }

    /**
     * Show the form for editing the specified report.
     */
    public function edit(string $id)
    {
        $report = Report::find($id);
        return Inertia::render('Report/Edit', [
            'report' => $report
        ]);
    }

    /**
     * Update the specified report in database.
     */
    public function update(Request $request, string $id)
    {
        $request->validate(
            [
                'user_id' => 'required|exists:users,id',
                'violation_id' => 'required|exists:violations,id',
                'marine_biota_id' => 'required|exists:marine_biotas,id',
                'location' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'photo' => 'required|string',
                'action_taken' => 'required|string|max:255',
                'notes' => 'required|string|max:255',
                'status' => 'required|string|max:255',
            ]
        );

        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $fileName = time() . '_' . $request->violation_id . $request->marine_biota_id . $file->getClientOriginalExtension();

            Storage::putFileAs('reports', $file, $fileName);
        } else {
            $fileName = $request->photo;
        }


        $report = Report::find($id);
        $report->update(
            [
                'user_id' => $request->user_id,
                'violation_id' => $request->violation_id,
                'marine_biota_id' => $request->marine_biota_id,
                'location' => $request->location,
                'description' => $request->description,
                'photo' => $request->photo,
                'action_taken' => $request->action_taken,
                'notes' => $request->notes,
                'status' => $request->status,
            ]
        );

        return redirect()->back()->with('success', 'Report updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $report = Report::find($id);
        $report->delete();

        return redirect()->back()->with('success', 'Report deleted successfully');
    }
}

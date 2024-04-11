<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Campaign;
use App\Models\Violation;
use App\Models\MarineBiota;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CampaignController extends Controller
{
    /**
     * Display a listing of the campaign.
     */
    public function index()
    {
        $campaigns = Campaign::all();
        return Inertia::render('Campaign/Index', [
            'campaigns' => $campaigns
        ]);
    }

    /**
     * Show the form for creating a new campaign.
     */
    public function create()
    {
        $userId = auth()->user()->id;
        $violationId = Violation::all('id', 'name');
        $marineBiotaId = MarineBiota::all('id', 'name');
        return Inertia::render('Campaign/Create', [
            'userId' => $userId,
            'violationId' => $violationId,
            'marineBiotaId' => $marineBiotaId
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'user_id' => 'required|exists:users,id',
                'violation_id' => 'required|exists:violations,id',
                'marine_biota_id' => 'required|exists:marine_biotas,id',
                'title' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'thumbnail' => 'required',
            ]
        );

        $slug = Str::slug($request->title, '-');
        $status = 'pending';
        // person who create the campaign is automatically a supporter
        $supporter = User::find($request->user_id);
        $supporter->supports()->attach($request->user_id);
        // total supporter is 1
        $supporterCount = 1;

        $file = $request->file('thumbnail');
        $fileName = time() . '_' . $request->title . $file->getClientOriginalExtension();

        Storage::putFileAs('campaigns', $file, $fileName);

        Campaign::create(
            [
                'user_id' => $request->user_id,
                'violation_id' => $request->violation_id,
                'marine_biota_id' => $request->marine_biota_id,
                'title' => $request->title,
                'slug' => $slug,
                'description' => $request->description,
                'status' => $status,
                'supporter' => $supporterCount,
                'thumbnail' => $fileName,
            ]
        );
        return redirect()->back()->with('message', 'Campaign created successfully');
    }

    /**
     * Display the specified campaign.
     */
    public function show(string $id)
    {
        $campaign = Campaign::find($id);
        return Inertia::render('Campaign/Show', [
            'campaign' => $campaign
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $campaign = Campaign::find($id);
        $violationId = Violation::all('id', 'name');
        $marineBiotaId = MarineBiota::all('id', 'name');
        return Inertia::render('Campaign/Edit', [
            'campaign' => $campaign,
            'violationId' => $violationId,
            'marineBiotaId' => $marineBiotaId
        ]);
    }

    /**
     * Update the specified campaign in database.
     */
    public function update(Request $request, string $id)
    {
        $request->validate(
            [
                'user_id' => 'required|exists:users,id',
                'violation_id' => 'required|exists:violations,id',
                'marine_biota_id' => 'required|exists:marine_biotas,id',
                'title' => 'required|string|max:255',
                'description' => 'required|string|max:255',
                'thumbnail' => 'required',
            ]
        );

        if ($request->hasFile('thumbnail')) {
            $file = $request->file('thumbnail');
            $fileName = time() . '_' . $request->title . $file->getClientOriginalExtension();

            Storage::putFileAs('campaigns', $file, $fileName);
        } else {
            $fileName = $request->thumbnail;
        }

        Storage::putFileAs('campaigns', $file, $fileName);
        Campaign::find($id)->update(
            [
                'user_id' => $request->user_id,
                'violation_id' => $request->violation_id,
                'marine_biota_id' => $request->marine_biota_id,
                'title' => $request->title,
                'description' => $request->description,
                'thumbnail' => $fileName,
            ]
        );
        return redirect()->back()->with('message', 'Campaign updated successfully');
    }

    /**
     * Remove the specified campaign from database.
     */
    public function destroy(string $id)
    {
        Campaign::find($id)->delete();
        return redirect()->back()->with('message', 'Campaign deleted successfully');
    }
}

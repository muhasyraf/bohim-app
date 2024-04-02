<?php

namespace Database\Seeders;

use App\Models\MarineBiota;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class BiotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $biotas = File::json(base_path('database/data/biota.json'));

        foreach ($biotas as $biota) {
            MarineBiota::updateOrCreate([
                'name' => $biota['name'],
                'scientific_name' => $biota['scientific_name'],
                'description' => $biota['description'],
                'status' => $biota['status'],
            ]);
        }
    }
}

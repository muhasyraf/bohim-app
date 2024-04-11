<?php

namespace Database\Seeders;

use App\Models\MarineBiota;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Faker\Factory as Faker;

class BiotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $biotas = File::json(base_path('database/data/biota.json'));

        foreach ($biotas as $biota) {
            MarineBiota::updateOrCreate([
                'name' => $biota['name'],
                'scientific_name' => $biota['scientific_name'],
                'description' => $biota['description'],
                'status' => $biota['status'],
                'photo' => $biota['photo'],
                'category' => $biota['category'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}

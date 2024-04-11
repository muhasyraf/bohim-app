<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Report;
use App\Models\Violation;
use App\Models\MarineBiota;
use Faker\Factory as Faker;


class ReportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $violations = Violation::all('id');
        $marineBiotas = MarineBiota::all('id');
        foreach (range(1, 20) as $index) {
            Report::create([
                'user_id' => $faker->randomElement([1, 2]),
                'violation_id' => $violations->random()->id,
                'marine_biota_id' => $marineBiotas->random()->id,
                'location' => $faker->address,
                'notes' => $faker->sentence,
                'status' => $faker->randomElement(['pending', 'approved', 'rejected']),
                'photo' => $faker->imageUrl(),
            ]);
        }
    }
}

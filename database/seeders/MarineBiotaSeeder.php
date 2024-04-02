<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\MarineBiota;
use Faker\Factory as Faker;

class MarineBiotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        for ($i = 1; $i <= 25; $i++) {
            MarineBiota::insert([
                [
                    'name' => $faker->name(),
                    'scientific_name' => $faker->words(2, true),
                    'description' => $faker->text(250),
                    'status' => $faker->randomElement(['CR', 'EN', 'VU', 'NT', 'LC']), // CR: Critically Endangered, EN: Endangered, VU: Vulnerable, NT: Near Threatened, LC: Least Concern
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);
        }
    }
}

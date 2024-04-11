<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::insert([
            [
                'name' => 'Edukasi',
                'slug' => Str::slug('Edukasi'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Profil Biota',
                'slug' => Str::slug('Profil Biota'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Konservasi',
                'slug' => Str::slug('Konservasi'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Penelitian',
                'slug' => Str::slug('Penelitian'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pariwisata',
                'slug' => Str::slug('Pariwisata'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Teknologi',
                'slug' => Str::slug('Teknologi'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pelanggaran',
                'slug' => Str::slug('Pelanggaran'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

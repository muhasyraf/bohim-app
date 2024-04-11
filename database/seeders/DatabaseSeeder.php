<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\MarineBiota;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            ArticleSeeder::class,
            ArticleCategorySeeder::class,
            BiotaSeeder::class,
            ViolationSeeder::class,
            ReportSeeder::class,
        ]);
    }
}

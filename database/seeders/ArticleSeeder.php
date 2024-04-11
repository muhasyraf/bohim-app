<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Article;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;


class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $biotas = File::json(base_path('database/data/biota-article.json'));
        $faker = Faker::create();
        foreach ($biotas as $biota) {
            $title = $biota['name'] . ' - ' . $biota['scientific_name'];
            $slugTitle = Str::slug($title);
            $markdownFile = $slugTitle . '.md';
            Article::updateOrCreate([
                'user_id' => $faker->randomElement([1, 2, 3]),
                'title' => $title,
                'thumbnail' => $biota['photo'],
                'file' => $markdownFile,
                'slug' => $slugTitle,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}

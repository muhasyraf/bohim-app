<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ArticleCategory;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\File;
use App\Models\Article;
use App\Models\Category;

class ArticleCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $articleCount = Article::count();

        for ($i = 1; $i <= $articleCount; $i++) {
            ArticleCategory::insert([
                [
                    'article_id' => $i,
                    'category_id' => Category::where('name', 'Edukasi')->value('id'),
                ],
                [
                    'article_id' => $i,
                    'category_id' => Category::where('name', 'Profil Biota')->value('id'),
                ],
            ]);
        }
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ArticleCategory;
use Faker\Factory as Faker;

class ArticleCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $articleIds = range(1, 25);
        $categoryIds = range(1, 10);
        $faker = Faker::create();
        foreach ($articleIds as $articleId) {
            $categoryIds = $faker->randomElements(range(1, 10), 3);
            foreach ($categoryIds as $categoryId) {
                ArticleCategory::insert([
                    [
                        'article_id' => $articleId,
                        'category_id' => $categoryId,
                    ],
                ]);
            }
        }
    }
}

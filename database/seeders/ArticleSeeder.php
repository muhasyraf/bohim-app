<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Article;
use Faker\Factory as Faker;


class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        for ($i = 1; $i <= 25; $i++) {
            Article::insert([
                [
                    'user_id' => $faker->randomElement([1, 2]),
                    'slug' => $faker->slug(),
                    'thumbnail' => $faker->imageUrl(640, 480, 'animals', true),
                    'title' => $faker->sentence(6, true),
                    'content' => $faker->paragraphs(4, true),
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);
        }
    }
}

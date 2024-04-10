<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        foreach (range(1, 3) as $index) {
            User::create([
                'username' => $faker->userName,
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => bcrypt('password'),
                'is_admin' => true,
            ]);
        }
        foreach (range(1, 7) as $index) {
            User::create([
                'username' => $faker->userName,
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => bcrypt('password'),
                'is_admin' => false,
            ]);
        }
    }
}

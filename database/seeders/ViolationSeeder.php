<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Violation;

class ViolationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Violation::insert([
            [
                'name' => 'Penangkapan Ilegal',
                'description' => 'Penangkapan ikan dengan alat tangkap yang dilarang, seperti bom ikan, pukat harimau, dan lain-lain',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pukat Harimau',
                'description' => 'Pukat harimau adalah alat tangkap ikan yang dilarang penggunaannya',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Peliharaan Ilegal',
                'description' => 'Peliharaan yang dilindungi oleh undang-undang',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Perdagangan Ilegal',
                'description' => 'Perdagangan hewan yang dilindungi oleh undang-undang',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Lainnya',
                'description' => 'Pelanggaran lainnya yang tidak terdaftar di atas',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

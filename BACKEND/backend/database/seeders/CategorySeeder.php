<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => 'Plumber'],
            ['name' => 'Electrician'],
            ['name' => 'Carpenter'],
            ['name' => 'Mechanic'],
            ['name' => 'Painter'],
            ['name' => 'Tailor'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}

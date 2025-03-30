<?php
namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class ProductSeeder extends Seeder
{
    public function run()
    {
        // Define the products (5 per category)
        $products = [
            // Bikes (categoryId: 1)
            [
                'nom' => 'CUBE Road Bike Elite',
                'description' => 'High-performance road bike with carbon frame and Shimano gears.',
                'prix' => 2499.99,
                'stock' => 10,
                'categoryId' => 1,
                'brand' => 'CUBE',
                'type' => 'road',
                'size' => 'M',
                'color' => 'Black',
                'image' => 'bike1.png',
            ],
            [
                'nom' => 'CUBE Mountain Bike Pro',
                'description' => 'Durable mountain bike with suspension fork and disc brakes.',
                'prix' => 1899.99,
                'stock' => 8,
                'categoryId' => 1,
                'brand' => 'CUBE',
                'type' => 'mountain',
                'size' => 'L',
                'color' => 'Green',
                'image' => 'bike2.png',
            ],
            [
                'nom' => 'CUBE Hybrid Bike Urban',
                'description' => 'Versatile hybrid bike for city commuting and light trails.',
                'prix' => 1599.99,
                'stock' => 12,
                'categoryId' => 1,
                'brand' => 'CUBE',
                'type' => 'hybrid',
                'size' => 'M',
                'color' => 'Blue',
                'image' => 'bike3.png',
            ],
            [
                'nom' => 'CUBE Gravel Bike Adventure',
                'description' => 'Gravel bike designed for long-distance adventures.',
                'prix' => 2199.99,
                'stock' => 6,
                'categoryId' => 1,
                'brand' => 'CUBE',
                'type' => 'gravel',
                'size' => 'L',
                'color' => 'Grey',
                'image' => 'bike4.png',
            ],
            [
                'nom' => 'CUBE Electric Bike Speed',
                'description' => 'Electric bike with powerful motor and long-lasting battery.',
                'prix' => 3499.99,
                'stock' => 5,
                'categoryId' => 1,
                'brand' => 'CUBE',
                'type' => 'electric',
                'size' => 'M',
                'color' => 'Red',
                'image' => 'bike5.png',
            ],

            // Helmets (categoryId: 2)
            [
                'nom' => 'CUBE Helmet HERON S',
                'description' => 'caracteristiques: "road helmet", "MIPS", "9 large vents", "SILC 180+ Fit System with height and width adjustment can be fine-tuned with one hand for a perfect fit", "triple-in-mould construction", "flat dividers for optimized webbing guiding", "removable, washable and antibacterial pads", "other pad thicknesses available", "Natural Fit concept", "matt finish"',
                'prix' => 199.95,
                'stock' => 12,
                'categoryId' => 2,
                'brand' => 'Heron',
                'type' => 'road',
                'size' => 'S (49-55)',
                'color' => 'Black',
                'image' => 'helmet1.png',
            ],
            [
                'nom' => 'CUBE Helmet HERON M',
                'description' => 'caracteristiques: "road helmet", "MIPS", "9 large vents", "SILC 180+ Fit System with height and width adjustment can be fine-tuned with one hand for a perfect fit", "triple-in-mould construction", "flat dividers for optimized webbing guiding", "removable, washable and antibacterial pads", "other pad thicknesses available", "Natural Fit concept", "matt finish"',
                'prix' => 199.95,
                'stock' => 8,
                'categoryId' => 2,
                'brand' => 'Heron',
                'type' => 'road',
                'size' => 'M (52-57)',
                'color' => 'Black',
                'image' => 'helmet2.png',
            ],
            [
                'nom' => 'CUBE Helmet HERON L',
                'description' => 'caracteristiques: "road helmet", "MIPS", "9 large vents", "SILC 180+ Fit System with height and width adjustment can be fine-tuned with one hand for a perfect fit", "triple-in-mould construction", "flat dividers for optimized webbing guiding", "removable, washable and antibacterial pads", "other pad thicknesses available", "Natural Fit concept", "matt finish"',
                'prix' => 199.95,
                'stock' => 5,
                'categoryId' => 2,
                'brand' => 'Heron',
                'type' => 'road',
                'size' => 'L (57-62)',
                'color' => 'Black',
                'image' => 'helmet3.png',
            ],
            [
                'nom' => 'CUBE Helmet Urban',
                'description' => 'Lightweight helmet for urban cycling with LED lights.',
                'prix' => 129.99,
                'stock' => 10,
                'categoryId' => 2,
                'brand' => 'CUBE',
                'type' => 'urban',
                'size' => 'M',
                'color' => 'White',
                'image' => 'helmet4.png',
            ],
            [
                'nom' => 'CUBE Helmet Mountain',
                'description' => 'Durable helmet for mountain biking with extra protection.',
                'prix' => 159.99,
                'stock' => 7,
                'categoryId' => 2,
                'brand' => 'CUBE',
                'type' => 'mountain',
                'size' => 'L',
                'color' => 'Green',
                'image' => 'helmet5.png',
            ],

            // Clothes (categoryId: 3)
            [
                'nom' => 'CUBE Jersey Pro',
                'description' => 'Breathable cycling jersey with moisture-wicking fabric.',
                'prix' => 79.99,
                'stock' => 20,
                'categoryId' => 3,
                'brand' => 'CUBE',
                'type' => 'jersey',
                'size' => 'M',
                'color' => 'Blue',
                'image' => 'clothes1.png',
            ],
            [
                'nom' => 'CUBE Shorts Elite',
                'description' => 'Padded cycling shorts for long rides.',
                'prix' => 89.99,
                'stock' => 15,
                'categoryId' => 3,
                'brand' => 'CUBE',
                'type' => 'shorts',
                'size' => 'L',
                'color' => 'Black',
                'image' => 'clothes2.png',
            ],
            [
                'nom' => 'CUBE Jacket Windproof',
                'description' => 'Windproof jacket for cold-weather cycling.',
                'prix' => 129.99,
                'stock' => 10,
                'categoryId' => 3,
                'brand' => 'CUBE',
                'type' => 'jacket',
                'size' => 'M',
                'color' => 'Red',
                'image' => 'clothes3.png',
            ],
            [
                'nom' => 'CUBE Tights Pro',
                'description' => 'Thermal tights for winter cycling.',
                'prix' => 99.99,
                'stock' => 12,
                'categoryId' => 3,
                'brand' => 'CUBE',
                'type' => 'tights',
                'size' => 'L',
                'color' => 'Black',
                'image' => 'clothes4.png',
            ],
            [
                'nom' => 'CUBE Socks Performance',
                'description' => 'Moisture-wicking socks for cycling comfort.',
                'prix' => 19.99,
                'stock' => 30,
                'categoryId' => 3,
                'brand' => 'CUBE',
                'type' => 'socks',
                'size' => 'M',
                'color' => 'White',
                'image' => 'clothes5.png',
            ],

            // Shoes (categoryId: 4)
            [
                'nom' => 'CUBE Road Shoes Pro',
                'description' => 'Lightweight road cycling shoes with stiff sole.',
                'prix' => 149.99,
                'stock' => 10,
                'categoryId' => 4,
                'brand' => 'CUBE',
                'type' => 'road',
                'size' => '42',
                'color' => 'Black',
                'image' => 'shoes1.png',
            ],
            [
                'nom' => 'CUBE Mountain Shoes Elite',
                'description' => 'Durable mountain biking shoes with grippy sole.',
                'prix' => 169.99,
                'stock' => 8,
                'categoryId' => 4,
                'brand' => 'CUBE',
                'type' => 'mountain',
                'size' => '43',
                'color' => 'Grey',
                'image' => 'shoes2.png',
            ],
            [
                'nom' => 'CUBE Urban Shoes',
                'description' => 'Casual cycling shoes for urban commuting.',
                'prix' => 99.99,
                'stock' => 15,
                'categoryId' => 4,
                'brand' => 'CUBE',
                'type' => 'urban',
                'size' => '41',
                'color' => 'Blue',
                'image' => 'shoes3.png',
            ],
            [
                'nom' => 'CUBE Road Shoes Elite',
                'description' => 'Premium road cycling shoes with carbon sole.',
                'prix' => 199.99,
                'stock' => 6,
                'categoryId' => 4,
                'brand' => 'CUBE',
                'type' => 'road',
                'size' => '44',
                'color' => 'White',
                'image' => 'shoes4.png',
            ],
            [
                'nom' => 'CUBE Mountain Shoes Pro',
                'description' => 'High-performance mountain biking shoes.',
                'prix' => 179.99,
                'stock' => 7,
                'categoryId' => 4,
                'brand' => 'CUBE',
                'type' => 'mountain',
                'size' => '42',
                'color' => 'Black',
                'image' => 'shoes5.png',
            ],
        ];

        // Seed the products
        foreach ($products as $index => $productData) {
            $imageName = $productData['image'];
            $sourcePath = public_path('seeder-images/' . $imageName);
            $destinationPath = 'products/' . str_replace('.png', '', $imageName) . '-' . time() . '-' . ($index + 1) . '.png';

            // Remove the 'image' key from productData as it's not a column in the products table
            unset($productData['image']);

            // Check if the source image exists
            if (File::exists($sourcePath)) {
                // Copy the image to the storage directory
                Storage::disk('public')->put($destinationPath, File::get($sourcePath));
                $productData['imageUrl'] = $destinationPath;
            } else {
                // If the image doesn't exist, set imageUrl to null
                $productData['imageUrl'] = null;
            }

            // Create the product
            Product::create($productData);
        }
    }
}

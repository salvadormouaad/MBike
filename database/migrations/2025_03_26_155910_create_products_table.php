<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('produitId');
            $table->string('nom', 100);
            $table->text('description')->nullable();
            $table->decimal('prix', 10, 2);
            $table->integer('stock')->default(0);
            $table->string('imageUrl', 255)->nullable();
            $table->foreignId('categoryId')->nullable()->constrained('categories', 'categoryId')->onDelete('set null');
            $table->string('brand', 50)->nullable();
            $table->string('type', 50)->nullable();
            $table->string('size', 200)->nullable();
            $table->string('color', 20)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};

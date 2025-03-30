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
        Schema::create('panier', function (Blueprint $table) {
            $table->id('panierId');
            $table->foreignId('userId')->constrained('utilisateur', 'userId')->onDelete('cascade');
            $table->foreignId('produitId')->constrained('products', 'produitId')->onDelete('cascade');
            $table->integer('quantite')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('panier');
    }
};

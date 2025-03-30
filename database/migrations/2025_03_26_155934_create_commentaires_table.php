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
        Schema::create('commentaires', function (Blueprint $table) {
            $table->id('commentaireId');
            $table->foreignId('userId')->constrained('utilisateur', 'userId')->onDelete('cascade');
            $table->foreignId('produitId')->constrained('products', 'produitId')->onDelete('cascade');
            $table->text('content');
            $table->integer('rating')->nullable()->between(1, 5);
            $table->timestamp('createdAt')->useCurrent();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commentaires');
    }
};

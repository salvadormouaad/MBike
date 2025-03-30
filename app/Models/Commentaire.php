<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Commentaire extends Model
{
    use HasFactory;

    protected $table = 'commentaires';
    protected $primaryKey = 'commentaireId';
    public $timestamps = true;

    protected $fillable = [
        'userId',
        'produitId',
        'content',
        'rating',
        'createdAt',
    ];

    // Relationships
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'userId', 'userId');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'produitId', 'produitId');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Panier extends Model
{
    use HasFactory;

    protected $table = 'panier';
    protected $primaryKey = 'panierId';
    public $timestamps = true;

    protected $fillable = [
        'userId',
        'produitId',
        'quantite',
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Commande extends Model
{
    use HasFactory;

    protected $table = 'commandes';
    protected $primaryKey = 'commandeId';
    public $timestamps = true;

    protected $fillable = [
        'userId',
        'totalPrix',
        'dateCommande',
        'stat',
    ];

    // Relationships
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'userId', 'userId');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'commandeId', 'commandeId');
    }
}

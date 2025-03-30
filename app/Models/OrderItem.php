<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderItem extends Model
{
    use HasFactory;

    protected $table = 'order_items';
    protected $primaryKey = 'orderItemId';
    public $timestamps = true;

    protected $fillable = [
        'commandeId',
        'produitId',
        'quantite',
        'prix',
    ];

    // Relationships
    public function commande()
    {
        return $this->belongsTo(Commande::class, 'commandeId', 'commandeId');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'produitId', 'produitId');
    }
}

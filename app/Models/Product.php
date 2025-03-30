<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $primaryKey = 'produitId';
    public $timestamps = true;

    protected $fillable = [
        'nom',
        'description',
        'prix',
        'stock',
        'imageUrl',
        'categoryId',
        'brand',
        'type',
        'size',
        'color',
    ];

    // Relationships
    public function category()
    {
        return $this->belongsTo(Category::class, 'categoryId', 'categoryId');
    }

    public function paniers()
    {
        return $this->hasMany(Panier::class, 'produitId', 'produitId');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'produitId', 'produitId');
    }

    public function commentaires()
    {
        return $this->hasMany(Commentaire::class, 'produitId', 'produitId');
    }
}

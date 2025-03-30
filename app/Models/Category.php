<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    protected $primaryKey = 'categoryId';
    public $timestamps = true;

    protected $fillable = ['name'];

    // Relationships
    public function products()
    {
        return $this->hasMany(Product::class, 'categoryId', 'categoryId');
    }
}

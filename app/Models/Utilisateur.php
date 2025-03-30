<?php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;

class Utilisateur extends Authenticatable
{
    use HasFactory,HasApiTokens;

    protected $table = 'utilisateur';
    protected $primaryKey = 'userId';
    public $timestamps = true;

    protected $fillable = [
        'username',
        'email',
        'passwordHash',
        'adresse',
        'role',
        'createdAt',
    ];


    // Rename passwordHash to password for Laravel's auth system
    protected $hidden = ['passwordHash','remember_token',];

    public function getAuthPassword()
    {
        return $this->passwordHash;
    }


    // Relationships
    public function paniers()
    {
        return $this->hasMany(Panier::class, 'userId', 'userId');
    }

    public function commandes()
    {
        return $this->hasMany(Commande::class, 'userId', 'userId');
    }

    public function commentaires()
    {
        return $this->hasMany(Commentaire::class, 'userId', 'userId');
    }
}

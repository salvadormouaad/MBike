<?php

namespace App\Providers;

use App\Models\Panier;
use App\Models\Commande;
use App\Models\Commentaire;
use App\Policies\PanierPolicy;
use App\Policies\CommandePolicy;
use App\Policies\CommentairePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
protected $policies = [
Panier::class => PanierPolicy::class,
Commande::class => CommandePolicy::class,
Commentaire::class => CommentairePolicy::class,
];

public function boot()
{
$this->registerPolicies();
}
}

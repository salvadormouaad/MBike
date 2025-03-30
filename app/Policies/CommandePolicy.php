<?php

namespace App\Policies;

use App\Models\Commande;
use App\Models\Utilisateur;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommandePolicy
{
    use HandlesAuthorization;

    public function view(Utilisateur $user, Commande $commande)
    {
        return $user->userId === $commande->userId;
    }
}

<?php

namespace App\Policies;

use App\Models\Panier;
use App\Models\Utilisateur;
use Illuminate\Auth\Access\HandlesAuthorization;

class PanierPolicy
{
    use HandlesAuthorization;

    public function update(Utilisateur $user, Panier $panier)
    {
        return $user->userId === $panier->userId;
    }

    public function delete(Utilisateur $user, Panier $panier)
    {
        return $user->userId === $panier->userId;
    }
}

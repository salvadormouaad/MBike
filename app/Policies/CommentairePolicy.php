<?php

namespace App\Policies;

use App\Models\Commentaire;
use App\Models\Utilisateur;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentairePolicy
{
    use HandlesAuthorization;

    public function update(Utilisateur $user, Commentaire $commentaire)
    {
        return $user->userId === $commentaire->userId;
    }

    public function delete(Utilisateur $user, Commentaire $commentaire)
    {
        return $user->userId === $commentaire->userId;
    }
}

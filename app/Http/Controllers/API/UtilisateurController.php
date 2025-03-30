<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UtilisateurController extends Controller
{
    public function index()
    {
        return Utilisateur::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|email|unique:utilisateur,email',
            'password' => 'required|string|min:6',
            'adresse' => 'nullable|string|max:255',
            'role' => 'required|in:user,admin',
        ]);

        $utilisateur = Utilisateur::create([
            'username' => $validated['username'],
            'email' => $validated['email'],
            'passwordHash' => Hash::make($validated['password']),
            'adresse' => $validated['adresse'] ?? null,
            'role' => $validated['role'],
            'createdAt' => now(),
        ]);

        return response()->json($utilisateur, 201);
    }

    public function show(string $id)
    {
        return Utilisateur::findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $utilisateur = Utilisateur::findOrFail($id);

        $validated = $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|email|unique:utilisateur,email,' . $id . ',userId',
            'password' => 'nullable|string|min:6',
            'adresse' => 'nullable|string|max:255',
            'role' => 'required|in:user,admin',
        ]);

        $utilisateur->update([
            'username' => $validated['username'],
            'email' => $validated['email'],
            'adresse' => $validated['adresse'] ?? null,
            'role' => $validated['role'],
            ...(isset($validated['password']) ? ['passwordHash' => Hash::make($validated['password'])] : []),
        ]);

        return response()->json($utilisateur, 200);
    }

    public function destroy(string $id)
    {
        $utilisateur = Utilisateur::findOrFail($id);
        $utilisateur->delete();
        return response()->json(null, 204);
    }
}

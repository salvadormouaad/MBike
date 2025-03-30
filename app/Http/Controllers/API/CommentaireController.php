<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Commentaire;
use Illuminate\Http\Request;

class CommentaireController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->only(['store', 'update', 'destroy']);
    }

    public function index()
    {
        return Commentaire::with(['user', 'product'])->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'produitId' => 'required|exists:products,produitId',
            'content' => 'required|string',
            'rating' => 'nullable|integer|between:1,5',
        ]);

        $commentaire = Commentaire::create([
            'userId' => $request->user()->userId,
            'produitId' => $request->produitId,
            'content' => $request->content,
            'rating' => $request->rating,
        ]);

        return response()->json($commentaire->load(['user', 'product']), 201);
    }

    public function show(Commentaire $commentaire)
    {
        return $commentaire->load(['user', 'product']);
    }

    public function update(Request $request, Commentaire $commentaire)
    {
        $this->authorize('update', $commentaire);

        $request->validate([
            'content' => 'required|string',
            'rating' => 'nullable|integer|between:1,5',
        ]);

        $commentaire->update($request->only(['content', 'rating']));
        return response()->json($commentaire->load(['user', 'product']));
    }

    public function destroy(Commentaire $commentaire)
    {
        $this->authorize('delete', $commentaire);

        $commentaire->delete();
        return response()->json(null, 204);
    }
}

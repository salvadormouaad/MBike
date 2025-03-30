<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Panier;
use App\Models\Product;
use Illuminate\Http\Request;

class PanierController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function index(Request $request)
    {
        return $request->user()->paniers()->with('product')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'produitId' => 'required|exists:products,produitId',
            'quantite' => 'required|integer|min:1',
        ]);

        $product = Product::findOrFail($request->produitId);
        if ($product->stock < $request->quantite) {
            return response()->json(['message' => 'Not enough stock'], 400);
        }

        $panier = Panier::create([
            'userId' => $request->user()->userId,
            'produitId' => $request->produitId,
            'quantite' => $request->quantite,
        ]);

        return response()->json($panier->load('product'), 201);
    }

    public function update(Request $request, Panier $panier)
    {
        $this->authorize('update', $panier);

        $request->validate([
            'quantite' => 'required|integer|min:1',
        ]);

        $product = Product::findOrFail($panier->produitId);
        if ($product->stock < $request->quantite) {
            return response()->json(['message' => 'Not enough stock'], 400);
        }

        $panier->update(['quantite' => $request->quantite]);
        return response()->json($panier->load('product'));
    }

    public function destroy(Panier $panier)
    {
        $this->authorize('delete', $panier);

        $panier->delete();
        return response()->json(null, 204);
    }
}

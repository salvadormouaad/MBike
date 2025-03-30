<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Commande;
use App\Models\OrderItem;
use App\Models\Panier;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommandeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function index(Request $request)
    {
        return $request->user()->commandes()->with('orderItems.product')->get();
    }

    public function store(Request $request)
    {
        $user = $request->user();
        $cartItems = $user->paniers()->with('product')->get();

        if ($cartItems->isEmpty()) {
            return response()->json(['message' => 'Cart is empty'], 400);
        }

        $totalPrix = $cartItems->sum(function ($item) {
            return $item->quantite * $item->product->prix;
        });

        DB::beginTransaction();
        try {
            $commande = Commande::create([
                'userId' => $user->userId,
                'totalPrix' => $totalPrix,
                'stat' => 'pending',
            ]);

            foreach ($cartItems as $item) {
                OrderItem::create([
                    'commandeId' => $commande->commandeId,
                    'produitId' => $item->produitId,
                    'quantite' => $item->quantite,
                    'prix' => $item->product->prix,
                ]);

                $product = Product::find($item->produitId);
                $product->stock -= $item->quantite;
                $product->save();
            }

            $user->paniers()->delete(); // Clear the cart
            DB::commit();

            return response()->json($commande->load('orderItems.product'), 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Order creation failed'], 500);
        }
    }

    public function show(Commande $commande)
    {
        $this->authorize('view', $commande);
        return $commande->load('orderItems.product');
    }
}

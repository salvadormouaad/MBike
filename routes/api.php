<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\UtilisateurController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\PanierController;
use App\Http\Controllers\API\CommandeController;
use App\Http\Controllers\API\CommentaireController;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('panier', PanierController::class)->except(['show']);
    Route::apiResource('commandes', CommandeController::class)->only(['index', 'store', 'show']);
});

Route::apiResource('categories', CategoryController::class);
Route::apiResource('products', ProductController::class);
Route::apiResource('commentaires', CommentaireController::class);
Route::apiResource('users', UtilisateurController::class);

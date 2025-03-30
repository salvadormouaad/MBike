<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        // Validate query parameters
        $validator = Validator::make($request->all(), [
            'per_page' => 'sometimes|integer|min:1|max:100',
            'page' => 'sometimes|integer|min:1',
            'sort_by' => 'sometimes|string|in:nom,prix,stock,created_at,updated_at',
            'sort_dir' => 'sometimes|string|in:asc,desc',
            'category_id' => 'sometimes|exists:categories,categoryId',
            'search' => 'sometimes|string|max:255',
            'min_price' => 'sometimes|numeric|min:0',
            'max_price' => 'sometimes|numeric|min:0',
            'brand' => 'sometimes|string|max:255',
            'type' => 'sometimes|string|max:255',
            'color' => 'sometimes|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get pagination parameters
        $perPage = min($request->input('per_page', 50), 100); // Max 100 items per page

        // Base query with eager loading
        $query = Product::with('category');

        // Apply filters
        if ($request->has('category_id')) {
            $query->where('categoryId', $request->input('category_id'));
        }

        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where(function($q) use ($searchTerm) {
                $q->where('nom', 'like', '%'.$searchTerm.'%')
                    ->orWhere('description', 'like', '%'.$searchTerm.'%')
                    ->orWhere('brand', 'like', '%'.$searchTerm.'%');
            });
        }

        if ($request->has('min_price')) {
            $query->where('prix', '>=', $request->input('min_price'));
        }

        if ($request->has('max_price')) {
            $query->where('prix', '<=', $request->input('max_price'));
        }

        if ($request->has('brand')) {
            $query->where('brand', 'like', '%'.$request->input('brand').'%');
        }

        if ($request->has('type')) {
            $query->where('type', 'like', '%'.$request->input('type').'%');
        }

        if ($request->has('color')) {
            $query->where('color', 'like', '%'.$request->input('color').'%');
        }

        // Apply sorting
        $sortBy = $request->input('sort_by', 'created_at');
        $sortDirection = $request->input('sort_dir', 'desc');
        $query->orderBy($sortBy, $sortDirection);

        // Execute query with pagination
        $products = $query->paginate($perPage);

        // Transform the items to include full image URLs
        $products->getCollection()->transform(function ($product) {
            if ($product->imageUrl) {
                $product->imageUrl = Storage::url($product->imageUrl);
            }
            return $product;
        });

        return response()->json([
            'data' => $products->items(),
            'meta' => [
                'current_page' => $products->currentPage(),
                'per_page' => $products->perPage(),
                'total' => $products->total(),
                'last_page' => $products->lastPage(),
                'sort_by' => $sortBy,
                'sort_dir' => $sortDirection,
                'filters' => $request->only(['category_id', 'search', 'min_price', 'max_price', 'brand', 'type', 'color'])
            ],
            'links' => [
                'first' => $products->url(1),
                'last' => $products->url($products->lastPage()),
                'prev' => $products->previousPageUrl(),
                'next' => $products->nextPageUrl(),
            ]
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'description' => 'nullable|string',
            'prix' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'categoryId' => 'required|exists:categories,categoryId',
            'brand' => 'nullable|string',
            'type' => 'nullable|string',
            'size' => 'nullable|string',
            'color' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            // Store the image directly in the products folder
            $imagePath = $request->file('image')->store('products', 'public');
        }

        $product = Product::create([
            'nom' => $validated['nom'],
            'description' => $validated['description'],
            'prix' => $validated['prix'],
            'stock' => $validated['stock'],
            'categoryId' => $validated['categoryId'],
            'brand' => $validated['brand'] ?? null,
            'type' => $validated['type'],
            'size' => $validated['size'] ?? null,
            'color' => $validated['color'],
            'imageUrl' => $imagePath,
        ]);

        if ($product->imageUrl) {
            $product->imageUrl = Storage::url($product->imageUrl);
        }

        return response()->json($product, 201);
    }

    public function show($id)
    {
        $product = Product::with('category')->findOrFail($id);
        if ($product->imageUrl) {
            $product->imageUrl = Storage::url($product->imageUrl);
        }
        return $product;
    }



    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($id);

        // Log the incoming request for debugging
        \Log::info('Update Product Request:', [
            'id' => $id,
            'request_data' => $request->all(),
            'files' => $request->hasFile('image') ? 'Image present' : 'No image',
        ]);

        // Validate the request, making all fields optional unless present
        $validated = $request->validate([
            'nom' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|nullable|string',
            'prix' => 'sometimes|required|numeric|min:0',
            'stock' => 'sometimes|required|integer|min:0',
            'categoryId' => 'sometimes|required|exists:categories,categoryId',
            'brand' => 'sometimes|nullable|string',
            'type' => 'sometimes|nullable|string',
            'size' => 'sometimes|nullable|string',
            'color' => 'sometimes|nullable|string',
            'image' => 'sometimes|nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Prepare the data to update, only including fields that were sent in the request
        $updateData = [];

        if ($request->has('nom')) {
            $updateData['nom'] = $validated['nom'];
        }
        if ($request->has('description')) {
            $updateData['description'] = $validated['description'];
        }
        if ($request->has('prix')) {
            $updateData['prix'] = $validated['prix'];
        }
        if ($request->has('stock')) {
            $updateData['stock'] = $validated['stock'];
        }
        if ($request->has('categoryId')) {
            $updateData['categoryId'] = $validated['categoryId'];
        }
        if ($request->has('brand')) {
            $updateData['brand'] = $validated['brand'] ?? null;
        }
        if ($request->has('type')) {
            $updateData['type'] = $validated['type'];
        }
        if ($request->has('size')) {
            $updateData['size'] = $validated['size'] ?? null;
        }
        if ($request->has('color')) {
            $updateData['color'] = $validated['color'];
        }

        // Handle image upload only if a new image is provided
        if ($request->hasFile('image')) {
            \Log::info('New image uploaded for product:', ['product_id' => $id]);
            // Delete the old image if it exists
            if ($product->imageUrl && Storage::disk('public')->exists($product->imageUrl)) {
                \Log::info('Deleting old image:', ['image_path' => $product->imageUrl]);
                Storage::disk('public')->delete($product->imageUrl);
            }
            // Store the new image
            $imagePath = $request->file('image')->store('products', 'public');
            $updateData['imageUrl'] = $imagePath;
            \Log::info('New image stored:', ['new_image_path' => $imagePath]);
        } else {
            \Log::info('No new image uploaded, keeping existing image:', ['imageUrl' => $product->imageUrl]);
            // Explicitly ensure the imageUrl is not updated if no new image is provided
            // No need to add imageUrl to $updateData; it will remain unchanged
        }

        // Update the product with the provided fields
        \Log::info('Updating product with data:', $updateData);
        $product->update($updateData);

        // Append the full URL to the imageUrl for the response
        if ($product->imageUrl) {
            $product->imageUrl = Storage::url($product->imageUrl);
        }

        \Log::info('Product updated successfully:', $product->toArray());

        return response()->json($product, 200);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        if ($product->imageUrl) {
            Storage::disk('public')->delete($product->imageUrl);
        }
        $product->delete();
        return response()->json(null, 204);
    }
}

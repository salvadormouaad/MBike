import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axios';
import { backendBaseUrl } from '../api/axios';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../features/cartSlice";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log('Fetching product with id:', id);
                const response = await axiosInstance.get(`/api/products/${id}`);
                console.log('Product data:', response.data);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching product:', err);
                setError('Failed to load product');
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            setQuantity(value);
        }
    };

    const handleAddToCart = () => {
        if (!product) return;

        dispatch(
            addToCart({
                id: product.produitId,
                name: product.nom,
                price: product.prix,
                image: product.imageUrl,
                quantity: quantity
            })
        );

        // Show success message
        alert('Product added to cart successfully!');
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!product) return <p>Product not found</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
                {/* Product Image */}
                <div className="w-full md:w-1/2 px-4 mb-8">
                    {product.imageUrl && (
                        <img
                            src={backendBaseUrl + product.imageUrl}
                            alt={product.nom}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    )}
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 px-4">
                    <h1 className="text-3xl font-bold mb-4">{product.nom}</h1>
                    <p className="text-gray-600 mb-4">SKU: {product.produitId}</p>
                    <div className="mb-4">
                        <span className="text-2xl font-bold">${product.prix}</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                        {product.description || 'No description available'}
                    </p>

                    {/* Quantity Input */}
                    <div className="mb-6">
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="w-20 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                        Add to Cart
                    </button>

                    {/* Product Details */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-2">Product Details:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Type: {product.type || 'N/A'}</li>
                            <li>Stock: {product.stock}</li>
                            <li>Weight: {product.weight || 'N/A'}</li>
                            <li>Size: {product.size || 'N/A'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

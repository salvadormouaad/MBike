import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromFavorites } from "../features/favoritesSlice";
import { addToCart } from "../features/cartSlice";
import {backendBaseUrl} from "../api/axios.js";

const Favorites = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items: favorites } = useSelector((state) => state.favorites);

    // Handle add to cart
    const handleAddToCart = (item) => {
        dispatch(
            addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
            })
        );
    };

    // Handle remove from favorites
    const handleRemoveFromFavorites = (id) => {
        dispatch(removeFromFavorites(id));
    };

    return (
        <section className="bg-white py-8 antialiased md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    Your Favorites
                </h2>
                <div className="mt-6 space-y-6">
                    {favorites.length === 0 ? (
                        <p className="text-gray-500 text-center">
                            You have no favorite products.{" "}
                            <button
                                onClick={() => navigate("/products")}
                                className="text-blue-600 underline"
                            >
                                Start shopping!
                            </button>
                        </p>
                    ) : (
                        favorites.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6 flex items-center justify-between"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        className="h-20 w-20"
                                        src={`${backendBaseUrl}${item.image}`}
                                        alt={item.name}
                                    />
                                    <div>
                                        <button
                                            onClick={() => navigate(`/product/${item.id}`)}
                                            className="text-base font-medium text-gray-900 hover:underline"
                                        >
                                            {item.name}
                                        </button>
                                        <p className="text-base font-bold text-gray-900">
                                            ${item.price.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black rounded-lg  cursor-pointer focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-in-out"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                                            />
                                        </svg>
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => handleRemoveFromFavorites(item.id)}
                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                                    >
                                        <svg
                                            className="me-1.5 h-5 w-5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18 17.94 6M18 18 6.06 6"
                                            />
                                        </svg>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Favorites;

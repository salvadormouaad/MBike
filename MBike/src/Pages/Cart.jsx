import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../features/productsSlice";
import { addToCart, removeFromCart, updateQuantity } from "../features/cartSlice";
import { addToFavorites, removeFromFavorites } from "../features/favoritesSlice";
import { backendBaseUrl } from "../API/axios.js";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fetch products, cart, and favorites state from Redux
    const { products, status: productsStatus } = useSelector((state) => state.products);
    const { items: cartItems } = useSelector((state) => state.cart);
    const { items: favorites } = useSelector((state) => state.favorites);

    // Fetch products on mount if not already fetched
    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productsStatus, dispatch]);

    // Recommended products: Exclude items already in the cart
    const recommendedProducts = products
        .filter((product) => !cartItems.some((item) => item.id === product.produitId))
        .slice(0, 3) // Limit to 3 recommended products
        .map((product) => ({
            id: product.produitId,
            name: product.nom,
            description: product.description || "No description available.",
            originalPrice: product.prix + 100, // Simulate a discount for demo purposes
            salePrice: product.prix,
            image: `${product.imageUrl}`,
        }));

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // For simplicity, set savings, pickup, and tax to 0 (you can add logic to calculate these)
    const savings = 0;
    const pickup = 0;
    const tax = 0;
    const total = subtotal - savings + pickup + tax;

    // Handle quantity changes
    const handleQuantityChange = (id, newQuantity) => {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
    };

    // Handle remove item
    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    // Handle add to cart for recommended products
    const handleAddToCart = (product) => {
        dispatch(
            addToCart({
                id: product.id,
                name: product.name,
                price: product.salePrice,
                image: product.image,
            })
        );
    };

    // Handle toggle favorites
    const handleToggleFavorites = (product) => {
        const isFavorite = favorites.some((fav) => fav.id === product.id);
        if (isFavorite) {
            dispatch(removeFromFavorites(product.id));
        } else {
            dispatch(
                addToFavorites({
                    id: product.id,
                    name: product.name,
                    price: product.price || product.salePrice,
                    image: product.image,
                })
            );
        }
    };

    return (
        <section className="bg-white py-8 antialiased md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    Shopping Cart
                </h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            {cartItems.length === 0 ? (
                                <p className="text-gray-500 text-center">
                                    Your cart is empty. <Link to="/Store" className="text-blue-600 underline">Start shopping!</Link>
                                </p>
                            ) : (
                                cartItems.map((item) => {
                                    const isFavorite = favorites.some((fav) => fav.id === item.id);
                                    return (
                                        <div
                                            key={item.id}
                                            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6"
                                        >
                                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                <a href="#" className="shrink-0 md:order-1">
                                                    <img
                                                        className="h-20 w-20"
                                                        src={`${backendBaseUrl}${item.image}`}
                                                        alt={item.name}
                                                    />
                                                </a>

                                                <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                    <div className="flex items-center">
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleQuantityChange(item.id, item.quantity - 1)
                                                            }
                                                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                                                        >
                                                            <svg
                                                                className="h-2.5 w-2.5 text-gray-900"
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 18 2"
                                                            >
                                                                <path
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M1 1h16"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <input
                                                            type="text"
                                                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                                                            value={item.quantity}
                                                            onChange={(e) =>
                                                                handleQuantityChange(
                                                                    item.id,
                                                                    parseInt(e.target.value) || 1
                                                                )
                                                            }
                                                            required
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleQuantityChange(item.id, item.quantity + 1)
                                                            }
                                                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                                                        >
                                                            <svg
                                                                className="h-2.5 w-2.5 text-gray-900"
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 18 18"
                                                            >
                                                                <path
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M9 1v16M1 9h16"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="text-end md:order-4 md:w-32">
                                                        <p className="text-base font-bold text-gray-900">
                                                            ${(item.price * item.quantity).toLocaleString()}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                    <a
                                                        href={`/product/${item.id}`}
                                                        className="text-base font-medium text-gray-900 hover:underline"
                                                    >
                                                        {item.name}
                                                    </a>

                                                    <div className="flex items-center gap-4">
                                                        <button
                                                            type="button"
                                                            onClick={() => handleToggleFavorites(item)}
                                                            className={`inline-flex items-center text-sm font-medium hover:underline ${
                                                                isFavorite ? 'text-red-600' : 'text-gray-500'
                                                            }`}
                                                        >
                                                            <svg
                                                                className="me-1.5 h-5 w-5"
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                fill={isFavorite ? 'currentColor' : 'none'}
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                                                />
                                                            </svg>
                                                            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                                                        </button>

                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemoveItem(item.id)}
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
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                        <div className="hidden xl:mt-8 xl:block">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Recommended Products
                            </h3>
                            <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                                {recommendedProducts.map((product) => {
                                    const isFavorite = favorites.some((fav) => fav.id === product.id);
                                    return (
                                        <div
                                            key={product.id}
                                            className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                                        >
                                            <a href={`/product/${product.id}`} className="overflow-hidden rounded">
                                                <img
                                                    className="mx-auto h-30 w-44"
                                                    src={`${backendBaseUrl}${product.image}`}
                                                    alt={product.name}
                                                />
                                            </a>
                                            <div>
                                                <a
                                                    href={`/product/${product.id}`}
                                                    className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
                                                >
                                                    {product.name}
                                                </a>
                                                <p className="mt-2 text-base font-normal text-gray-500">
                                                    {product.description.slice(0,30)+'...'}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-lg font-bold text-gray-900">
                                                    <span className="line-through">
                                                        ${product.originalPrice.toLocaleString()}
                                                    </span>
                                                </p>
                                                <p className="text-lg font-bold leading-tight text-red-600">
                                                    ${product.salePrice.toLocaleString()}
                                                </p>
                                            </div>
                                            <div className="mt-6 flex items-center gap-2.5">
                                                <button
                                                    type="button"
                                                    onClick={() => handleToggleFavorites(product)}
                                                    className={`inline-flex items-center justify-center gap-2 rounded-lg border cursor-pointer border-gray-200 p-2.5 text-sm font-medium focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 ${
                                                        isFavorite
                                                            ? 'bg-red-100 text-red-600'
                                                            : 'bg-white text-gray-900 hover:bg-gray-100 hover:text-black'
                                                    }`}
                                                >
                                                    <svg
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill={isFavorite ? 'currentColor' : 'none'}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleAddToCart(product)}
                                                    className="inline-flex w-full items-center justify-center rounded-lg cursor-pointer bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
                                                >
                                                    <svg
                                                        className="-ms-2 me-2 h-5 w-5"
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
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                            <p className="text-xl font-semibold text-gray-900">
                                Order Summary
                            </p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500">
                                            Original price
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900">
                                            ${subtotal.toLocaleString()}
                                        </dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500">
                                            Savings
                                        </dt>
                                        <dd className="text-base font-medium text-green-600">
                                            -${savings.toLocaleString()}
                                        </dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500">
                                            Store Pickup
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900">
                                            ${pickup.toLocaleString()}
                                        </dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500">
                                            Tax
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900">
                                            ${tax.toLocaleString()}
                                        </dd>
                                    </dl>
                                </div>

                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                                    <dt className="text-base font-bold text-gray-900">
                                        Total
                                    </dt>
                                    <dd className="text-base font-bold text-gray-900">
                                        ${total.toLocaleString()}
                                    </dd>
                                </dl>
                            </div>

                            <button
                                onClick={() => navigate('/checkout')}
                                className="flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
                            >
                                Proceed to Checkout
                            </button>

                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-normal text-gray-500"> or </span>
                                <button
                                    onClick={() => navigate('/products')}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-black underline hover:no-underline"
                                >
                                    Continue Shopping
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 12H5m14 0-4 4m4-4-4-4"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="voucher"
                                        className="mb-2 block text-sm font-medium text-gray-900"
                                    >
                                        Do you have a voucher or gift card?
                                    </label>
                                    <input
                                        type="text"
                                        id="voucher"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-black focus:ring-black"
                                        placeholder=""
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert("Voucher functionality coming soon!");
                                    }}
                                >
                                    Apply Code
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShoppingCart;

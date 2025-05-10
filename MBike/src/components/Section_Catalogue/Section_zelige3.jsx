import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../features/productsSlice";
import { backendBaseUrl } from "../../api/axios.js";
import WireframeLoader from "../WireframeLoader.jsx";

function Section_Shoes() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products, status, error } = useSelector((state) => state.products);

    // Fetch products on mount if not already fetched


    // Filter for shoes (categoryId: 4 for "Shoes")
    const shoes = products
        .filter((product) => product.categoryId === 4) // categoryId: 4 is for Shoes
        .map((product) => ({
            id: product.produitId,
            title: product.nom,
            description: product.description || 'No description available',
            images: [product.imageUrl], // Wrap imageUrl in an array to match the expected format
        }));

    // Handle loading state
    if (status === 'loading') {
        return (
            <WireframeLoader />
        );
    }

    // Handle error state
    if (status === 'failed') {
        return (
            <div className="text-center my-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                        Explore Our Frizes Zelige Collection
                    </span>
                </h2>
                <p className="text-red-600">Error: {error}</p>
            </div>
        );
    }

    // Handle empty state
    if (shoes.length === 0) {
        return (
            <div className="text-center my-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                        Explore Our Our Frizes Zelige Collection
                    </span>
                </h2>
                <p>No  Zelige avaible at the moment.</p>
            </div>
        );
    }

    // Display only the first shoe item
    const val = shoes[0];

    return (
        <div>
            <div className="text-center my-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                        Explore Our Frizes Zelige Collection
                    </span>
                </h2>
            </div>
            <section
                className="bg-[#181a1e] max-h-[auto] py-8 lg:py-10 overflow-hidden"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Text Content */}
                        <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 lg:space-y-8">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-2xl mx-auto lg:mx-0 text-center lg:text-left animate-fade-in-up">
                            Frizes Zelige{" "}
                                <br className="hidden sm:inline" />
                                {val.title}
                            </h3>
                            <p className="text-gray-100 text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto lg:mx-0 text-center lg:text-left leading-relaxed animate-fade-in-up animation-delay-200">
                                {val.description}
                            </p>
                            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in-up animation-delay-400">
                                {/* Button to view product details */}
                                <button
                                    onClick={() => navigate(`/product/${val.id}`)}
                                    className="inline-flex items-center px-5 py-3 text-base font-medium text-white bg-black rounded-lg focus:ring-4 focus:ring-primary-300 transition-all duration-300 ease-in-out group"
                                >
                                    DISCOVER
                                    <svg
                                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="lg:col-span-3 order-1 lg:order-2">
                            <div className="relative w-full max-w-lg mx-auto lg:mx-0 animate-fade-in">
                                <picture>
                                    <source
                                        srcSet={`${backendBaseUrl + val.images[0]}?w=800 800w, ${backendBaseUrl + val.images[0]}?w=600 600w`}
                                        media="(min-width: 768px)"
                                    />
                                    <img
                                        src={`${backendBaseUrl + val.images[0]}?w=400`}
                                        alt={`CUBE Shoes - ${val.title}`}
                                        className="w-full h-auto object-contain transition-opacity duration-500"
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Section_Shoes;

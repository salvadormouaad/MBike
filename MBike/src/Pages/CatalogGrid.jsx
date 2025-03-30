import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectProducts,
    selectProductsErrors,
    selectProductsPagination,
    selectProductsStatus
} from "../selectors/ProductsSelectors.jsx";
import { fetchProducts, resetFilters } from "../features/productsSlice.jsx";
import {backendBaseUrl} from "../API/axios.js";
import {fetchCategories} from "../features/categoriesSlice.jsx";
import {addToCart} from "../features/cartSlice.jsx";
const ProductsGrid = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductsStatus);
    const error = useSelector(selectProductsErrors);
    const [sortOption, setSortOption] = useState("newest");
    const paginationData = useSelector(selectProductsPagination);
    const categories = useSelector((state)=> state.categories.categories)


    useEffect(()=>{
        dispatch(fetchCategories())
    },[])

    const handleAddToCart = (product) => {
        console.log(product.imageUrl)
        dispatch(
            addToCart({
                id: product.produitId,
                name: product.nom,
                price: product.prix,
                image: product.imageUrl,
            })
        );
    };


    // Updated filter names to match backend validation rules
    const [filters, setFilters] = useState({
        category_id: "",
        min_price: "",
        max_price: "",
        color: "",
        type: "",
        brand: "",
        search: ""
    });

    const [pagination, setPagination] = useState({
        current_page: 1,
        per_page: 12,
        total: 0,
        last_page: 1
    });

    // Fetch products with pagination and filters
    useEffect(() => {
        const params = {
            page: pagination.current_page,
            per_page: pagination.per_page
        };

        // Only add filters that have values
        Object.keys(filters).forEach(key => {
            if (filters[key]) {
                params[key] = filters[key];
            }
        });

        // Set sort parameters based on sortOption
        if (sortOption === "newest") {
            params.sort_by = "created_at";
            params.sort_dir = "desc";
        } else if (sortOption === "price-low") {
            params.sort_by = "prix";
            params.sort_dir = "asc";
        } else if (sortOption === "price-high") {
            params.sort_by = "prix";
            params.sort_dir = "desc";
        }

        dispatch(fetchProducts(params));
    }, [dispatch, pagination.current_page, pagination.per_page, filters, sortOption]);

    // Update pagination state when products are fetched
    useEffect(() => {
        if (status === 'succeeded') {
            // Get pagination metadata from Redux store



            if (paginationData) {
                setPagination(prev => ({
                    ...prev,
                    total: paginationData.total || 0,
                    last_page: paginationData.last_page || 1
                }));
            }
        }
    }, [status, useSelector]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
        // Reset to first page when filters change
        setPagination(prev => ({
            ...prev,
            current_page: 1
        }));
    };

    const handleClearFilters = () => {
        setFilters({
            category_id: "",
            min_price: "",
            max_price: "",
            color: "",
            type: "",
            brand: "",
            search: ""
        });
        dispatch(resetFilters());
        setPagination(prev => ({
            ...prev,
            current_page: 1
        }));
    };

    const handlePageChange = (page) => {
        setPagination(prev => ({
            ...prev,
            current_page: page
        }));
        // Scroll to top when changing pages
        window.scrollTo(0, 0);
    };

    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pageNumbers = [];
        const totalPages = pagination.last_page;
        const currentPage = pagination.current_page;

        // Always show first page
        pageNumbers.push(1);

        // Calculate range to show
        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1);

        // Add ellipsis after first page if needed
        if (startPage > 2) {
            pageNumbers.push("...");
        }

        // Add middle pages
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        // Add ellipsis before last page if needed
        if (endPage < totalPages - 1) {
            pageNumbers.push("...");
        }

        // Add last page if it exists
        if (totalPages > 1) {
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    // Get unique values for filter dropdowns (from current products)
    const getUniqueValues = (key) => {
        if (!Array.isArray(products)) return [];
        return [...new Set(products.map(product => product[key]).filter(Boolean))];
    };

    return (
        <section className="bg-gray-50 py-8 antialiased md:py-12">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                {/* Heading & Sort */}
                <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                            Store
                        </h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button
                                id="sortDropdownButton"
                                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-black focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto"
                                onClick={() => document.getElementById("dropdownSort").classList.toggle("hidden")}
                            >
                                Sort
                            </button>
                            <div id="dropdownSort" className="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow">
                                <ul className="p-2 text-left text-sm font-medium text-gray-500">
                                    <li>
                                        <button onClick={() => setSortOption("newest")} className={`group inline-flex w-full items-center rounded-md px-3 py-2 text-sm ${sortOption === "newest" ? "text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`}>
                                            Newest
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setSortOption("price-low")} className={`group inline-flex w-full items-center rounded-md px-3 py-2 text-sm ${sortOption === "price-low" ? "text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`}>
                                            Price: Low to High
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setSortOption("price-high")} className={`group inline-flex w-full items-center rounded-md px-3 py-2 text-sm ${sortOption === "price-high" ? "text-black" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`}>
                                            Price: High to Low
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters Section */}
                <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="mb-4 flex flex-wrap items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">Filters</h3>
                        <button
                            onClick={handleClearFilters}
                            className="text-sm font-medium text-gray-500 hover:text-black"
                        >
                            Clear All
                        </button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
                        {/* Search Filter */}
                        <div className="md:col-span-2">
                            <label htmlFor="search" className="mb-1 block text-sm font-medium text-gray-700">
                                Search Products
                            </label>
                            <input
                                type="text"
                                id="search"
                                name="search"
                                value={filters.search}
                                onChange={handleFilterChange}
                                placeholder="Search by name, description, brand..."
                                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-gray-500 focus:outline-none"
                            />
                        </div>

                        {/* Category Filter */}
                        <div>
                            <label htmlFor="category_id" className="mb-1 block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                id="category_id"
                                name="category_id"
                                value={filters.category_id}
                                onChange={handleFilterChange}
                                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-gray-500 focus:outline-none"
                            >
                                <option value="">All Categories</option>
                                {categories
                                    .map((category,key) => (
                                        <option key={key} value={category.categoryId}>
                                            {category.name}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        {/* Price Range */}
                        <div>
                            <label htmlFor="min_price" className="mb-1 block text-sm font-medium text-gray-700">
                                Min Price (€)
                            </label>
                            <input
                                type="number"
                                id="min_price"
                                name="min_price"
                                value={filters.min_price}
                                onChange={handleFilterChange}
                                placeholder="Min"
                                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-gray-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="max_price" className="mb-1 block text-sm font-medium text-gray-700">
                                Max Price (€)
                            </label>
                            <input
                                type="number"
                                id="max_price"
                                name="max_price"
                                value={filters.max_price}
                                onChange={handleFilterChange}
                                placeholder="Max"
                                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-gray-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="mt-4 grid gap-4 md:grid-cols-4">
                        {/* Brand Filter */}
                        <div>
                            <label htmlFor="brand" className="mb-1 block text-sm font-medium text-gray-700">
                                Brand
                            </label>
                            <select
                                id="brand"
                                name="brand"
                                value={filters.brand}
                                onChange={handleFilterChange}
                                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-gray-500 focus:outline-none"
                            >
                                <option value="">All Brands</option>
                                {getUniqueValues('brand').map(brand => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>

                        {/* Type Filter */}
                        <div>
                            <label htmlFor="type" className="mb-1 block text-sm font-medium text-gray-700">
                                Type
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={filters.type}
                                onChange={handleFilterChange}
                                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-gray-500 focus:outline-none"
                            >
                                <option value="">All Types</option>
                                {getUniqueValues('type').map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        {/* Color Filter */}
                        <div>
                            <label htmlFor="color" className="mb-1 block text-sm font-medium text-gray-700">
                                Color
                            </label>
                            <select
                                id="color"
                                name="color"
                                value={filters.color}
                                onChange={handleFilterChange}
                                className="w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-gray-500 focus:outline-none"
                            >
                                <option value="">All Colors</option>
                                {getUniqueValues('color').map(color => (
                                    <option key={color} value={color}>{color}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Loading State */}
                {status === 'loading' && (
                    <div className="my-8 flex items-center justify-center">
                        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
                    </div>
                )}

                {/* Error State */}
                {status === 'failed' && (
                    <div className="my-8 rounded-lg bg-red-50 p-4 text-center text-red-800">
                        <p>{error || 'There was an error loading products. Please try again.'}</p>
                    </div>
                )}

                {/* Empty State */}
                {status === 'succeeded' && (!products || products.length === 0) && (
                    <div className="my-8 rounded-lg bg-gray-50 p-8 text-center">
                        <h3 className="mb-2 text-lg font-medium">No products found</h3>
                        <p className="text-gray-600">Try adjusting your filters or search criteria.</p>
                        <button
                            onClick={handleClearFilters}
                            className="mt-4 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Product Grid */}
                {status === 'succeeded' && products && products.length > 0 && (
                    <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <div key={product.produitId} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                                <div className="h-56 w-full">
                                    <a href={`/products/${product.produitId}`}>
                                        <img
                                            className="mx-auto h-full object-contain"
                                            src={backendBaseUrl+product.imageUrl}
                                            alt={product.nom}
                                        />
                                    </a>
                                </div>
                                <div className="pt-6">
                                    <a href={`/products/${product.produitId}`} className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
                                        {product.nom}
                                    </a>

                                    <div className="mt-4 flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-2xl font-extrabold leading-tight text-gray-900">
                                                €{parseFloat(product.prix).toFixed(2)}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {product.category?.name}
                                            </p>
                                        </div>

                                        <button className="inline-flex items-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300" onClick={()=>handleAddToCart(product)}>
                                            Add to cart
                                        </button>
                                    </div>

                                    <div className="mt-4 border-t pt-4">
                                        <p className="text-sm text-gray-500">
                                            <strong>Type:</strong> {product.type}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <strong>Brand:</strong> {product.brand}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <strong>Color:</strong> {product.color}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <strong>Stock:</strong> {product.stock} available
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {status === 'succeeded' && pagination.last_page > 1 && (
                    <div className="mt-8 flex items-center justify-center">
                        <nav className="flex items-center space-x-1">
                            {/* Previous Page Button */}
                            <button
                                onClick={() => handlePageChange(pagination.current_page - 1)}
                                disabled={pagination.current_page === 1}
                                className={`rounded-lg border p-2 ${
                                    pagination.current_page === 1
                                        ? 'cursor-not-allowed border-gray-200 text-gray-300'
                                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* Page Numbers */}
                            {getPageNumbers().map((page, index) => (
                                <React.Fragment key={index}>
                                    {page === "..." ? (
                                        <span className="px-2 py-1 text-gray-500">...</span>
                                    ) : (
                                        <button
                                            onClick={() => handlePageChange(page)}
                                            className={`rounded-lg px-3 py-1 ${
                                                pagination.current_page === page
                                                    ? 'bg-black text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    )}
                                </React.Fragment>
                            ))}

                            {/* Next Page Button */}
                            <button
                                onClick={() => handlePageChange(pagination.current_page + 1)}
                                disabled={pagination.current_page === pagination.last_page}
                                className={`rounded-lg border p-2 ${
                                    pagination.current_page === pagination.last_page
                                        ? 'cursor-not-allowed border-gray-200 text-gray-300'
                                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </nav>
                    </div>
                )}

                {/* Results count and per page selector */}
                {status === 'succeeded' && products && products.length > 0 && (
                    <div className="mt-4 flex flex-col items-center justify-between border-t border-gray-200 pt-4 text-sm text-gray-500 sm:flex-row">
                        <div>
                            Showing {(pagination.current_page - 1) * pagination.per_page + 1} to {Math.min(pagination.current_page * pagination.per_page, pagination.total)} of {pagination.total} products
                        </div>
                        <div className="mt-2 flex items-center sm:mt-0">
                            <span>Show</span>
                            <select
                                value={pagination.per_page}
                                onChange={(e) => {
                                    setPagination(prev => ({
                                        ...prev,
                                        per_page: Number(e.target.value),
                                        current_page: 1
                                    }));
                                }}
                                className="mx-2 rounded border border-gray-300 p-1"
                            >
                                <option value={12}>12</option>
                                <option value={24}>24</option>
                                <option value={48}>48</option>
                                <option value={96}>96</option>
                            </select>
                            <span>per page</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsGrid;

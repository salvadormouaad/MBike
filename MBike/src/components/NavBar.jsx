import {useState, useEffect, useRef} from "react";
import {
    navLists,
    bagImg,
    searchImg,
    profileImg,
    menuIcon,
    rightArrow,
    closeIcon,
} from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/authSlice";
import {
    selectIsAuthenticated,
    selectUser,
    selectCartItemCount, selectFavoritesCount,

} from "../selectors/authSelectors";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);
    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
    const closeDropdown = () => setIsDropdownOpen(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(selectUser);
    const cartItemCount = useSelector(selectCartItemCount);
    const favoritesCount = useSelector(selectFavoritesCount);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser());
            closeDropdown();
            closeMenu();
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleCartClick = () => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            navigate('/cart');
        }
        closeMenu();
    };

    const handleFavoritesClick = () => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            navigate('/favorites');
        }
        closeMenu();
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
            setSearchQuery("");
            setSearchBar(false);
        }
    };

    return (
        <>
            <div className="w-full sticky top-0 z-[100] shadow-2xl">
                <header
                    className={`w-full py-4 sm:px-10 px-5 flex justify-between items-center relative text-white bg-black nav-section transition-all duration-300`}
                >
                    <nav className="w-full flex screen-max-width">
                        <div className="pt-1 text-4xl cursor-pointer max-sm:mt-3 font-bold tracking-tight">
                            <Link to={"/"} className="hover:text-gray-300 transition-colors duration-200">
                                MBike
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="flex flex-1 justify-center max-sm:hidden pt-2">
                            {navLists.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item.path}
                                        className="px-5 text-lg cursor-pointer text-gray hover:text-white py-2 rounded-md transition-all duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Icons */}
                        <div className="flex justify-center items-center max-sm:flex-1 max-sm:justify-end cursor-pointer">
                            <div
                                className="border border-gray-600 rounded-full px-10 py-1.5 hover:border-gray-400 max-sm:hidden transition-all duration-200 flex items-center space-x-2"
                                onClick={() => setSearchBar(!searchBar)}
                            >
                                <img
                                    src={searchImg}
                                    alt="search"
                                    width={16}
                                    height={16}
                                    className="opacity-80 hover:opacity-100 transition-opacity duration-200"
                                />
                                <span className="text-sm font-medium font-sans">
                                    Search
                                </span>
                            </div>

                            {/* Authentication-based Links */}
                            {isAuthenticated ? (
                                <div className="relative" ref={dropdownRef}>
                                    <img
                                        src={profileImg}
                                        alt="profile"
                                        width={32}
                                        height={32}
                                        className="mx-3 cursor-pointer rounded-full hover:ring-2 hover:ring-gray-400 transition-all duration-200"
                                        onClick={toggleDropdown}
                                        aria-expanded={isDropdownOpen}
                                        aria-haspopup="true"
                                    />
                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-3 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 transform transition-all duration-200 ease-in-out scale-95 opacity-0 animate-dropdown">
                                            <div className="py-2">
                                                <div className="px-4 py-3 border-b border-gray-900">
                                                    <p className="text-lg font-medium text-center text-white">
                                                        {user?.username || "User"}
                                                    </p>
                                                    <p className="text-sm pt-2 text-center text-gray-500 truncate">
                                                        {user?.email || "user@example.com"}
                                                    </p>
                                                </div>
                                                <Link
                                                    to="/profile"
                                                    className="px-4 py-2.5 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-all duration-150 flex items-center space-x-2"
                                                    onClick={closeDropdown}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                    </svg>
                                                    <span>Profile</span>
                                                </Link>
                                                <button
                                                    onClick={handleLogout}
                                                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-200 hover:bg-gray-800 hover:text-white transition-all duration-150 flex items-center space-x-2"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                                    </svg>
                                                    <span>Logout</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex items-center max-sm:hidden">
                                    <Link
                                        to="/login"
                                        className="mx-3 text-lg font-mono text-black bg-white hover:text-white hover:bg-gray-800 px-5 py-0.9 rounded-md transition-all duration-200"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="mx-3 text-lg text-black font-mono bg-white hover:text-white hover:bg-gray-800 px-3 py-0.9 rounded-md transition-all duration-200"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}

                            {/* Favorites Icon */}
                            <div className="relative cursor-pointer" onClick={handleFavoritesClick}>
                                <svg
                                    className="w-6 h-6 mx-3 text-white hover:opacity-80 transition-opacity duration-200"
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
                                        d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                    />
                                </svg>
                                {isAuthenticated && (
                                    <span className="absolute -top-2 -right-0 font-sans text-xs font-medium text-white bg-red-600 rounded-full px-2 py-0.5 shadow-md">
                                      {favoritesCount > 0 ? favoritesCount  : 0}
                                    </span>
                                )}
                            </div>

                            {/* Cart Icon */}
                            <div className="relative cursor-pointer" onClick={handleCartClick}>
                                <img
                                    src={bagImg}
                                    alt="bag"
                                    width={24}
                                    height={24}
                                    className="mx-3 hover:opacity-80 transition-opacity duration-200"
                                />
                                {isAuthenticated && (

                                    <span className="absolute -top-2 -right-0 font-sans text-xs font-medium text-white bg-red-600 rounded-full px-2 py-0.5 shadow-md">
                                        {cartItemCount > 0 ? cartItemCount  : 0}
                                    </span>

                                )}
                            </div>

                            {/* Mobile Menu Toggle */}
                            <div className="sm:hidden mt-3" onClick={toggleMenu}>
                                <img
                                    src={isMenuOpen ? closeIcon : menuIcon}
                                    alt="menu"
                                    width={36}
                                    height={36}
                                    className={`border border-gray-600 rounded-full hover:bg-gray-700 p-2 mb-3 mx-3 transform transition-transform duration-300 ${
                                        isMenuOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

            {/* Mobile Menu */}
            <ul
                className={`w-full fixed z-[100] sm:hidden bg-black overflow-hidden transition-all duration-500 ease-in-out transform ${
                    isMenuOpen
                        ? "min-h-screen translate-x-0 opacity-100"
                        : "max-h-0 -translate-x-full opacity-0"
                }`}
            >
                <input
                    type="search"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-11/12 mx-auto my-6 text-center text-white bg-gray-800 border border-gray-600 rounded-full py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
                />
                {navLists.map((item, i) => (
                    <li key={i} className="cursor-pointer" onClick={closeMenu}>
                        <div className="flex justify-between items-center">
                            <Link
                                to={item.path}
                                className="py-4 text-lg ml-6 font-sans font-medium cursor-pointer text-gray-200 hover:text-white transition-all duration-200"
                            >
                                {item.name}
                            </Link>
                            <div>
                                <img
                                    src={rightArrow}
                                    alt="arrow"
                                    width={28}
                                    height={28}
                                    className="mr-6 hover:translate-x-2 transition-transform duration-300 ease-in-out"
                                />
                            </div>
                        </div>
                        <hr className="border-[0.03px] border-gray-700 my-1 mx-4" />
                    </li>
                ))}
                {/* Mobile Authentication Links */}
                {isAuthenticated ? (
                    <>
                        <li className="cursor-pointer" onClick={closeMenu}>
                            <div className="flex justify-between items-center">
                                <Link
                                    to="/profile"
                                    className="py-4 text-lg ml-6 font-sans font-medium cursor-pointer text-gray-200 hover:text-white transition-all duration-200"
                                >
                                    Profile
                                </Link>
                                <div>
                                    <img
                                        src={rightArrow}
                                        alt="arrow"
                                        width={28}
                                        height={28}
                                        className="mr-6 hover:translate-x-2 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                            </div>
                            <hr className="border-[0.03px] border-gray-700 my-1 mx-4" />
                        </li>
                        <li className="cursor-pointer" onClick={handleLogout}>
                            <div className="flex justify-between items-center">
                                <span className="py-4 text-lg ml-6 font-sans font-medium cursor-pointer text-gray-200 hover:text-white transition-all duration-200">
                                    Logout
                                </span>
                                <div>
                                    <img
                                        src={rightArrow}
                                        alt="arrow"
                                        width={28}
                                        height={28}
                                        className="mr-6 hover:translate-x-2 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                            </div>
                            <hr className="border-[0.03px] border-gray-700 my-1 mx-4" />
                        </li>
                    </>
                ) : (
                    <>
                        <li className="cursor-pointer" onClick={closeMenu}>
                            <div className="flex justify-between items-center">
                                <Link
                                    to="/login"
                                    className="py-4 text-lg ml-6 font-sans font-medium cursor-pointer text-gray-200 hover:text-white transition-all duration-200"
                                >
                                    Login
                                </Link>
                                <div>
                                    <img
                                        src={rightArrow}
                                        alt="arrow"
                                        width={28}
                                        height={28}
                                        className="mr-6 hover:translate-x-2 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                            </div>
                            <hr className="border-[0.03px] border-gray-700 my-1 mx-4" />
                        </li>
                        <li className="cursor-pointer" onClick={closeMenu}>
                            <div className="flex justify-between items-center">
                                <Link
                                    to="/register"
                                    className="py-4 text-lg ml-6 font-sans font-medium cursor-pointer text-gray-200 hover:text-white transition-all duration-200"
                                >
                                    Register
                                </Link>
                                <div>
                                    <img
                                        src={rightArrow}
                                        alt="arrow"
                                        width={28}
                                        height={28}
                                        className="mr-6 hover:translate-x-2 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                            </div>
                            <hr className="border-[0.03px] border-gray-700 my-1 mx-4" />
                        </li>
                    </>
                )}
                {/* Mobile Favorites Link */}
                <li className="cursor-pointer" onClick={handleFavoritesClick}>
                    <div className="flex justify-between items-center">
                        <span className="py-4 text-lg ml-6 font-sans font-medium cursor-pointer text-gray-200 hover:text-white transition-all duration-200">
                            Favorites {isAuthenticated ? `(${favoritesCount})` : ''}
                        </span>
                        <div>
                            <img
                                src={rightArrow}
                                alt="arrow"
                                width={28}
                                height={28}
                                className="mr-6 hover:translate-x-2 transition-transform duration-300 ease-in-out"
                            />
                        </div>
                    </div>
                    <hr className="border-[0.03px] border-gray-700 my-1 mx-4" />
                </li>
                {/* Mobile Cart Link */}
                <li className="cursor-pointer" onClick={handleCartClick}>
                    <div className="flex justify-between items-center">
                        <span className="py-4 text-lg ml-6 font-sans font-medium cursor-pointer text-gray-200 hover:text-white transition-all duration-200">
                            Cart {isAuthenticated ? `(${cartItemCount})` : ''}
                        </span>
                        <div>
                            <img
                                src={rightArrow}
                                alt="arrow"
                                width={28}
                                height={28}
                                className="mr-6 hover:translate-x-2 transition-transform duration-300 ease-in-out"
                            />
                        </div>
                    </div>
                    <hr className="border-[0.03px] border-gray-700 my-1 mx-4" />
                </li>
            </ul>

            {/* Search Bar Overlay */}
            {searchBar && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="w-full max-w-4xl mx-4">
                        <form onSubmit={handleSearchSubmit} className="relative">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="border border-gray-600 w-full py-3 px-4 pr-12 rounded-full text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400 shadow-md"
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                <img
                                    src={searchImg}
                                    alt="search"
                                    width={25}
                                    height={25}
                                    className="opacity-80 hover:opacity-100 transition-opacity duration-200"
                                />
                            </button>
                        </form>
                    </div>
                    <img
                        src={closeIcon}
                        alt="close"
                        width={40}
                        height={40}
                        className="absolute top-4 right-4 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                        onClick={() => setSearchBar(false)}
                    />
                </div>
            )}
        </>
    );
};

export default NavBar;

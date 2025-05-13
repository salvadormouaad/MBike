import { useState, useEffect, useRef } from "react";
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
    selectCartItemCount,
    selectFavoritesCount,
} from "../selectors/authSelectors";
import { gsap } from "gsap";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const searchBarRef = useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(selectUser);
    const cartItemCount = useSelector(selectCartItemCount);
    const favoritesCount = useSelector(selectFavoritesCount);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);
    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
    const closeDropdown = () => setIsDropdownOpen(false);

    useEffect(() => {
        // Handle click outside for dropdown
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        // GSAP Animations for Mobile Menu
        if (mobileMenuRef.current) {
            if (isMenuOpen) {
                gsap.to(mobileMenuRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                });
                gsap.fromTo(
                    mobileMenuRef.current.children,
                    { x: -30, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power2.out",
                        delay: 0.2,
                    }
                );
            } else {
                gsap.to(mobileMenuRef.current, {
                    x: "-100%",
                    opacity: 0,
                    duration: 0.4,
                    ease: "power3.in",
                });
            }
        }

        // GSAP Animation for Search Bar
        if (searchBarRef.current && searchBar) {
            gsap.fromTo(
                searchBarRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power3.out",
                }
            );
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen, searchBar]);

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser());
            closeDropdown();
            closeMenu();
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const handleCartClick = () => {
        if (!isAuthenticated) {
            navigate("/login");
        } else {
            navigate("/cart");
        }
        closeMenu();
    };

    const handleFavoritesClick = () => {
        if (!isAuthenticated) {
            navigate("/login");
        } else {
            navigate("/favorites");
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
            <div className="w-full sticky top-0 z-[100] shadow-[0_4px_20px_rgba(168,101,35,0.5)]">
                <header
                    className={`w-full py-4 sm:px-12 px-6 flex justify-between items-center relative text-white bg-gradient-to-r from-black via-[#543312] to-[#A86523]/40 backdrop-blur-xl border-b border-[#A86523]/40 transition-all duration-300 hover:bg-opacity-90`}
                >
                    <nav className="w-full flex screen-max-width">
                        <div className="pt-1 text-4xl cursor-pointer max-sm:mt-3 font-bold tracking-tighter">
                            <Link
                                to={"/"}
                                className="text-[#A86523] hover:text-[#d9a04e] transition-all duration-300 transform hover:scale-105"
                                style={{ fontFamily: "'Cinzel', serif", textShadow: "0 0 5px rgba(168,101,35,0.5)" }}
                            >
                                Zellige Marocain
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="flex flex-1 justify-center max-sm:hidden pt-2">
                            {navLists.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item.path}
                                        className="px-6 text-lg cursor-pointer text-white hover:text-[#A86523] py-2 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] relative group"
                                        style={{ fontFamily: "'Lora', serif" }}
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#A86523] transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%] group-hover:shadow-[0_0_8px_rgba(168,101,35,0.8)]"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Icons */}
                        <div className="flex justify-center items-center max-sm:flex-1 max-sm:justify-end cursor-pointer gap-4">
                            <div
                                className="border border-[#A86523]/70 rounded-full px-8 py-1.5 hover:border-[#A86523] hover:bg-[#A86523]/20 max-sm:hidden transition-all duration-300 flex items-center space-x-3 transform hover:scale-105 shadow-[0_0_10px_rgba(168,101,35,0.3)]"
                                onClick={() => setSearchBar(!searchBar)}
                            >
                                <img
                                    src={searchImg}
                                    alt="search"
                                    width={18}
                                    height={18}
                                    className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                                <span
                                    className="text-sm font-medium text-white hover:text-[#A86523]"
                                    style={{ fontFamily: "'Lora', serif" }}
                                >
                                    Search
                                </span>
                            </div>

                            {isAuthenticated ? (
                                <div className="relative" ref={dropdownRef}>
                                    <img
                                        src={profileImg}
                                        alt="profile"
                                        width={36}
                                        height={36}
                                        className="mx-2 cursor-pointer rounded-full hover:ring-2 hover:ring-[#A86523] transition-all duration-300 transform hover:scale-110 shadow-[0_0_10px_rgba(168,101,35,0.5)]"
                                        onClick={toggleDropdown}
                                        aria-expanded={isDropdownOpen}
                                        aria-haspopup="true"
                                        aria-label="User profile menu"
                                    />
                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-3 w-64 bg-gradient-to-b from-black/95 to-[#2a1c0e]/95 backdrop-blur-md border border-[#A86523]/40 rounded-xl shadow-2xl z-50 transform transition-all duration-300 origin-top-right">
                                            <div className="py-3">
                                                <div className="px-5 py-4 border-b border-[#A86523]/30">
                                                    <p
                                                        className="text-lg font-medium text-center text-[#A86523]"
                                                        style={{ fontFamily: "'Lora', serif", textShadow: "0 0 3px rgba(168,101,35,0.5)" }}
                                                    >
                                                        {user?.username || "User"}
                                                    </p>
                                                    <p
                                                        className="text-sm pt-2 text-center text-white/80 truncate"
                                                        style={{ fontFamily: "'Lora', serif" }}
                                                    >
                                                        {user?.email || "user@example.com"}
                                                    </p>
                                                </div>
                                                <Link
                                                    to="/profile"
                                                    className="px-5 py-3 text-sm text-white hover:bg-[#A86523]/30 hover:text-[#A86523] transition-all duration-300 flex items-center space-x-3 transform hover:translate-x-2"
                                                    onClick={closeDropdown}
                                                    style={{ fontFamily: "'Lora', serif" }}
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    <span>Profile</span>
                                                </Link>
                                                <button
                                                    onClick={handleLogout}
                                                    className="block w-full text-left px-5 py-3 text-sm text-white hover:bg-[#A86523]/30 hover:text-[#A86523] transition-all duration-300 flex items-center space-x-3 transform hover:translate-x-2"
                                                    style={{ fontFamily: "'Lora', serif" }}
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                    </svg>
                                                    <span>Logout</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex items-center max-sm:hidden gap-4">
                                    <Link
                                        to="/login"
                                        className="text-base text-white bg-transparent border border-[#A86523]/70 hover:bg-[#A86523]/30 hover:border-[#A86523] px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(168,101,35,0.3)]"
                                        style={{ fontFamily: "'Lora', serif" }}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="text-base text-white bg-gradient-to-r from-[#A86523]/20 to-[#A86523]/50 border border-[#A86523]/70 hover:bg-[#A86523]/30 hover:border-[#A86523] px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(168,101,35,0.4)]"
                                        style={{ fontFamily: "'Lora', serif" }}
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}

                            {/* Favorites Icon */}
                            <div className="relative cursor-pointer" onClick={handleFavoritesClick}>
                                <svg
                                    className="w-7 h-7 mx-2 text-white hover:text-[#A86523] transition-all duration-300 transform hover:scale-125 filter drop-shadow-[0_0_3px_rgba(168,101,35,0.5)]"
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
                                    <span className="absolute -top-2 -right-0 text-xs font-medium text-white bg-gradient-to-r from-[#A86523] to-[#c29146] rounded-full px-2 py-0.5 shadow-lg transform transition-all duration-300 hover:scale-125">
                                        {favoritesCount > 0 ? favoritesCount : 0}
                                    </span>
                                )}
                            </div>

                            {/* Cart Icon */}
                            <div className="relative cursor-pointer" onClick={handleCartClick}>
                                <img
                                    src={bagImg}
                                    alt="cart"
                                    width={28}
                                    height={28}
                                    className="mx-2 hover:opacity-90 transition-all duration-300 transform hover:scale-125 filter drop-shadow-[0_0_3px_rgba(168,101,35,0.5)]"
                                />
                                {isAuthenticated && (
                                    <span className="absolute -top-2 -right-0 text-xs font-medium text-white bg-gradient-to-r from-[#A86523] to-[#c29146] rounded-full px-2 py-0.5 shadow-lg transform transition-all duration-300 hover:scale-125">
                                        {cartItemCount > 0 ? cartItemCount : 0}
                                    </span>
                                )}
                            </div>

                            {/* Mobile Menu Toggle */}
                            <div className="sm:hidden mt-3" onClick={toggleMenu}>
                                <img
                                    src={isMenuOpen ? closeIcon : menuIcon}
                                    alt="menu"
                                    width={40}
                                    height={40}
                                    className={`border border-[#A86523]/70 rounded-full hover:bg-[#A86523]/30 p-2.5 mx-2 transform transition-all duration-300 shadow-[0_0_10px_rgba(168,101,35,0.4)] ${
                                        isMenuOpen ? "rotate-180 scale-110" : "scale-100"
                                    }`}
                                />
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

            {/* Mobile Menu */}
            <ul
                ref={mobileMenuRef}
                className={`w-full fixed z-[100] sm:hidden bg-gradient-to-b from-black via-[#3a2711]/90 to-[#A86523]/40 backdrop-blur-xl overflow-hidden transition-all duration-500 ease-in-out transform ${
                    isMenuOpen ? "min-h-screen opacity-100" : "max-h-0 opacity-0 translate-x-[-100%]"
                }`}
            >
                <input
                    type="search"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-11/12 mx-auto my-8 text-center text-white bg-black/50 border border-[#A86523]/70 rounded-full py-3 focus:outline-none focus:ring-2 focus:ring-[#A86523] placeholder-white/60 shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                    style={{ fontFamily: "'Lora', serif" }}
                />
                {navLists.map((item, i) => (
                    <li key={i} className="cursor-pointer" onClick={closeMenu}>
                        <div className="flex justify-between items-center group">
                            <Link
                                to={item.path}
                                className="py-4 text-lg ml-8 font-medium cursor-pointer text-white hover:text-[#A86523] transition-all duration-300 transform group-hover:translate-x-3"
                                style={{ fontFamily: "'Lora', serif", textShadow: "0 0 2px rgba(168,101,35,0.3)" }}
                            >
                                {item.name}
                            </Link>
                            <div>
                                <img
                                    src={rightArrow}
                                    alt="arrow"
                                    width={32}
                                    height={32}
                                    className="mr-8 transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:scale-125 filter drop-shadow-[0_0_2px_rgba(168,101,35,0.5)]"
                                />
                            </div>
                        </div>
                        <hr className="border-[0.5px] border-[#A86523]/20 my-2 mx-6" />
                    </li>
                ))}
                {isAuthenticated ? (
                    <>
                        <li className="cursor-pointer group" onClick={closeMenu}>
                            <div className="flex justify-between items-center">
                                <Link
                                    to="/profile"
                                    className="py-4 text-lg ml-8 font-medium cursor-pointer text-white hover:text-[#A86523] transition-all duration-300 transform group-hover:translate-x-3"
                                    style={{ fontFamily: "'Lora', serif", textShadow: "0 0 2px rgba(168,101,35,0.3)" }}
                                >
                                    Profile
                                </Link>
                                <div>
                                    <img
                                        src={rightArrow}
                                        alt="arrow"
                                        width={32}
                                        height={32}
                                        className="mr-8 transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:scale-125 filter drop-shadow-[0_0_2px_rgba(168,101,35,0.5)]"
                                    />
                                </div>
                            </div>
                            <hr className="border-[0.5px] border-[#A86523]/20 my-2 mx-6" />
                        </li>
                        <li className="cursor-pointer group" onClick={handleLogout}>
                            <div className="flex justify-between items-center">
                                <span
                                    className="py-4 text-lg ml-8 font-medium cursor-pointer text-white hover:text-[#A86523] transition-all duration-300 transform group-hover:translate-x-3"
                                    style={{ fontFamily: "'Lora', serif", textShadow: "0 0 2px rgba(168,101,35,0.3)" }}
                                >
                                    Logout
                                </span>
                                <div>
                                    <img
                                        src={rightArrow}
                                        alt="arrow"
                                        width={32}
                                        height={32}
                                        className="mr-8 transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:scale-125 filter drop-shadow-[0_0_2px_rgba(168,101,35,0.5)]"
                                    />
                                </div>
                            </div>
                            <hr className="border-[0.5px] border-[#A86523]/20 my-2 mx-6" />
                        </li>
                    </>
                ) : (
                    <>
                        <li className="cursor-pointer group" onClick={closeMenu}>
                            <div className="flex justify-between items-center">
                                <Link
                                    to="/login"
                                    className="py-4 text-lg ml-8 font-medium cursor-pointer text-white hover:text-[#A86523] transition-all duration-300 transform group-hover:translate-x-3"
                                    style={{ fontFamily: "'Lora', serif", textShadow: "0 0 2px rgba(168,101,35,0.3)" }}
                                >
                                    Login
                                </Link>
                                <div>
                                    <img
                                        src={rightArrow}
                                        alt="arrow"
                                        width={32}
                                        height={32}
                                        className="mr-8 transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:scale-125 filter drop-shadow-[0_0_2px_rgba(168,101,35,0.5)]"
                                    />
                                </div>
                            </div>
                            <hr className="border-[0.5px] border-[#A86523]/20 my-2 mx-6" />
                        </li>
                        <li className="cursor-pointer group" onClick={closeMenu}>
                            <div className="flex justify-between items-center">
                                <Link
                                    to="/register"
                                    className="py-4 text-lg ml-8 font-medium cursor-pointer text-white hover:text-[#A86523] transition-all duration-300 transform group-hover:translate-x-3"
                                    style={{ fontFamily: "'Lora', serif", textShadow: "0 0 2px rgba(168,101,35,0.3)" }}
                                >
                                    Register
                                </Link>
                                <div>
                                    <img
                                        src={rightArrow}
                                        alt="arrow"
                                        width={32}
                                        height={32}
                                        className="mr-8 transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:scale-125 filter drop-shadow-[0_0_2px_rgba(168,101,35,0.5)]"
                                    />
                                </div>
                            </div>
                            <hr className="border-[0.5px] border-[#A86523]/20 my-2 mx-6" />
                        </li>
                    </>
                )}
                <li className="cursor-pointer group" onClick={handleFavoritesClick}>
                    <div className="flex justify-between items-center">
                        <span
                            className="py-4 text-lg ml-8 font-medium cursor-pointer text-white hover:text-[#A86523] transition-all duration-300 transform group-hover:translate-x-3"
                            style={{ fontFamily: "'Lora', serif", textShadow: "0 0 2px rgba(168,101,35,0.3)" }}
                        >
                            Favorites {isAuthenticated ? `(${favoritesCount})` : ""}
                        </span>
                        <div>
                            <img
                                src={rightArrow}
                                alt="arrow"
                                width={32}
                                height={32}
                                className="mr-8 transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:scale-125 filter drop-shadow-[0_0_2px_rgba(168,101,35,0.5)]"
                            />
                        </div>
                    </div>
                    <hr className="border-[0.5px] border-[#A86523]/20 my-2 mx-6" />
                </li>
                <li className="cursor-pointer group" onClick={handleCartClick}>
                    <div className="flex justify-between items-center">
                        <span
                            className="py-4 text-lg ml-8 font-medium cursor-pointer text-white hover:text-[#A86523] transition-all duration-300 transform group-hover:translate-x-3"
                            style={{ fontFamily: "'Lora', serif", textShadow: "0 0 2px rgba(168,101,35,0.3)" }}
                        >
                            Cart {isAuthenticated ? `(${cartItemCount})` : ""}
                        </span>
                        <div>
                            <img
                                src={rightArrow}
                                alt="arrow"
                                width={32}
                                height={32}
                                className="mr-8 transition-transform duration-300 ease-in-out group-hover:translate-x-3 group-hover:scale-125 filter drop-shadow-[0_0_2px_rgba(168,101,35,0.5)]"
                            />
                        </div>
                    </div>
                    <hr className="border-[0.5px] border-[#A86523]/20 my-2 mx-6" />
                </li>
            </ul>

            {/* Search Bar Overlay */}
            {searchBar && (
                <div
                    ref={searchBarRef}
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-gradient-to-b from-black/90 to-[#A86523]/20 backdrop-blur-md transition-all duration-300"
                >
                    <div className="w-full max-w-5xl mx-6 transform transition-all duration-300">
                        <form onSubmit={handleSearchSubmit} className="relative">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="border-2 border-[#A86523]/70 w-full py-4 px-6 pr-14 rounded-full text-white bg-black/60 focus:outline-none focus:ring-2 focus:ring-[#A86523] focus:border-[#A86523] placeholder-white/60 shadow-[0_0_15px_rgba(168,101,35,0.4)] transition-all duration-300"
                                autoFocus
                                style={{ fontFamily: "'Lora', serif" }}
                            />
                            <button
                                type="submit"
                                className="absolute right-4 top-1/2 -translate-y-1/2 transform hover:scale-125 transition-all duration-300"
                            >
                                <img
                                    src={searchImg}
                                    alt="search"
                                    width={28}
                                    height={28}
                                    className="opacity-90 hover:opacity-100 transition-opacity duration-300 filter drop-shadow-[0_0_3px_rgba(168,101,35,0.5)]"
                                />
                            </button>
                        </form>
                    </div>
                    <img
                        src={closeIcon}
                        alt="close"
                        width={48}
                        height={48}
                        className="absolute top-6 right-6 cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:rotate-90 filter drop-shadow-[0_0_3px_rgba(168,101,35,0.5)]"
                        onClick={() => setSearchBar(false)}
                    />
                </div>
            )}
        </>
    );
};

export default NavBar;

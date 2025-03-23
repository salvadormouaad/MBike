import { useState } from "react";
import {
    navLists,
    bagImg,
    searchImg,
    profileImg,
    menuIcon,
    rightArrow,
    closeIcon,
} from "../constants";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <div className="w-full fixed top-0 z-[100]">
                <header
                    className={`w-full py-5 sm:px-10 px-5 flex justify-between items-center relative text-white bg-black nav-section transition-all duration-300 ${
                        searchBar ? "" : ""
                    }`}
                >
                    <nav className="w-full flex screen-max-width">
                        <div className="pt-1 text-4xl cursor-pointer max-sm:mt-3">
                            MBike
                        </div>

                        {/* Desktop Menu */}
                        <ul className="flex flex-1 justify-center max-sm:hidden pt-2">
                            {navLists.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="px-5 text-lg cursor-pointer hover:underline text-gray hover:text-white transition-all"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Icons */}
                        <div className="flex justify-center items-center max-sm:flex-1 max-sm:justify-end cursor-pointer">
                            <div
                                className="border-1 border-gray rounded-xl px-3 py-1 hover:border-2 max-sm:hidden"
                                onClick={() => setSearchBar(!searchBar)}
                            >
                                <img
                                    src={searchImg}
                                    alt="search"
                                    width={15}
                                    height={15}
                                    className="float-left pt-1"
                                />
                                <span className="text-sm font-medium float-right font-sans px-2">
                                    Search
                                </span>
                            </div>
                            <img
                                src={profileImg}
                                alt="profile"
                                width={30}
                                height={30}
                                className="mx-3"
                            />
                            <div className="relative">
                                <img
                                    src={bagImg}
                                    alt="bag"
                                    width={20}
                                    height={20}
                                    className="mx-3"
                                />
                                <span className="absolute top-0 right-1 font-serif text-white text-sm bg-red-700 rounded-xl px-1">
                                    0
                                </span>
                            </div>
                            <div className="sm:hidden mt-3" onClick={toggleMenu}>
                                <img
                                    src={isMenuOpen ? closeIcon : menuIcon}
                                    alt="menu"
                                    width={35}
                                    height={35}
                                    className={`border border-gray rounded-full hover:bg-[hsl(216deg_4%_51%/20%)] p-2 mb-3 mx-3 transform-3d transition-transform duration-600 ${
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
                className={`w-full mt-10 sm:hidden bg-black overflow-hidden transition-all duration-900 ease-in-out transform ${
                    isMenuOpen
                        ? "min-h-dvh translate-x-0"
                        : "max-h-0 -translate-x-full"
                } ${searchBar ? "blur-sm" : ""}`}
            >
                <input
                    type="search"
                    placeholder="Search"
                    className="w-full my-2 text-center text-white focus:border-none"
                />
                {navLists.map((item, i) => (
                    <li key={i} className="cursor-pointer" onClick={closeMenu}>
                        <div className="flex justify-between">
                            <a
                                href="#"
                                className="pt-5 text-lg ml-6 font-sans font-light cursor-pointer text-white hover:text-gray-200 transition-all"
                            >
                                {item}
                            </a>
                            <div>
                                <img
                                    src={rightArrow}
                                    alt="arrow"
                                    width={30}
                                    height={30}
                                    className="pt-6 mr-6 hover:translate-x-4 hover:transition-all duration-700 ease-in-out"
                                />
                            </div>
                        </div>
                        <hr className="border-[0.03px] border-[hsl(216deg_4%_51%/20%)] my-2" />
                    </li>
                ))}
            </ul>

            {/* Search Bar Overlay */}
            {searchBar && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 ">
                    <div className="w-full max-w-4xl mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-white w-full py-3 px-4 pr-10 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-gray-100"
                                autoFocus
                            />
                            <button
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                                onClick={() => setSearchBar(false)}
                            >
                                <img
                                    src={searchImg}
                                    alt="search"
                                    width={35}
                                    height={35}
                                    className="float-right pt-1"
                                />
                            </button>
                        </div>
                    </div>
                    <div>
                        <img
                            src={closeIcon}
                            alt="close"
                            width={40}
                            height={40}
                        className='absolute top-6 right-0 cursor-pointer' onClick={()=>setSearchBar(!searchBar)}
                    />

                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;

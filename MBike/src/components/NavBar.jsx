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

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="w-full fixed top-0 z-[100]">
            <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center relative text-white bg-black nav-section">
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
                    <div className="flex max-sm:flex-1 max-sm:justify-end cursor-pointer">
                        <img
                            src={searchImg}
                            alt="search"
                            width={20}
                            height={20}
                            className="mx-3 "
                        />
                        <img
                            src={profileImg}
                            alt="profile"
                            width={30}
                            height={30}
                            className="mx-3"
                        />
                        <img
                            src={bagImg}
                            alt="bag"
                            width={20}
                            height={20}
                            className="mx-3"
                        />
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

            {/* Mobile Menu */}
            <ul
                className={`w-full sm:hidden bg-black overflow-hidden transition-all duration-900 ease-in-out transform ${
                    isMenuOpen
                        ? "min-h-dvh  translate-x-0 "
                        : "max-h-0 -translate-x-full"
                }`}
            >
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
        </div>
    );
};

export default NavBar;

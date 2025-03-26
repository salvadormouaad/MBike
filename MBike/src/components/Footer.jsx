import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Footer = () => {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ".footer-container",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
            .fromTo(
                ".footer-brand",
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
                "-=0.5"
            )
            .fromTo(
                ".nav-link",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out",
                },
                "-=0.4"
            )
            .fromTo(
                ".social-link",
                { opacity: 0, scale: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "back.out(2)",
                },
                "-=0.3"
            );
    }, []);

    return (
        <footer className="footer-container mt-4 bg-black text-white py-8 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="footer-brand mb-6 md:mb-0 text-center md:text-left pl-5">
                    <h2 className="text-3xl font-bold text-white font-[Gopher]">
                        <Link to={"/"}>MBike</Link>
                    </h2>
                    <p className="text-gray-400 mt-2 font-[Gopher] ">
                        Power and Precision
                    </p>
                </div>
                <ul className="flex space-x-6 text-lg text-gray-400">
                    <Link to={"/"}>
                        <li className="nav-link hover:text-white hover:underline transition font-[Gopher]">
                            Home
                        </li>
                    </Link>
                    <Link to={"/gears"}>
                        <li className="nav-link hover:text-white hover:underline transition font-[Gopher]">
                            Gears
                        </li>
                    </Link>
                    <Link to={"/contact-us"}>
                        <li className="nav-link hover:text-white hover:underline transition font-[Gopher]">
                            Contact Us
                        </li>
                    </Link>
                    <Link to={"/about"}>
                        <li className="nav-link hover:text-white hover:underline transition font-[Gopher]">
                            About Us
                        </li>
                    </Link>
                </ul>

                <div className="flex space-x-4 mt-6 md:mt-0">
                    <a
                        href="#"
                        className="social-link text-gray-400 hover:text-blue-500 transition text-2xl"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        className="social-link text-gray-400 hover:text-white transition text-2xl"
                    >
                        <BsTwitterX />
                    </a>
                    <a
                        href="#"
                        className="social-link text-gray-400 hover:text-pink-500 transition text-2xl"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm font-[Gopher]">
                © {new Date().getFullYear()} MBike. All rights reserved.
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-white to-black"></div>
        </footer>
    );
};

export default Footer;

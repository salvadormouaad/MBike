import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { memo, useRef } from "react";

// Memoize the component to prevent unnecessary re-renders
const Footer = memo(() => {
    const footerRef = useRef(null);

    // Scope GSAP animations to specific container and add cleanup
    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: { duration: 0.6, ease: "power3.out" },
            });

            tl.fromTo(
                footerRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0 }
            )
                .fromTo(
                    ".footer-brand",
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, ease: "back.out(1.7)" },
                    "-=0.5"
                )
                .fromTo(
                    ".nav-link",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, stagger: 0.2 },
                    "-=0.4"
                )
                .fromTo(
                    ".social-link",
                    { opacity: 0, scale: 0 },
                    { opacity: 1, scale: 1, stagger: 0.1, ease: "back.out(2)" },
                    "-=0.3"
                );

            // Cleanup
            return () => {
                tl.kill();
            };
        },
        { scope: footerRef } // Scope animations to footer container
    );

    // Navigation links array for better maintainability
    const navLinks = [
        { to: "/", text: "Home" },
        { to: "/gears", text: "Gears" },
        { to: "/contact-us", text: "Contact Us" },
        { to: "/about", text: "About Us" },
    ];

    return (
        <footer
            ref={footerRef}
            className="relative bg-black text-white py-8 px-4"
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="footer-brand mb-6 md:mb-0 text-center md:text-left pl-5">
                    <h2 className="text-3xl font-bold font-[Gopher]">
                        <Link to="/">MBike</Link>
                    </h2>
                    <p className="text-gray-400 mt-2 font-[Gopher]">
                        Power and Precision
                    </p>
                </div>

                <ul className="flex space-x-6 text-lg text-gray-400">
                    {navLinks.map(({ to, text }) => (
                        <li key={to} className="nav-link">
                            <Link
                                to={to}
                                className="hover:text-white hover:underline transition font-[Gopher]"
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex space-x-4 mt-6 md:mt-0">
                    <a
                        href="#"
                        className="social-link text-gray-400 hover:text-blue-500 transition text-2xl"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        className="social-link text-gray-400 hover:text-white transition text-2xl"
                        aria-label="Twitter"
                    >
                        <BsTwitterX />
                    </a>
                    <a
                        href="#"
                        className="social-link text-gray-400 hover:text-pink-500 transition text-2xl"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm font-[Gopher]">
                © {new Date().getFullYear()} MBike. All rights reserved.
            </div>

            {/* Using pseudo-element instead of extra div */}
            <style >{`
                footer::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(to right, #000000, #ffffff, #000000);
                }
            `}</style>
        </footer>
    );
});

Footer.displayName = 'Footer'; // Helpful for debugging
export default Footer;

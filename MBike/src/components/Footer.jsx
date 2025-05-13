import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { memo, useRef } from "react";

// Memoize the component to prevent unnecessary re-renders
const Footer = memo(() => {
    const footerRef = useRef(null);

    // GSAP animations scoped to footer container, inspired by NavBar animations
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
                    { opacity: 0, scale: 0.9 },
                    { opacity: 1, scale: 1, ease: "power2.out" },
                    "-=0.5"
                )
                .fromTo(
                    ".nav-link",
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, stagger: 0.1, ease: "power2.out" },
                    "-=0.4"
                )
                .fromTo(
                    ".social-link",
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, stagger: 0.1, ease: "back.out(1.7)" },
                    "-=0.3"
                );

            // Cleanup
            return () => {
                tl.kill();
            };
        },
        { scope: footerRef }
    );

    // Navigation links array for maintainability
    const navLinks = [
        { to: "/", text: "Home" },
        { to: "/gears", text: "Zelige" },
        { to: "/contact-us", text: "Contact Us" },
        { to: "/about", text: "About Us" },
    ];

    return (
        <footer
            ref={footerRef}
            className="relative bg-gradient-to-r from-black via-[#543312] to-[#A86523]/40 backdrop-blur-xl text-white py-8 px-6 shadow-[0_4px_20px_rgba(168,101,35,0.5)] border-t border-[#A86523]/40"
        >
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="footer-brand mb-8 md:mb-0 text-center md:text-left">
                    <h2 className="text-4xl font-bold tracking-tighter text-[#A86523] hover:text-[#d9a04e] transition-all duration-300 transform hover:scale-105" style={{ fontFamily: "'Cinzel', serif", textShadow: "0 0 5px rgba(168,101,35,0.5)" }}>
                        <Link to="/">Zellige Marocain</Link>
                    </h2>
                    <p className="text-white/80 mt-2 text-sm" style={{ fontFamily: "'Lora', serif" }}>
                        Artistry in Every Tile
                    </p>
                </div>

                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg text-white">
                    {navLinks.map(({ to, text }) => (
                        <li key={to} className="nav-link relative group">
                            <Link
                                to={to}
                                className="hover:text-[#A86523] transition-all duration-300 transform hover:translate-y-[-2px] py-2"
                                style={{ fontFamily: "'Lora', serif" }}
                            >
                                {text}
                                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#A86523] transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%] group-hover:shadow-[0_0_8px_rgba(168,101,35,0.8)]"></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex space-x-6 mt-8 md:mt-0">
                    <a
                        href="#"
                        className="social-link text-white hover:text-[#A86523] transition-all duration-300 transform hover:scale-125 filter drop-shadow-[0_0_3px_rgba(168,101,35,0.5)] text-2xl"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        className="social-link text-white hover:text-[#A86523] transition-all duration-300 transform hover:scale-125 filter drop-shadow-[0_0_3px_rgba(168,101,35,0.5)] text-2xl"
                        aria-label="Twitter"
                    >
                        <BsTwitterX />
                    </a>
                    <a
                        href="#"
                        className="social-link text-white hover:text-[#A86523] transition-all duration-300 transform hover:scale-125 filter drop-shadow-[0_0_3px_rgba(168,101,35,0.5)] text-2xl"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            <div className="mt-8 text-center text-white/80 text-sm" style={{ fontFamily: "'Lora', serif" }}>
                © {new Date().getFullYear()} Zellige Marocain. All rights reserved.
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';
export default Footer;

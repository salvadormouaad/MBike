import React, { useEffect, useRef } from "react";
import { heroImg } from "../constants";
import { gsap } from "gsap";

const HeroSection = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const wrapperRef = useRef(null);
    const buttonRef = useRef(null);
    const flairRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 60, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power4.out" }
        )
            .fromTo(
                subtitleRef.current,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
                "-=1.2"
            )
            .fromTo(
                wrapperRef.current,
                { backgroundColor: "rgba(0, 0, 0, 0)" },
                {
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    duration: 2,
                    ease: "power2.out",
                },
                "-=2"
            );

        const button = buttonRef.current;
        const flair = flairRef.current;

        const xSet = gsap.quickSetter(flair, "xPercent");
        const ySet = gsap.quickSetter(flair, "yPercent");

        const getXY = (e) => {
            const { left, top, width, height } = button.getBoundingClientRect();
            const xTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, width, 0, 100),
                gsap.utils.clamp(0, 100)
            );
            const yTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, height, 0, 100),
                gsap.utils.clamp(0, 100)
            );
            return {
                x: xTransformer(e.clientX - left),
                y: yTransformer(e.clientY - top),
            };
        };

        const handleMouseEnter = (e) => {
            const { x, y } = getXY(e);
            xSet(x);
            ySet(y);
            gsap.to(flair, { scale: 1, duration: 0.4, ease: "power2.out" });
        };

        const handleMouseLeave = (e) => {
            const { x, y } = getXY(e);
            gsap.killTweensOf(flair);
            gsap.to(flair, {
                xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
                yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
                scale: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mouseenter", handleMouseEnter);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative flex items-center justify-center h-screen w-screen bg-cover bg-no-repeat bg-center overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.7)]"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-0"></div>

            <div className="relative z-10 text-center px-6 md:px-12 pb-10">
                <h1
                    ref={titleRef}
                    className="mb-6 text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight font-gopher text-white sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-gray-700 sm:via-white sm:to-gray-800 drop-shadow-lg"
                >
                    Mountain Dominator
                </h1>
                <p
                    ref={subtitleRef}
                    className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 max-w-2xl mx-auto drop-shadow-md font-gopher"
                >
                    Built to Conquer Every Trail with Unmatched Power and
                    Precision
                </p>

                <a
                    ref={buttonRef}
                    href="#"
                    className="relative inline-flex items-center bg-transparent border-2 border-white rounded-full cursor-pointer text-[1.2rem] font-semibold gap-1 justify-center tracking-tight overflow-hidden px-6 py-3 mt-8 text-white hover:text-black transition-colors duration-150 ease-in-out after:content-[''] after:absolute after:inset-0 after:border-2 after:border-white after:rounded-full after:pointer-events-none"
                >
                    <span
                        ref={flairRef}
                        className="absolute inset-0 pointer-events-none scale-0 origin-top-left before:content-[''] before:absolute before:w-[170%] before:aspect-square before:bg-white before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2"
                    ></span>
                    <span className="relative text-center transition-colors duration-50 ease-in-out font-gopher">
                        Discover Now
                    </span>
                </a>
            </div>
        </div>
    );
};

export default HeroSection;

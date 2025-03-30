import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { brands } from "../constants";


gsap.registerPlugin(useGSAP);
const TrustedBrands = () => {
    const marqueeRef = useRef(null);
    const animationRef = useRef(null);

    useGSAP(() => {
        const marquee = marqueeRef.current;
        const totalWidth = marquee.scrollWidth / 2;

        // Creating a GSAP animation
        animationRef.current = gsap.to(marquee, {
            x: -totalWidth,
            duration: 20,
            ease: "power1.out",
            repeat: -1,
            yoyo: true,
            /*  modifiers: {
                x: (x) => `${parseFloat(x) % totalWidth}px`,
            }, */
        });

        // stop the animation when hovering
        const handleMouseEnter = () => animationRef.current.pause();
        const handleMouseLeave = () => animationRef.current.resume();

        marquee.addEventListener("mouseenter", handleMouseEnter);
        marquee.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            marquee.removeEventListener("mouseenter", handleMouseEnter);
            marquee.removeEventListener("mouseleave", handleMouseLeave);
            animationRef.current.kill();
        };
    }, []);

    return (
        <section className="py-12 bg-white h-[400px] ">
            <div className="text-center mb-12">
                <h2
                    className="text-3xl md:text-4xl font-bold text-gray-800"
                    id="brands-title"
                >
                    Trusted By World Leading Brands
                </h2>
            </div>

            <div className="overflow-hidden">
                <div
                    ref={marqueeRef}
                    className="w-full h-full flex whitespace-nowrap"
                >
                    {brands.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            width={150}
                            height={150}
                            alt={`Brand ${index + 1}`}
                            className="mx-10 grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBrands;

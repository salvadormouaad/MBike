import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
//import { brands } from "../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carde1 from "./carde1";
import Carde2 from "./carde2";
import Carde3 from "./carde3";
import Carde4 from "./carde4";
import Carde5 from "./carde5";
import Carde6 from "./carde6";
import Carde7 from "./carde7";
import Carde10 from "./carde10";
import Carde9 from "./carde9";
import Carde8 from "./carde8";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Products = () => {
    const marqueeRef = useRef(null);
    const animationRef = useRef(null);

    useGSAP(() => {
        const marquee = marqueeRef.current;
        const totalWidth = marquee.scrollWidth / 2;

        // Creating a GSAP animation
        animationRef.current = gsap.to(marquee, {
            x: -totalWidth,
            duration: 35,
            ease: "none",
            repeat: -1,
            yoyo: true,
            modifiers: {
                x: (x) => `${parseFloat(x) % totalWidth}px`,
            },
        });

        // stop the animation when hovering
        const handleMouseEnter = () => animationRef.current.pause();
        const handleMouseLeave = () => animationRef.current.resume();

        marquee.addEventListener("mouseenter", handleMouseEnter);
        marquee.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup the animation
        return () => {
            marquee.removeEventListener("mouseenter", handleMouseEnter);
            marquee.removeEventListener("mouseleave", handleMouseLeave);
            animationRef.current.kill();
        };
    }, []);

    return (
        <section className="py-12 bg-white ">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Many Types Of Gears For Your Bike
                </h2>
            </div>

            <div className="overflow-hidden">
                <div
                    ref={marqueeRef}
                    className="w-full h-full flex whitespace-nowrap"
                >
                    <div
                        key={`duplicate-${0}`}
                        width={150}
                        height={150}
                        alt={`Brand ${0 + 1}`}
                        className="mx-10 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Carde1 />
                    </div>

                    <div
                        key={`duplicate-${1}`}
                        width={150}
                        height={150}
                        alt={`Brand ${1 + 1}`}
                        className="mx-10 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Carde2 />
                    </div>

                    <div
                        key={`duplicate-${2}`}
                        width={150}
                        height={150}
                        alt={`Brand ${2 + 1}`}
                        className="mx-10 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Carde3 />
                    </div>

                    <div
                        key={`duplicate-${3}`}
                        width={150}
                        height={150}
                        alt={`Brand ${3 + 1}`}
                        className="mx-10 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Carde4 />
                    </div>

                    <div
                        key={`duplicate-${4}`}
                        width={150}
                        height={150}
                        alt={`Brand ${4 + 1}`}
                        className="mx-10 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Carde5 />
                    </div>

                    <div
                        key={`duplicate-${5}`}
                        width={150}
                        height={150}
                        alt={`Brand ${5 + 1}`}
                        className="mx-10 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Carde6 />
                    </div>

                    <div
                        key={`duplicate-${6}`}
                        width={150}
                        height={150}
                        alt={`Brand ${6 + 1}`}
                        className="mx-10 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Carde7 />
                    </div>

                    <div
                        key={`duplicate-${7}`}
                        width={150}
                        height={150}
                        alt={`Brand ${7 + 1}`}
                        className="mx-10 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Carde8 />
                    </div>

                    <div
                        key={`duplicate-${8}`}
                        width={150}
                        height={150}
                        alt={`Brand ${8 + 1}`}
                        className="mx-10 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Carde9 />
                    </div>

                    <div
                        key={`duplicate-${9}`}
                        width={150}
                        height={150}
                        alt={`Brand ${9 + 1}`}
                        className="mx-10 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        <Carde10 />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;

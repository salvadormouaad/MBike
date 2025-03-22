import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Carde1 from "./cards/carde1";
import Carde2 from "./cards/carde2";
import Carde3 from "./cards/carde3";
import Carde4 from "./cards/carde4";
import Carde5 from "./cards/carde5";
import Carde6 from "./cards/carde6";
import Carde7 from "./cards/carde7";
import Carde10 from "./cards/carde10";
import Carde9 from "./cards/carde9";
import Carde8 from "./cards/carde8";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TrustedBrands = () => {
    const marqueeRef = useRef(null);
    const animationRef = useRef(null);

    useGSAP(() => {
        gsap.from("#brands-title", {
            opacity: 0,
            y: 30,
            delay: 0.4,
            scrollTrigger: {
                trigger: "#brands-title",
                start: "top 80%",
                toggleActions: "play none none reset",
            },
        });
    }, []);

    useGSAP(() => {
        const marquee = marqueeRef.current;
        const totalWidth = marquee.scrollWidth / 2;

        // Creating a GSAP animation
        animationRef.current = gsap.to(marquee, {
            x: -totalWidth,
            duration: 35,
            ease: "none",
            repeat: -1,
            modifiers: {
                x: (x) => `${parseFloat(x) % totalWidth}px`,
            },
        });

        // Stop the animation when hovering
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
        <section className=" bg-white " > {/* Removed `py-12` and replaced with `pb-12` */}
            <div className="text-center mb-1">
                <h2
                    className="text-3xl md:text-4xl font-bold text-gray-800"

                >
                    Many Types Of Gears For Your Bike
                </h2>
            </div>

            <div className="overflow-hidden">
                <div
                    ref={marqueeRef}
                    className="w-full h-full flex whitespace-nowrap"
                >
                    <div key={`duplicate-${0}`} className="mx-10 grayscale hover:grayscale-0 transition-all duration-300">
                        <Carde1 />
                    </div>
                    <div key={`duplicate-${1}`} className="mx-10 grayscale hover:grayscale-0 transition-all duration-300">
                        <Carde2 />
                    </div>
                    <div key={`duplicate-${2}`} className="mx-10 grayscale hover:grayscale-0 transition-all duration-300">
                        <Carde3 />
                    </div>
                    <div key={`duplicate-${3}`} className="mx-10 grayscale hover:grayscale-0 transition-all duration-300">
                        <Carde4 />
                    </div>
                    <div key={`duplicate-${4}`} className="mx-10 grayscale hover:grayscale-0 transition-all duration-300">
                        <Carde5 />
                    </div>
                    <div key={`duplicate-${5}`} className="mx-10 grayscale hover:grayscale-0 transition-all duration-300">
                        <Carde6 />
                    </div>
                    <div key={`duplicate-${6}`} className="mx-10 grayscale hover:grayscale-0 transition-all duration-300">
                        <Carde7 />
                    </div>
                    <div key={`duplicate-${7}`} className="mx-10 grayscale hover:grayscale-0 transition-all duration-300">
                        <Carde8 />
                    </div>
                    <div key={`duplicate-${8}`} className="mx-10 grayscale hover:grayscale-0 transition-all duration-300">
                        <Carde9 />
                    </div>
                    <div key={`duplicate-${9}`} className="mx-10 grayscale hover:grayscale-0 transition-all duration-300">
                        <Carde10 />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBrands;

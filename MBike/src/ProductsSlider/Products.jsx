import React, { useRef, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Products() {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const requestRef = useRef();

    // Get all bike data from Redux
    const bikeData = useSelector((state) => state.bikes);

    // Extract and flatten all bike items from your Redux structure
    const allBikes = useMemo(() => {
        const categories = [
            bikeData.MountainBike?.FullSuspension?.AMS || [],
            bikeData.Road?.RoadRace?.Agree || [],
            bikeData.Trekking?.City?.Hyde || [],
        ];

        return categories.flatMap((items) => items).filter(Boolean);
    }, [bikeData]);

    // Shuffle and duplicate for infinite effect
    const carouselBikes = useMemo(() => {
        const shuffleArray = (array) => {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        };

        const shuffled = shuffleArray(allBikes);
        return [...shuffled, ...shuffled];
    }, [allBikes]);

    // Animation variables
    const animationProps = useRef({
        speed: 0.6,
        position: 0,
        width: 0,
        slideWidth: 0,
        halfWidth: 0,
    });

    // Main animation loop using requestAnimationFrame
    const animate = () => {
        const props = animationProps.current;
        props.position -= props.speed;

        if (Math.abs(props.position) >= props.halfWidth) {
            props.position = 0;
        }

        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${props.position}px)`;
        }

        requestRef.current = requestAnimationFrame(animate);
    };

    useGSAP(() => {
        if (!trackRef.current || !containerRef.current) return;

        const slides = gsap.utils.toArray(".carousel-slide");
        if (slides.length === 0) return;

        const slideWidth = slides[0].offsetWidth;
        const trackWidth = slideWidth * slides.length;
        const halfWidth = trackWidth / 2;

        animationProps.current = {
            ...animationProps.current,
            slideWidth,
            width: trackWidth,
            halfWidth,
            position: 0,
        };

        gsap.set(trackRef.current, { width: trackWidth });
        requestRef.current = requestAnimationFrame(animate);

        const container = containerRef.current;
        const handleMouseEnter = () => {
            cancelAnimationFrame(requestRef.current);
        };
        const handleMouseLeave = () => {
            requestRef.current = requestAnimationFrame(animate);
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(requestRef.current);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [carouselBikes]);

    useEffect(() => {
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                            Discover Our Premium Bikes
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our range of high-performance bicycles
                    </p>
                </div>

                <div ref={containerRef} className="relative overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex py-8 will-change-transform"
                    >
                        {carouselBikes.map((bike, index) => (
                            <div
                                key={`${bike.Id}-${index}`}
                                className="carousel-slide flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-2xl shadow-md overflow-hidden group mx-3 transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                            >
                                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                                    <img
                                        src={bike.Images}
                                        alt={bike.Name}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-1">
                                            {bike.Name}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-300">
                                            {bike.Poids} | {bike.Price}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 sm:p-6 bg-white border-t border-gray-100">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs sm:text-sm font-medium text-gray-600">
                                            Sizes: {bike.Taille?.[0]} -{" "}
                                            {
                                                bike.Taille?.[
                                                    bike.Taille.length - 1
                                                ]
                                            }
                                        </span>
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                            In Stock
                                        </span>
                                    </div>

                                    <button className="w-full flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors duration-300 cursor-pointer">
                                        <span className="mr-2 text-sm">
                                            View Details
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

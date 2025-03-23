import React from "react";
import { useSelector } from "react-redux";

function Section_Qasques() {
    const reduxQasques = useSelector((state) => state.gear.qasques.road.heron);

    return reduxQasques.map((val, index) => {
        return (
            index === 0 && (
                <section
                    key={index}
                    className="bg-[#181a1e] min-h-[auto] py-8 lg:py-10 overflow-hidden"
                >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* Text Content */}
                            <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 lg:space-y-8">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-2xl mx-auto lg:mx-0 text-center lg:text-left animate-fade-in-up">
                                    CUBE QASQUES{" "}
                                    <br className="hidden sm:inline" />
                                    {val.title}
                                </h3>
                                <p className="text-gray-100 text-base sm:text-lg lg:text-xl font-light max-w-2xl mx-auto lg:mx-0 text-center lg:text-left leading-relaxed animate-fade-in-up animation-delay-200">
                                    {val.description}
                                </p>
                                <div className="flex justify-center lg:justify-start animate-fade-in-up animation-delay-400">
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-5 py-3 text-base font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 transition-all duration-300 ease-in-out group"
                                    >
                                        DISCOVER
                                        <svg
                                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="lg:col-span-5 order-1 lg:order-2">
                                <div className="relative w-full max-w-lg mx-auto lg:mx-0 animate-fade-in">
                                    <picture>
                                        <source
                                            srcSet={`${val.images.ROAD_HERON_BLACK_1}?w=800 800w, ${val.images.ROAD_HERON_BLACK_1}?w=600 600w`}
                                            media="(min-width: 768px)"
                                        />
                                        <img
                                            src={`${val.images.ROAD_HERON_BLACK_1}?w=400`}
                                            alt="CUBE Qasques"
                                            className="w-full h-auto object-contain transition-opacity duration-500"
                                            loading="lazy"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        );
    });
}

export default Section_Qasques;

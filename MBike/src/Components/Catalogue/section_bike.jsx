import React from "react";
// import { Hyde } from "../../assets/BikesPic/Bikes";
import { section_img } from "../../assets/BikesPic/Bikes";
function Section() {
    console.log(section_img)
    return (
        <section className="bg-black">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h3 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                        CAAD13 <br />
                        Make Your own luck
                    </h3>
                    <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl ">
                        For nearly four decades, our CAAD bikes have set the
                        standard for high-performance aluminum frames, and the
                        CAAD13 is the best one yet. It's the most advanced, best
                        performing alloy race bike ever made. Fitting, since
                        aluminum is the 13th element.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                    >
                        DISCOVER
                        <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
                <div className="hidden w-full h-full lg:mt-0 lg:col-span-5 lg:flex">

                <img src={section_img.img_section} alt="mockup" />
                </div>

            </div>
        </section>
    );
}

export default Section;

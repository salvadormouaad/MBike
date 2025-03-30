import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
    };
    const buttonRef = useRef(null);
    useEffect(() => {
        const button = buttonRef.current;
        const onHover = () => {
            gsap.to(button, {
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const onLeave = () => {
            gsap.to(button, {
                scale: 1,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                duration: 0.3,
                ease: "power2.out",
            });
        };

        button.addEventListener("mouseenter", onHover);
        button.addEventListener("mouseleave", onLeave);

        return () => {
            button.removeEventListener("mouseenter", onHover);
            button.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return (
        <div className="relative bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                        Get in Touch
                    </h2>
                    <p className="text-lg md:text-xl text-gray-100 mt-4 font-medium drop-shadow-md">
                        Contact Mbike Complete for all your cycling needs
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/10 backdrop-blur-lg rounded-lg p-6 md:p-10 shadow-xl border border-white/20">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Send Us a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-100"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-100"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-100"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-100"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-100"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 text-black"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                ref={buttonRef}
                                className="relative inline-flex items-center bg-white/10 border border-white/30 rounded-full px-6 py-2 text-white font-medium transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            Contact Information
                        </h3>
                        <div className="text-gray-200 space-y-4">
                            <p>
                                <strong className="text-white">
                                    Mbike Complete
                                </strong>
                                <br />
                                123 Rue
                                <br />
                                Fès, 30000
                                <br />
                                Morocco
                            </p>
                            <p>
                                <strong>Phone:</strong> +212 612345678
                                <br />
                                <strong>Email:</strong> Mbike-Maroc@gmail.com
                            </p>
                            <div className="mt-6">
                                <iframe
                                    title="Mbike Complete Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105735.3046149996!2d-5.036347949999999!3d34.01812465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b484ddf9e1f%3A0x8d2b6a1a3a5d5a1f!2sFes%2C%20Morocco!5e0!3m2!1sen!2sma!4v1699999999999!5m2!1sen!2sma"
                                    width="100%"
                                    height="200"
                                    className="border-0 rounded-lg shadow-lg"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

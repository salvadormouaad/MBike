import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { heroImg } from "../constants";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Test = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const wrapperRef = useRef(null);
    const buttonRef = useRef(null);
    const flairRef = useRef(null);
    const bgRef = useRef(null);
    const overlayRef = useRef(null);
    const particleRef = useRef(null);
    const videoOverlayRef = useRef(null);
    const lineDecorRef = useRef(null);
    const scrollIndicatorRef = useRef(null);
    const navRef = useRef(null);

    const lenis = useLenis();

    // Preload background image
    useEffect(() => {
        const img = new Image();
        img.src = heroImg;
        img.onload = () => setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;

        // Main timeline
        const mainTl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Create a blur effect for the background
        if (bgRef.current) {
            gsap.set(bgRef.current, { filter: "blur(10px) brightness(0.7)" });

            mainTl.fromTo(
                bgRef.current,
                {
                    opacity: 0,
                    scale: 1.1,
                    filter: "blur(10px) brightness(0.5)",
                },
                {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px) brightness(0.9)",
                    duration: 3,
                    ease: "power2.inOut",
                }
            );
        }

        // Overlay gradient reveal
        if (overlayRef.current) {
            mainTl.fromTo(
                overlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 2.5, ease: "power2.inOut" },
                "-=2.8"
            );
        }

        // Video noise overlay effect
        if (videoOverlayRef.current) {
            mainTl.fromTo(
                videoOverlayRef.current,
                { opacity: 0 },
                { opacity: 0.06, duration: 3 },
                "-=2.5"
            );
        }

        // Navigation appearance
        if (navRef.current) {
            mainTl.fromTo(
                navRef.current,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
                "-=2"
            );
        }

        // Title animation - manual character animation approach
        if (titleRef.current) {
            const titleChars = titleRef.current.querySelectorAll(".letter");

            mainTl.fromTo(
                titleChars,
                {
                    opacity: 0,
                    y: 100,
                    rotateX: -80,
                    filter: "blur(8px)",
                },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    filter: "blur(0px)",
                    duration: 2,
                    stagger: 0.06,
                    ease: "power4.out",
                },
                "-=2.2"
            );
        }

        // Subtitle reveal
        if (subtitleRef.current) {
            mainTl.fromTo(
                subtitleRef.current,
                {
                    opacity: 0,
                    y: 50,
                    filter: "blur(5px)",
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.8,
                },
                "-=1.6"
            );
        }

        // Line decoration
        if (lineDecorRef.current) {
            mainTl.fromTo(
                lineDecorRef.current,
                { width: 0 },
                { width: "120px", duration: 1.8, ease: "power2.inOut" },
                "-=1.6"
            );
        }

        // Button appearance with better flair
        if (buttonRef.current) {
            mainTl.fromTo(
                buttonRef.current,
                {
                    opacity: 0,
                    scale: 0.9,
                    y: 30,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.4,
                    ease: "back.out(1.7)",
                },
                "-=1.4"
            );
        }

        // Scroll indicator
        if (scrollIndicatorRef.current) {
            mainTl.fromTo(
                scrollIndicatorRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                },
                "-=0.8"
            );

            // Add perpetual animation for scroll indicator
            gsap.to(scrollIndicatorRef.current.querySelector(".scroll-dot"), {
                y: 10,
                repeat: -1,
                duration: 1.5,
                yoyo: true,
                ease: "power2.inOut",
            });
        }

        // Enhanced particle effect
        if (particleRef.current) {
            const particles = particleRef.current.children;

            for (let i = 0; i < particles.length; i++) {
                const particle = particles[i];
                const delay = Math.random() * 5;
                const duration = Math.random() * 8 + 4;

                gsap.fromTo(
                    particle,
                    {
                        opacity: 0,
                        scale: 0,
                    },
                    {
                        opacity: Math.random() * 0.4 + 0.1,
                        scale: Math.random() + 0.5,
                        duration: duration,
                        delay: delay,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    }
                );

                // Random floating movement
                gsap.to(particle, {
                    x: `random(-30, 30)`,
                    y: `random(-30, 30)`,
                    duration: duration * 1.5,
                    delay: delay,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            }
        }

        // Enhanced button hover effect
        const button = buttonRef.current;
        const flair = flairRef.current;

        if (button && flair) {
            const xSet = gsap.quickSetter(flair, "xPercent");
            const ySet = gsap.quickSetter(flair, "yPercent");

            const getXY = (e) => {
                const { left, top, width, height } =
                    button.getBoundingClientRect();
                const xTransformer = gsap.utils.pipe(
                    gsap.utils.mapRange(0, width, -20, 120),
                    gsap.utils.clamp(-20, 120)
                );
                const yTransformer = gsap.utils.pipe(
                    gsap.utils.mapRange(0, height, -20, 120),
                    gsap.utils.clamp(-20, 120)
                );
                return {
                    x: xTransformer(e.clientX - left),
                    y: yTransformer(e.clientY - top),
                };
            };

            const handleMouseMove = (e) => {
                const { x, y } = getXY(e);
                xSet(x);
                ySet(y);
            };

            const handleMouseEnter = (e) => {
                const { x, y } = getXY(e);
                xSet(x);
                ySet(y);
                gsap.to(flair, {
                    scale: 1.1,
                    duration: 0.6,
                    ease: "power3.out",
                });
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.5,
                    ease: "power3.out",
                });
                gsap.to(button.querySelector("span"), {
                    textShadow: "0 0 10px rgba(255,255,255,0.8)",
                    duration: 0.4,
                });
            };

            const handleMouseLeave = () => {
                gsap.to(flair, {
                    scale: 0,
                    duration: 0.5,
                    ease: "power3.in",
                });
                gsap.to(button, {
                    scale: 1,
                    duration: 0.5,
                    ease: "power3.out",
                });
                gsap.to(button.querySelector("span"), {
                    textShadow: "none",
                    duration: 0.4,
                });
            };

            button.addEventListener("mouseenter", handleMouseEnter);
            button.addEventListener("mousemove", handleMouseMove);
            button.addEventListener("mouseleave", handleMouseLeave);

            // Cleanup
            return () => {
                button.removeEventListener("mouseenter", handleMouseEnter);
                button.removeEventListener("mousemove", handleMouseMove);
                button.removeEventListener("mouseleave", handleMouseLeave);
            };
        }

        // Enhanced parallax and scroll effects
        if (bgRef.current && wrapperRef.current && lenis) {
            // Background parallax
            gsap.to(bgRef.current, {
                yPercent: 25,
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.8,
                },
            });

            // Fade out title and content on scroll
            gsap.to(
                [titleRef.current, subtitleRef.current, buttonRef.current],
                {
                    y: -100,
                    opacity: 0,
                    stagger: 0.05,
                    ease: "power2.in",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "5% top",
                        end: "25% top",
                        scrub: 1.2,
                    },
                }
            );

            // Hide scroll indicator when scrolling
            if (scrollIndicatorRef.current) {
                gsap.to(scrollIndicatorRef.current, {
                    opacity: 0,
                    ease: "power2.in",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "5% top",
                        end: "10% top",
                        scrub: 1,
                    },
                });
            }
        }
    }, [lenis, isLoaded]);

    return (
        <ReactLenis
            root
            options={{
                duration: 1.8,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smooth: true,
                lerp: 0.06,
                smoothTouch: true,
            }}
        >
            {/* Navigation */}
            <nav
                ref={navRef}
                className="fixed top-0 left-0 w-full z-50 px-6 sm:px-10 lg:px-16 py-8 flex justify-between items-center"
            >
                <div className="font-bold text-xl tracking-tight text-white drop-shadow-lg">
                    MOUNTAIN<span className="text-white/80">X</span>
                </div>
                <div className="flex items-center gap-8">
                    <a
                        href="#"
                        className="text-white/90 hover:text-white text-sm sm:text-base transition-all duration-300"
                    >
                        Models
                    </a>
                    <a
                        href="#"
                        className="text-white/90 hover:text-white text-sm sm:text-base transition-all duration-300"
                    >
                        Technology
                    </a>
                    <a
                        href="#"
                        className="text-white/90 hover:text-white text-sm sm:text-base transition-all duration-300"
                    >
                        About
                    </a>
                    <button className="bg-white/10 backdrop-blur-md text-white text-sm sm:text-base px-5 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                        Reserve
                    </button>
                </div>
            </nav>

            <div
                ref={wrapperRef}
                className="relative flex items-center justify-center min-h-screen w-screen overflow-hidden will-change-opacity"
            >
                {/* Background */}
                <div
                    ref={bgRef}
                    className="absolute inset-0 bg-cover bg-no-repeat bg-center z-[-2] will-change-transform"
                    style={{
                        backgroundImage: `url(${heroImg})`,
                    }}
                ></div>

                {/* Overlay */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-[-1]"
                ></div>

                {/* Video noise overlay for texture */}
                <div
                    ref={videoOverlayRef}
                    className="absolute inset-0 z-0 opacity-0 mix-blend-soft-light pointer-events-none"
                    style={{
                        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')`,
                        backgroundSize: "cover",
                    }}
                ></div>

                {/* Enhanced particles */}
                <div
                    ref={particleRef}
                    className="absolute inset-0 pointer-events-none z-0"
                >
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span
                            key={i}
                            className="absolute bg-white rounded-full opacity-0"
                            style={{
                                width: `${Math.random() * 12 + 2}px`,
                                height: `${Math.random() * 12 + 2}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                boxShadow: "0 0 10px 2px rgba(255,255,255,0.3)",
                                filter: "blur(1px)",
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl">
                    {/* Decorative line above title */}
                    <div className="flex justify-center mb-8">
                        <div
                            ref={lineDecorRef}
                            className="h-px bg-gradient-to-r from-transparent via-white to-transparent"
                        ></div>
                    </div>

                    <h1
                        ref={titleRef}
                        className="mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-none tracking-[-0.05em]"
                    >
                        {/* Manual character splitting for animation */}
                        <span className="inline-block overflow-hidden">
                            {"MOUNTAIN".split("").map((char, i) => (
                                <span
                                    key={i}
                                    className="letter inline-block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-300 drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </span>
                    </h1>

                    <p
                        ref={subtitleRef}
                        className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-100 max-w-3xl mx-auto mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                    >
                        Master Every Trail with Unrivaled Power and Precision
                    </p>

                    <div className="mt-16">
                        <a
                            ref={buttonRef}
                            href="#"
                            className="relative inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/30 rounded-full cursor-pointer text-xl md:text-2xl font-medium gap-2 justify-center tracking-wide overflow-hidden px-10 py-5 text-white transition-all duration-300 ease-in-out will-change-transform hover:border-white/60"
                        >
                            <span
                                ref={flairRef}
                                className="absolute inset-0 pointer-events-none scale-0 origin-center before:content-[''] before:absolute before:w-[250%] before:aspect-square before:bg-gradient-to-r before:from-white/10 before:via-white/80 before:to-transparent before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-80"
                            ></span>
                            <span className="relative z-10 transition-colors duration-200 ease-in-out drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
                                Explore Now
                            </span>
                        </a>
                    </div>

                    {/* Scroll indicator */}
                    <div
                        ref={scrollIndicatorRef}
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                    >
                        <p className="text-white/70 text-sm tracking-widest mb-3">
                            SCROLL
                        </p>
                        <div className="w-px h-10 bg-white/30 relative">
                            <div className="scroll-dot absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </ReactLenis>
    );
};

export default Test;

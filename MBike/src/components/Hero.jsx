import React, { useEffect, useRef } from "react";
import { heroImg } from "../constants";
import { gsap } from "gsap";

const HeroSection = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const wrapperRef = useRef(null);
    const buttonRef = useRef(null);
    const flairRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        // GSAP Animation Timeline
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 80, scale: 0.92 },
            { opacity: 1, y: 0, scale: 1, duration: 2.2 }
        )
        .fromTo(
            subtitleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.8 },
            "-=1.5"
        )
        .fromTo(
            wrapperRef.current,
            { backgroundColor: "rgba(0, 0, 0, 0)" },
            { backgroundColor: "rgba(0, 0, 0, 0.5)", duration: 2.5 },
            "-=2"
        );

        // Button Hover Animation
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
            gsap.to(flair, { scale: 1, duration: 0.5, ease: "power3.out" });
        };

        const handleMouseLeave = (e) => {
            const { x, y } = getXY(e);
            gsap.killTweensOf(flair);
            gsap.to(flair, {
                xPercent: x > 90 ? x + 25 : x < 10 ? x - 25 : x,
                yPercent: y > 90 ? y + 25 : y < 10 ? y - 25 : y,
                scale: 0,
                duration: 0.4,
                ease: "power3.out",
            });
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);

        // Particle Effect
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = `rgba(233, 163, 25, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animateParticles);
        };

        animateParticles();

        // Resize Handler
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            button.removeEventListener("mouseenter", handleMouseEnter);
            button.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative flex items-center justify-center h-screen w-screen bg-cover bg-no-repeat bg-center overflow-hidden shadow-[inset_0_0_120px_rgba(0,0,0,0.8)]"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-5"></div>

            <div className="relative z-10 text-center px-6 sm:px-12 md:px-16 lg:px-20 pb-12 max-w-5xl mx-auto">
                <h1
                    ref={titleRef}
                    className="mb-6 text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter text-[#E9A319] drop-shadow-[0_4px_12px_rgba(233,163,25,0.4)]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                >
                    Zellige Marocain
                </h1>
                <p
                    ref={subtitleRef}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-100 max-w-3xl mx-auto drop-shadow-lg"
                    style={{ fontFamily: "'Lora', serif" }}
                >
                    Crafted to elevate every space with timeless elegance and masterful artistry.
                    <br className="hidden sm:block" />
                    Zellige Marocain – Where heritage meets sophistication.
                </p>

                <a
                    ref={buttonRef}
                    href="#products"
                    className="relative inline-flex items-center bg-transparent border-2 border-[#E9A319] rounded-full cursor-pointer text-lg sm:text-xl font-semibold gap-2 justify-center tracking-tight overflow-hidden px-8 py-4 mt-10 text-[#E9A319] hover:text-black transition-colors duration-200 ease-in-out group"
                >
                    <span
                        ref={flairRef}
                        className="absolute inset-0 pointer-events-none scale-0 origin-top-left before:content-[''] before:absolute before:w-[180%] before:aspect-square before:bg-[#E9A319] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2"
                    />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                        Discover Now
                    </span>
                    <svg
                        className="w-5 h-5 relative z-10 transition-colors duration-300 group-hover:text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default HeroSection;

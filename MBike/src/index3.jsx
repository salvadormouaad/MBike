import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Buttonn = () => {
    const buttonRef = useRef(null);
    const flairRef = useRef(null);

    useEffect(() => {
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
        return { x: xTransformer(e.clientX - left), y: yTransformer(e.clientY - top) };
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
          ease: "power2.out"
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
      <a
        ref={buttonRef}
        href="#"
        className="relative inline-flex items-center bg-transparent border-2 border-black rounded-full cursor-pointer text-[1.2rem] font-semibold gap-1 justify-center tracking-tight overflow-hidden px-6 py-3 text-black hover:text-white transition-colors duration-150 ease-in-out after:content-[''] after:absolute after:inset-0 after:border-2 after:border-white after:rounded-full after:pointer-events-none"
      >
        <span
          ref={flairRef}
          className="absolute inset-0 pointer-events-none scale-0 origin-top-left before:content-[''] before:absolute before:w-[170%] before:aspect-square before:bg-white before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2"
        ></span>
        <span className="relative text-center transition-colors duration-50 ease-in-out">
          Discover Now
        </span>
      </a>
    );
  };
  
  export default Buttonn;
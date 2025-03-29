import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Lenis from 'lenis';
import Agree1 from '../assets/BikesPic/Agree1.jpg';
import HOMME_MAILLOTS_BLACK_1 from '../Features/SliceGears/IMAGES_CASQUES/HOMME_MAILLOTS_BLACK_1.png';
import MTB_FRISK_BLACK_1 from '../Features/SliceGears/IMAGES_CASQUES/MTB_FRISK_BLACK_1.png';
import ALL_TERRAIN_OX_GREY_1 from '../Features/SliceGears/IMAGES_CASQUES/ALL_TERRAIN_OX_GREY_1.png';

const OurBestProducts = () => {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // GSAP Animations
  useEffect(() => {
    // Animate images
    gsap.fromTo(
      '.animate-image',
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power3.out' }
    );

    // Animate text content
    gsap.fromTo(
      '.animate-text',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.3 }
    );

    // Animate button
    gsap.fromTo(
      '.animate-button',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)', delay: 0.6 }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="py-16 text-center bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Our Best Products
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover our premium collection of bikes and gear
        </p>
      </div>

      {/* First Product - Agree Bike */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-image">
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={Agree1}
                  alt="Agree Pro"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl font-semibold">View Full Details</h3>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10 animate-text">
            <span className="text-indigo-400 font-semibold">Premium Road Bike</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              Agree Pro
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Experience the perfect blend of speed and comfort with our Agree Pro model. 
              Designed for both professional riders and enthusiasts who demand excellence.
            </p>
            <ul className="mt-6 space-y-2 text-gray-200">
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                Advanced carbon frame
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                Professional components
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                Aerodynamic design
              </li>
            </ul>
            <div className="mt-8 flex items-center space-x-4">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold animate-button transition-colors">
                View Details
              </button>
              <span className="text-2xl font-bold text-indigo-400">$2,999</span>
            </div>
          </div>
        </div>
      </section>

      {/* Second Product - Cycling Suit */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-10 md:mt-0 md:pr-10 animate-text">
            <span className="text-indigo-400 font-semibold">Professional Gear</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              Pro Cycling Suit
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Premium cycling suit designed for maximum performance and comfort. 
              Perfect for professional riders and serious enthusiasts.
            </p>
            <ul className="mt-6 space-y-2 text-gray-200">
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                Aerodynamic design
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                Moisture-wicking fabric
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                UV protection
              </li>
            </ul>
            <div className="mt-8 flex items-center space-x-4">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold animate-button transition-colors">
                View Details
              </button>
              <span className="text-2xl font-bold text-indigo-400">$299</span>
            </div>
          </div>
          <div className="md:w-1/2 animate-image">
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={HOMME_MAILLOTS_BLACK_1}
                  alt="Pro Cycling Suit"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl font-semibold">View Full Details</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Product - MTB Helmet */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-image">
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={MTB_FRISK_BLACK_1}
                  alt="MTB Frisk Helmet"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl font-semibold">View Full Details</h3>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 md:pl-10 animate-text">
            <span className="text-indigo-400 font-semibold">Mountain Biking Gear</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              MTB Frisk Helmet
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Specialized mountain biking helmet with advanced protection features. 
              Perfect for off-road adventures and technical trails.
            </p>
            <ul className="mt-6 space-y-2 text-gray-200">
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                Enhanced impact protection
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                Extended coverage
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                Adjustable visor
              </li>
            </ul>
            <div className="mt-8 flex items-center space-x-4">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold animate-button transition-colors">
                View Details
              </button>
              <span className="text-2xl font-bold text-indigo-400">$179</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Product - All Terrain Helmet */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-10 md:mt-0 md:pr-10 animate-text">
            <span className="text-indigo-400 font-semibold">Safety Gear</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              All Terrain OX Grey
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Premium safety helmet designed for all terrain adventures. 
              Provides maximum protection while maintaining comfort and style.
            </p>
            <ul className="mt-6 space-y-2 text-gray-200">
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                Advanced impact protection
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                Ventilation system
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">✓</span>
                Adjustable fit system
              </li>
            </ul>
            <div className="mt-8 flex items-center space-x-4">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold animate-button transition-colors">
                View Details
              </button>
              <span className="text-2xl font-bold text-indigo-400">$199</span>
            </div>
          </div>
          <div className="md:w-1/2 animate-image">
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={ALL_TERRAIN_OX_GREY_1}
                  alt="All Terrain OX Grey Helmet"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl font-semibold">View Full Details</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBestProducts;
import React from 'react';
import { useSelector } from 'react-redux';
import '../index.css';

export default function Slide1() {
  const bikes = useSelector((state) => state.bikes);

  const allBikes = Object.values(bikes).flatMap((category) =>
    Object.values(category).flatMap((subCategory) =>
      Object.values(subCategory).flat()
    )
  );


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledBikes = shuffleArray([...allBikes]);


  const carouselBikes = [...shuffledBikes, ...shuffledBikes];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-14 text-black tracking-tight">
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
          Explore Our Bikes Collection
        </span>
      </h1>


      <div className="w-full overflow-hidden">
        <div className="carousel-track flex animate-slide">
          {/* Render the shuffled and duplicated bikes */}
          {carouselBikes.map((bike, index) => (
            <div
              key={`${bike.Id}-${index}`}
              className="carousel-slide flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white rounded-3xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 mx-4" // Added mx-4 for spacing between slides
            >
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={bike.Images}
                  alt={`Bike ${bike.Id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md line-clamp-1">
                    {bike.Name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300 drop-shadow-md">
                    Bike ID: {bike.Id}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 font-medium">
                    {bike.Taille ? 'Mountain Bike' : bike.Frein ? 'Road Bike' : 'Trekking Bike'}
                  </span>
                  <span className="text-sm text-gray-800 font-semibold">
                    In Stock
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white py-2.5 sm:py-3 px-6 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  <span className="text-sm sm:text-base font-medium mr-2">
                    View Details
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5"
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
  );
}

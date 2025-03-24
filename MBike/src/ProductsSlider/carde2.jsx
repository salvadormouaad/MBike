import { useSelector } from "react-redux"

export default function Carde2(){   
    const reduxGear=useSelector((state)=>{return state.gear.qasques.road.road_race})
    return <>
      {
        /*
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-14 text-black tracking-tight">
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
          Explore Our Mountain Bikes
        </span>
      </h1>
        */
      }
          {reduxGear.map((val,index) => {
            return index===0 && <div
              key={index}
              className="relative bg-white rounded-3xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={val.images.ROAD_RACE_YELLOW_1}
                  alt={`Bike ${val.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md line-clamp-1">
                    {val.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-300 drop-shadow-md">
                  Road Race ID: {val.id}
                  </p>
                </div>
              </div>

              
              <div className="p-4 sm:p-6 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 font-medium">
                    Full Suspension
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
}   )}
    </>
}
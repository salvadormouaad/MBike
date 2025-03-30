import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { backendBaseUrl } from "../../API/axios.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import WireframeLoader from "../WireframeLoader.jsx";
import {selectProducts, selectProductsErrors, selectProductsStatus} from "../../selectors/ProductsSelectors.jsx";

export default function ClothesSlider() {
    const navigate = useNavigate();
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductsStatus);
    const error = useSelector(selectProductsErrors);




    const allGears = products
        .filter((product) => Number(product.categoryId) === 3)
        .map((product) => ({
            Id: product.produitId,
            Name: product.nom,
            Images: product.imageUrl,
            Poids: product.weight || "N/A",
            Price: `$${product.prix}`,
            Taille: product.size ? [product.size] : ["N/A"],
        }));

    if (status === "loading") return <WireframeLoader />;
    if (status === "failed") return <p className="text-center text-red-600">Error: {error}</p>;
    if (allGears.length === 0) return <p className="text-center">No gears available.</p>;

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                            Discover Our Premium Clothes
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our range of high-quality cycling Clothes
                    </p>
                </div>

                <div className="relative">
                    {/* Swiper */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="luxury-slider"
                    >
                        {allGears.map((gear) => (
                            <SwiperSlide key={gear.Id}>
                                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-transform duration-300">
                                    <img
                                        src={backendBaseUrl + gear.Images}
                                        alt={gear.Name}
                                        className="w-full h-72 object-contain rounded-lg"
                                        loading="lazy"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-900 mt-4">{gear.Name}</h3>
                                    <p className="text-gray-600 text-sm">Weight: {gear.Poids} | Price: {gear.Price}</p>
                                    <button
                                        onClick={() => navigate(`/product/${gear.Id}`)}
                                        className="mt-4 w-full cursor-pointer bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows */}
                    <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white p-3">

                    </button>
                    <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white p-3">

                    </button>
                </div>
            </div>
        </section>
    );
}

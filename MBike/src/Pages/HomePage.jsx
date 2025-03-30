import BikesSlider from "../components/HomeSliders/BikesSlider";
import GearsSlider from "../components/HomeSliders/GearsSlider.jsx";
import HeroSection from "../components/Hero";
import NavBar from "../components/Navbar";
import TrustedBrands from "../components/TrustedBrands";
import Section_Bikes from "../components/Section_Catalogue/Section_Bikes";
import Section_Clothes from "../components/Section_Catalogue/Section_Clothes.jsx";
/*import Section_Shoes from "../components/Section_Catalogue/Section_Shoes.jsx";
import Section_Helmets from "../components/Section_Catalogue/Section_Helmets.jsx";
import Section_Vetements from "../components/Section_Catalogue/Section_Vetements";*/
import HelmetsSlider from "../components/HomeSliders/GearsSlider.jsx";
import ClothesSlider from "../components/HomeSliders/ClothesSlider.jsx";
import ShoesSlider from "../components/HomeSliders/ShoesSlider.jsx";
import Section_Helmets from "../components/Section_Catalogue/Section_Helmets.jsx";
import Section_Shoes from "../components/Section_Catalogue/Section_Shoes.jsx";
export const HomePage = () => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden">
            <HeroSection />
            {/*  <Test /> */}
            <BikesSlider />
            <HelmetsSlider />
            <ClothesSlider/>
            <ShoesSlider/>
            <Section_Bikes />
             <Section_Clothes />
            <Section_Shoes />
            <Section_Helmets />
            <TrustedBrands />
        </div>
    );
};

export default HomePage;

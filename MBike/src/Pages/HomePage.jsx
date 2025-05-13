import Zelige1Slider from "../components/HomeSliders/Zelige1Slider.jsx";
import GearsSlider from "../components/HomeSliders/GearsSlider.jsx";
import HeroSection from "../components/Hero";
import NavBar from "../components/Navbar";
import TrustedBrands from "../components/TrustedBrands";
import Section_zelige1  from "../components/Section_Catalogue/Section_zelige1.jsx";
import Section_zelige4 from "../components/Section_Catalogue/Section_zelige4.jsx";
/*import Section_Shoes from "../components/Section_Catalogue/Section_Shoes.jsx";
import Section_Helmets from "../components/Section_Catalogue/Section_Helmets.jsx";
import Section_Vetements from "../components/Section_Catalogue/Section_Vetements";*/
import HelmetsSlider from "../components/HomeSliders/GearsSlider.jsx";
import ClothesSlider from "../components/HomeSliders/Zelige2Slider.jsx";
import ShoesSlider from "../components/HomeSliders/ShoesSlider.jsx";
import Section_zelige3 from "../components/Section_Catalogue/Section_zelige3.jsx";
import Section_zelige2 from "../components/Section_Catalogue/Section_zelige2.jsx";
export const HomePage = () => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden">
            <HeroSection />
            {/*  <Test /> */}
            {/* <Zelige1Slider /> */}
            {/* <HelmetsSlider />
            <ClothesSlider/>
            <ShoesSlider/> */}
            <Section_zelige1 />
             <Section_zelige2/>
            <Section_zelige3 />
            <Section_zelige4 />
            {/* <TrustedBrands /> */}
        </div>
    );
};

export default HomePage;

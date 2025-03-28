import BikesSlider from "../components/BikesSlider/BikesSlider";
import GearsSlider from "../components/GearsSlider/GearsSlider";
import HeroSection from "../components/Hero";
import NavBar from "../components/Navbar";
import TrustedBrands from "../components/TrustedBrands";
import Section_Bikes from "../components/Section_Catalogue/Section_Bikes";
import Section_Chaussures from "../components/Section_Catalogue/Section_Chaussures";
import Section_Gants from "../components/Section_Catalogue/Section_Gants";
import Section_Qasques from "../components/Section_Catalogue/Section_Qasques";
import Section_Vetements from "../components/Section_Catalogue/Section_Vetements";
export const HomePage = () => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden">
            <HeroSection />
            {/*  <Test /> */}
            <BikesSlider />
            <GearsSlider />
            <Section_Bikes />
            <Section_Chaussures />
            <Section_Gants />
            <Section_Qasques />
            <Section_Vetements />
            <TrustedBrands />
        </div>
    );
};

export default HomePage;

import "./index.css";
import NavBar from "./components/Navbar";
import TrustedBrands from "./components/TrustedBrands";
import HeroSection from "./components/home";
import Footer from "./components/Footer";
import Section_Bikes from "./Section_Catalogue/Section_Bikes";
import Test from "./components/test";
import Section_Chaussures from "./Section_Catalogue/Section_Chaussures";
import Section_Gants from "./Section_Catalogue/Section_Gants";
import Section_Qasques from "./Section_Catalogue/Section_Qasques";
import Section_Vetements from "./Section_Catalogue/Section_Vetements";
import Products from "./ProductsSlider/Products";
import SlideGearsHome from "./SlideGearsHome";

function App() {
    return (
        <>
            <div className=" w-full min-h-screen overflow-x-hidden">
                <NavBar />
                <HeroSection />
                {/*  <Test /> */}
                <Products />
                <SlideGearsHome />
                <Section_Chaussures />
                <Section_Gants />
                <Section_Bikes />
                <Section_Qasques />
                <Section_Vetements />
                <TrustedBrands />
                <Footer />
            </div>
        </>
    );
}

export default App;

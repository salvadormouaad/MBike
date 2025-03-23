import "./index.css";
import NavBar from "./components/Navbar";
import TrustedBrands from "./components/TrustedBrands";
import HeroSection from "./components/home";
import Footer from "./components/Footer";
import Section from "./components/section";
import Test from "./components/test";
import Section_Chaussures from "./Section_Catalogue/Section_Chaussures";
import Section_Gants from "./Section_Catalogue/Section_Gants";
import Section_Qasques from "./Section_Catalogue/Section_Qasques";
import Section_Vetements from "./Section_Catalogue/Section_Vetements";

function App() {
    return (
        <>
            <div className=" w-full min-h-screen overflow-x-hidden">
                <NavBar />
                <HeroSection />
                {/*  <Test /> */}
                <TrustedBrands />
                <h1 className=" text-6xl text-black my-4 ml-7 border-l-6 pl-3 border-amber-950">
                    Shoes
                </h1>
                <Section_Chaussures />
                <h1 className=" text-6xl text-black my-4 ml-7 border-l-6 pl-3 border-amber-950">
                    GANTS
                </h1>
                <Section_Gants />
                <h1 className=" text-6xl text-black my-4 ml-7 border-l-6 pl-3 border-amber-950">
                    Bikes
                </h1>
                <Section />
                <h1 className=" text-6xl text-black my-4 ml-7 border-l-6 pl-3 border-amber-950">
                    Helmets
                </h1>
                <Section_Qasques />
                <h1 className=" text-6xl text-black my-4 ml-7 border-l-6 pl-3 border-amber-950">
                    Clothes
                </h1>
                <Section_Vetements /> <br />
                <Footer />
            </div>
        </>
    );
}

export default App;

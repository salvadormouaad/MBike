import "./index.css";
import NavBar from "./components/Navbar";
import TrustedBrands from "./components/TrustedBrands";
import HeroSection from "./components/home";
import Footer from "./components/Footer";
import Section from "./components/section";
import Test from "./components/test";

function App() {
    return (
        <>
            <div className=" w-full min-h-screen overflow-x-hidden">
                <NavBar />
                 {<HeroSection />}

                <TrustedBrands />
                <Section />
                <TrustedBrands />
                <Footer />
            </div>
        </>
    );
}

export default App;

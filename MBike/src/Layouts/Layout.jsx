import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import HomePage from "../Pages/HomePage";
import BikeAboutTown from "../Pages/About/about";
import Contact from "../Pages/contact";
import Store from "../Pages/Store";
import OurBestProducts from "../Pages/ourbestproducts";
import FormLogin from "../Pages/Login";
import FormRegister from "../Pages/Register";

export const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/store",
                element: <Store />,
            },
            {
            path: "/OurBestProducts",
            element: <OurBestProducts />,
            },
            {
                path: "/about",
                element: <BikeAboutTown />,
            },
            {
                path: "/FormLogin",
                element: <FormLogin />,
            },
            {
                path: "/FormRegister",
                element: <FormRegister />,
            },
            {
                path: "/cart",
                element: <p> upcoming Cart Page </p>,
            },
            {
                path: "/Contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <h1> Not Found </h1>,
            },
        ],
    },
]);

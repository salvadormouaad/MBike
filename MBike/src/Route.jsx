import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import HomePage from "../Pages/HomePage";
import Contact from "../Pages/contact";
import Store from "../Pages/Store";
import OurBestProducts from "../Pages/ourbestproducts";
import BikeAboutTown from "./Pages/About/about";

export const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/Contact",
                element: <p> upcoming Contact Page </p>,
            },
            {
                path: "/store",
                element: <Store />,
            },
            {
                path: "/best-products",
                element: <OurBestProducts />,
            },
            {
                path: "/BikeAboutTown",
                element: <BikeAboutTown />,
            },
            {
                path: "/profile",
                element: <p> upcoming Profile Page </p>,
            },
            {
                path: "/cart",
                element: <p> upcoming Cart Page </p>,
            },
            {
                path: "/contact-us",
                element: <Contact />,
            },
            {
                path: "*",
                element: <h1> Not Found </h1>,
            },
        ],
    },
]);

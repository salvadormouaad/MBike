import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import HomePage from "../Pages/HomePage";
import BikeAboutTown from "../Pages/About/about";
import Contact from "../Pages/contact";

export const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/Home",
                element: <HomePage />,
            },
            {
                path: "/products",
                element: <p> upcoming Products Page </p>,
            },
            {
                path: "/catalog",
                element: <p> upcoming Catalog Page </p>,
            },
            {
                path: "/about",
                element: <BikeAboutTown />,
            },
            {
                path: "/profile",
                element: <p> upcoming Profile Page </p>,
            },
            {
                path: "/Cart",
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

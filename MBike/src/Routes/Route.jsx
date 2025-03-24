import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";

export const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/catalog",
                element: <Catalog />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/Cart",
                element: <Cart />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

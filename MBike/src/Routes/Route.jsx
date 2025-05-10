import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import HomePage from "../Pages/HomePage";
import BikeAboutTown from "../Pages/About/about";
import Contact from "../Pages/contact";
import ShoppingCart from "../Pages/Cart";
import AdminDashboard from "../components/AdminDashboard.jsx";
import Login from "../components/Login.jsx";
import NotAuthorized from "../components/NotAuthorized.jsx";
import ComingSoon from "../components/ComingSoon.jsx";
import NotFound from "../components/NotFound.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Register from "../components/Register.jsx";
import Favorites from "../Pages/Favorites.jsx";
import ProductsGrid from "../Pages/CatalogGrid.jsx";
import Details from "../Pages/ProductDetails.jsx";
import ProductDetails from "../components/ProductDetails.jsx";

export const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/bikes",
                element: <ComingSoon pageName="Bikes" />,
            },
            {
                path: "/gears",
                element: <ComingSoon pageName="Gears" />,
            },
            {
                path: "/Store",
                element: <ProductsGrid />,
            },
            {
                path: "/product/:id",
                element: <ProductDetails />,
            },
            {
                path: "/about",
                element: <BikeAboutTown />,
            },
            {
                path: "/profile",
                element: (
                    <ProtectedRoute requireAuth={true}>
                        <ComingSoon pageName="Profile" />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/cart",
                element: (
                    <ProtectedRoute requireAuth={true}>
                        <ShoppingCart />
                    </ProtectedRoute>
                ),
            }, {
                path: "/favorites",
                element: (
                    <ProtectedRoute requireAuth={true}>
                        <Favorites />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/contact-us",
                element: <Contact />,
            },
            {
                path: "/admin",
                element: (
                    <ProtectedRoute requireAuth={true} requiredRole="admin">
                        <AdminDashboard />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/login",
                element: (
                    <ProtectedRoute requireAuth={false}>
                        <Login />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/register",
                element: (
                    <ProtectedRoute requireAuth={false}>
                        <Register />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/not-authorized",
                element: <NotAuthorized />,
            },
            {
                path: "/Details",
                element: <Details />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

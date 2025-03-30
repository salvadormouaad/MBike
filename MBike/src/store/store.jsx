import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import categoriesReducer from '../features/categoriesSlice';
import authReducer from '../features/authSlice';
import usersSlice from "../features/usersSlice.jsx";
import cartSlice from "../features/cartSlice.jsx";
import favoritesSlice from "../features/favoritesSlice.jsx";
export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        auth: authReducer,
        users : usersSlice,
        cart :cartSlice,
        favorites : favoritesSlice,
    },
});

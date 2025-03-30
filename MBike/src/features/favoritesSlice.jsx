import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage
const loadFavoritesFromStorage = () => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: loadFavoritesFromStorage(), // Load favorites from localStorage
    },
    reducers: {
        addToFavorites: (state, action) => {
            const item = action.payload;
            if (!state.items.some((i) => i.id === item.id)) {
                state.items.push(item);
            }
            // Save to localStorage
            localStorage.setItem('favorites', JSON.stringify(state.items));
        },
        removeFromFavorites: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
            // Save to localStorage
            localStorage.setItem('favorites', JSON.stringify(state.items));
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

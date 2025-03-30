import { createSlice } from '@reduxjs/toolkit';


const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromStorage(),
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }

            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);

            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item) {
                if (quantity <= 0) {
                    state.items = state.items.filter((i) => i.id !== id);
                } else {
                    item.quantity = quantity;
                }

                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

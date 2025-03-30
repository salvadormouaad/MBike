import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axios';

// Initial state
const initialState = {
    products: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    pagination: {
        current_page: 1,
        per_page: 10,
        total: 0,
        last_page: 1,
        sort_by: 'created_at',
        sort_dir: 'desc',
        filters: {},
    },
};

// Fetch products with pagination and filters
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (params = {}, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/api/products', { params: params });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Failed to fetch products' });
        }
    }
);

// Add product
export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/api/products', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Failed to add product' });
        }
    }
);

// Update product
export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async ({ productId, data }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.put(`/api/products/${productId}`, data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Failed to update product' });
        }
    }
);

// Delete product
export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (productId, { rejectWithValue }) => {
        try {
            await axiosInstance.delete(`/api/products/${productId}`);
            return productId;
        } catch (error) {
            return rejectWithValue(error.response?.data || { message: 'Failed to delete product' });
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // Optional: Add reducer to reset pagination filters
        resetFilters: (state) => {
            state.pagination = {
                ...initialState.pagination,
                filters: {},
            };
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch Products
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload.data;
                state.pagination = action.payload.meta;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload?.message || 'Failed to fetch products';
            })

            // Add Product
            .addCase(addProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Add to beginning of list (newest first)
                state.products.unshift(action.payload);
                // Update total count
                state.pagination.total += 1;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload?.message || 'Failed to add product';
            })

            // Update Product
            .addCase(updateProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.items.findIndex(p => p.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload?.message || 'Failed to update product';
            })

            // Delete Product
            .addCase(deleteProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = state.items.filter(p => p.id !== action.payload);
                // Update total count
                state.pagination.total -= 1;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload?.message || 'Failed to delete product';
            });
    },
});

export const { resetFilters } = productsSlice.actions;
export default productsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axios';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await axiosInstance.get('/api/categories');
    return response.data;
});

export const addCategory = createAsyncThunk('categories/addCategory', async (category) => {
    const response = await axiosInstance.post('/api/categories', category);
    return response.data;
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (categoryId) => {
    await axiosInstance.delete(`/api/categories/${categoryId}`);
    return categoryId;
});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.categories.push(action.payload);
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.categories = state.categories.filter((c) => c.categoryId !== action.payload);
            });
    },
});

export default categoriesSlice.reducer;

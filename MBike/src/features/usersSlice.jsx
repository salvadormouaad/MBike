import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axiosInstance.get('/api/users');
    return response.data;
});

export const addUser = createAsyncThunk('users/addUser', async (userData, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/api/users', userData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Failed to add user' });
    }
});

export const updateUser = createAsyncThunk('users/updateUser', async ({ userId, data }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.put(`/api/users/${userId}`, data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Failed to update user' });
    }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId, { rejectWithValue }) => {
    try {
        await axiosInstance.delete(`/api/users/${userId}`);
        return userId;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: 'Failed to delete user' });
    }
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const updatedUser = action.payload;
                const index = state.users.findIndex((u) => u.userId === updatedUser.userId);
                if (index !== -1) {
                    state.users[index] = updatedUser;
                }
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter((u) => u.userId !== action.payload);
            });
    },
});

export default usersSlice.reducer;

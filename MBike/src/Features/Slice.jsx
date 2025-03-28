import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading : false,
    users : [],
    error : '',
    admins : [],
    bikes : [],
    gears : []
}

const fetchUsers = createAsyncThunk('/users/fetchUsers', async () => {
    const response = await axios.get('http://localhost:3000/users');
    return response.data;
});

const postUser = createAsyncThunk('/users/postUser', async (userData) => {
    const response = await axios.post('http://localhost:3000/users', userData);
    return response.data;
});

const updateUser = createAsyncThunk('/users/updateUser', async ({ id, userData }) => {
    const response = await axios.put(`http://localhost:3000/users/${id}`, userData);
    return response.data;
});




const fetchAdmins = createAsyncThunk('/admins/fetchAdmins', async () => {
    const response = await axios.get('http://localhost:3000/admins');
    return response.data;
});

const postAdmin = createAsyncThunk('/admins/postAdmin', async (adminData) => {
    const response = await axios.post('http://localhost:3000/admins', adminData);
    return response.data;
});

const updateAdmin = createAsyncThunk('/users/updateAdmin', async ({ id, adminData }) => {
    const response = await axios.put(`http://localhost:3000/admins/${id}`, adminData);
    return response.data;
});



const postBike = createAsyncThunk('/users/postBike',async(postdata)=>{
    const response = await axios.post('http://localhost:3000/bikes',postdata)
    return response.data
})
const updateBike = createAsyncThunk('/users/updateBike',async({id, postdata})=>{
    const response = await axios.put('http://localhost:3000/bikes/'+ id ,postdata)
    return response.data
})
const fetchBike = createAsyncThunk('/users/fetchBike',async()=>{
     const response = await axios.get('http://localhost:3000/bikes')
        .then(res => res.data)
        return response
})



const readGears = createAsyncThunk('/users/readGears',async()=>{
    const response = await axios.get('http://localhost:3000/gears')
    .then(res => res.data)
    return response
})


const addGears = createAsyncThunk('/users/addGears',async(data)=>{
    const response = await axios.post('http://localhost:3000/gears',data)
    return response.data
})


const updateGears = createAsyncThunk('/users/updateGears',async({id, postdata})=>{
    const response = await axios.put('http://localhost:3000/gears/'+ id ,postdata)
    return response.data
})




const Slice = createSlice({
    name : 'users',
    initialState,
    reducers :{

    },
    extraReducers : builder => {
        builder.addCase(fetchBike.pending , state => {
            state.loading = true
        })
        builder.addCase(fetchBike.fulfilled , (state,action ) =>{
            state.loading = false,
            state.bikes =action.payload || []
            state.error = ''
        })
        builder.addCase(fetchBike.rejected , (state,action) =>{
            state.loading = false,
            state.bikes = []
            state.error = action.error.message
        })


        builder.addCase(postBike.pending , state => {
            state.loading = true
        })
        builder.addCase(postBike.fulfilled , (state,action ) =>{
            state.loading = false,
            state.bikes.push(action.payload);
            state.error = ''
        })
        builder.addCase(postBike.rejected , (state,action) =>{
            state.loading = false,
            state.error = action.error.message
        })


        builder.addCase(updateBike.pending , state => {
            state.loading = true
        })
        builder.addCase(updateBike.fulfilled , (state,action ) =>{
            state.loading = false,
            state.bikes = state.users.map((bike) =>
                bike.id === action.payload.id ? action.payload : bike
              );
            state.error = ''
        })
        builder.addCase(updateBike.rejected , (state,action) =>{
            state.loading = false,
            state.error = action.error.message
        })


        builder.addCase(updateGears.pending , state => {
            state.loading = true
        })
        builder.addCase(updateGears.fulfilled , (state,action ) =>{
            state.loading = false,
            state.gears = state.gears.map((gear) =>
                gear.id === action.payload.id ? action.payload : gear
              );
            state.error = ''
        })
        builder.addCase(updateGears.rejected , (state,action) =>{
            state.loading = false,
            state.error = action.error.message
        })


        builder.addCase(readGears.pending , state => {
            state.loading = true
        })
        builder.addCase(readGears.fulfilled , (state,action ) =>{
            state.loading = false,
            state.gears =action.payload || []
            state.error = ''
        })
        builder.addCase(readGears.rejected , (state,action) =>{
            state.loading = false,
            state.gears = []
            state.error = action.error.message
        })


        builder.addCase(addGears.pending , state => {
            state.loading = true
        })
        builder.addCase(addGears.fulfilled , (state,action ) =>{
            state.loading = false,
            state.gears.push(action.payload);
            state.error = ''
        })
        builder.addCase(addGears.rejected , (state,action) =>{
            state.loading = false,
            state.error = action.error.message
        })



        builder.addCase(fetchUsers.pending , state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled , (state,action ) =>{
            state.loading = false,
            state.users =action.payload || []
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected , (state,action) =>{
            state.loading = false,
            state.users = []
            state.error = action.error.message
        })


        builder.addCase(postUser.pending , state => {
            state.loading = true
        })
        builder.addCase(postUser.fulfilled , (state,action ) =>{
            state.loading = false,
            state.users.push(action.payload);
            state.error = ''
        })
        builder.addCase(postUser.rejected , (state,action) =>{
            state.loading = false,
            state.error = action.error.message
        })


        builder.addCase(updateUser.pending , state => {
            state.loading = true
        })
        builder.addCase(updateUser.fulfilled , (state,action ) =>{
            state.loading = false,
            state.users = state.users.map((user) =>
                user.id === action.payload.id ? action.payload : user
              );
            state.error = ''
        })
        builder.addCase(updateUser.rejected , (state,action) =>{
            state.loading = false,
            state.error = action.error.message
        })


        builder.addCase(fetchAdmins.pending , state => {
            state.loading = true
        })
        builder.addCase(fetchAdmins.fulfilled , (state,action ) =>{
            state.loading = false,
            state.admins =action.payload || []
            state.error = ''
        })
        builder.addCase(fetchAdmins.rejected , (state,action) =>{
            state.loading = false,
            state.admins = []
            state.error = action.error.message
        })


        builder.addCase(postAdmin.pending , state => {
            state.loading = true
        })
        builder.addCase(postAdmin.fulfilled , (state,action ) =>{
            state.loading = false,
            state.admins.push(action.payload);
            state.error = ''
        })
        builder.addCase(postAdmin.rejected , (state,action) =>{
            state.loading = false,
            state.error = action.error.message
        })


        builder.addCase(updateAdmin.pending , state => {
            state.loading = true
        })
        builder.addCase(updateAdmin.fulfilled , (state,action ) =>{
            state.loading = false,
            state.admins = state.admins.map((user) =>
                user.id === action.payload.id ? action.payload : user
              );
            state.error = ''
        })
        builder.addCase(updateAdmin.rejected , (state,action) =>{
            state.loading = false,
            state.error = action.error.message
        })

    }

})
export default Slice.reducer
export { fetchBike , postBike , updateBike , updateGears , addGears , readGears , fetchUsers,postUser,updateUser,fetchAdmins,postAdmin,updateAdmin }

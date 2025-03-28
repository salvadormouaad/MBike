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
const postBike = createAsyncThunk('/users/postData',async(postdata)=>{
    const response = await axios.post('http://localhost:3000/bikes',postdata)
    return response.data
})
const updateBike = createAsyncThunk('/users/updateData',async({id, postdata})=>{
    const response = await axios.put('http://localhost:3000/bikes/'+ id ,postdata)
    return response.data
})
const fetchBike = createAsyncThunk('/users/fetchUsers',async()=>{
     const response = await axios.get('http://localhost:3000/bikes')
        .then(res => res.data)
        return response
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
    }

})
export default Slice.reducer
export { fetchBike , postBike , updateBike }

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initialState = {
    loading : false,
    gears : [],
    error : '',
}


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


const deleteGears = createAsyncThunk("/users/deleteGears", async (id) => {
    const response = await axios.delete(`http://localhost:3000/gears/${id}`);
    return id; 
  });

const SliceGearsAxios = createSlice({
    name : 'users',
    initialState,
    reducers :{
        
    },
    extraReducers : builder => {
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

        builder.addCase(deleteGears.pending, (state) => {
            state.loading = true;
          });
          builder.addCase(deleteGears.fulfilled, (state, action) => {
            state.loading = false;
            state.gears = state.gears.filter((gear) => gear.id !== action.payload); // Remove the admin
            state.error = "";
          });
          builder.addCase(deleteGears.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });

    }
})
export default SliceGearsAxios.reducer
export {  updateGears , readGears , addGears , deleteGears };
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading : false,
    users : [],
    error : '',
    admins : [],
    bikes : [],
    gears : []
}




const Slice = createSlice({
    name : 'users',
    initialState,
    reducers :{

    }

})
export default Slice.reducer

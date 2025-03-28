import { configureStore } from "@reduxjs/toolkit";
import SliceGear from "../Features/SliceGears/SliceGears";
import BikeSlice from "../Features/BikeSlice";
import Slice from "../Features/Slice"
export const StoreGlobal = configureStore({
    reducer: {
        gear: SliceGear,
        bikes: BikeSlice,
        users : Slice
    },
});

import { configureStore } from "@reduxjs/toolkit";
import SliceGear from "../SliceGears/SliceGears";
import BikeSlice from "../Features/BikeSlice";
export const StoreGlobal = configureStore({
    reducer: {
        gear: SliceGear,
        bikes: BikeSlice,
    },
});

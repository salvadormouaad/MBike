import { configureStore } from "@reduxjs/toolkit";
import SliceGear from '../SliceGears/SliceGears';
export const StoreGlobal=configureStore({
    reducer:{
        gear:SliceGear
    }
})

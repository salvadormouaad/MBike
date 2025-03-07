import {configureStore} from '@reduxjs/toolkit';
import GearSlice from '../SliceGears/SliceGears';
export const StoreGlobal=configureStore({
    reducer:{
        gear:GearSlice
    }
})

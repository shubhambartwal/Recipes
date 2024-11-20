import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./FavouriteSlice";
const store=configureStore({
    reducer:{
        favourite:favouriteReducer
    }
})
export default store;
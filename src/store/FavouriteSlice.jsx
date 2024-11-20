import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice=createSlice({
    name:'favourite',
    initialState:{favourites:[]},
    reducers:{
        addToFavourite:(state,action)=>{
           const present = state.favourites.find((item)=>item===action.payload)
           
           if(present){
            state.favourites=state.favourites.filter((item)=>item!==action.payload)
           }
           else{ state.favourites=[...state.favourites,action.payload]
           }
        },
    }
})
export const {addToFavourite} = favouriteSlice.actions
export default favouriteSlice.reducer
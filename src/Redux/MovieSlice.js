import { createSlice } from "@reduxjs/toolkit";
const initialState={
    Movies:[],
    GenersLoader:false,
    Geners:[]
}

 const MovieSlice = createSlice({
    name:"MovieSlice",
    initialState,
    reducers:{
        addGeneres:(state,action)=>{
state.Geners = action.payload
        },
        addAllMovies:(state,action)=>{
        state.Movies=action.payload
                    }
    }

})
export const  {addGeneres,addAllMovies}=MovieSlice.actions;
export default MovieSlice.reducer;
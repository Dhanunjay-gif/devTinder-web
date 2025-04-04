import { createSlice } from "@reduxjs/toolkit";

const requestSlice =createSlice({
    name:'request',
    initialState:[],
    reducers:{
        addRequest: (state,action)=>{
            return action.payload;
        },
        removeRequest: (state,action)=>{
            const newArray=state.filter(res=>res?.fromUserId?._id!==action.payload)
            return newArray;
        }
    }
});

export const {addRequest,removeRequest} = requestSlice.actions;
export default requestSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    toast:{
        message:null,
        type:'' ,
        show:false
    }
}

const uiSlice=createSlice({
    name:"ui",
    initialState,
    reducers:{
        showToast:(state,action)=>{
            state.toast.message=action.payload.message
            state.toast.type=action.payload.type
            state.toast.show=true
        },
        hideToast:(state,action)=>{
            state.toast.message=action.payload.message
            state.toast.type=action.payload.type
            state.toast.show=false
        }
    }
})


export const { showToast, hideToast } = uiSlice.actions;
export default uiSlice.reducer
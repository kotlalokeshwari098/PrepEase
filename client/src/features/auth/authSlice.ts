import { createSlice } from "@reduxjs/toolkit";

const initialState={
   userInfo:{
        username:null,
        email:null
    }
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        userProfile:(state,action)=>{
            state.userInfo.username=action.payload.username
            state.userInfo.email=action.payload.email
        }
    }
})


export const {  userProfile } = authSlice.actions
export default authSlice.reducer
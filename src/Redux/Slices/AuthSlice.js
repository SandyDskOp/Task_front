import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false
}
const AuthSlice = createSlice({
    name : "auth",
    initialState:initialState,
    reducers:{
        log_in : (state,action)=>{
            state.isLoggedIn = true
        },
        log_out:(state,action)=>{
            state.isLoggedIn = false
        }
    }
})

export const {log_in,log_out} = AuthSlice.actions
export default AuthSlice.reducer


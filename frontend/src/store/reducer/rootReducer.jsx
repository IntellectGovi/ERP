import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Slice/AuthSlice/authSlice"

const rootReducer = combineReducers({
    auth: authReducer
})

export default rootReducer
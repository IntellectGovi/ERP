import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/reducer/Slice/AuthSlice/authSlice";
import { loadingSlice } from "./reducer/Slice/LoaderSlice/LoaderSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    loadingSlice: loadingSlice,
  },
});

export default store;

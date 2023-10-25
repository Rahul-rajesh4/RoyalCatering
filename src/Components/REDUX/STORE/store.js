import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../SLICE/eventSlice";

export const store = configureStore({
    reducer:{
        event : eventReducer
    },
})
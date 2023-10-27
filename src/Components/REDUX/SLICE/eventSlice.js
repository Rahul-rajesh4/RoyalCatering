import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState ={
    data:[],
    loading:false,
    error:false

}

export const register = createAsyncThunk('register',async(userData)=>{
    try{
        const responce = await axios.post('http://127.0.0.1:8000/api/Registerapi',userData)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})


export const Bookingapi = createAsyncThunk('Booking',async(book)=>{
    try{
        const responce = await axios.post('http://127.0.0.1:8000/api/Bookingapi',book)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})


export const eventSlice = createSlice({
    name:'event',
    initialState,
    extraReducers:(builder)=>{
        //register
        builder.addCase(register.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(register.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(register.rejected,(state,action)=>{
            state.loading = false
            state.error = true
        })
        // Booking
        builder.addCase(Bookingapi.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(Bookingapi.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(Bookingapi.rejected,(state,action)=>{
            state.loading = false
            state.error = true
        })
    }
}) 

export default eventSlice.reducer
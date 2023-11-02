import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState ={
    data:[],
    reply:{},
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


export const viewBooking = createAsyncThunk('viewBooking',async(view)=>{
    try{
        const responce = await axios.get('http://127.0.0.1:8000/api/viewBooking',view)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})


export const AddEvent = createAsyncThunk('AddEvent',async(event)=>{
    try{
        const responce = await axios.post('http://127.0.0.1:8000/api/Addeventapi',event)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})


export const viewEvent = createAsyncThunk('viewEvent',async(view2)=>{
    try{
        const responce = await axios.get('http://127.0.0.1:8000/api/viewEvent',view2)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})



export const singleslot = createAsyncThunk('singleslot',async(slot)=>{
    try{
        const responce = await axios.get(`http://127.0.0.1:8000/api/getsinglecontactView/${slot}`)
        return responce.data.data
    }catch (error){
        console.log(error);
    }
})



export const Replymessage = createAsyncThunk('Replymessage',async(replyValue)=>{
    try{
        const responce = await axios.post('http://127.0.0.1:8000/api/replyMessage',replyValue)
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

        // view booking
        builder.addCase(viewBooking.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(viewBooking.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(viewBooking.rejected,(state,action)=>{
            state.loading = false
            state.error = true
        })

        // addevent
        builder.addCase(AddEvent.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(AddEvent.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(AddEvent.rejected,(state,action)=>{
            state.loading = false
            state.error = true
        })

        // view booking
        builder.addCase(viewEvent.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(viewEvent.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(viewEvent.rejected,(state,action)=>{
            state.loading = false
            state.error = true
        })

        // get single slotview
        builder.addCase(singleslot.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(singleslot.fulfilled,(state,action)=>{
            state.loading = false
            state.reply = action.payload[0]
        })
        builder.addCase(singleslot.rejected,(state,action)=>{
            state.loading = false
            state.error = true
        })
        // reply
        builder.addCase(Replymessage.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(Replymessage.fulfilled,(state,action)=>{
            state.loading = false
            state.reply = action.payload
        })
        builder.addCase(Replymessage.rejected,(state,action)=>{
            state.loading = false
            state.error = true
        })
    }
}) 

export default eventSlice.reducer
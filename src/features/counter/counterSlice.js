import {createSlice } from "@reduxjs/toolkit";
import { increment as incrementNumber } from "../number/numberSlice";


const initialState = {
    counterValue: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counterValue++;

        },
        decrement: (state) => {
            state.counterValue--;
        },
        incrementByAmount: (state, action) => {
            state.counterValue += action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(incrementNumber,(state,action)=>{
            state.counterValue++
        })
    }

 


})

export default counterSlice.reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCounter = (store) => store.counter.counterValue
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value > 1 ?
            state.value -= 1 : state == false
        },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
        // reset: state => {
        //     state.value = 0
        // },
    }
})

export const {
    increment, 
    decrement, 
    // incrementByAmount, 
} = counterSlice.actions
export default counterSlice.reducer
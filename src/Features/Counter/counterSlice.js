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
            state.value -= 1 : state = false
        },
        setCounterBack: state => {
            state.value = 1
        }
    }
})

export const {
    increment, 
    decrement,
    setCounterBack,
} = counterSlice.actions
export default counterSlice.reducer